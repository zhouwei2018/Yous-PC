<style scoped lang="less">
    @import "../resources/css/base.less";
    @import "../resources/css/map_search/map_search.css";
</style>
<style lang="less">
    [map-search] {
        .mapbg {
            min-width: 1200px;
            overflow: hidden;
            height: 100%;
            width: 100%;
            .header_menu_out {
                position: relative;
                bottom: 0;
                top: 0;
                left: 0;
                right: 0;
                background: #fff;
                .header_menu {
                    width: 100%;
                    height: 59px;
                    border-bottom: 2px solid #8c91ff;
                    .header_logo {
                        width: 183px;
                        height: 57px;
                    }
                }
            }
        }
        .fang_type {
            .fangtypebtn {
                img {
                    float: left;
                    cursor: pointer;
                    width: 41px;
                    height: 41px
                }

            }
        }
        .contnav ul.topnav li img {
            margin: 4px 14px 0 48px;
            width: 10px;
            height: 6px;
        }
        .fang_type .typelist ul li {
            overflow: hidden;
            background: #66d0fa;
            color: #ffffff;
            font-size: 14px;
        }
        .fang_type .typelist ul li a img {
            float: left;
            margin-top: 11px;
            width: 19px;
            height: 18px;
        }
        .contnav ul.topnav li ul.subnav li {
            clear: both;
            width: 90px;
            height: 28px;
            border: 0;
            overflow: hidden;
            text-align: center
        }
        .contnav ul.topnav li ul.subnav li a {
            clear: both;
            float: left;
            width: 90px;
            margin: 0;
            height: 28px;
            line-height: 28px;
        }
        .contnav ul.topnav li ul.subnav li a:hover {
            color: #ffffff;
            background: #64cff9;
            border: none;
            width: 90px;
        }
        .s_location {
            .subnav {
                display: none;
            }
        }
        .s_location:hover {
            .subnav {
                display: block;
            }
        }
    }
</style>

<template>
    <div class="all">
        <!--header start-->
        <header1></header1>
        <!--header end-->

        <div map-search>
            <div class="mapbg">
                <div class="header_menu_out">
                    <div class="header_menu">
                        <div class="mapmenuleft">
                            <div class="header_city fl">
                                <a href="javascript:void(0);" class="menu-citys"><span></span>北京</a>
                            </div>
                            <div class="menu fl" id="menu_nav">
                                <ul>
                                    <li><a href="/index" target="_blank">首页</a></li>
                                    <li><a href="javascript:void(0);" id="two2" class="up">地图找房</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="search_main">
                        <div class="fang_type fl">
                            <div class="fangtypebtn"><img
                                    src="../resources/images/map_search/fang_type.jpg"><span>房源类型</span>
                            </div>
                            <div class="typelist">
                                <ul>
                                    <li key="exchange">
                                        <a href="javascript:void(0);">
                                            <div class="bottomstyle"><img
                                                    src="../resources/images/map_search/icon_fang.png"><span>二手房</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li key="rent">
                                        <a href="javascript:void(0);">
                                            <div class="bottomstyle last"><img
                                                    src="../resources/images/map_search/icon_fang.png"><span>租房</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="search fl">
                            <input type="text" placeholder="请输入小区名称或地址..." autocomplete="off" id="autocomplete">
                            <a class="search_btn fl" href="javascript:void(0);"><img
                                    src="../resources/images/map_search/searchbtn.png" width="17" height="17"></a>
                        </div>

                        <div class="contnav fl">
                            <ul class="topnav">
                                <li class="s_location">
                                    <a href="javascript:void(0);"><span id="chv">{{areaTitle}}</span><img
                                            src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul class="subnav">
                                        <li class="result-item" v-for="(item, index) in district" areaid="item.id"
                                            :x="item.point.toString().split('|')[0]"
                                            :y="item.point.toString().split('|')[1]"
                                            @click="searchDistrict(index, item, $event)"><a>{{item.title}}</a></li>
                                    </ul>
                                </li>
                                <li class="price-class">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">价格</span><img
                                            src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="size-class">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">面积</span><img
                                            src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="room-type">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">户型</span><img
                                            src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="last feature-type" style="width: 110px;">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">特色</span><img
                                            src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tsinfosty"><img src="../resources/images/map_search/ts_icon.png"></div>
                </div>
                <!--地图部分-->
                <div class="mapmain">
                    <div class="wrapper">
                        <div class="marcont" id="map"></div>
                        <div class="zengleft">
                            <a href="javascript:" class="bar"></a>
                        </div>
                        <div class="main_zhoubian" style="display:none;"></div>
                        <div class="r_listbtn qqserver_fold">
                            <a href="javascript:void(0);"></a>
                        </div>
                        <!--右边浮动层开始-->
                        <div class="qqserver">
                            <div class="qqserver-body">
                                <div class="qqserver-header">
                                    <div class="xiaoqushow fl" id="xiaoqushow">
                                        <span class="icon_xqshow"></span>小区展示
                                    </div>
                                    <div class="fanhuibtn fl" id="fanhui" style="display:none;">
                                        <a href="javascript:void(0);"><label class="icon_fanhui"></label>返回</a>
                                    </div>
                                    <div class="fenxiangshow fl" style="margin-left: 147px;"><span></span></div>
                                    <!--分享的弹出层 str-->
                                    <div class="shareshow" style="display:none;">
                                        <p class="fxdao">分享到</p>
                                        <div class="fxlist">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);" class="share qq_share xq"></a>
                                                    <a class="sharetext qq_sharetext">QQ好友</a>
                                                </li>
                                                <li style="background-position: 66% 0%">
                                                    <a href="javascript:void(0);" class="share kj_share xq"></a>
                                                    <a class="sharetext kj_sharetext">QQ空间</a>
                                                </li>
                                                <li style="background-position: 33% 175%">
                                                    <a href="javascript:void(0);" class="share tx_share xq"></a>
                                                    <a class="sharetext tx_sharetext">腾讯微博</a>
                                                </li>
                                                <li class="wxbtn" style="background-position: 100% 0%">
                                                    <div class="bdsharebuttonbox"><a href="javascript:void(0);"
                                                                                     class="share wx_share xq"
                                                                                     data-cmd="weixin"></a></div>
                                                    <a class="sharetext wx_sharetext">微信分享</a>
                                                </li>
                                                <li style="background-position:0% 175% ">
                                                    <a href="javascript:void(0);" class="share xl_share xq"></a>
                                                    <a class="sharetext xl_sharetext">新浪微博</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!--分享的弹出层 end-->
                                    <div class="close qqserver_arrow fl"><span></span></div>
                                </div>
                                <div class="tabPanel">
                                    <div class="tabList">
                                    </div>
                                    <div class="tabCon leftAround">
                                        <div class="pane">
                                            <ul class="gongjiaoinfo">
                                                <li>
                                                    <p class="jieguoinfo">
                                                        <span class="iconbiao"></span>周边
                                                        <b class="number">1公里</b>
                                                        <span class="tiaoshuinfo"><b></b> 条结果</span>
                                                    </p>
                                                    <div class="vertical scrollbox clearfix">
                                                        <div class="slyWrap example1">
                                                            <div class="scrollbar">
                                                                <div class="handle"
                                                                     style="position: absolute; top: 0px;"></div>
                                                            </div>
                                                            <div class="sly"
                                                                 data-options="{ &quot;itemNav&quot;: &quot;smart&quot;, &quot;dragContent&quot;: 1, &quot;startAt&quot;: 1, &quot;scrollBy&quot;: 1, &quot;elasticBounds&quot;: 1 }"
                                                                 style="padding-bottom: 606px; overflow: hidden; position: relative;">
                                                                <ul class="big cfix gongjiaoload"
                                                                    style="position: absolute; top: 0px; height: 0px;">
                                                                    <li class="zhoubians active">
                                                                        <ul class="luxianadress"></ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="liebiao">
                                    <div class="fangyuanlist">
                                        <div class="adress"><span></span>{{detailLists.address}}</div>
                                        <div class="fanginfo">
                                            <a href="" target="_blank">{{detailLists.title}}</a>
                                            <img style="border:none;width:390px;height:106px" src="../resources/images/map_search/bj.jpg">
                                            <span class="fuceng"> </span>
                                        </div>
                                        <!--内容-->
                                        <div class="vertical scrollbox clearfix">
                                            <div class="slyWrap example1">
                                                <div class="scrollbar">
                                                    <div class="handle"
                                                         style="position: absolute; top: 0px; height: 60px;"></div>
                                                </div>
                                                <div class="sly"  style="padding-bottom: 606px; overflow: hidden; position: relative;">
                                                    <ul class="big cfix houses_list"
                                                        style="position: absolute; top: 0; height: 1088px;">
                                                        <li class="waiclisty active">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li v-for="(item, index) in detailLists.houses" :id="item.code">



                                                                    </li>


                                                                    <li id="160908917" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3809/38095917/shinei/cplbjckh9299d042.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>290万/<span>58000元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨50平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="155604986" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3722/37228498/shinei/dhjgjcji66c2c571.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>340万/<span>64151元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨53平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="153019567" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3734/37341636/shinei/dggdidgabe34740c.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>295万/<span>70238元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">1室1厅丨42平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="153877071" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3743/37436754/shinei/djbfinjbfc2d67b5.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>280万/<span>66667元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">1室1厅丨42平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="159965512" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3795/37952237/shinei/odkopbep4baf1036.JPG.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>383万/<span>58030元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨66平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="160895236" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3770/37708926/shinei/iklpojjid2a0e4d2.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>315万/<span>58333元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨54平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="156782441" class="xianshiflod rent">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3645/36458879/shinei/mpihhdko26f42bc7.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>3800元/月</dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨55平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                        <li class="waiclisty">
                                                            <div class="fanglistinfo">
                                                                <ul>
                                                                    <li id="158780299" class="xianshiflod exchange">
                                                                        <p>
                                                                            <img src="http://image.5i5j.com/picture/slpic/l/house/3763/37638934/shinei/boejfgof7c5ebac4.jpg.jpg?4690f38164d22ccb0e30efafa9c0619d"
                                                                                 border="0" width="160" height="120"
                                                                                 onerror="defaultimgerror(this);">
                                                                        </p>
                                                                        <dl>
                                                                            <dt>340万/<span>64151元/m²</span></dt>
                                                                            <dd class="fangcontent hpcolor"
                                                                                style="overflow: hidden;">
                                                                                <span>南开西里</span>（丰台）
                                                                            </dd>
                                                                            <dd class="fangcontent">2室1厅丨53平米丨南北</dd>
                                                                            <dd>
                                                                                <div class="fangbtn">
                                                                                    <!--
                                                                                    <span class="gybtn"></span>
                                                                                                                                            <span class="mwbtn"></span>
                                                                                                                                            <span class="cdbtn"></span>
                                                                                    -->                        </div>
                                                                            </dd>
                                                                        </dl>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li><!-- </a> -->
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!--内容结束-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="qqserver001"></div>
                        <!--右边浮动层结尾-->
                    </div>
                </div>
            </div>
            <!--加载图标-->
            <div id="t_L"></div>
            <div id="h_L"></div>
            <div id="ht_L"></div>
        </div>

        <!--footer start-->
        <footer1></footer1>
        <!--footer end-->

    </div>
