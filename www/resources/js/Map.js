/*
 自定义控件
 * 定义一个自定义控件的构造函数
 * 设置自定义控件构造函数的prototyoe属性为Control的实例，以便继承控件基类
 * 实现initialize()方法并提供defaultAnchor和defaultOffset属性 */
// 定义构造函数并继承Control
function mapTypeControl(){
    // 设置默认位置及偏移量
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(20, 25);
}
mapTypeControl.prototype = new BMap.Control();

// 自定义控件必须实现initialize方法，并且将控件的DOM元素返回
// 在本方法中创建一个div元素作为控件的容器，并将其添加到地图容器中
mapTypeControl.prototype.initialize = function(map){
    // 定义一个DOM元素
    var ul = $('<ul class="navbtns">'+
        '<li class="navbtn-item item-panorama" id="panoramabtn" data-type="jj"></li>'+
        '<li class="navbtn-item item-hybrid" data-type="wx"></li>'+
        '<li class="navbtn-item item-normal active" data-type="pmt"></li></ul>');
    // 添加DOM元素到地图中
    map.getContainer().appendChild(ul[0]);
    // 添加事件
    $('.navbtn-item').click(function(){
        console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
        var type = $(this).attr('data-type');
        if(type == 'wx'){
            Map.panoramahide();
            map.setMapType(BMAP_HYBRID_MAP);
        }else if(type == 'pmt'){
            Map.panoramahide();
            map.setMapType(BMAP_NORMAL_MAP);
        }else if(type == 'jj'){
            Map.panoramashow();
            $('.navbtns').css('z-index', 2000);
        }
    });
    // 将DOM元素返回
    return ul[0];
};

var Map = {
    map: null,
    markerico: new BMap.Icon('http://img2.static.uban.com/www/map/images/local.png', new BMap.Size(24, 32), {anchor: new BMap.Size(9, 44), imageSize: new BMap.Size(24,32)}),
    markerico2: new BMap.Icon('http://img2.static.uban.com/www/map/images/marker2.png', new BMap.Size(24, 32),{anchor: new BMap.Size(12, 38), imageSize: new BMap.Size(24,32)}),
    markers: [],
    circle: null,
    defaultcenterdpoint: null,
    currentpanorama: null,
    results: [],
    currentinfobox: null,
    init: function(x, y, z, c, title){
        var self = this;
        map = new BMap.Map('mapContainer', {enableMapClick: false});	// 构造底图时，关闭底图可点功能
        map.centerAndZoom(new BMap.Point(x, y), z);
        self.addcontrol();	//添加平移缩放控件
        if(!c){
            map.disableScrollWheelZoom();	// 禁用滚轮放大缩小
            map.setMinZoom(11);
            map.setMaxZoom(18);
        }else{
            map.addControl(new mapTypeControl());	// 添加自定义控件
            map.enableScrollWheelZoom();	// 启用滚轮放大缩小
            map.setMinZoom(11);
            map.setMaxZoom(18);
            // 创建标注
            var pt = new BMap.Point(x,y);
            self.defaultcenterdpoint = pt;
            var markerCenter = self.getmarker(pt, {'x': x, 'y': y, 'title': title, 'content': '', ico: self.markerico});
            map.addOverlay(markerCenter);
            self.addclickhandler(markerCenter);
            new BMap.PanoramaService().getPanoramaByLocation(pt, function(data){
                if(data == null){
                    $('#panoramabtn').hide();
                }
            });
        }
    },
    addcontrol: function(){		// 添加平移缩放控件
        var navigationControl = new BMap.NavigationControl({
            // 设置位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // 设置地图类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 偏移量
            offset: new BMap.Size(18,18)
        });
        map.addControl(navigationControl);
    },
    load: function(data){
        var self = this;
        self.addmarkers(data);
    },
    addmarkers: function(data){
        var self = this;
        for (var i = 0; i < data.length; i++) {
            var x = data[i].x,
                y = data[i].y;
            var pt = new BMap.Point(x, y);
            var marker = self.getmarker(pt, data[i],i);
            map.addOverlay(marker);
            self.addclickhandler(marker);
            self.markers.push(marker);
        }
    },
    getmarker: function(pt, data,index){		// 创建标注
        var self = this;
        var marker = new BMap.Marker(pt);
        marker.title = data.title;
        marker.content = data.content;
        marker.id = data.id;
        marker.cb = data.callback;
        if(data.ico){
            marker.setIcon(data.ico);
        }else{
            marker.setIcon(self.markerico2);
            var label = new BMap.Label(index+1,{offset:new BMap.Size(0,1)});
            label.setStyle({
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                width: '21px',
                height: '23px',
                lineHeight:'23px',
                textAlign: 'center'
            });
            marker.setLabel(label);
        };
        return marker;
    },
    addclickhandler: function (marker) {
        var self = this;
        marker.addEventListener("mouseover", function (e) {
                var p = e.target;
                content = self.getinfoboxhtml(marker.title, marker.content, marker.id, marker.cb);
                var infobox = new BMapLib.InfoBox(map, content, {
                    closeIconUrl: 'http://img2.static.uban.com/www/images/map/close.png',
                    closeIconMargin: '20px 16px auto auto'
                });
                infobox.addEventListener("open", function (e) {
                    if (window.Map.currentinfobox != null) {
                        window.Map.currentinfobox.close();
                    }
                    window.Map.currentinfobox = e.target;
                });
                infobox.addEventListener("close", function (e) {
                    window.Map.currentinfobox = null;
                });
                infobox.enableAutoPan();
                infobox.open(marker);
            }
        );
    },
    getinfoboxhtml: function (title, content, id, cb) {
        if (cb) {
            title = '<a target="_bank" href="' + cb + '" class="maplink">' + title + '</a>';
            content = '符合查询条件' + content + '套</br>';
        }
        return '<img src="http://img2.static.uban.com/www/images/map/box_top.png" width="228" height="16">' +
            '<div style="width:228px; background:url(http://img2.static.uban.com/www/images/map/box_content.png) repeat-y; background-size:228px 100%; margin:-1px 0 -2px; padding:5px 0;" >' +
            '<p style="margin:auto; width:185px; font-size:18px; color:#555; font-weight:700;">' + title +'</p>' +
            '<p style="margin:auto; width:181px; font-size:14px; color:$999; line-height:20px; margin-top:5px; word-break:break-all; white-space:normal; overflow:auto;">' + content + '</p>' +
            '</div>' +
            '<img src="http://img2.static.uban.com/www/images/map/box_bottom.png" width="228" height="22">';
    },
    clearmarkers: function(){
        var self = this;
        for (var i = 0; i < self.markers.length; i++){
            map.removeOverlay(self.markers[i]);
        }
        self.markers = [];
    },
    search: function (word,dtd) {
        var self = this;
        if (word.length == 0) {
            if (self.local != null) {
                local.clearResults();
            }
            map.removeOverlay(self.circle);
            self.circle = null;
        } else {
            if (self.circle == null) {
                self.circle = new BMap.Circle(self.defaultcenterdpoint, 1000, {
                    fillColor: "#608CEB",
                    strokeWeight: 1,
                    fillOpacity: 0.2,
                    strokeOpacity: 0.2
                });
                map.addOverlay(self.circle);
            }
            if (self.local != null) {
                self.local.clearResults();
            } else {
                self.local = new BMap.LocalSearch(map, {});
            }
            self.panoramahide();
            self.local.searchNearby(word, self.circle.getCenter(), 1000);
            self.local.setSearchCompleteCallback(function (results) {
                var s = [];
                for (var i = 0; i < results.getCurrentNumPois(); i++) {
                    var temp = results.getPoi(i);
                    var distances = (map.getDistance(self.circle.getCenter(),results.getPoi(i).point).toFixed(0)+'米');
                    s.push({
                        'title': temp.title, 'content': temp.address, 'x': temp.point.lng, 'y': temp.point.lat, 'distance': distances
                    });
                }
                self.results = s;
                self.clearmarkers();
                self.addmarkers(s);
                dtd.resolve();
            });
        }
        return dtd;
    },
    panoramacreate: function(){	// 创建全景图
        var self = this;
        var panorama = new BMap.Panorama('mapContainer');
        panorama.setPosition(map.getCenter());		// 设置全景图中心点为地图当前中心点
        self.currentpanorama = panorama;
    },
    panoramashow: function(){	// 显示
        var self = this;
        if(self.currentpanorama != null){
            self.currentpanorama.show();
        }else{
            self.panoramacreate();
        }
    },
    panoramahide: function(){	// 隐藏
        var self = this;
        if(self.currentpanorama != null){
            self.currentpanorama.hide();
        }
    }
}

