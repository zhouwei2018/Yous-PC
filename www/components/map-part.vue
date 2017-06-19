<template>
    <div map-part>
        <h1 class="build-name">{{buildName}}</h1>
        <div class="map-out clear">
            <div id="mapId"></div>
            <div class="search-part">
                <ul class="tab-nav">
                    <li v-for="(item, index) in serviceItems" @click="searchHandler(index, item.dis)" :data-code="item.code" :data-key="item.dis" class="map-type-item" :class="{on:item.isActive }"><i></i>{{ item.title }}</li>
                </ul>
                <ul class="result-ul">
                    <li class="result-item" v-for="(item, index) in mapData.resultArray"><i>{{ index+1 }}</i><p>{{ item.address }}</p><span>{{ item.distances }}</span></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Map',
        data(){
            return {
                mapData:{
                    map:null,
                    localSearch:null,
                    pointGT:null,
                    point:null,
                    resultArray :[]
                },

                buildName:"望京SOHO周边配套",
                serviceItems:[
                    {code:"jt", dis:"地铁,公交,停车场,加油站", title:"交通", isActive:1},
                    {code:"cy", dis:"中餐,西餐,快餐,咖啡厅,茶座", title:"餐饮", isActive:0},
                    {code:"jd", dis:"酒店，餐馆，星级酒店,快捷酒店,公寓式酒店", title:"酒店", isActive:0},
                    {code:"js", dis:"体育场馆,极限运动场所,健身中心", title:"健身", isActive:0},
                    {code:"jr", dis:"银行,ATM,投资理财", title:"金融", active:0},
                ],
            }
        },
        mounted: function () {
               this.getPosition();
        },
        methods: {
             getPosition:function(){
                var point=null,pointGT={lng:"",lat:""}, map =null, app_=this;
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        pointGT['lng'] = r.point.lng;
                        pointGT['lat'] = r.point.lat;
                        point =  new BMap.Point( pointGT['lng'],pointGT['lat']);
                        app_.pointGT = pointGT;
                        app_.point = point;
                        app_.initMap();
                    }
                    else {
                        alert('failed'+this.getStatus());
                    }
                },{enableHighAccuracy: true})
                //状态码
                //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
                //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
                //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
                //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
                //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
                //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
            },
             initMap:function () {
                 var app_=this;
                this.map=new BMap.Map("mapId");
                 console.log("ttt1")
                this.map.centerAndZoom(this.point, 13);
                var myIcon = new BMap.Icon('http://img2.static.uban.com/www/map/images/local.png', new BMap.Size(24, 32), {anchor: new BMap.Size(9, 44), imageSize: new BMap.Size(24,32)});
                var markerico2=new BMap.Icon('http://img2.static.uban.com/www/map/images/marker2.png', new BMap.Size(24, 32),{anchor: new BMap.Size(12, 38), imageSize: new BMap.Size(24,32)});
                var mk = new BMap.Marker(this.point, {icon: myIcon});
                this.map.addOverlay(mk);
                //this.map.panTo(this.point);

                 var circle = new BMap.Circle(this.point,1000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                 var options = {
                    renderOptions: {
                        map: this.map
                    },
                    onSearchComplete: function(results,a,b) {
                        var resultData = [];
                        if (app_.local.getStatus() == BMAP_STATUS_SUCCESS){
                            var s = [];
                            for (var i = 0; i < results.getCurrentNumPois(); i ++){
                                 var temp = results.getPoi(i);
                                 var distances = ( app_.map.getDistance(app_.point,results.getPoi(i).point).toFixed(0)+'米')
                                 resultData.push({lng:temp.point.lng,lat:temp.point.lat,title:temp.title,address:temp.address,distances:distances})
                            }
                            app_.mapData.resultArray = resultData;

                            help(app_,resultData)
                            addInfoBox(app_,resultData)
                            //清除所有标记
                            app_.map.clearOverlays();
                            mk.show();
                            circle.show();
                        }
                    }
                };

                 this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                 this.map.addOverlay(circle);
                 //默认搜索
                 app_.local = new BMap.LocalSearch(this.map, options);
                 this.searchHandler(0,"交通");

                 function addInfoBox(enr, data_info){
                     for(var i=0;i<data_info.length;i++){
                         var marker = new BMap.Marker(new BMap.Point(data_info['lng'],data_info['lat']),{icon: markerico2});  // 创建标注
                         var content = data_info['title'];
                         enr.map.addOverlay(marker);               // 将标注添加到地图中
                         addClickHandler(content,marker);
                     }

                 }
                 function help(enr,data_info){
                    var opts = {
                        width : 250,     // 信息窗口宽度
                        height: 80,     // 信息窗口高度
                        title : "信息窗口" , // 信息窗口标题
                        enableMessage:true//设置允许信息窗发送短息
                    };
                    for(var i=0;i<data_info.length;i++){
                        var marker = new BMap.Marker(new BMap.Point(data_info['lng'],data_info['lat']),{icon: markerico2});  // 创建标注
                        var content = data_info['title'];
                        enr.map.addOverlay(marker);               // 将标注添加到地图中
                        addClickHandler(content,marker,enr);
                    }
                }
                 function addClickHandler(content,marker,enr){
                     marker.addEventListener("click",function(e){
                         openInfo(content,e,enr)}
                     );
                 }
                 function openInfo(content,e,enr){
                     var p = e.target;
                     var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                     var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
                     enr.map.openInfoWindow(infoWindow,point); //开启信息窗口
                 }

            },
             searchHandler:function(index,dis){
                for(var  i=0,len=this.serviceItems.length;i<len;i++){
                    this.serviceItems[i].isActive=0;
                }
                this.serviceItems[index].isActive=1;
                 console.log(this.serviceItems[index].title)
                this.local.searchNearby(this.serviceItems[index].title, this.point,1000);

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
                           background-position: -27px -117px;
                       }
                   }
                   li.on:nth-child(1){
                       i{
                           background-position: -27px -117px;
                       }
                   }
                   li:nth-child(2){
                       i{
                           background-position: -228px -116px;
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