</template>
<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    import {ComplexCustomOverlay, YMap }  from '../resources/js/map_lib/map_out.js';
    import axios from 'axios';
    import qs from 'qs';
    export default {
        components: {
            header1,
            footer1,
        },
        data(){
            return {
                areaTitle: "区域",
                boundary_location: [],
                district: [],
                YSMap: null,
                autoSearchMaker: "",
                domainRoot: 'http:/www.ys.com/map/',
                circleNum: 0, //圆内标示加载次数的标识, 当为1的时候不再重复加载
                autoSearchVal: '', //定位搜索的值
                my_radius: 1000, //默认周边圆的单位(米)
                only_around: false,//是否只显示周边
                move_load: true, //移动地图时是否重新加载数据
                is_scale: true, //是否开启比例尺
                is_navigation: false, //是否开启平移控件
                is_baidu: false, //是否开启百度地图标识
                is_community_load: true, //是否加载小区 防止死循环
                zoomId: 12, //默认的地图放大级别
                house_type: 'all', //房源类型 all 全部 exchange rent
                priceClass: 0, //价格
                sizeType: 0, //面积
                roomType: 0, //居室
                featureType: 0,//特色
                detailLists:{
                    address:"石景山古城地铁站东南口向东100米", //楼栋地址
                    title:"长安家园", //楼栋名称
                    pic :".../themes/new2015/common/images/mapcity/bj.jpg", //楼栋封面图片
                    houses:[
                        {
                            img:"http://image.5i5j.com/picture/slpic/l/house/3766/37666120/shinei/cjgpedmfafb53cce.JPG.jpg?1a98033375ade15eb8b596d36ab21aef", //房源圖片
                            totalPrice:"335万", //总价
                            perPrice:"50758",  //单价每平米
                            tAddress:"長安家園", //房源所屬樓棟
                            area:"石景山", //房源所屬行政區域
                            condition:"2室1聼", //房源佈局
                            size:"56", //房源面积 56平
                            direction:"1" ,//房源朝向 1东西， 2.南北  3.其他
                            houseId:333 //房源Id
                        }
                    ]
                }
            }
        },
        mounted: function () {
            this.getDisData();
            this.init();
            this.temHelper();
        },

        created(){

        },
        methods: {
            getDisData: function () {
                //行政区域边界
                let boundary_location = [];
                boundary_location['朝阳区'] = "116.646319, 40.006356;116.641899, 40.010457;116.637789, 40.008115;116.631801, 40.010677;116.634344, 40.014032;116.625897, 40.018101;116.605573, 40.020894;116.583423, 40.03384;116.585263, 40.038949;116.580879, 40.038842;116.583812, 40.035202;116.572502, 40.044509;116.557532, 40.051337;116.552346, 40.056249;116.558534, 40.059865;116.554677, 40.068609;116.550099, 40.065421;116.53681, 40.076275;116.518432, 40.077255;116.506144, 40.086251;116.489979, 40.087645;116.479918, 40.091193;116.47609, 40.095797;116.473365, 40.095842;116.472852, 40.087579;116.468351, 40.08629;116.466889, 40.067011;116.455298, 40.064534;116.431355, 40.070731;116.431517, 40.066402;116.415819, 40.06182;116.412625, 40.05574;116.415001, 40.049137;116.410542, 40.044775;116.401717, 40.042858;116.397325, 40.047524;116.396604, 40.04379;116.401464, 40.039194;116.357718, 40.032531;116.363069, 40.02954;116.362761, 40.026109;116.387287, 39.993956;116.387785, 39.978807;116.400581, 39.979365;116.393903, 39.967204;116.396364, 39.969351;116.414482, 39.96835;116.415299, 39.979667;116.420495, 39.968249;116.431673, 39.968272;116.431655, 39.96543;116.437014, 39.965433;116.43663, 39.956121;116.446594, 39.957907;116.44497, 39.952238;116.454134, 39.950601;116.45024, 39.93446;116.440535, 39.934234;116.442707, 39.908962;116.455132, 39.908642;116.453665, 39.900457;116.457497, 39.896305;116.450797, 39.894688;116.44943, 39.872028;116.451866, 39.868396;116.463979, 39.866301;116.472854, 39.860089;116.466214, 39.853856;116.46466, 39.856262;116.453186, 39.854005;116.453684, 39.847044;116.447524, 39.845285;116.442984, 39.847021;116.437902, 39.83852;116.431615, 39.838691;116.431617, 39.83626;116.446775, 39.835831;116.450671, 39.826127;116.460356, 39.828481;116.469959, 39.819999;116.475494, 39.82014;116.480899, 39.815293;116.491975, 39.818782;116.496314, 39.824938;116.501637, 39.824196;116.50154, 39.821867;116.516491, 39.822714;116.515981, 39.829544;116.520718, 39.835153;116.532584, 39.83575;116.532967, 39.832723;116.541175, 39.83037;116.544843, 39.834524;116.540075, 39.838702;116.549021, 39.835757;116.552721, 39.84116;116.584308, 39.836326;116.589616, 39.829271;116.606644, 39.831094;116.608073, 39.846815;116.613401, 39.851335;116.611039, 39.855961;116.619228, 39.856115;116.633199, 39.866868;116.626724, 39.874698;116.63635, 39.891266;116.634324, 39.896696;116.622549, 39.895733;116.620905, 39.902434;116.628445, 39.908134;116.627765, 39.926694;116.637114, 39.9281;116.631738, 39.936723;116.635922, 39.938225;116.639874, 39.946202;116.636731, 39.95343;116.639218, 39.956666;116.651643, 39.95228;116.647209, 39.987213;116.638861, 39.990305;116.646185, 39.996931;116.650368, 39.996265;116.646319, 40.006356";
                boundary_location['海淀区'] = "116.341137, 39.923964;116.339679, 39.94356;116.334715, 39.948162;116.357253, 39.948746;116.358141, 39.956251;116.362253, 39.957521;116.362998, 39.949865;116.378502, 39.954835;116.37692, 39.973552;116.389736, 39.974387;116.387287, 39.993956;116.362761, 40.026109;116.363069, 40.02954;116.357718, 40.032531;116.401464, 40.039194;116.396604, 40.04379;116.397325, 40.047524;116.378543, 40.050829;116.37375, 40.057042;116.379802, 40.060106;116.378836, 40.063911;116.389051, 40.066847;116.386902, 40.07159;116.379795, 40.071643;116.376853, 40.075298;116.369691, 40.074844;116.369768, 40.07191;116.353507, 40.069364;116.349949, 40.061113;116.346675, 40.060861;116.34552, 40.064731;116.335378, 40.06064;116.325006, 40.067249;116.313008, 40.068525;116.310228, 40.066449;116.296905, 40.089609;116.286401, 40.086145;116.280513, 40.097876;116.265798, 40.10745;116.271527, 40.110243;116.269771, 40.117429;116.264818, 40.118596;116.263369, 40.110845;116.246619, 40.114369;116.251428, 40.118582;116.254817, 40.141222;116.239751, 40.142021;116.223719, 40.147867;116.214447, 40.146781;116.209906, 40.167109;116.201798, 40.166439;116.197998, 40.161694;116.190154, 40.164269;116.188151, 40.153554;116.181289, 40.148843;116.176081, 40.148902;116.176031, 40.145915;116.171412, 40.146314;116.176745, 40.143174;116.179721, 40.13387;116.174848, 40.134699;116.177839, 40.130436;116.141183, 40.127954;116.137391, 40.121312;116.120823, 40.121343;116.113567, 40.124048;116.108368, 40.122302;116.10376, 40.127436;116.081711, 40.121954;116.077221, 40.111653;116.063592, 40.103311;116.056474, 40.092332;116.063413, 40.083336;116.071468, 40.079457;116.072308, 40.073843;116.078539, 40.068341;116.075555, 40.058363;116.0821, 40.043526;116.085314, 40.039136;116.092141, 40.037016;116.107208, 40.039888;116.144993, 40.035981;116.155357, 40.028917;116.164319, 40.027556;116.182703, 40.012638;116.179676, 40.007247;116.167804, 40.006381;116.157626, 39.999989;116.16467, 39.990209;116.174553, 39.993657;116.175724, 39.983666;116.185043, 39.988499;116.185431, 39.994544;116.191454, 39.992044;116.192751, 39.976711;116.208046, 39.967038;116.209915, 39.962145;116.225593, 39.94995;116.220405, 39.939699;116.222384, 39.933733;116.213491, 39.930676;116.213391, 39.923814;116.238498, 39.922;116.259497, 39.927929;116.259612, 39.9237;116.25575, 39.921998;116.259455, 39.921458;116.25952, 39.903235;116.301619, 39.90306;116.302701, 39.892937;116.305624, 39.895923;116.313912, 39.896884;116.310609, 39.898681;116.319901, 39.902635;116.341152, 39.902656;116.341137, 39.923964";
                boundary_location['东城区'] = "116.442707, 39.908962;116.440535, 39.934234;116.45024, 39.93446;116.454134, 39.950601;116.44497, 39.952238;116.446594, 39.957907;116.43663, 39.956121;116.437014, 39.965433;116.431655, 39.96543;116.431673, 39.968272;116.420495, 39.968249;116.414144, 39.979655;116.414482, 39.96835;116.396364, 39.969351;116.393613, 39.966062;116.393758, 39.963015;116.399881, 39.96342;116.402897, 39.934735;116.405809, 39.93423;116.406024, 39.929754;116.397306, 39.928574;116.398119, 39.91388;116.402086, 39.914015;116.404366, 39.905116;116.404872, 39.878463;116.3877, 39.877337;116.387944, 39.87347;116.397662, 39.871581;116.401907, 39.865188;116.420505, 39.865369;116.423156, 39.873252;116.419873, 39.878168;116.449648, 39.877668;116.450797, 39.894688;116.45749, 39.895901;116.453665, 39.900457;116.455132, 39.908642;116.442707, 39.908962";
                boundary_location['西城区'] = "116.40249, 39.906514;116.402086, 39.914015;116.398119, 39.91388;116.397306, 39.928574;116.406024, 39.929754;116.405809, 39.93423;116.402897, 39.934735;116.399881, 39.96342;116.393758, 39.963015;116.393613, 39.966062;116.400581, 39.979365;116.387785, 39.978807;116.389667, 39.974264;116.376901, 39.973511;116.378502, 39.954835;116.362998, 39.949865;116.362253, 39.957521;116.358141, 39.956251;116.357253, 39.948746;116.334715, 39.948162;116.339702, 39.943468;116.342505, 39.909573;116.341152, 39.902656;116.332493, 39.902619;116.327789, 39.880976;116.349776, 39.881578;116.350725, 39.879437;116.356864, 39.879846;116.358673, 39.87466;116.404872, 39.878463;116.40249, 39.906514";
                boundary_location['石景山区'] = "116.25948, 39.923721;116.259497, 39.927929;116.238498, 39.922;116.213391, 39.923814;116.213491, 39.930676;116.222384, 39.933733;116.220405, 39.939699;116.225593, 39.94995;116.209915, 39.962145;116.208046, 39.967038;116.192751, 39.976711;116.191454, 39.992044;116.185431, 39.994544;116.185043, 39.988499;116.175724, 39.983666;116.174553, 39.993657;116.16467, 39.990209;116.157626, 39.999989;116.150944, 39.995682;116.125963, 39.992095;116.120457, 39.987295;116.123488, 39.977956;116.129973, 39.973315;116.127774, 39.967015;116.121463, 39.963716;116.126675, 39.956231;116.120227, 39.954072;116.118878, 39.948913;116.123569, 39.941159;116.126733, 39.938261;116.131339, 39.940888;116.135277, 39.93273;116.14728, 39.928622;116.162003, 39.903971;116.190577, 39.886765;116.206242, 39.889109;116.214799, 39.880066;116.218901, 39.880592;116.217259, 39.884172;116.224868, 39.882421;116.226217, 39.887366;116.234483, 39.889278;116.234411, 39.89479;116.240775, 39.895463;116.244157, 39.899681;116.264751, 39.901361;116.265713, 39.903332;116.25952, 39.903235;116.259455, 39.921458;116.25575, 39.921998;116.25948, 39.923721";
                boundary_location['通州区'] = "116.633144, 40.01246;116.631801, 40.010677;116.637789, 40.008115;116.641899, 40.010457;116.650181, 40.000167;116.650368, 39.996265;116.646185, 39.996931;116.638861, 39.990305;116.647209, 39.987213;116.651643, 39.95228;116.639218, 39.956666;116.636731, 39.95343;116.639874, 39.946202;116.635922, 39.938225;116.631738, 39.936723;116.637114, 39.9281;116.627765, 39.926694;116.628445, 39.908134;116.62432, 39.905414;116.626103, 39.903931;116.621102, 39.903546;116.622549, 39.895733;116.634324, 39.896696;116.63635, 39.891266;116.626724, 39.874698;116.633199, 39.866868;116.619228, 39.856115;116.611039, 39.855961;116.613401, 39.851335;116.608073, 39.846815;116.606644, 39.831094;116.589616, 39.829271;116.584308, 39.836326;116.563702, 39.840778;116.550184, 39.840563;116.547877, 39.835547;116.540075, 39.838702;116.544843, 39.834524;116.541056, 39.829578;116.546729, 39.829532;116.541229, 39.823766;116.545414, 39.820736;116.548019, 39.809831;116.540702, 39.806449;116.543233, 39.802877;116.536327, 39.798533;116.547537, 39.787008;116.537508, 39.78367;116.544078, 39.776178;116.551247, 39.779949;116.554858, 39.775712;116.545704, 39.774366;116.550335, 39.76952;116.547066, 39.767162;116.534219, 39.768421;116.528427, 39.773925;116.529939, 39.766364;116.525359, 39.756949;116.54035, 39.756615;116.534634, 39.7487;116.547755, 39.748454;116.547969, 39.746464;116.546568, 39.74421;116.539627, 39.744757;116.541676, 39.726222;116.535887, 39.726998;116.533708, 39.723595;116.545338, 39.719243;116.55286, 39.72121;116.579596, 39.720216;116.581503, 39.715533;116.607428, 39.715263;116.607379, 39.719882;116.613074, 39.718513;116.612454, 39.724849;116.619619, 39.728867;116.62283, 39.727838;116.625531, 39.732035;116.634223, 39.734718;116.637961, 39.730287;116.645438, 39.730645;116.645859, 39.722983;116.651277, 39.716906;116.660878, 39.713958;116.660465, 39.708853;116.655871, 39.709855;116.652955, 39.705726;116.659802, 39.694028;116.670488, 39.691879;116.676741, 39.693578;116.677234, 39.686566;116.673469, 39.685993;116.673474, 39.683121;116.710236, 39.679719;116.711539, 39.655313;116.719037, 39.642614;116.72791, 39.643192;116.733155, 39.64067;116.729067, 39.629092;116.732272, 39.622677;116.770397, 39.621126;116.781618, 39.611405;116.786732, 39.600158;116.794329, 39.602738;116.792869, 39.609761;116.798272, 39.610925;116.798806, 39.616774;116.835365, 39.623318;116.847796, 39.629981;116.837352, 39.642124;116.837919, 39.648702;116.857622, 39.661133;116.858348, 39.670383;116.862345, 39.673679;116.890055, 39.681869;116.899041, 39.67916;116.913065, 39.682652;116.912129, 39.692889;116.895367, 39.709769;116.889375, 39.722799;116.896226, 39.731878;116.905895, 39.732316;116.918338, 39.737685;116.915713, 39.755851;116.905956, 39.765245;116.917067, 39.769397;116.926504, 39.785708;116.954922, 39.787312;116.958916, 39.788953;116.957802, 39.793369;116.947889, 39.802187;116.942966, 39.801267;116.941163, 39.807497;116.944047, 39.811272;116.934897, 39.8194;116.934864, 39.836027;116.921582, 39.8546;116.914208, 39.858458;116.910419, 39.856768;116.908704, 39.849417;116.914744, 39.836888;116.906097, 39.838156;116.892248, 39.85166;116.865868, 39.864936;116.858785, 39.876295;116.826594, 39.895721;116.810909, 39.894968;116.798184, 39.891052;116.790891, 39.904278;116.787847, 39.924116;116.790425, 39.947352;116.784383, 39.957745;116.785533, 39.962352;116.781118, 39.966493;116.778104, 39.962551;116.768888, 39.965436;116.766651, 39.963757;116.763082, 39.967772;116.774479, 39.991807;116.782163, 39.999264;116.781842, 40.009146;116.778172, 40.013805;116.779789, 40.021726;116.761005, 40.02195;116.749986, 40.033641;116.739235, 40.031379;116.73945, 40.028032;116.731798, 40.029961;116.726535, 40.025537;116.716783, 40.031842;116.704244, 40.0209;116.693816, 40.021922;116.697176, 40.013753;116.693421, 40.013468;116.690688, 40.019563;116.685256, 40.018524;116.684283, 40.020902;116.674995, 40.020772;116.669176, 40.024935;116.664997, 40.023761;116.667654, 40.027436;116.660131, 40.025943;116.656931, 40.032025;116.642838, 40.026007;116.641375, 40.029991;116.634328, 40.026897;116.627814, 40.029076;116.627362, 40.033818;116.623131, 40.033746;116.623686, 40.037569;116.618833, 40.036731;116.612108, 40.024492;116.604209, 40.021835;116.625897, 40.018101;116.634344, 40.014032;116.633144, 40.01246";
                boundary_location['丰台区'] = "116.256504, 39.901832;116.247435, 39.900952;116.240275, 39.897855;116.240775, 39.895463;116.234411, 39.89479;116.234483, 39.889278;116.226217, 39.887366;116.224868, 39.882421;116.217259, 39.884172;116.218901, 39.880592;116.214799, 39.880066;116.206242, 39.889109;116.190577, 39.886765;116.173838, 39.895537;116.169036, 39.893538;116.161725, 39.895637;116.157161, 39.890453;116.146718, 39.890631;116.117558, 39.878682;116.11003, 39.879466;116.107895, 39.873363;116.102273, 39.874836;116.093556, 39.871985;116.084896, 39.876347;116.076807, 39.874628;116.073513, 39.872018;116.076684, 39.859606;116.071776, 39.860556;116.06999, 39.857209;116.066515, 39.85984;116.060452, 39.852314;116.064312, 39.848731;116.078763, 39.844895;116.089112, 39.833674;116.091293, 39.838849;116.090487, 39.832231;116.093187, 39.836506;116.095644, 39.835118;116.0946, 39.82529;116.090663, 39.825264;116.095381, 39.823038;116.091005, 39.818077;116.09173, 39.801737;116.097615, 39.788216;116.107431, 39.78888;116.108873, 39.792459;116.110369, 39.78959;116.110568, 39.792665;116.115718, 39.792642;116.115005, 39.795307;116.121125, 39.795265;116.122399, 39.797641;116.126981, 39.796911;116.127687, 39.791932;116.138923, 39.790363;116.137427, 39.788825;116.141971, 39.78709;116.131317, 39.783576;116.129824, 39.786123;116.123971, 39.780286;116.127152, 39.779628;116.127281, 39.776305;116.124423, 39.777118;116.12792, 39.768454;116.128509, 39.772494;116.131038, 39.768706;116.144619, 39.774184;116.145812, 39.770833;116.153328, 39.77254;116.152942, 39.776116;116.166792, 39.77348;116.172405, 39.780018;116.175093, 39.791002;116.190438, 39.790366;116.190902, 39.786516;116.194623, 39.788074;116.206846, 39.783949;116.208419, 39.805525;116.215719, 39.812206;116.214865, 39.817114;116.222484, 39.822667;116.220145, 39.829412;116.234878, 39.831177;116.247313, 39.821725;116.25883, 39.799165;116.265202, 39.803607;116.268574, 39.799022;116.29357, 39.805137;116.29561, 39.8028;116.300383, 39.80406;116.30255, 39.801777;116.297442, 39.799567;116.299128, 39.79707;116.304814, 39.797705;116.313532, 39.776071;116.316446, 39.775618;116.324301, 39.789189;116.328358, 39.789516;116.329653, 39.803931;116.333171, 39.803811;116.334793, 39.80701;116.346976, 39.807642;116.350569, 39.81346;116.36231, 39.811396;116.363526, 39.806492;116.373788, 39.805579;116.373981, 39.790829;116.385112, 39.791699;116.385589, 39.784822;116.397113, 39.787789;116.398612, 39.771406;116.404908, 39.772039;116.402776, 39.793023;116.426144, 39.793452;116.428264, 39.798983;116.435831, 39.800279;116.435096, 39.80971;116.430595, 39.80969;116.42899, 39.815918;116.424621, 39.81538;116.421719, 39.818672;116.416209, 39.817351;116.416286, 39.8225;116.425879, 39.821073;116.424287, 39.828389;116.420636, 39.830117;116.422414, 39.835591;116.426128, 39.832878;116.431615, 39.838691;116.437902, 39.83852;116.442984, 39.847021;116.447524, 39.845285;116.453684, 39.847044;116.453186, 39.854005;116.46466, 39.856262;116.467119, 39.854165;116.471752, 39.856764;116.472532, 39.861387;116.45754, 39.868812;116.451866, 39.868396;116.450089, 39.878013;116.419873, 39.878168;116.423156, 39.873252;116.420505, 39.865369;116.402273, 39.865175;116.397662, 39.871581;116.387944, 39.87347;116.3877, 39.877337;116.358673, 39.87466;116.356864, 39.879846;116.350725, 39.879437;116.349776, 39.881578;116.327912, 39.880918;116.332493, 39.902619;116.319901, 39.902635;116.310609, 39.898681;116.313912, 39.896884;116.305624, 39.895923;116.302701, 39.892937;116.301619, 39.90306;116.256504, 39.901832";
                boundary_location['房山区'] = "116.131546, 39.768804;116.128509, 39.772494;116.12792, 39.768454;116.124423, 39.777118;116.127281, 39.776305;116.127152, 39.779628;116.123971, 39.780286;116.129824, 39.786123;116.131317, 39.783576;116.141971, 39.78709;116.137819, 39.790999;116.127687, 39.791932;116.126981, 39.796911;116.122399, 39.797641;116.121125, 39.795265;116.115005, 39.795307;116.115718, 39.792642;116.110568, 39.792665;116.110369, 39.78959;116.108873, 39.792459;116.107431, 39.78888;116.097615, 39.788216;116.095629, 39.797104;116.092023, 39.799239;116.091005, 39.818077;116.095381, 39.823038;116.090663, 39.825264;116.0946, 39.82529;116.095644, 39.835118;116.093187, 39.836506;116.090487, 39.832231;116.091293, 39.838849;116.089112, 39.833674;116.078763, 39.844895;116.054574, 39.853172;116.038246, 39.852055;116.024996, 39.84645;116.022505, 39.855664;116.01222, 39.855575;116.007626, 39.850279;115.994371, 39.847549;115.99021, 39.856785;115.995596, 39.867678;115.993512, 39.873087;115.999733, 39.873148;116.003291, 39.881523;115.987263, 39.879812;115.982282, 39.874661;115.976027, 39.875019;115.974349, 39.87821;115.966835, 39.873533;115.960086, 39.873465;115.953852, 39.879176;115.932384, 39.882133;115.929017, 39.892363;115.943066, 39.905376;115.952103, 39.908885;115.948718, 39.923302;115.907931, 39.921095;115.896339, 39.925034;115.882286, 39.92;115.878554, 39.921229;115.872773, 39.910963;115.851834, 39.902862;115.844006, 39.908264;115.83689, 39.909022;115.832261, 39.917719;115.820309, 39.919903;115.813436, 39.92593;115.804268, 39.929135;115.77817, 39.92848;115.774026, 39.931911;115.754994, 39.925561;115.739215, 39.915328;115.696583, 39.909211;115.682465, 39.894561;115.662994, 39.891128;115.643584, 39.878649;115.636125, 39.879196;115.62907, 39.875319;115.600735, 39.829583;115.590698, 39.822091;115.575643, 39.819741;115.57307, 39.811205;115.558665, 39.801297;115.550738, 39.802418;115.519505, 39.794138;115.513357, 39.788984;115.498847, 39.802132;115.490144, 39.804462;115.466597, 39.789538;115.446208, 39.789696;115.443016, 39.782414;115.4537, 39.755596;115.475508, 39.746881;115.489207, 39.748202;115.498946, 39.744467;115.494841, 39.737957;115.498926, 39.707306;115.506367, 39.69717;115.495458, 39.687104;115.49821, 39.674617;115.485294, 39.661638;115.485203, 39.656314;115.513505, 39.65776;115.522393, 39.648146;115.528856, 39.645963;115.525992, 39.618943;115.539326, 39.617612;115.552049, 39.625147;115.575098, 39.604458;115.580881, 39.602542;115.57802, 39.598252;115.592675, 39.595736;115.606081, 39.605443;115.624996, 39.609891;115.640839, 39.603874;115.640124, 39.60979;115.648167, 39.609304;115.650382, 39.605047;115.664199, 39.607415;115.677061, 39.614593;115.687469, 39.602859;115.6977, 39.597042;115.700636, 39.58446;115.698616, 39.572297;115.724345, 39.567191;115.733957, 39.55403;115.744881, 39.549176;115.750469, 39.530171;115.758146, 39.518671;115.769417, 39.52097;115.774597, 39.513389;115.77468, 39.521173;115.803517, 39.516067;115.833646, 39.518631;115.834908, 39.547445;115.852755, 39.549069;115.853237, 39.557078;115.859607, 39.558462;115.872222, 39.553433;115.893877, 39.55684;115.893426, 39.562061;115.89959, 39.562647;115.900299, 39.57279;115.914709, 39.575423;115.918661, 39.579418;115.92096, 39.5894;115.91514, 39.59102;115.913687, 39.602606;115.919764, 39.605797;115.927621, 39.603682;115.927525, 39.600123;115.93517, 39.59979;115.936548, 39.590961;115.950787, 39.582123;115.956732, 39.572271;115.964618, 39.57154;115.983172, 39.576154;115.983491, 39.600071;115.991092, 39.600501;115.998195, 39.599442;115.999942, 39.589146;116.003687, 39.588679;116.001695, 39.582687;116.014635, 39.583917;116.022136, 39.593854;116.043035, 39.57876;116.07333, 39.577713;116.110362, 39.580779;116.111984, 39.576795;116.153802, 39.575452;116.16104, 39.586423;116.200314, 39.588234;116.207352, 39.58384;116.227953, 39.584402;116.233313, 39.599622;116.225057, 39.614221;116.227166, 39.632502;116.222425, 39.647618;116.233061, 39.681297;116.228525, 39.688562;116.235101, 39.695099;116.232517, 39.700565;116.236438, 39.704961;116.236021, 39.713468;116.251844, 39.724818;116.254304, 39.736976;116.250508, 39.747446;116.260067, 39.760394;116.260501, 39.785006;116.25476, 39.811064;116.240731, 39.828792;116.234878, 39.831177;116.220145, 39.829412;116.222484, 39.822667;116.214865, 39.817114;116.215719, 39.812206;116.208419, 39.805525;116.206846, 39.783949;116.194623, 39.788074;116.190902, 39.786516;116.190438, 39.790366;116.175093, 39.791002;116.172405, 39.780018;116.166792, 39.77348;116.152942, 39.776116;116.153328, 39.77254;116.145812, 39.770833;116.144619, 39.774184;116.131546, 39.768804";
                boundary_location['昌平区'] = "116.043258, 40.089675;116.033389, 40.081853;116.02682, 40.080277;116.001932, 40.088976;115.992408, 40.088692;115.97484, 40.081618;115.973831, 40.090033;115.967596, 40.096057;115.920375, 40.125599;115.905487, 40.14388;115.882164, 40.147283;115.871853, 40.154253;115.85953, 40.154518;115.853904, 40.171372;115.864726, 40.189149;115.878734, 40.194056;115.884356, 40.205409;115.893882, 40.212535;115.892296, 40.223584;115.902145, 40.235946;115.908246, 40.239878;115.919047, 40.240327;115.926564, 40.25324;115.94159, 40.260512;115.971144, 40.263233;115.973011, 40.271197;115.984811, 40.277418;115.988311, 40.282046;115.986251, 40.300599;115.990379, 40.304354;115.996673, 40.304969;115.985488, 40.31362;115.98665, 40.325398;115.978166, 40.326034;115.976627, 40.330529;115.98796, 40.339285;115.996511, 40.337566;116.011095, 40.345647;116.017877, 40.340675;116.024781, 40.340555;116.037345, 40.320089;116.043123, 40.318618;116.061806, 40.325915;116.062422, 40.334238;116.067601, 40.341897;116.085308, 40.343125;116.097477, 40.335872;116.116485, 40.336315;116.129719, 40.318978;116.138379, 40.317505;116.148894, 40.32321;116.145414, 40.33686;116.153491, 40.34642;116.156799, 40.36844;116.186527, 40.377666;116.195572, 40.376145;116.222214, 40.388123;116.22965, 40.387562;116.24447, 40.378682;116.253631, 40.384782;116.272443, 40.388741;116.288812, 40.382025;116.297429, 40.389902;116.320167, 40.395379;116.334635, 40.391385;116.351739, 40.379731;116.375575, 40.371055;116.394787, 40.354892;116.40165, 40.342593;116.439556, 40.335508;116.446115, 40.328815;116.452682, 40.328849;116.462086, 40.321332;116.450885, 40.309002;116.463411, 40.292884;116.471532, 40.291271;116.476477, 40.286699;116.485575, 40.285855;116.490521, 40.278348;116.504048, 40.27554;116.510275, 40.267332;116.516648, 40.265234;116.492032, 40.250242;116.492636, 40.235723;116.480641, 40.21907;116.479666, 40.212598;116.494951, 40.198572;116.494975, 40.19016;116.488325, 40.175632;116.49203, 40.174067;116.495128, 40.163026;116.490177, 40.145481;116.49323, 40.126008;116.498313, 40.118057;116.496897, 40.108161;116.487676, 40.10284;116.479824, 40.103072;116.471582, 40.099034;116.473946, 40.091415;116.465687, 40.083437;116.463221, 40.06919;116.4588, 40.066866;116.436707, 40.06697;116.426652, 40.061607;116.415477, 40.061401;116.415985, 40.050376;116.401557, 40.039187;116.374327, 40.056027;116.37362, 40.058123;116.379624, 40.060116;116.378377, 40.064418;116.388802, 40.066891;116.387199, 40.071094;116.381372, 40.070939;116.37564, 40.075909;116.363319, 40.075732;116.353949, 40.070188;116.353981, 40.065761;116.339987, 40.063166;116.337013, 40.059851;116.327238, 40.069784;116.309611, 40.069944;116.308553, 40.067204;116.297311, 40.0881;116.286453, 40.084497;116.279639, 40.097917;116.270681, 40.102392;116.269993, 40.116432;116.264422, 40.115913;116.266349, 40.112112;116.262817, 40.11021;116.249778, 40.110922;116.247174, 40.117633;116.251499, 40.122863;116.250217, 40.140529;116.224103, 40.145473;116.221355, 40.148678;116.217595, 40.146122;116.213871, 40.14765;116.208523, 40.165391;116.19937, 40.165344;116.195117, 40.160732;116.189061, 40.162287;116.185289, 40.151258;116.17468, 40.147992;116.174166, 40.131902;116.149096, 40.128281;116.138556, 40.122514;116.130849, 40.12163;116.121481, 40.121294;116.105308, 40.126089;116.093167, 40.125369;116.083667, 40.120855;116.077186, 40.11168;116.062354, 40.102571;116.054893, 40.091165;116.043258, 40.089675";
                boundary_location['顺义区'] = "116.7564, 40.021932;116.749163, 40.030466;116.72777, 40.027668;116.716118, 40.031819;116.703311, 40.021049;116.671373, 40.020278;116.66627, 40.027292;116.641752, 40.026842;116.628644, 40.029676;116.620818, 40.037865;116.615815, 40.038969;116.610408, 40.034614;116.606772, 40.023184;116.601637, 40.023304;116.553007, 40.054232;116.551894, 40.059593;116.556607, 40.065776;116.54616, 40.075688;116.54353, 40.06989;116.533356, 40.077251;116.518047, 40.077289;116.505752, 40.086116;116.479945, 40.090295;116.474563, 40.094887;116.473194, 40.100468;116.494089, 40.105889;116.498808, 40.115192;116.49323, 40.126008;116.490177, 40.145481;116.495128, 40.163026;116.49203, 40.174067;116.488325, 40.175632;116.494975, 40.19016;116.494951, 40.198572;116.479666, 40.212598;116.480641, 40.21907;116.492636, 40.235723;116.492032, 40.250242;116.498143, 40.255501;116.509374, 40.260031;116.513504, 40.264881;116.531883, 40.267362;116.547355, 40.280353;116.575209, 40.283648;116.594279, 40.277364;116.596313, 40.272772;116.606341, 40.267276;116.612241, 40.255455;116.616926, 40.258362;116.628327, 40.256821;116.633049, 40.26803;116.654837, 40.264361;116.672325, 40.268389;116.679652, 40.253482;116.677288, 40.249329;116.69135, 40.238202;116.695674, 40.244633;116.708257, 40.249715;116.728035, 40.276951;116.741815, 40.285587;116.772966, 40.279112;116.788975, 40.283296;116.795153, 40.294254;116.825973, 40.288838;116.831276, 40.294184;116.835927, 40.310101;116.843262, 40.315376;116.854492, 40.317005;116.864287, 40.297891;116.877538, 40.296817;116.880563, 40.274841;116.898685, 40.250041;116.89881, 40.239855;116.904929, 40.23736;116.908772, 40.230721;116.921096, 40.225928;116.930127, 40.226515;116.938383, 40.236144;116.947429, 40.229107;116.938729, 40.217902;116.941332, 40.207141;116.956166, 40.195096;116.958731, 40.179086;116.979671, 40.163315;116.980099, 40.147825;116.974198, 40.136072;116.978632, 40.131185;116.977538, 40.12178;116.981671, 40.110196;116.978942, 40.102684;116.98543, 40.099628;116.987217, 40.091369;116.983353, 40.088441;116.989638, 40.082949;116.989604, 40.078897;116.977627, 40.069049;116.968096, 40.069019;116.969296, 40.056837;116.962244, 40.054033;116.911776, 40.054211;116.87234, 40.046503;116.854612, 40.057365;116.841761, 40.056106;116.828919, 40.047094;116.822143, 40.037718;116.78478, 40.03688;116.780139, 40.035721;116.782182, 40.028036;116.777413, 40.020343;116.7564, 40.021932;116.582152, 40.088991;116.585272, 40.083954;116.581667, 40.079416;116.584093, 40.071419;116.584325, 40.075094;116.589653, 40.075417;116.590837, 40.059307;116.59547, 40.050483;116.603161, 40.050924;116.601937, 40.059024;116.609, 40.060209;116.610755, 40.055288;116.611581, 40.063005;116.605586, 40.100574;116.601257, 40.109949;116.598415, 40.097015;116.583108, 40.095108;116.581732, 40.107538;116.576139, 40.114216;116.582152, 40.088991";
                boundary_location['大兴区'] = "116.427216, 39.506168;116.423565, 39.498397;116.443715, 39.494768;116.454391, 39.483755;116.461077, 39.459314;116.45876, 39.453338;116.449037, 39.447444;116.438896, 39.446875;116.425962, 39.453909;116.395975, 39.458828;116.380362, 39.458267;116.367919, 39.45421;116.349994, 39.455207;116.33155, 39.469752;116.315295, 39.489351;116.26345, 39.508095;116.25317, 39.522674;116.25263, 39.550753;116.244258, 39.558461;116.242085, 39.56721;116.235353, 39.571404;116.227572, 39.584595;116.233384, 39.59841;116.224637, 39.614871;116.226499, 39.625056;116.223342, 39.645452;116.234695, 39.694268;116.231818, 39.69929;116.235744, 39.703929;116.234718, 39.711761;116.248602, 39.729755;116.251188, 39.750128;116.258462, 39.759385;116.257286, 39.80278;116.267216, 39.801391;116.267818, 39.798164;116.292667, 39.805447;116.312091, 39.778858;116.317014, 39.779695;116.322283, 39.787592;116.328555, 39.803713;116.33624, 39.807402;116.343224, 39.806204;116.3509, 39.812772;116.362271, 39.812077;116.362034, 39.807632;116.375155, 39.806154;116.377241, 39.800682;116.372007, 39.799629;116.3739, 39.791265;116.389653, 39.792451;116.388854, 39.784992;116.396231, 39.78638;116.397547, 39.771661;116.404635, 39.772487;116.401967, 39.793073;116.426115, 39.794037;116.428014, 39.799523;116.435754, 39.800831;116.435673, 39.807688;116.429704, 39.815781;116.423126, 39.817379;116.39805, 39.818163;116.39671, 39.813978;116.386657, 39.811599;116.385893, 39.815124;116.396854, 39.821619;116.394945, 39.823853;116.401249, 39.827913;116.409247, 39.829142;116.419025, 39.821758;116.423854, 39.826679;116.42045, 39.831203;116.422147, 39.835304;116.441988, 39.835735;116.449989, 39.832692;116.451859, 39.826392;116.461995, 39.827179;116.482208, 39.816099;116.492298, 39.819204;116.492618, 39.822996;116.497099, 39.822436;116.497187, 39.824714;116.501791, 39.822277;116.516185, 39.822545;116.52113, 39.834944;116.532722, 39.836217;116.53327, 39.833242;116.541787, 39.831745;116.540724, 39.8274;116.545125, 39.823029;116.544521, 39.81838;116.537773, 39.815432;116.545082, 39.803831;116.538842, 39.801309;116.5415, 39.787374;116.539025, 39.782994;116.548153, 39.769151;116.536851, 39.768045;116.53086, 39.770538;116.529582, 39.759332;116.539093, 39.756959;116.536205, 39.753605;116.537508, 39.747107;116.547707, 39.74058;116.548511, 39.720988;116.575042, 39.719699;116.583947, 39.716756;116.59247, 39.720194;116.600666, 39.718041;116.625752, 39.732241;116.64571, 39.731588;116.646979, 39.718259;116.649882, 39.717074;116.653928, 39.701268;116.656828, 39.700981;116.658064, 39.69417;116.672184, 39.689929;116.672332, 39.68225;116.675679, 39.679729;116.692673, 39.681594;116.709526, 39.678326;116.711689, 39.673409;116.707545, 39.655711;116.714984, 39.648844;116.726844, 39.643817;116.732378, 39.622566;116.714438, 39.620189;116.71637, 39.613995;116.728086, 39.609701;116.710468, 39.599876;116.701745, 39.60451;116.673363, 39.609935;116.63644, 39.606442;116.618944, 39.628629;116.585652, 39.627478;116.577529, 39.621966;116.57452, 39.609939;116.565197, 39.60494;116.554845, 39.603896;116.547581, 39.608086;116.536942, 39.603461;116.531734, 39.587893;116.533441, 39.580088;116.514741, 39.561168;116.507235, 39.562618;116.48695, 39.555863;116.4821, 39.543784;116.469509, 39.538592;116.450737, 39.535575;116.44157, 39.521807;116.433045, 39.523335;116.4275, 39.528935;116.418117, 39.527631;116.411754, 39.520478;116.427216, 39.506168";
                this.boundary_location = boundary_location;
            },
            temHelper: function () {
                //显示2秒隐藏
                var this_ = this;
                $('.tsinfosty').slideDown(1000).delay(1500).slideUp(1000); //一个点击此处的提示

                /**
                 * 地图房源类型选择
                 */
                $('.fangtypebtn').on('click', function () {
                    $('.typelist').slideToggle('slow');
                });
                /**
                 * 地图城市选择
                 */
                $('.header_city a').on('click', function () {
                    $('.cityslist').slideToggle('slow');
                });


                $('.subnav a').on('click', function () {
                    $('#chv').html($(this).html());
                });
                /**
                 * 地图右侧小区周边配套切换
                 */
                $('.tabPanel .clearfixes li').on('click', function () {
                    $('.liebiao').hide(); //隐藏房源列表页
                    $(this).addClass('hit').siblings().removeClass('hit');
                    $('.tabCon>div:eq(' + $(this).index() + ')').show().siblings().hide();
                });

                /**
                 * 右侧弹出层关闭效果,关闭房源列表页
                 */
                $('.qqserver_arrow').on('click', function () {
                    $('.qqserver').removeClass('unfold');
                    $('.qqserver001').removeClass('unfold001');
                    $('#fanhui').click(); //返回小区
                });

                $(document).on('click', '.qqserver_arrow001', function () {
                    $('.qqserver001').removeClass('unfold001');
                });

                /**
                 * 房源详情页
                 */
                $(document).on('click', '.fanglistinfo .xianshiflod', function () {
                    if ($(this).hasClass('exchange')) {
                        var type = 'exchange';
                    } else {
                        var type = 'rent';
                    }
                    $.ajax({
                        url: this_.domainRoot + '/rightHousesDetail',
                        type: 'GET',
                        dataType: 'html',
                        data: {'houseType': type, 'houseid': $(this).attr('id')},
                        beforeSend: function (XMLHttpRequest) {
                            addHouseDetailLoading(); //地图加载中
                        },
                        success: function (data) {
                            $('.qqserver001').addClass('unfold001');
                            $('.qqserver001').html(data);
                        },
                        complete: function (XMLHttpRequest) {
                            removeHouseDetailLoading(); //移除地图加载中
                        },
                        error: function () {
                            alert('附近未找到房源，请重新选择！');
                        }
                    });
                });

                $(document).on('mouseover', '.xianshiflod', function () {
                    $(this).children('li').css('background', '#f7f7f7');
                    $(this).children('li').css('overflow', 'hidden');
                });

                $(document).on('mouseout', '.xianshiflod', function () {
                    $(this).children('li').css('background', '');
                });

                /**
                 * 房源列表页鼠标移过房源添加阴影
                 */
                $(document).on('mouseover mouseout', '.houses_list > li', function (event) {
                    if (event.type == 'mouseover') {
                        $(this).addClass('active');
                    } else if (event.type == 'mouseout') {
                        $(this).removeClass('active');
                    }
                });


                /**
                 * “列表找房”房源列表页跳转
                 */
                $('.r_listbtn').on('click', function () {
                    if (house_type == 'rent') {
                        var url = '/' + house_type;
                    } else {
                        var url = '/exchange';
                    }
                    window.open(url);
                })

            },
            init: function () {
                let options = {
                    x: '116.39147',
                    y: '39.90555',
                    cityName: '北京',
                    dataUrl: 'http://116.62.71.76/',
                    defaultZoom: this.zoomId,
                    mapBoxId: 'map'
                };
                this.YSMap = new YMap(options);
                this.YSMap.loadMap(this.YSMap, this);
            },
            searchDistrict: function (ele, index, e) {
                this.areaTitle = index.title;
                this.YSMap.mapObj.setZoom(15);
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.area.id = $(this).attr('areaid');//选中的区域
                //设置当前城区为中心点.移动完成后加载数据
                this.YSMap.mapObj.panTo(new BMap.Point(index.point.toString().split('|')[0], index.point.toString().split('|')[1]));
                this.move_load = false;
                this.changeToDistrict();
            },
            remoteData:function(paraobj, successcb, errorcb){
                axios.post('/sockjs-node/info',paraobj)
                    .then(function (response) {
                         if(typeof successcb==="function"){
                             successcb(response)
                         }
                    }).catch(function (error) {
                    if(typeof errorcb==="function"){
                        errorcb(error)
                    }
                    });
            },
            zoomendEvent: function () {
                if (!this.only_around) {
                    this.switchOperate();
                }
            },
            moveendEvent: function () {
                if (this.only_around) {
                    return false;
                }
                if (this.YSMap.mapStatu === 'district') {
                    this.changeToDistrict(); //重新加载区域
                } else if (this.YSMap.mapStatu === 'community') {
                    if (this.is_community_load) {
                        this.changeToCommunity(); //重新加载小区
                    }
                }
            },
            removeMapLoading: function () {
                $('#t_L').css('display', 'none');
                $('#t_L').empty();
            },
            addMapLoading: function () {
                var htm = '<div class="loadingsty"><div class="location_indicator"></div><div class="content_loadinfo">努力加载中...</div></div>';
                $('#t_L').html(htm);
                $('#t_L').show();
            },
            removeHouseLoading: function () {
                $('#h_L').css('display', 'none');
                $('#h_L').empty();
            },
            loadScrollbar: function () {
                var $section = $(".scrollbox");
                var $frame = $section, $ul = $frame.find('ul').eq(0);
                var $scrollbar = $section.find('.scrollbar');
                $section.find(".slyWrap").each(function (i, e) {
                    var cont = $(this),
                        frame = cont.find(".sly"),
                        slidee = $section.find("ul"),
                        scrollbar = cont.find(".scrollbar"),
                        options = frame.data("options");

                    options = $.extend({}, options, {
                        scrollBar: scrollbar
                    });
                    frame.sly(options);
                });
            },
            addHouseLoading: function () {
                var htm = '<div ><div class="houseloadings"><div class="circle"></div><div class="housesloadcontents">正在加载房源，请稍候...</div></div></div>'; //房源列表
                $('#h_L').html(htm);
                $('#h_L').show();
            },
            loadArea: function () {
                var paraObj = {
                    type: "all", //返回房源类型 "rent":出租房源 ，“exchange”：二手房 , "all":去全部
                    dataType: "area",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
                    priceClass: 1, //价格区间  1:不限  2：1500-3000元  3:3000-6000，4：6000-12000
                    sizeClass: 1, //面积区间  1:不限  2：50m以下  3:50-70，4：70-90,5:90-110,6:110-130:7:130-150,8:150-200,9:200以上
                    roomType: 0, //房屋布局   1.一居 ,2二局, 3，三居 ,4. 四局 ....... 6.6居， 7.6居以上
                    featureType: 0, //不限   1.拎包入住 ,可短租, 3，免佣 ,4. 单身公寓5.随时看房 6.注册办公， 7.新上房源
                    zoom: 12  //这个是附带给你的，前端要用，传给你什么你就返回什么
                }, this_ = this;

                var successCb = function(data){
                    this_.removeMapLoading(); //移除地图加载中
                    var testData = {
                        "houses": [{
                            "exchangeNumber": 7730,
                            "rentNumber": 1844,
                            "countNumber": 9574,
                            "title": "\u671d\u9633",
                            "point": "116.49674|39.93258",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "6"
                        }, {
                            "exchangeNumber": 4240,
                            "rentNumber": 1047,
                            "countNumber": 5287,
                            "title": "\u6d77\u6dc0",
                            "point": "116.32949|39.99316",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "5"
                        }, {
                            "exchangeNumber": 3348,
                            "rentNumber": 780,
                            "countNumber": 4128,
                            "title": "\u4e30\u53f0",
                            "point": "116.30185|39.84615",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "7"
                        }, {
                            "exchangeNumber": 1322,
                            "rentNumber": 636,
                            "countNumber": 1958,
                            "title": "\u4e1c\u57ce",
                            "point": "116.41493|39.9272",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1"
                        }, {
                            "exchangeNumber": 2197,
                            "rentNumber": 743,
                            "countNumber": 2940,
                            "title": "\u897f\u57ce",
                            "point": "116.37855|39.91649",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "2"
                        }, {
                            "exchangeNumber": 760,
                            "rentNumber": 59,
                            "countNumber": 819,
                            "title": "\u77f3\u666f\u5c71",
                            "point": "116.22789|39.90617",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "8"
                        }, {
                            "exchangeNumber": 1950,
                            "rentNumber": 680,
                            "countNumber": 2630,
                            "title": "\u5927\u5174",
                            "point": "116.35355|39.73293",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "990"
                        }, {
                            "exchangeNumber": 1805,
                            "rentNumber": 700,
                            "countNumber": 2505,
                            "title": "\u901a\u5dde",
                            "point": "116.66406|39.91199",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "970"
                        }, {
                            "exchangeNumber": 1012,
                            "rentNumber": 367,
                            "countNumber": 1379,
                            "title": "\u987a\u4e49",
                            "point": "116.65839|40.13294",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1010"
                        }, {
                            "exchangeNumber": 2334,
                            "rentNumber": 529,
                            "countNumber": 2863,
                            "title": "\u660c\u5e73",
                            "point": "116.2405|40.22647",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "21"
                        }, {
                            "exchangeNumber": 2607,
                            "rentNumber": 659,
                            "countNumber": 3266,
                            "title": "\u623f\u5c71",
                            "point": "116.15337|39.74106",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1030"
                        }], "zoom": "12"
                    };
                    var data = testData;
                    this_.district = data.houses;
                    if (data.houses.length > 0) {
                        this_.YSMap.mapObj.clearOverlays();
                        this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                    } else {
                         alert('附近未找到房源，请重新选择！');
                    }
                };
                var errorCb = function(data){
                    this_.removeMapLoading(); //移除地图加载中
                    var testData = {
                        "houses": [{
                            "exchangeNumber": 7730,
                            "rentNumber": 1844,
                            "countNumber": 9574,
                            "title": "\u671d\u9633",
                            "point": "116.49674|39.93258",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "6"
                        }, {
                            "exchangeNumber": 4240,
                            "rentNumber": 1047,
                            "countNumber": 5287,
                            "title": "\u6d77\u6dc0",
                            "point": "116.32949|39.99316",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "5"
                        }, {
                            "exchangeNumber": 3348,
                            "rentNumber": 780,
                            "countNumber": 4128,
                            "title": "\u4e30\u53f0",
                            "point": "116.30185|39.84615",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "7"
                        }, {
                            "exchangeNumber": 1322,
                            "rentNumber": 636,
                            "countNumber": 1958,
                            "title": "\u4e1c\u57ce",
                            "point": "116.41493|39.9272",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1"
                        }, {
                            "exchangeNumber": 2197,
                            "rentNumber": 743,
                            "countNumber": 2940,
                            "title": "\u897f\u57ce",
                            "point": "116.37855|39.91649",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "2"
                        }, {
                            "exchangeNumber": 760,
                            "rentNumber": 59,
                            "countNumber": 819,
                            "title": "\u77f3\u666f\u5c71",
                            "point": "116.22789|39.90617",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "8"
                        }, {
                            "exchangeNumber": 1950,
                            "rentNumber": 680,
                            "countNumber": 2630,
                            "title": "\u5927\u5174",
                            "point": "116.35355|39.73293",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "990"
                        }, {
                            "exchangeNumber": 1805,
                            "rentNumber": 700,
                            "countNumber": 2505,
                            "title": "\u901a\u5dde",
                            "point": "116.66406|39.91199",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "970"
                        }, {
                            "exchangeNumber": 1012,
                            "rentNumber": 367,
                            "countNumber": 1379,
                            "title": "\u987a\u4e49",
                            "point": "116.65839|40.13294",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1010"
                        }, {
                            "exchangeNumber": 2334,
                            "rentNumber": 529,
                            "countNumber": 2863,
                            "title": "\u660c\u5e73",
                            "point": "116.2405|40.22647",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "21"
                        }, {
                            "exchangeNumber": 2607,
                            "rentNumber": 659,
                            "countNumber": 3266,
                            "title": "\u623f\u5c71",
                            "point": "116.15337|39.74106",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": "1030"
                        }], "zoom": "12"
                    };
                    var data = testData;
                    this_.district = data.houses;
                    if (data.houses.length > 0) {
                        this_.YSMap.mapObj.clearOverlays();
                        this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                    } else {
                        alert('附近未找到房源，请重新选择！');
                    }
                };
                this_.addMapLoading(); //地图加载中
                this.remoteData(paraObj, successCb ,errorCb);
                },
            loadDistrict: function () {
                this.YSMap.resetCondition();
                  var paraObj = {
                      type: "all", //返回房源类型 "rent":出租房源 ，“exchange”：二手房 , "all":去全部
                      dataType: "district",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
                      priceClass: 1, //价格区间  1:不限  2：1500-3000元  3:3000-6000，4：6000-12000
                      sizeClass: 1, //面积区间  1:不限  2：50m以下  3:50-70，4：70-90,5:90-110,6:110-130:7:130-150,8:150-200,9:200以上
                      roomType: 0, //房屋布局   1.一居 ,2二局, 3，三居 ,4. 四局 ....... 6.6居， 7.6居以上
                      featureType: 0, //不限   1.拎包入住 ,可短租, 3，免佣 ,4. 单身公寓5.随时看房 6.注册办公， 7.新上房源
                      areaId:8, //该区域的id
                      zoom:15   //需要返回数据时携带的地图级别数字
                  }, this_ = this;
                  var successCb = function(data){
                      this.YSMap.area.id = ''; //重置区域id
                      this_.removeMapLoading(); //移除地图加载中
                      var testData = {
                          "houses": [{
                              "exchangeNumber": 162,
                              "rentNumber": 30,
                              "countNumber": 192,
                              "title": "\u5c0f\u897f\u5929",
                              "point": "116.368076|39.95832",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36822"
                          }, {
                              "exchangeNumber": 131,
                              "rentNumber": 16,
                              "countNumber": 147,
                              "title": "\u7261\u4e39\u56ed",
                              "point": "116.377519|39.984108",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36829"
                          }, {
                              "exchangeNumber": 46,
                              "rentNumber": 11,
                              "countNumber": 57,
                              "title": "\u9b4f\u516c\u6751",
                              "point": "116.329874|39.963457",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36831"
                          }, {
                              "exchangeNumber": 7,
                              "rentNumber": 0,
                              "countNumber": 7,
                              "title": "\u5927\u949f\u5bfa",
                              "point": "116.35182|39.972034",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36832"
                          }, {
                              "exchangeNumber": 140,
                              "rentNumber": 12,
                              "countNumber": 152,
                              "title": "\u53cc\u6986\u6811",
                              "point": "116.332532|39.975438",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36835"
                          }, {
                              "exchangeNumber": 53,
                              "rentNumber": 28,
                              "countNumber": 81,
                              "title": "\u84df\u95e8\u6865",
                              "point": "116.360616|39.97343",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36836"
                          }, {
                              "exchangeNumber": 114,
                              "rentNumber": 99,
                              "countNumber": 213,
                              "title": "\u77e5\u6625\u8def",
                              "point": "116.347619|39.982065",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36837"
                          }, {
                              "exchangeNumber": 155,
                              "rentNumber": 29,
                              "countNumber": 184,
                              "title": "\u4e94\u9053\u53e3",
                              "point": "116.344434|39.998568",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36839"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 11,
                              "countNumber": 27,
                              "title": "\u6e05\u534e\u5927\u5b66",
                              "point": "116.328215|40.002743",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36844"
                          }, {
                              "exchangeNumber": 260,
                              "rentNumber": 47,
                              "countNumber": 307,
                              "title": "\u4e2d\u5173\u6751",
                              "point": "116.323066|39.989956",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36845"
                          }, {
                              "exchangeNumber": 9,
                              "rentNumber": 3,
                              "countNumber": 12,
                              "title": "\u5706\u660e\u56ed",
                              "point": "116.315938|40.005466",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36847"
                          }, {
                              "exchangeNumber": 84,
                              "rentNumber": 33,
                              "countNumber": 117,
                              "title": "\u9a6c\u8fde\u6d3c",
                              "point": "116.293821|40.037015",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36853"
                          }, {
                              "exchangeNumber": 161,
                              "rentNumber": 64,
                              "countNumber": 225,
                              "title": "\u4e0a\u5730",
                              "point": "116.326836|40.038699",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36854"
                          }, {
                              "exchangeNumber": 81,
                              "rentNumber": 30,
                              "countNumber": 111,
                              "title": "\u897f\u4e8c\u65d7",
                              "point": "116.312615|40.058922",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36857"
                          }, {
                              "exchangeNumber": 443,
                              "rentNumber": 161,
                              "countNumber": 604,
                              "title": "\u6e05\u6cb3",
                              "point": "116.352635|40.037695",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36858"
                          }, {
                              "exchangeNumber": 328,
                              "rentNumber": 51,
                              "countNumber": 379,
                              "title": "\u897f\u4e09\u65d7",
                              "point": "116.350151|40.064627",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36859"
                          }, {
                              "exchangeNumber": 95,
                              "rentNumber": 21,
                              "countNumber": 116,
                              "title": "\u519b\u535a",
                              "point": "116.327535|39.916877",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36986"
                          }, {
                              "exchangeNumber": 14,
                              "rentNumber": 13,
                              "countNumber": 27,
                              "title": "\u589e\u5149\u8def",
                              "point": "116.325905|39.933925",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36988"
                          }, {
                              "exchangeNumber": 159,
                              "rentNumber": 21,
                              "countNumber": 180,
                              "title": "\u516c\u4e3b\u575f",
                              "point": "116.316785|39.913508",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36991"
                          }, {
                              "exchangeNumber": 140,
                              "rentNumber": 15,
                              "countNumber": 155,
                              "title": "\u4e94\u68f5\u677e",
                              "point": "116.280423|39.913833",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36994"
                          }, {
                              "exchangeNumber": 21,
                              "rentNumber": 1,
                              "countNumber": 22,
                              "title": "\u4e07\u5bff\u8def",
                              "point": "116.30155|39.91371",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36996"
                          }, {
                              "exchangeNumber": 148,
                              "rentNumber": 17,
                              "countNumber": 165,
                              "title": "\u5b9a\u6167\u5bfa",
                              "point": "116.285343|39.930302",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36997"
                          }, {
                              "exchangeNumber": 152,
                              "rentNumber": 39,
                              "countNumber": 191,
                              "title": "\u7d2b\u7af9\u6865",
                              "point": "116.316575|39.948253",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36999"
                          }, {
                              "exchangeNumber": 22,
                              "rentNumber": 16,
                              "countNumber": 38,
                              "title": "\u5382\u6d3c",
                              "point": "116.310421|39.96023",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37000"
                          }, {
                              "exchangeNumber": 3,
                              "rentNumber": 2,
                              "countNumber": 5,
                              "title": "\u9890\u548c\u56ed",
                              "point": "116.276887|39.999496",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37003"
                          }, {
                              "exchangeNumber": 2,
                              "rentNumber": 0,
                              "countNumber": 2,
                              "title": "\u9999\u5c71",
                              "point": "116.212226|39.999167",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37005"
                          }, {
                              "exchangeNumber": 14,
                              "rentNumber": 0,
                              "countNumber": 14,
                              "title": "\u897f\u5317\u65fa",
                              "point": "116.2675|40.05182",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37007"
                          }, {
                              "exchangeNumber": 19,
                              "rentNumber": 8,
                              "countNumber": 27,
                              "title": "\u7530\u6751",
                              "point": "116.265205|39.935633",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37031"
                          }, {
                              "exchangeNumber": 127,
                              "rentNumber": 14,
                              "countNumber": 141,
                              "title": "\u7389\u6cc9\u8def",
                              "point": "116.25947|39.913501",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37093"
                          }, {
                              "exchangeNumber": 82,
                              "rentNumber": 33,
                              "countNumber": 115,
                              "title": "\u4e8c\u91cc\u5e84",
                              "point": "116.371336|40.005488",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "42731"
                          }, {
                              "exchangeNumber": 45,
                              "rentNumber": 7,
                              "countNumber": 52,
                              "title": "\u767d\u77f3\u6865",
                              "point": "116.332443|39.95194",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "42770"
                          }, {
                              "exchangeNumber": 135,
                              "rentNumber": 15,
                              "countNumber": 150,
                              "title": "\u5b66\u9662\u8def",
                              "point": "116.359952|39.994998",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "43130"
                          }, {
                              "exchangeNumber": 45,
                              "rentNumber": 25,
                              "countNumber": 70,
                              "title": "\u822a\u5929\u6865",
                              "point": "116.316613|39.930025",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45297"
                          }, {
                              "exchangeNumber": 75,
                              "rentNumber": 14,
                              "countNumber": 89,
                              "title": "\u4e16\u7eaa\u57ce",
                              "point": "116.291111|39.965386",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45308"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 0,
                              "countNumber": 16,
                              "title": "\u8f66\u9053\u6c9f",
                              "point": "116.300274|39.954895",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45323"
                          }, {
                              "exchangeNumber": 76,
                              "rentNumber": 21,
                              "countNumber": 97,
                              "title": "\u82cf\u5dde\u6865",
                              "point": "116.314851|39.967431",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48533"
                          }, {
                              "exchangeNumber": 33,
                              "rentNumber": 3,
                              "countNumber": 36,
                              "title": "\u82b1\u56ed\u6865",
                              "point": "116.317559|39.938382",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48551"
                          }, {
                              "exchangeNumber": 54,
                              "rentNumber": 5,
                              "countNumber": 59,
                              "title": "\u7682\u541b\u5e99",
                              "point": "116.3453|39.965785",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48871"
                          }, {
                              "exchangeNumber": 69,
                              "rentNumber": 8,
                              "countNumber": 77,
                              "title": "\u6c38\u5b9a\u8def",
                              "point": "116.271122|39.919568",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "49031"
                          }, {
                              "exchangeNumber": 6,
                              "rentNumber": 1,
                              "countNumber": 7,
                              "title": "\u5317\u4eac\u5927\u5b66",
                              "point": "116.316176|39.997741",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000018"
                          }, {
                              "exchangeNumber": 58,
                              "rentNumber": 10,
                              "countNumber": 68,
                              "title": "\u5317\u592a\u5e73\u5e84",
                              "point": "116.375658|39.97332",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000020"
                          }, {
                              "exchangeNumber": 9,
                              "rentNumber": 7,
                              "countNumber": 16,
                              "title": "\u4eba\u6c11\u5927\u5b66",
                              "point": "116.321716|39.976119",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000095"
                          }, {
                              "exchangeNumber": 99,
                              "rentNumber": 27,
                              "countNumber": 126,
                              "title": "\u56db\u5b63\u9752",
                              "point": "116.273605|39.954912",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000109"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 3,
                              "countNumber": 19,
                              "title": "\u82cf\u5dde\u8857",
                              "point": "116.312768|39.981704",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000110"
                          }, {
                              "exchangeNumber": 54,
                              "rentNumber": 41,
                              "countNumber": 95,
                              "title": "\u4e07\u67f3",
                              "point": "116.305662|39.972746",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000116"
                          }, {
                              "exchangeNumber": 101,
                              "rentNumber": 16,
                              "countNumber": 117,
                              "title": "\u4e07\u6cc9\u6cb3",
                              "point": "116.307151|39.991264",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000117"
                          }, {
                              "exchangeNumber": 6,
                              "rentNumber": 0,
                              "countNumber": 6,
                              "title": "\u897f\u5c71",
                              "point": "116.143568|39.964431",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000123"
                          }, {
                              "exchangeNumber": 91,
                              "rentNumber": 16,
                              "countNumber": 107,
                              "title": "\u897f\u76f4\u95e8\u5916",
                              "point": "116.361442|39.946436",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000126"
                          }, {
                              "exchangeNumber": 21,
                              "rentNumber": 0,
                              "countNumber": 21,
                              "title": "\u5b66\u9662\u5357\u8def",
                              "point": "1163.77382|39.96403",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "100000047"
                          }, {
                              "exchangeNumber": 43,
                              "rentNumber": 3,
                              "countNumber": 46,
                              "title": "\u5927\u6167\u5bfa",
                              "point": "116.33419|39.9575",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "100000594"
                          }], "zoom": "15"
                      }
                      var data = testData;
                      this_.district = data.houses;
                      if (data.houses.length > 0) {
                          this_.YSMap.mapObj.clearOverlays();
                          this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                      } else {
                          alert('附近未找到房源，请重新选择！');
                      }
                  };
                  var errorCb = function(data){
                      this_.removeMapLoading(); //移除地图加载中
                      var testData = {
                          "houses": [{
                              "exchangeNumber": 162,
                              "rentNumber": 30,
                              "countNumber": 192,
                              "title": "\u5c0f\u897f\u5929",
                              "point": "116.368076|39.95832",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36822"
                          }, {
                              "exchangeNumber": 131,
                              "rentNumber": 16,
                              "countNumber": 147,
                              "title": "\u7261\u4e39\u56ed",
                              "point": "116.377519|39.984108",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36829"
                          }, {
                              "exchangeNumber": 46,
                              "rentNumber": 11,
                              "countNumber": 57,
                              "title": "\u9b4f\u516c\u6751",
                              "point": "116.329874|39.963457",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36831"
                          }, {
                              "exchangeNumber": 7,
                              "rentNumber": 0,
                              "countNumber": 7,
                              "title": "\u5927\u949f\u5bfa",
                              "point": "116.35182|39.972034",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36832"
                          }, {
                              "exchangeNumber": 140,
                              "rentNumber": 12,
                              "countNumber": 152,
                              "title": "\u53cc\u6986\u6811",
                              "point": "116.332532|39.975438",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36835"
                          }, {
                              "exchangeNumber": 53,
                              "rentNumber": 28,
                              "countNumber": 81,
                              "title": "\u84df\u95e8\u6865",
                              "point": "116.360616|39.97343",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36836"
                          }, {
                              "exchangeNumber": 114,
                              "rentNumber": 99,
                              "countNumber": 213,
                              "title": "\u77e5\u6625\u8def",
                              "point": "116.347619|39.982065",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36837"
                          }, {
                              "exchangeNumber": 155,
                              "rentNumber": 29,
                              "countNumber": 184,
                              "title": "\u4e94\u9053\u53e3",
                              "point": "116.344434|39.998568",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36839"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 11,
                              "countNumber": 27,
                              "title": "\u6e05\u534e\u5927\u5b66",
                              "point": "116.328215|40.002743",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36844"
                          }, {
                              "exchangeNumber": 260,
                              "rentNumber": 47,
                              "countNumber": 307,
                              "title": "\u4e2d\u5173\u6751",
                              "point": "116.323066|39.989956",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36845"
                          }, {
                              "exchangeNumber": 9,
                              "rentNumber": 3,
                              "countNumber": 12,
                              "title": "\u5706\u660e\u56ed",
                              "point": "116.315938|40.005466",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36847"
                          }, {
                              "exchangeNumber": 84,
                              "rentNumber": 33,
                              "countNumber": 117,
                              "title": "\u9a6c\u8fde\u6d3c",
                              "point": "116.293821|40.037015",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36853"
                          }, {
                              "exchangeNumber": 161,
                              "rentNumber": 64,
                              "countNumber": 225,
                              "title": "\u4e0a\u5730",
                              "point": "116.326836|40.038699",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36854"
                          }, {
                              "exchangeNumber": 81,
                              "rentNumber": 30,
                              "countNumber": 111,
                              "title": "\u897f\u4e8c\u65d7",
                              "point": "116.312615|40.058922",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36857"
                          }, {
                              "exchangeNumber": 443,
                              "rentNumber": 161,
                              "countNumber": 604,
                              "title": "\u6e05\u6cb3",
                              "point": "116.352635|40.037695",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36858"
                          }, {
                              "exchangeNumber": 328,
                              "rentNumber": 51,
                              "countNumber": 379,
                              "title": "\u897f\u4e09\u65d7",
                              "point": "116.350151|40.064627",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36859"
                          }, {
                              "exchangeNumber": 95,
                              "rentNumber": 21,
                              "countNumber": 116,
                              "title": "\u519b\u535a",
                              "point": "116.327535|39.916877",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36986"
                          }, {
                              "exchangeNumber": 14,
                              "rentNumber": 13,
                              "countNumber": 27,
                              "title": "\u589e\u5149\u8def",
                              "point": "116.325905|39.933925",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36988"
                          }, {
                              "exchangeNumber": 159,
                              "rentNumber": 21,
                              "countNumber": 180,
                              "title": "\u516c\u4e3b\u575f",
                              "point": "116.316785|39.913508",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36991"
                          }, {
                              "exchangeNumber": 140,
                              "rentNumber": 15,
                              "countNumber": 155,
                              "title": "\u4e94\u68f5\u677e",
                              "point": "116.280423|39.913833",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36994"
                          }, {
                              "exchangeNumber": 21,
                              "rentNumber": 1,
                              "countNumber": 22,
                              "title": "\u4e07\u5bff\u8def",
                              "point": "116.30155|39.91371",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36996"
                          }, {
                              "exchangeNumber": 148,
                              "rentNumber": 17,
                              "countNumber": 165,
                              "title": "\u5b9a\u6167\u5bfa",
                              "point": "116.285343|39.930302",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36997"
                          }, {
                              "exchangeNumber": 152,
                              "rentNumber": 39,
                              "countNumber": 191,
                              "title": "\u7d2b\u7af9\u6865",
                              "point": "116.316575|39.948253",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "36999"
                          }, {
                              "exchangeNumber": 22,
                              "rentNumber": 16,
                              "countNumber": 38,
                              "title": "\u5382\u6d3c",
                              "point": "116.310421|39.96023",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37000"
                          }, {
                              "exchangeNumber": 3,
                              "rentNumber": 2,
                              "countNumber": 5,
                              "title": "\u9890\u548c\u56ed",
                              "point": "116.276887|39.999496",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37003"
                          }, {
                              "exchangeNumber": 2,
                              "rentNumber": 0,
                              "countNumber": 2,
                              "title": "\u9999\u5c71",
                              "point": "116.212226|39.999167",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37005"
                          }, {
                              "exchangeNumber": 14,
                              "rentNumber": 0,
                              "countNumber": 14,
                              "title": "\u897f\u5317\u65fa",
                              "point": "116.2675|40.05182",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37007"
                          }, {
                              "exchangeNumber": 19,
                              "rentNumber": 8,
                              "countNumber": 27,
                              "title": "\u7530\u6751",
                              "point": "116.265205|39.935633",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37031"
                          }, {
                              "exchangeNumber": 127,
                              "rentNumber": 14,
                              "countNumber": 141,
                              "title": "\u7389\u6cc9\u8def",
                              "point": "116.25947|39.913501",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "37093"
                          }, {
                              "exchangeNumber": 82,
                              "rentNumber": 33,
                              "countNumber": 115,
                              "title": "\u4e8c\u91cc\u5e84",
                              "point": "116.371336|40.005488",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "42731"
                          }, {
                              "exchangeNumber": 45,
                              "rentNumber": 7,
                              "countNumber": 52,
                              "title": "\u767d\u77f3\u6865",
                              "point": "116.332443|39.95194",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "42770"
                          }, {
                              "exchangeNumber": 135,
                              "rentNumber": 15,
                              "countNumber": 150,
                              "title": "\u5b66\u9662\u8def",
                              "point": "116.359952|39.994998",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "43130"
                          }, {
                              "exchangeNumber": 45,
                              "rentNumber": 25,
                              "countNumber": 70,
                              "title": "\u822a\u5929\u6865",
                              "point": "116.316613|39.930025",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45297"
                          }, {
                              "exchangeNumber": 75,
                              "rentNumber": 14,
                              "countNumber": 89,
                              "title": "\u4e16\u7eaa\u57ce",
                              "point": "116.291111|39.965386",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45308"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 0,
                              "countNumber": 16,
                              "title": "\u8f66\u9053\u6c9f",
                              "point": "116.300274|39.954895",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "45323"
                          }, {
                              "exchangeNumber": 76,
                              "rentNumber": 21,
                              "countNumber": 97,
                              "title": "\u82cf\u5dde\u6865",
                              "point": "116.314851|39.967431",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48533"
                          }, {
                              "exchangeNumber": 33,
                              "rentNumber": 3,
                              "countNumber": 36,
                              "title": "\u82b1\u56ed\u6865",
                              "point": "116.317559|39.938382",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48551"
                          }, {
                              "exchangeNumber": 54,
                              "rentNumber": 5,
                              "countNumber": 59,
                              "title": "\u7682\u541b\u5e99",
                              "point": "116.3453|39.965785",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "48871"
                          }, {
                              "exchangeNumber": 69,
                              "rentNumber": 8,
                              "countNumber": 77,
                              "title": "\u6c38\u5b9a\u8def",
                              "point": "116.271122|39.919568",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "49031"
                          }, {
                              "exchangeNumber": 6,
                              "rentNumber": 1,
                              "countNumber": 7,
                              "title": "\u5317\u4eac\u5927\u5b66",
                              "point": "116.316176|39.997741",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000018"
                          }, {
                              "exchangeNumber": 58,
                              "rentNumber": 10,
                              "countNumber": 68,
                              "title": "\u5317\u592a\u5e73\u5e84",
                              "point": "116.375658|39.97332",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000020"
                          }, {
                              "exchangeNumber": 9,
                              "rentNumber": 7,
                              "countNumber": 16,
                              "title": "\u4eba\u6c11\u5927\u5b66",
                              "point": "116.321716|39.976119",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000095"
                          }, {
                              "exchangeNumber": 99,
                              "rentNumber": 27,
                              "countNumber": 126,
                              "title": "\u56db\u5b63\u9752",
                              "point": "116.273605|39.954912",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000109"
                          }, {
                              "exchangeNumber": 16,
                              "rentNumber": 3,
                              "countNumber": 19,
                              "title": "\u82cf\u5dde\u8857",
                              "point": "116.312768|39.981704",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000110"
                          }, {
                              "exchangeNumber": 54,
                              "rentNumber": 41,
                              "countNumber": 95,
                              "title": "\u4e07\u67f3",
                              "point": "116.305662|39.972746",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000116"
                          }, {
                              "exchangeNumber": 101,
                              "rentNumber": 16,
                              "countNumber": 117,
                              "title": "\u4e07\u6cc9\u6cb3",
                              "point": "116.307151|39.991264",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000117"
                          }, {
                              "exchangeNumber": 6,
                              "rentNumber": 0,
                              "countNumber": 6,
                              "title": "\u897f\u5c71",
                              "point": "116.143568|39.964431",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000123"
                          }, {
                              "exchangeNumber": 91,
                              "rentNumber": 16,
                              "countNumber": 107,
                              "title": "\u897f\u76f4\u95e8\u5916",
                              "point": "116.361442|39.946436",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "10000126"
                          }, {
                              "exchangeNumber": 21,
                              "rentNumber": 0,
                              "countNumber": 21,
                              "title": "\u5b66\u9662\u5357\u8def",
                              "point": "1163.77382|39.96403",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "100000047"
                          }, {
                              "exchangeNumber": 43,
                              "rentNumber": 3,
                              "countNumber": 46,
                              "title": "\u5927\u6167\u5bfa",
                              "point": "116.33419|39.9575",
                              "isOpen": 0,
                              "icon": "w:20,h:29",
                              "type": 2,
                              "id": "100000594"
                          }], "zoom": "15"
                      }
                      var data = testData;
                      this_.district = data.houses;
                      if (data.houses.length > 0) {
                          this_.YSMap.mapObj.clearOverlays();
                          this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                      } else {
                          alert('附近未找到房源，请重新选择！');
                      }
                  };
                  this_.addMapLoading(); //地图加载中
                  this.remoteData(paraObj, successCb ,errorCb);
            },
            loadCommunity: function () {
                var this_ = this;
                this.YSMap.resetCondition();
                var paraObj = {
                    type: "all", //返回房源类型 "rent":出租房源 ，“exchange”：二手房 , "all":去全部
                    dataType: "community",  //返回房源在什么尺度下  "area":行政区域下 ，“district”：商圈 , "community":楼栋
                    priceClass: 1, //价格区间  1:不限  2：1500-3000元  3:3000-6000，4：6000-12000
                    sizeClass: 1, //面积区间  1:不限  2：50m以下  3:50-70，4：70-90,5:90-110,6:110-130:7:130-150,8:150-200,9:200以上
                    roomType: 0, //房屋布局   1.一居 ,2二局, 3，三居 ,4. 四局 ....... 6.6居， 7.6居以上
                    featureType: 0, //不限   1.拎包入住 ,可短租, 3，免佣 ,4. 单身公寓5.随时看房 6.注册办公， 7.新上房源
                    districtId:8, //该区域的id
                    zoom:17
                }
                var successCb = function(data){
                    this.YSMap.area.id = ''; //重置区域id
                    this_.removeMapLoading(); //移除地图加载中
                    var testData = {
                        "houses": [{
                            "exchangeNumber": 2,
                            "rentNumber": 1,
                            "countNumber": 3,
                            "title": "\u4e94\u9053\u53e3\u5609\u56ed",
                            "price": 84860,
                            "point": "116.34597|39.99573",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 235540
                        }, {
                            "exchangeNumber": 8,
                            "rentNumber": 14,
                            "countNumber": 22,
                            "title": "\u5510\u5b81ONE",
                            "price": 118454,
                            "point": "116.34181|39.99431",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 111480
                        }, {
                            "exchangeNumber": 13,
                            "rentNumber": 0,
                            "countNumber": 13,
                            "title": "\u6d77\u6dc0\u8def\u5c0f\u533a",
                            "price": 104479,
                            "point": "116.3192|39.99197",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 50886
                        }, {
                            "exchangeNumber": 2,
                            "rentNumber": 0,
                            "countNumber": 2,
                            "title": "\u71d5\u5f52\u56ed",
                            "price": 133045,
                            "point": "116.33816|39.99534",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 12556
                        }, {
                            "exchangeNumber": 11,
                            "rentNumber": 0,
                            "countNumber": 11,
                            "title": "\u79d1\u6c47\u5c0f\u533a",
                            "price": 128458,
                            "point": "116.3344|39.99305",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 6978
                        }, {
                            "exchangeNumber": 4,
                            "rentNumber": 0,
                            "countNumber": 4,
                            "title": "\u8d22\u667a\u5927\u53a6",
                            "price": 48623,
                            "point": "116.34047|39.99378",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 1052
                        }, {
                            "exchangeNumber": 0,
                            "rentNumber": 1,
                            "countNumber": 1,
                            "title": "\u4e2d\u6210\u5927\u53a6",
                            "price": 46620,
                            "point": "116.31712|39.9922",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 50667
                        }], "zoom": "17"
                    }
                    var data = testData;
                    if (data.houses != null) {
                        this_.YSMap.mapObj.clearOverlays();
                        this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                    } else {
                        //is_community_load=false;
                        $('.qqserver_arrow').click(); //关闭已经打开的小区列表
                        //alert('附近未找到房源，请重新选择！');
                        this_.removeMapLoading(); //移除地图加载中
                        return false;
                    }
                };
                var errorCb = function(data){
                    this_.removeMapLoading(); //移除地图加载中
                    //alert('附近未找到房源，请重新选择！');
                    var testData = {
                        "houses": [{
                            "exchangeNumber": 2,
                            "rentNumber": 1,
                            "countNumber": 3,
                            "title": "\u4e94\u9053\u53e3\u5609\u56ed",
                            "price": 84860,
                            "point": "116.34597|39.99573",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 235540
                        }, {
                            "exchangeNumber": 8,
                            "rentNumber": 14,
                            "countNumber": 22,
                            "title": "\u5510\u5b81ONE",
                            "price": 118454,
                            "point": "116.34181|39.99431",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 111480
                        }, {
                            "exchangeNumber": 13,
                            "rentNumber": 0,
                            "countNumber": 13,
                            "title": "\u6d77\u6dc0\u8def\u5c0f\u533a",
                            "price": 104479,
                            "point": "116.3192|39.99197",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 50886
                        }, {
                            "exchangeNumber": 2,
                            "rentNumber": 0,
                            "countNumber": 2,
                            "title": "\u71d5\u5f52\u56ed",
                            "price": 133045,
                            "point": "116.33816|39.99534",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 12556
                        }, {
                            "exchangeNumber": 11,
                            "rentNumber": 0,
                            "countNumber": 11,
                            "title": "\u79d1\u6c47\u5c0f\u533a",
                            "price": 128458,
                            "point": "116.3344|39.99305",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 6978
                        }, {
                            "exchangeNumber": 4,
                            "rentNumber": 0,
                            "countNumber": 4,
                            "title": "\u8d22\u667a\u5927\u53a6",
                            "price": 48623,
                            "point": "116.34047|39.99378",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 1052
                        }, {
                            "exchangeNumber": 0,
                            "rentNumber": 1,
                            "countNumber": 1,
                            "title": "\u4e2d\u6210\u5927\u53a6",
                            "price": 46620,
                            "point": "116.31712|39.9922",
                            "isOpen": 0,
                            "icon": "w:20,h:29",
                            "type": 2,
                            "id": 50667
                        }], "zoom": "17"
                    }
                    var data = testData;
                    if (data.houses != null) {
                        this_.YSMap.mapObj.clearOverlays();
                        this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                    } else {
                        //is_community_load=false;
                        $('.qqserver_arrow').click(); //关闭已经打开的小区列表
                        //alert('附近未找到房源，请重新选择！');
                        this_.removeMapLoading(); //移除地图加载中
                        return false;
                    }
                };
                this_.addMapLoading(); //地图加载中
                this.remoteData(paraObj, successCb ,errorCb);
            },
            changeToArea: function () {
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'area';
                this.YSMap.operate.loadList = false;
                this.loadArea();
            },
            changeToDistrict: function () {
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'district';
                this.YSMap.operate.loadList = false;
                this.loadDistrict();
            },
            changeToCommunity: function () {
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'community';
                this.YSMap.operate.loadList = false;
                this.loadCommunity();
            },
            switchOperate: function () {
                if (this.YSMap.mapObj.getZoom() >= 16) {
                    this.YSMap.mapStatu = 'community';
                    this.YSMap.operate.loadList = false;
                } else if (this.YSMap.mapObj.getZoom() >= 14) {
                    this.autoSearchMaker = '';
                    this.autoSearchVal = '';
                    this.YSMap.condition.searchType = 'all';
                    this.YSMap.mapStatu = 'district';
                } else {
                    this.autoSearchMaker = '';
                    this.autoSearchVal = '';
                    this.YSMap.condition.searchType = 'all';
                    this.YSMap.mapStatu = 'area';
                }

                switch (this.YSMap.mapStatu) {
                    case 'area':
                        this.changeToArea();
                        break;
                    case 'district':
                        this.changeToDistrict();
                        break;
                    case 'community':
                        this.changeToCommunity();
                        break;
                    default:
                        break;
                }
            },
            contains: function (parentNode, childNode) {
                if (parentNode.contains) {
                    return parentNode != childNode && parentNode.contains(childNode);
                } else {
                    return !!(parentNode.compareDocumentPosition(childNode) & 16);
                }
            },

            checkHover: function (e, target, vueobj) {
                var e = e || window.event;
                if (e.type == "mouseover") {
                    return !vueobj.contains(target, e.relatedTarget
                            || e.fromElement)
                        && !((e.relatedTarget || e.fromElement) === target);
                } else {
                    return !vueobj.contains(target, e.relatedTarget
                            || e.toElement)
                        && !((e.relatedTarget || e.toElement) === target);
                }
            }

        },
        beforeDestroy(){}
    }
</script>