$(function(){
    // 默认显示
    var dtd = $.Deferred();
    var mapresults = [];
    // 添加子类型
    $('#typeNavSel').empty();
    toggleNav('#mapTypeNav li.on','#typeNavSel','currenttype');
    Map.search($('#typeNavSel li.currenttype').text(),dtd).done(function(){
        mapresults = Map.results;
        for(var i = 0; i < mapresults.length; i++){
            $('#resultsPanel').append('<li title="'+ mapresults[i].title +'（'+ mapresults[i].content + '）'+'"><i>'+(i+1)+'</i><p>'+ mapresults[i].title +'（'+ mapresults[i].content + '）' +'</p><span>'+ mapresults[i].distance +'</span></li>');
        }
    });

    // 点击切换显示
    $('#mapTypeNav .map-type-item').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('#typeNavSel').empty();
        toggleNav('#mapTypeNav li.on','#typeNavSel','currenttype');
        var dtd2 = $.Deferred();
        $('#resultsPanel').empty();
        Map.search($('#typeNavSel li.currenttype').text(),dtd2).done(function(){
            mapresults = Map.results;
            for(var i = 0; i < mapresults.length; i++){
                $('#resultsPanel').append('<li title="'+ mapresults[i].title +'（'+ mapresults[i].content + '）'+'"><i>'+(i+1)+'</i><p>'+ mapresults[i].title +'（'+ mapresults[i].content + '）' +'</p><span>'+ mapresults[i].distance +'</span></li>');
            }
        });
    });

    $('#typeNavSel').on('click','li',function(){
        $('#resultsPanel').empty();
        $(this).addClass('currenttype').siblings().removeClass('currenttype');
        var dtd1 = $.Deferred();
        Map.search($(this).text(),dtd1).done(function(){
            mapresults = Map.results;
            for (var i = 0; i < mapresults.length; i++) {
                $('#resultsPanel').append('<li title="'+ mapresults[i].title +'（'+ mapresults[i].content + '）'+'"><i>'+(i+1)+'</i><p>'+ mapresults[i].title +'（'+ mapresults[i].content + '）' +'</p><span>'+ mapresults[i].distance +'</span></li>');
            }
        });
    });
});
var dataKey = [];
function toggleNav(nav,navItem,classname){
    dataKey = $(nav).attr('data-key').split(',');
    for(var i = 0; i < dataKey.length; i++){
        $(navItem).append('<li>'+dataKey[i]+ '</li>');
    }
    $(navItem).find('li:first').addClass(classname);
}
function toggleType(select, classname){
    $(select).click(function(){
        $(this).addClass(classname).siblings().removeClass(classname);
    });
}