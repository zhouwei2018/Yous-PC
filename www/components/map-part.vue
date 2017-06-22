<template>
    <div map-part>
        <div class="map-out clear">
            <div id="mapId"></div>
            <div class="search-part">
                <ul class="tab-nav">
                    <li v-for="(item, index) in serviceItems" @click="searchHandler(index, item.dis)" :data-code="item.code" :data-key="item.dis" class="map-type-item" :class="{on:item.isActive }"><i></i>{{ item.title }}</li>
                </ul>
                <ul class="result-ul">
                    <li class="result-item" v-for="(item, index) in mapData.results"><i>{{ index+1 }}</i><p>{{ item.title }}{{item.content}}</p><span>{{ item.distance }}</span></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import '../resources/plugin/infoBox.min.js';
    export default {
        name: 'Ymap',
        data(){
            return {
                mapData:{
                    markerico:null,
                    markerico2:null,
                    local:null,
                    map: null,
                    point:null,
                    circle: null,
                    defaultcenterdpoint: null,
                    results: [],
                    markers:[],
                    currentinfobox: null,
                },
                serviceItems:[
                    {code:"jt", dis:"地铁,公交,停车场,加油站", title:"交通", isActive:1},
                    {code:"cy", dis:"中餐,西餐,快餐,咖啡厅,茶座", title:"餐饮", isActive:0},
                    {code:"jd", dis:"酒店，餐馆，星级酒店,快捷酒店,公寓式酒店", title:"酒店", isActive:0},
                    {code:"js", dis:"体育场馆,极限运动场所,健身中心", title:"健身", isActive:0},
                    {code:"jr", dis:"银行,ATM,投资理财", title:"金融", active:0},
                ],
            };
        },
        mounted: function () {
               this.init();
        },
        methods: {
            init:function(){
                var geolocation = new BMap.Geolocation(), this_=this;
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        this_.initMap(r.point.lng,r.point.lat, 15, "您在此处");
                    }
                    else {
                        alert('请开启浏览器定位'+this.getStatus());
                    }
                },{enableHighAccuracy: true});
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
                var markerCenter = this.getmarker(this,pt, {'x': x, 'y': y, 'title': title, ico: 1});
                var circle = new BMap.Circle(point,1000,{fillColor:'blue', strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                map.addOverlay(circle);
                map.addOverlay(markerCenter);
                this.addclickhandler(markerCenter);
                this.searchHandler(0);

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
                marker.title= data['title'];
                marker.address= data['content'];
                return marker;
            },
            addclickhandler: function (marker) {
                var this_= this;
                marker.addEventListener("mouseover", function (e) {
                    var opts = {
                        width : 200,     // 信息窗口宽度
                        height: 100,     // 信息窗口高度
                        title :marker['title'] , // 信息窗口标题
                        enableMessage:true,//设置允许信息窗发送短息
                        message:''
                    }
                    var infoWindow = new BMap.InfoWindow(marker['address'], opts);
                    var p = marker.getPosition();
                    var point = new BMap.Point(p['lng'],p['lat']);
                    this_.mapData.map.openInfoWindow(infoWindow,point); //开启信息窗口
                    }
                );
            },
            clearmarkers: function(enr){
                for (var i = 0; i < enr.mapData.markers.length; i++){
                    enr.mapData.map.removeOverlay( enr.mapData.markers[i]);
                }
                enr.mapData.markers = [];
            },
            searchHandler:function(index){
                var this_ = this;
                for(var  i=0,len=this.serviceItems.length;i<len;i++){
                    this.serviceItems[i].isActive=0;
                }
                this.serviceItems[index].isActive=1;
                if (this.mapData.local != null) {
                    this.mapData.local.clearResults();
                } else {
                    this.mapData.local = new BMap.LocalSearch(this.mapData.map, {});
                }

                this.mapData.local.searchNearby(this.serviceItems[index].title, this.mapData.point, 1000);
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
            }
        }
    }

</script>

<style scoped lang="less">
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
            text-align: center;
            &before{

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
                       background-color: #302F35;
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
                           background-color: #302F35;
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
