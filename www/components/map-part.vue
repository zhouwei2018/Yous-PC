<template>
    <div map-part>
        <h2 class="build-name clear"><i class="supporting"></i>{{buildingName}}</h2>
        <div class="map-out clear">
            <div id="mapId"></div>
            <div class="search-part">
                <ul class="tab-nav">
                    <li v-for="(item, index) in serviceItems" @click="searchHandler(index, item.dis)" :data-code="item.code" :data-key="item.dis"  :class="[mapData.mainIndex==index? 'on' : '','map-type-item']"><i></i>{{ item.title }}</li>
                </ul>
                <ul class="sub-tab clear">
                    <li class="result-item" v-for="(item_, index_) in mapData.subTypes" :class="mapData.subIndex==index_? 'currenttype' : ''"  @click="searchHandler_(index_, item_)">{{item_}}</li>
                </ul>
                <ul class="result-ul">
                    <li class="result-item" v-for="(item, index) in mapData.results"><i>{{ index+1 }}</i><p>{{ item.title }}{{item.content}}</p><span>{{ item.distance }}</span></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import '../resources/js/map_lib/infoBox.js';
    import axios from 'axios';
    //import qs from 'qs';
    export default {
        name: 'Ymap',
        props: ['buildingName',"positionData"],  //positionData "100,20" 经度 纬度
        data(){
            return {
                remoteData: {},
                currentinfobox: null,
                mapData:{
                    markerico:null,
                    markerico2:null,
                    local:null,
                    map: null,
                    point:null,
                    circle: null,
                    defaultcenterdpoint: null,
                    results: [],
                    subTypes: [],
                    mainIndex:0,
                    subIndex:0,
                    markers:[]
                },
                serviceItems:[
                    {code:"jt", dis:"地铁,公交,停车场,加油站", title:"交通"},
                    {code:"cy", dis:"中餐,西餐,快餐,咖啡厅,茶座", title:"餐饮"},
                    {code:"jd", dis:"星级酒店,快捷酒店,公寓式酒店", title:"酒店"},
                    {code:"js", dis:"体育场馆,极限运动场所,健身中心", title:"健身"},
                    {code:"jr", dis:"银行,ATM,投资理财", title:"金融"},
                ],
            };
        },
        created() {
           /* axios.get('/sockjs-node/info',{params:{t:6666666}})
                .then(function (response) {
                    if(1){
                        this.remoteData = response.data;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });*/
        },
        mounted: function () {
            this.init();
        },
        methods: {
            init:function(){
                let tem=this.positionData.split(',');
                this.initMap(tem[0],tem[1], 15, this.buildingName);
            },
            initMap: function(x, y, z, title){
                var map = {},this_=this, point={}, markerico=null,markerico2=null;
                markerico =new BMap.Icon('http://img2.static.uban.com/www/map/images/local.png', new BMap.Size(24, 32), {anchor: new BMap.Size(9, 44), imageSize: new BMap.Size(24,32)});
                markerico2 = new BMap.Icon('http://img2.static.uban.com/www/map/images/marker2.png', new BMap.Size(24, 32),{anchor: new BMap.Size(12, 38), imageSize: new BMap.Size(24,32)});
                this.mapData.markerico = markerico;
                this.mapData.markerico2 = markerico2;
                map = new BMap.Map('mapId', {enableMapClick: false});
                point = new BMap.Point(x, y);
                this.mapData.point = point;
                map.centerAndZoom(point, z);
                this.mapData.map = map;
                this.addcontrol();	//添加平移缩放控件
                map.panTo({lng:x,lat:y});
                map.enableScrollWheelZoom();// 启用滚轮放大缩小
                map.setMinZoom(11);
                map.setMaxZoom(18);

                var pt = new BMap.Point(x,y);
                this.defaultcenterdpoint = pt;
                var markerCenter = this.getmarker(this,pt, {'x': x, 'y': y, 'title': title, 'content': '', ico: 1});
                var circle = new BMap.Circle(point,1000,{fillColor:'blue', strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                map.addOverlay(circle);
                map.addOverlay(markerCenter);
                this.addclickhandler(markerCenter);
                this.searchHandler(0, this.serviceItems[0]['dis']);

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
                this.mapData.map.addControl(navigationControl);
            },
            addmarkers: function(data,enr){ // 添加
                for (var i = 0; i < data.length; i++) {
                    var x = data[i].x,
                        y = data[i].y;
                    var pt = new BMap.Point(x, y);
                    var marker = enr.getmarker(enr,pt, data[i],i);
                    enr.mapData.map.addOverlay(marker);
                    enr.addclickhandler(marker);
                    enr.mapData.markers.push(marker);
                }
            },
            getmarker: function(enr,pt, data,index){
                var marker= {};
                if(data.ico){
                    marker = new BMap.Marker(pt,{icon:enr.mapData.markerico});
                }else {
                    marker = new BMap.Marker(pt,{icon:enr.mapData.markerico2});
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
                }
                marker.title = data.title;
                marker.content = data.content;
                marker.id = data.id;
                marker.cb = data.callback;
                return marker;
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
            addclickhandler: function (marker) {
                var this_ = this;
                marker.addEventListener("mouseover", function (e) {
                        var p = e.target;
                        var content = this_.getinfoboxhtml(marker.title, marker.content, marker.id, marker.cb);
                        var infobox = new BMapLib.InfoBox(this_.mapData.map, content, {
                            closeIconUrl: 'http://img2.static.uban.com/www/images/map/close.png',
                            closeIconMargin: '20px 16px auto auto',
                            closeIconClass: 'close'
                        });
                        infobox.addEventListener("open", function (e) {
                            if (this_.currentinfobox != null) {
                                this_.currentinfobox.close();
                            }
                            this_.currentinfobox = e.target;
                        });
                        infobox.addEventListener("close", function (e) {
                            this_.currentinfobox = null;
                        });
                        infobox.enableAutoPan();
                        infobox.open(marker);
                    }
                );
            },
            clearmarkers: function(enr){
                for (var i = 0; i < enr.mapData.markers.length; i++){
                    enr.mapData.map.removeOverlay( enr.mapData.markers[i]);
                }
                enr.mapData.markers = [];
            },
            searchHandler:function(index, desc){
                var this_ = this;
                this_.mapData.mainIndex = index;
                this_.mapData.subIndex = 0;
                this_.mapData.subTypes = desc.split(',');
                this.searchHandler_(0, this_.mapData.subTypes[0]);
            },
            searchHandler_:function(a, b){
                var this_ = this;
                this.mapData.subIndex = a;
                if (this.mapData.local != null) {
                    this.mapData.local.clearResults();
                } else {
                    this.mapData.local = new BMap.LocalSearch(this.mapData.map, {});
                }

                this.mapData.local.searchNearby(b, this.mapData.point, 1000);
                this.mapData.local.setSearchCompleteCallback(function (r) {
                    var s = [];
                    for (var i = 0; i < r.getCurrentNumPois(); i++) {
                        var temp = r.getPoi(i);
                        var distances = ( this_.mapData.map.getDistance(this_.mapData.point, r.getPoi(i).point).toFixed(0) + '米');
                        s.push({
                            'title': temp.title, 'content': temp.address, 'x': temp.point.lng, 'y': temp.point.lat, 'distance': distances
                        });
                    }
                    this_.mapData.results = s;
                    this_.clearmarkers(this_);
                    this_.addmarkers(s,this_);
                });
            },
        }
    }
</script>
<style scoped lang="less">
    .close{
        width: 16px;
        height:16px;
        right:0;
        top:0;
    }
    .clear{
        clear: both;
        &:after{
            content:".";
            clear:both;
            display:block;
            height:0;
            overflow:hidden;
            visibility:hidden;
        }
    }
    [map-part]{
        .build-name{
            font-size: 20px;
            margin-bottom: 10px;
            .supporting {
                float: left;
                position: relative;
                top: 0;
                width: 30px;
                height: 30px;
                margin-right: 10px;
                background: url("../resources/images/icons/detail-icon-bg.png") no-repeat;
                background-position: -106px -220px;
            }
        }
        .map-out{
            position: relative;
            width: 1200px;
            margin: 0 auto;
            #mapId{
                float: left;
                width: 800px;
                height:420px;
            }
            .search-part{
                float: right;
                width: 380px;
                height: 420px;
                border: 1px solid #EEE;
                box-sizing: border-box;
                .tab-nav{
                    height: 56px;
                    border-bottom: 1px solid #EEE;
                    li{
                        float: left;
                        width: 20%;
                        height: 100%;
                        line-height: 21px;
                        font-size: 13px;
                        text-align: center;
                        cursor: pointer;
                        i{
                            position: relative;
                            top: 8px;
                            display: block;
                            width: 26px;
                            height: 26px;
                            margin: 0 auto 4px;
                            background: url("../resources/images/icons/detail-icon-bg.png") no-repeat;
                        }
                    }
                    li.on{
                        color: #FFF;
                        background-color: #3facf8;
                    }
                    li:nth-child(1){
                        i{
                            background-position: -27px -148px;
                        }
                    }
                    li.on:nth-child(1){
                        i{
                            background-position: -27px -117px;
                        }
                    }
                    li:nth-child(2){
                        i{
                            background-position: -228px -147px;
                        }
                    }
                    li.on:nth-child(2){
                        i{
                            background-position: -228px -116px;
                        }
                    }
                    li:nth-child(3){
                        i{
                            background-position: -188px -146px;
                        }
                    }
                    li.on:nth-child(3){
                        i{
                            background-position: -188px -115px;
                        }
                    }
                    li:nth-child(4){
                        i{
                            background-position: -108px -147px;
                        }
                    }
                    li.on:nth-child(4){
                        i{
                            background-position: -108px -116px;
                        }
                    }
                    li:nth-child(5){
                        i{
                            background-position: -148px -146px;
                        }
                    }
                    li.on:nth-child(5){
                        i{
                            background-position: -148px -115px;
                        }
                    }
                }
                .sub-tab{
                    height: 44px;
                    border-bottom: 1px solid #EEE;
                    li {
                        float: left;
                        min-width: 70px;
                        height: 44px;
                        line-height: 18px;
                        padding: 14px 10px 13px;
                        font-size: 13px;
                        text-align: center;
                        box-sizing: border-box;
                        cursor: pointer;
                    }
                    li.currenttype {
                        border-bottom: 3px solid #3facf8;
                    }
                }
                .result-ul{
                    height: 316px;
                    overflow-x: hidden;
                    overflow-y: auto;
                    .result-item{
                        height: 20px;
                        line-height: 20px;
                        padding: 10px 20px 10px 15px;
                        font-size: 13px;
                        cursor: pointer;
                        box-sizing: content-box;
                        i{
                            display: block;
                            float: left;
                            width: 20px;
                            height: 20px;
                            margin-right: 7px;
                            color: #FFF;
                            text-align: center;
                            border-radius: 50%;
                            background-color: #3facf8;
                        }
                        p{
                            float: left;
                            width: 240px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        span{
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
