<style >
    @import "../resources/css/map_search/reset.css";
    @import "../resources/css/map_search/map_search.css";
</style>
<style lang="less">
  [map-search]{
      .mapbg{
          min-width: 1200px;
          overflow: hidden;
          height: 100%;
          width: 100%;
          .header_menu_out{
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
      .fang_type{
           .fangtypebtn{
               img{
                   float: left;
                   cursor: pointer;
                   width: 41px;
                   height:41px
               }

          }
      }
      .contnav ul.topnav li img {
          margin: 4px 14px 0 23px;
          width: 10px;
          height: 6px;
      }

  }

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>
        <div map-search>
            <div class="mapbg">
                <div class="header_menu_out">
                    <div class="header_menu">
                        <div class="mapmenuleft">
                           <!-- <div class="header_logo fl">
                                <a href="http://www.5i5j.com" target="_blank">
                                    <img src="" width="183" height="57" style="border:1px solid red">
                                </a>
                            </div>-->
                            <div class="header_city fl">
                                <a href="javascript:void(0);" class="menu-citys"><span></span>北京<img src="../resources/images/map_search/cityshow.png" width="6" height="4" border="0"></a>
                                <div class="cityslist" style="display:none;">
                                    <ul class="citystyleft">
                                        <li>华    北</li>
                                        <li>华    东</li>
                                        <li>中西南</li>
                                        <li>海    外</li>
                                    </ul>
                                    <ul class="citystyright">
                                        <li>
                                            <a href="http://bj.5i5j.com/map" target="_blank">北京</a>
                                            <a href="http://tj.5i5j.com/map" target="_blank">天津</a>
                                            <a href="http://ty.5i5j.com/map" target="_blank">太原</a>
                                        </li>
                                        <li>
                                            <a href="http://sh.5i5j.com/map" target="_blank">上海</a>
                                            <a href="http://nj.5i5j.com/map" target="_blank">南京</a>
                                            <a href="http://hz.5i5j.com/map" target="_blank">杭州</a>
                                            <a href="http://sz.5i5j.com/map" target="_blank">苏州</a>
                                            <a href="http://nc.5i5j.com/map" target="_blank">南昌</a>
                                            <a href="http://wx.5i5j.com" target="_blank">无锡</a>
                                        </li>
                                        <li>
                                            <a href="http://cd.5i5j.com" target="_blank">成都</a>
                                            <a href="http://cs.5i5j.com" target="_blank">长沙</a>
                                            <a href="http://nn.5i5j.com" target="_blank">南宁</a>
                                            <a href="http://wh.5i5j.com" target="_blank">武汉</a>
                                            <a href="http://zz.5i5j.com" target="_blank">郑州</a>
                                        </li>
                                        <li><a href="http://www.haiwaiyoujia.com/index.php" target="_blank">海外地产</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="menu fl" id="menu_nav">
                                <ul>
                                    <li><a href="" target="_blank">首页</a></li>
                                    <li><a href="javascript:void(0);" id="two2" class="up">地图找房</a></li>
                                    <!--
                                        <li><a href="/subway" id="two3" target="_blank">地铁找房</a></li>
                                    -->
                                    <!--
                                    <li><a href="#" id="two4" target="_blank">找地铁房</a></li>
                                    <li><a href="#" id="two5" target="_blank">找学区房</a></li>
                                    <li><a href="#" id="two6" target="_blank">实体店面</a></li>
                                    -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="search_main">
                        <div class="fang_type fl">
                            <div class="fangtypebtn"><img src="../resources/images/map_search/fang_type.jpg"><span>房源类型</span>
                            </div>
                            <div class="typelist">
                                <ul>
                                    <li key="exchange">
                                        <a href="javascript:void(0);"><div class="bottomstyle"><img src="images/icon_fang.png" width="19" height="18"><span >二手房</span></div></a>
                                    </li>
                                    <li key="rent">
                                        <a href="javascript:void(0);"><div class="bottomstyle last"><img src="images/icon_fang.png" width="19" height="18"><span >租房</span></div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="search fl">
                            <input type="text" placeholder="请输入小区名称或地址..." autocomplete="off" id="autocomplete">
                            <a class="search_btn fl" href="javascript:void(0);"><img src="../resources/images/map_search/searchbtn.png" width="17" height="17"></a>
                        </div>
                        <div class="contnav fl">
                            <ul class="topnav">
                                <li class="s_location">
                                    <a href="javascript:void(0);"><span>区域</span><img src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="s_price">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">价格</span><img src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="s_area">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">面积</span><img src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="s_room">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">户型</span><img src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                                <li class="last s_tese" style="width: 110px;">
                                    <a href="javascript:void(0);"><span style="color:#CCC;">特色</span><img src="../resources/images/map_search/xiabtnhui.png"></a>
                                    <ul style="display:none;" class="subnav"></ul>
                                </li>
                            </ul>
                        </div>
                        <div class="contright fr" style="display:none;">
                            <div class="contfr_liulan fr">
                                <a href="javascript:void(0);" id="liulannumber"><img src="images/liulan.png" width="19" height="17"><span class="liulannum">浏览</span></a>
                                <div class="contnumber"><span>2</span></div>
                            </div>
                            <div class="contfr_liulan contfr_guanzhu fr">
                                <a href="javascript:void(0);" class="guanzhubtn" id="guanzhu"><img src="images/guanzhu.png" width="19" height="16"><span class="liulannum guanzhu">关注</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="tsinfosty"><img src="../resources/images/map_search/ts_icon.png"></div>
                </div>
                <!--地图部分-->
                <div class="mapmain">
                    <div class="wrapper">
                        <div class="marcont" id="map">
                            <!-- 加载地图 -->
                        </div>
                        <div class="zengleft"><a href="javascript:" class="bar"></a></div>
                        <div class="main_zhoubian" style="display:none;"></div>
                        <div class="r_listbtn qqserver_fold">
                            <a href="javascript:void(0);"></a>
                        </div>
                        <!--右边浮动层开始-->
                        <div class="qqserver" style="background:#ddd;" @click="hideBox($event)">
                            <div class="qqserver-body" style="display:block;">
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
                                                    <div class="bdsharebuttonbox"><a href="javascript:void(0);" class="share wx_share xq" data-cmd="weixin"></a></div>
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
                                                            <div class="scrollbar"><div class="handle"></div></div>
                                                            <div class="sly" data-options='{ "itemNav": "smart", "dragContent": 1, "startAt": 1, "scrollBy": 1, "elasticBounds": 1 }'>
                                                                <ul class="big cfix gongjiaoload">
                                                                    <li class="zhoubians">
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
                                <div class="liebiao" style="display: block;"><div class="fangyuanlist">
                                    <div class="adress"><span></span>北京</div>
                                    <div class="fanginfo">
                                        <a href="/community/63041" target="_blank">王庄路27号院</a>
                                        <img style="border:none;width:390px;height:106px" src="/themes/new2015/common/images/mapcity/bj.jpg">
                                        <span class="fuceng"> </span>
                                    </div>
                                    <!--内容-->
                                    <div class="vertical scrollbox clearfix">
                                        <div class="slyWrap example1">
                                            <div class="scrollbar"><div class="handle" style="position: absolute; top: 0px; height: 382px;"></div></div>
                                            <div class="sly" data-options="{ &quot;itemNav&quot;: &quot;smart&quot;, &quot;dragContent&quot;: 1, &quot;startAt&quot;: 0, &quot;scrollBy&quot;: 1, &quot;elasticBounds&quot;: 1 }" style="overflow: hidden; position: relative;">
                                                <ul class="big cfix houses_list" style="position: absolute; top: 0px; height: 952px;">
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="160555862" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3791/37915281/shinei/boapgjld3b4e04dc.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>425万/<span>101190元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
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
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="160555863" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3747/37477034/shinei/khlpkpkd05eb7c9f.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>535万/<span>87705元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">2室1厅丨61平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="159603354" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3526/35261167/shinei/mlilcgce08d5afeb.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>570万/<span>95000元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">2室1厅丨60平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="156606731" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3761/37612530/shinei/knalfhad78be4c6f.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>660万/<span>101538元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">2室1厅丨65平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="160140750" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3691/36912491/shinei/oogpmcnobc8fba03.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>760万/<span>100000元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">3室1厅丨76平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="160140748" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="http://image.5i5j.com/picture/slpic/l/house/3759/37591322/shinei/ppfflpdlcd380e9c.jpg.jpg?7d330bfaa559838a789b9b1b286ff729" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>550万/<span>91667元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">2室1厅丨60平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                    <li class="waiclisty">
                                                        <div class="fanglistinfo"><ul>
                                                            <li id="160132151" class="xianshiflod exchange">
                                                                <p>
                                                                    <img src="/themes/new2015/bj/files/common/images/error/map_list.jpg" border="0" width="160" height="120">
                                                                </p>
                                                                <dl>
                                                                    <dt>550万/<span>91667元/m²</span></dt>
                                                                    <dd class="fangcontent hpcolor" style="overflow: hidden;"><span>王庄路27号院</span>（海淀）</dd>
                                                                    <dd class="fangcontent">2室1厅丨60平米丨南北</dd>
                                                                    <dd>
                                                                        <div class="fangbtn">
                                                                            <!--
                                                                            <span class="gybtn"></span>
                                                                                                                                    <span class="mwbtn"></span>
                                                                                                                                    <span class="cdbtn"></span>
                                                                            -->                        </div>
                                                                    </dd>
                                                                </dl>
                                                            </li></ul></div>
                                                    </li><!-- </a> -->
                                                </ul>
                                            </div></div></div>
                                    <!--内容结束-->
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="qqserver001">
                        </div>
                        <!--右边浮动层结尾-->
                    </div>
                </div>
            </div>
            <!--加载图标-->
            <div id="t_L"></div>
            <div id="h_L"></div>
            <div id="ht_L"></div>

        </div>

        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    import {ComplexCustomOverlay, myMap}  from '../resources/js/map_lib/map_out.js';
    export default {
        components: {
            header1,
            footer1,

        },
        data(){
            return {
                boundary_location:[],
                YSMap:null,
                autoSearchMaker:'',
                domainRoot: '5i5j.com/map/',
                circleNum: 0, //圆内标示加载次数的标识, 当为1的时候不再重复加载
                autoSearchVal:'', //定位搜索的值
                my_radius:1000, //默认周边圆的单位(米)
                only_around:false,//是否只显示周边
                move_load:true, //移动地图时是否重新加载数据
                is_scale:true, //是否开启比例尺
                is_navigation:false, //是否开启平移控件
                is_baidu:false, //是否开启百度地图标识
                is_community_load:true, //是否加载小区 防止死循环
                zoomId:12, //默认的地图放大级别
                house_type:'all', //房源类型 all 全部 exchange rent
                s_price:0, //价格
                s_area:0, //面积
                s_room:0, //居室
                s_tag:0,//特色
            };
        },

        mounted: function () {
              this.getDisData();
              this.init();
        },

        created(){

        },
        methods:{
            getDisData:function(){
                var boundary_location = new Array();
                boundary_location['海淀区'] = "116.341137, 39.923964;116.339679, 39.94356;116.334715, 39.948162;116.357253, 39.948746;116.358141, 39.956251;116.362253, 39.957521;116.362998, 39.949865;116.378502, 39.954835;116.37692, 39.973552;116.389736, 39.974387;116.387287, 39.993956;116.362761, 40.026109;116.363069, 40.02954;116.357718, 40.032531;116.401464, 40.039194;116.396604, 40.04379;116.397325, 40.047524;116.378543, 40.050829;116.37375, 40.057042;116.379802, 40.060106;116.378836, 40.063911;116.389051, 40.066847;116.386902, 40.07159;116.379795, 40.071643;116.376853, 40.075298;116.369691, 40.074844;116.369768, 40.07191;116.353507, 40.069364;116.349949, 40.061113;116.346675, 40.060861;116.34552, 40.064731;116.335378, 40.06064;116.325006, 40.067249;116.313008, 40.068525;116.310228, 40.066449;116.296905, 40.089609;116.286401, 40.086145;116.280513, 40.097876;116.265798, 40.10745;116.271527, 40.110243;116.269771, 40.117429;116.264818, 40.118596;116.263369, 40.110845;116.246619, 40.114369;116.251428, 40.118582;116.254817, 40.141222;116.239751, 40.142021;116.223719, 40.147867;116.214447, 40.146781;116.209906, 40.167109;116.201798, 40.166439;116.197998, 40.161694;116.190154, 40.164269;116.188151, 40.153554;116.181289, 40.148843;116.176081, 40.148902;116.176031, 40.145915;116.171412, 40.146314;116.176745, 40.143174;116.179721, 40.13387;116.174848, 40.134699;116.177839, 40.130436;116.141183, 40.127954;116.137391, 40.121312;116.120823, 40.121343;116.113567, 40.124048;116.108368, 40.122302;116.10376, 40.127436;116.081711, 40.121954;116.077221, 40.111653;116.063592, 40.103311;116.056474, 40.092332;116.063413, 40.083336;116.071468, 40.079457;116.072308, 40.073843;116.078539, 40.068341;116.075555, 40.058363;116.0821, 40.043526;116.085314, 40.039136;116.092141, 40.037016;116.107208, 40.039888;116.144993, 40.035981;116.155357, 40.028917;116.164319, 40.027556;116.182703, 40.012638;116.179676, 40.007247;116.167804, 40.006381;116.157626, 39.999989;116.16467, 39.990209;116.174553, 39.993657;116.175724, 39.983666;116.185043, 39.988499;116.185431, 39.994544;116.191454, 39.992044;116.192751, 39.976711;116.208046, 39.967038;116.209915, 39.962145;116.225593, 39.94995;116.220405, 39.939699;116.222384, 39.933733;116.213491, 39.930676;116.213391, 39.923814;116.238498, 39.922;116.259497, 39.927929;116.259612, 39.9237;116.25575, 39.921998;116.259455, 39.921458;116.25952, 39.903235;116.301619, 39.90306;116.302701, 39.892937;116.305624, 39.895923;116.313912, 39.896884;116.310609, 39.898681;116.319901, 39.902635;116.341152, 39.902656;116.341137, 39.923964";
                boundary_location['朝阳区'] = "116.646319, 40.006356;116.641899, 40.010457;116.637789, 40.008115;116.631801, 40.010677;116.634344, 40.014032;116.625897, 40.018101;116.605573, 40.020894;116.583423, 40.03384;116.585263, 40.038949;116.580879, 40.038842;116.583812, 40.035202;116.572502, 40.044509;116.557532, 40.051337;116.552346, 40.056249;116.558534, 40.059865;116.554677, 40.068609;116.550099, 40.065421;116.53681, 40.076275;116.518432, 40.077255;116.506144, 40.086251;116.489979, 40.087645;116.479918, 40.091193;116.47609, 40.095797;116.473365, 40.095842;116.472852, 40.087579;116.468351, 40.08629;116.466889, 40.067011;116.455298, 40.064534;116.431355, 40.070731;116.431517, 40.066402;116.415819, 40.06182;116.412625, 40.05574;116.415001, 40.049137;116.410542, 40.044775;116.401717, 40.042858;116.397325, 40.047524;116.396604, 40.04379;116.401464, 40.039194;116.357718, 40.032531;116.363069, 40.02954;116.362761, 40.026109;116.387287, 39.993956;116.387785, 39.978807;116.400581, 39.979365;116.393903, 39.967204;116.396364, 39.969351;116.414482, 39.96835;116.415299, 39.979667;116.420495, 39.968249;116.431673, 39.968272;116.431655, 39.96543;116.437014, 39.965433;116.43663, 39.956121;116.446594, 39.957907;116.44497, 39.952238;116.454134, 39.950601;116.45024, 39.93446;116.440535, 39.934234;116.442707, 39.908962;116.455132, 39.908642;116.453665, 39.900457;116.457497, 39.896305;116.450797, 39.894688;116.44943, 39.872028;116.451866, 39.868396;116.463979, 39.866301;116.472854, 39.860089;116.466214, 39.853856;116.46466, 39.856262;116.453186, 39.854005;116.453684, 39.847044;116.447524, 39.845285;116.442984, 39.847021;116.437902, 39.83852;116.431615, 39.838691;116.431617, 39.83626;116.446775, 39.835831;116.450671, 39.826127;116.460356, 39.828481;116.469959, 39.819999;116.475494, 39.82014;116.480899, 39.815293;116.491975, 39.818782;116.496314, 39.824938;116.501637, 39.824196;116.50154, 39.821867;116.516491, 39.822714;116.515981, 39.829544;116.520718, 39.835153;116.532584, 39.83575;116.532967, 39.832723;116.541175, 39.83037;116.544843, 39.834524;116.540075, 39.838702;116.549021, 39.835757;116.552721, 39.84116;116.584308, 39.836326;116.589616, 39.829271;116.606644, 39.831094;116.608073, 39.846815;116.613401, 39.851335;116.611039, 39.855961;116.619228, 39.856115;116.633199, 39.866868;116.626724, 39.874698;116.63635, 39.891266;116.634324, 39.896696;116.622549, 39.895733;116.620905, 39.902434;116.628445, 39.908134;116.627765, 39.926694;116.637114, 39.9281;116.631738, 39.936723;116.635922, 39.938225;116.639874, 39.946202;116.636731, 39.95343;116.639218, 39.956666;116.651643, 39.95228;116.647209, 39.987213;116.638861, 39.990305;116.646185, 39.996931;116.650368, 39.996265;116.646319, 40.006356";
                boundary_location['东城区'] = "116.442707, 39.908962;116.440535, 39.934234;116.45024, 39.93446;116.454134, 39.950601;116.44497, 39.952238;116.446594, 39.957907;116.43663, 39.956121;116.437014, 39.965433;116.431655, 39.96543;116.431673, 39.968272;116.420495, 39.968249;116.414144, 39.979655;116.414482, 39.96835;116.396364, 39.969351;116.393613, 39.966062;116.393758, 39.963015;116.399881, 39.96342;116.402897, 39.934735;116.405809, 39.93423;116.406024, 39.929754;116.397306, 39.928574;116.398119, 39.91388;116.402086, 39.914015;116.404366, 39.905116;116.404872, 39.878463;116.3877, 39.877337;116.387944, 39.87347;116.397662, 39.871581;116.401907, 39.865188;116.420505, 39.865369;116.423156, 39.873252;116.419873, 39.878168;116.449648, 39.877668;116.450797, 39.894688;116.45749, 39.895901;116.453665, 39.900457;116.455132, 39.908642;116.442707, 39.908962";
                boundary_location['西城区'] = "116.40249, 39.906514;116.402086, 39.914015;116.398119, 39.91388;116.397306, 39.928574;116.406024, 39.929754;116.405809, 39.93423;116.402897, 39.934735;116.399881, 39.96342;116.393758, 39.963015;116.393613, 39.966062;116.400581, 39.979365;116.387785, 39.978807;116.389667, 39.974264;116.376901, 39.973511;116.378502, 39.954835;116.362998, 39.949865;116.362253, 39.957521;116.358141, 39.956251;116.357253, 39.948746;116.334715, 39.948162;116.339702, 39.943468;116.342505, 39.909573;116.341152, 39.902656;116.332493, 39.902619;116.327789, 39.880976;116.349776, 39.881578;116.350725, 39.879437;116.356864, 39.879846;116.358673, 39.87466;116.404872, 39.878463;116.40249, 39.906514";
                boundary_location['石景山区'] = "116.25948, 39.923721;116.259497, 39.927929;116.238498, 39.922;116.213391, 39.923814;116.213491, 39.930676;116.222384, 39.933733;116.220405, 39.939699;116.225593, 39.94995;116.209915, 39.962145;116.208046, 39.967038;116.192751, 39.976711;116.191454, 39.992044;116.185431, 39.994544;116.185043, 39.988499;116.175724, 39.983666;116.174553, 39.993657;116.16467, 39.990209;116.157626, 39.999989;116.150944, 39.995682;116.125963, 39.992095;116.120457, 39.987295;116.123488, 39.977956;116.129973, 39.973315;116.127774, 39.967015;116.121463, 39.963716;116.126675, 39.956231;116.120227, 39.954072;116.118878, 39.948913;116.123569, 39.941159;116.126733, 39.938261;116.131339, 39.940888;116.135277, 39.93273;116.14728, 39.928622;116.162003, 39.903971;116.190577, 39.886765;116.206242, 39.889109;116.214799, 39.880066;116.218901, 39.880592;116.217259, 39.884172;116.224868, 39.882421;116.226217, 39.887366;116.234483, 39.889278;116.234411, 39.89479;116.240775, 39.895463;116.244157, 39.899681;116.264751, 39.901361;116.265713, 39.903332;116.25952, 39.903235;116.259455, 39.921458;116.25575, 39.921998;116.25948, 39.923721";
                boundary_location['通州区'] = "116.633144, 40.01246;116.631801, 40.010677;116.637789, 40.008115;116.641899, 40.010457;116.650181, 40.000167;116.650368, 39.996265;116.646185, 39.996931;116.638861, 39.990305;116.647209, 39.987213;116.651643, 39.95228;116.639218, 39.956666;116.636731, 39.95343;116.639874, 39.946202;116.635922, 39.938225;116.631738, 39.936723;116.637114, 39.9281;116.627765, 39.926694;116.628445, 39.908134;116.62432, 39.905414;116.626103, 39.903931;116.621102, 39.903546;116.622549, 39.895733;116.634324, 39.896696;116.63635, 39.891266;116.626724, 39.874698;116.633199, 39.866868;116.619228, 39.856115;116.611039, 39.855961;116.613401, 39.851335;116.608073, 39.846815;116.606644, 39.831094;116.589616, 39.829271;116.584308, 39.836326;116.563702, 39.840778;116.550184, 39.840563;116.547877, 39.835547;116.540075, 39.838702;116.544843, 39.834524;116.541056, 39.829578;116.546729, 39.829532;116.541229, 39.823766;116.545414, 39.820736;116.548019, 39.809831;116.540702, 39.806449;116.543233, 39.802877;116.536327, 39.798533;116.547537, 39.787008;116.537508, 39.78367;116.544078, 39.776178;116.551247, 39.779949;116.554858, 39.775712;116.545704, 39.774366;116.550335, 39.76952;116.547066, 39.767162;116.534219, 39.768421;116.528427, 39.773925;116.529939, 39.766364;116.525359, 39.756949;116.54035, 39.756615;116.534634, 39.7487;116.547755, 39.748454;116.547969, 39.746464;116.546568, 39.74421;116.539627, 39.744757;116.541676, 39.726222;116.535887, 39.726998;116.533708, 39.723595;116.545338, 39.719243;116.55286, 39.72121;116.579596, 39.720216;116.581503, 39.715533;116.607428, 39.715263;116.607379, 39.719882;116.613074, 39.718513;116.612454, 39.724849;116.619619, 39.728867;116.62283, 39.727838;116.625531, 39.732035;116.634223, 39.734718;116.637961, 39.730287;116.645438, 39.730645;116.645859, 39.722983;116.651277, 39.716906;116.660878, 39.713958;116.660465, 39.708853;116.655871, 39.709855;116.652955, 39.705726;116.659802, 39.694028;116.670488, 39.691879;116.676741, 39.693578;116.677234, 39.686566;116.673469, 39.685993;116.673474, 39.683121;116.710236, 39.679719;116.711539, 39.655313;116.719037, 39.642614;116.72791, 39.643192;116.733155, 39.64067;116.729067, 39.629092;116.732272, 39.622677;116.770397, 39.621126;116.781618, 39.611405;116.786732, 39.600158;116.794329, 39.602738;116.792869, 39.609761;116.798272, 39.610925;116.798806, 39.616774;116.835365, 39.623318;116.847796, 39.629981;116.837352, 39.642124;116.837919, 39.648702;116.857622, 39.661133;116.858348, 39.670383;116.862345, 39.673679;116.890055, 39.681869;116.899041, 39.67916;116.913065, 39.682652;116.912129, 39.692889;116.895367, 39.709769;116.889375, 39.722799;116.896226, 39.731878;116.905895, 39.732316;116.918338, 39.737685;116.915713, 39.755851;116.905956, 39.765245;116.917067, 39.769397;116.926504, 39.785708;116.954922, 39.787312;116.958916, 39.788953;116.957802, 39.793369;116.947889, 39.802187;116.942966, 39.801267;116.941163, 39.807497;116.944047, 39.811272;116.934897, 39.8194;116.934864, 39.836027;116.921582, 39.8546;116.914208, 39.858458;116.910419, 39.856768;116.908704, 39.849417;116.914744, 39.836888;116.906097, 39.838156;116.892248, 39.85166;116.865868, 39.864936;116.858785, 39.876295;116.826594, 39.895721;116.810909, 39.894968;116.798184, 39.891052;116.790891, 39.904278;116.787847, 39.924116;116.790425, 39.947352;116.784383, 39.957745;116.785533, 39.962352;116.781118, 39.966493;116.778104, 39.962551;116.768888, 39.965436;116.766651, 39.963757;116.763082, 39.967772;116.774479, 39.991807;116.782163, 39.999264;116.781842, 40.009146;116.778172, 40.013805;116.779789, 40.021726;116.761005, 40.02195;116.749986, 40.033641;116.739235, 40.031379;116.73945, 40.028032;116.731798, 40.029961;116.726535, 40.025537;116.716783, 40.031842;116.704244, 40.0209;116.693816, 40.021922;116.697176, 40.013753;116.693421, 40.013468;116.690688, 40.019563;116.685256, 40.018524;116.684283, 40.020902;116.674995, 40.020772;116.669176, 40.024935;116.664997, 40.023761;116.667654, 40.027436;116.660131, 40.025943;116.656931, 40.032025;116.642838, 40.026007;116.641375, 40.029991;116.634328, 40.026897;116.627814, 40.029076;116.627362, 40.033818;116.623131, 40.033746;116.623686, 40.037569;116.618833, 40.036731;116.612108, 40.024492;116.604209, 40.021835;116.625897, 40.018101;116.634344, 40.014032;116.633144, 40.01246";
                boundary_location['丰台区'] = "116.256504, 39.901832;116.247435, 39.900952;116.240275, 39.897855;116.240775, 39.895463;116.234411, 39.89479;116.234483, 39.889278;116.226217, 39.887366;116.224868, 39.882421;116.217259, 39.884172;116.218901, 39.880592;116.214799, 39.880066;116.206242, 39.889109;116.190577, 39.886765;116.173838, 39.895537;116.169036, 39.893538;116.161725, 39.895637;116.157161, 39.890453;116.146718, 39.890631;116.117558, 39.878682;116.11003, 39.879466;116.107895, 39.873363;116.102273, 39.874836;116.093556, 39.871985;116.084896, 39.876347;116.076807, 39.874628;116.073513, 39.872018;116.076684, 39.859606;116.071776, 39.860556;116.06999, 39.857209;116.066515, 39.85984;116.060452, 39.852314;116.064312, 39.848731;116.078763, 39.844895;116.089112, 39.833674;116.091293, 39.838849;116.090487, 39.832231;116.093187, 39.836506;116.095644, 39.835118;116.0946, 39.82529;116.090663, 39.825264;116.095381, 39.823038;116.091005, 39.818077;116.09173, 39.801737;116.097615, 39.788216;116.107431, 39.78888;116.108873, 39.792459;116.110369, 39.78959;116.110568, 39.792665;116.115718, 39.792642;116.115005, 39.795307;116.121125, 39.795265;116.122399, 39.797641;116.126981, 39.796911;116.127687, 39.791932;116.138923, 39.790363;116.137427, 39.788825;116.141971, 39.78709;116.131317, 39.783576;116.129824, 39.786123;116.123971, 39.780286;116.127152, 39.779628;116.127281, 39.776305;116.124423, 39.777118;116.12792, 39.768454;116.128509, 39.772494;116.131038, 39.768706;116.144619, 39.774184;116.145812, 39.770833;116.153328, 39.77254;116.152942, 39.776116;116.166792, 39.77348;116.172405, 39.780018;116.175093, 39.791002;116.190438, 39.790366;116.190902, 39.786516;116.194623, 39.788074;116.206846, 39.783949;116.208419, 39.805525;116.215719, 39.812206;116.214865, 39.817114;116.222484, 39.822667;116.220145, 39.829412;116.234878, 39.831177;116.247313, 39.821725;116.25883, 39.799165;116.265202, 39.803607;116.268574, 39.799022;116.29357, 39.805137;116.29561, 39.8028;116.300383, 39.80406;116.30255, 39.801777;116.297442, 39.799567;116.299128, 39.79707;116.304814, 39.797705;116.313532, 39.776071;116.316446, 39.775618;116.324301, 39.789189;116.328358, 39.789516;116.329653, 39.803931;116.333171, 39.803811;116.334793, 39.80701;116.346976, 39.807642;116.350569, 39.81346;116.36231, 39.811396;116.363526, 39.806492;116.373788, 39.805579;116.373981, 39.790829;116.385112, 39.791699;116.385589, 39.784822;116.397113, 39.787789;116.398612, 39.771406;116.404908, 39.772039;116.402776, 39.793023;116.426144, 39.793452;116.428264, 39.798983;116.435831, 39.800279;116.435096, 39.80971;116.430595, 39.80969;116.42899, 39.815918;116.424621, 39.81538;116.421719, 39.818672;116.416209, 39.817351;116.416286, 39.8225;116.425879, 39.821073;116.424287, 39.828389;116.420636, 39.830117;116.422414, 39.835591;116.426128, 39.832878;116.431615, 39.838691;116.437902, 39.83852;116.442984, 39.847021;116.447524, 39.845285;116.453684, 39.847044;116.453186, 39.854005;116.46466, 39.856262;116.467119, 39.854165;116.471752, 39.856764;116.472532, 39.861387;116.45754, 39.868812;116.451866, 39.868396;116.450089, 39.878013;116.419873, 39.878168;116.423156, 39.873252;116.420505, 39.865369;116.402273, 39.865175;116.397662, 39.871581;116.387944, 39.87347;116.3877, 39.877337;116.358673, 39.87466;116.356864, 39.879846;116.350725, 39.879437;116.349776, 39.881578;116.327912, 39.880918;116.332493, 39.902619;116.319901, 39.902635;116.310609, 39.898681;116.313912, 39.896884;116.305624, 39.895923;116.302701, 39.892937;116.301619, 39.90306;116.256504, 39.901832";
                boundary_location['房山区'] = "116.131546, 39.768804;116.128509, 39.772494;116.12792, 39.768454;116.124423, 39.777118;116.127281, 39.776305;116.127152, 39.779628;116.123971, 39.780286;116.129824, 39.786123;116.131317, 39.783576;116.141971, 39.78709;116.137819, 39.790999;116.127687, 39.791932;116.126981, 39.796911;116.122399, 39.797641;116.121125, 39.795265;116.115005, 39.795307;116.115718, 39.792642;116.110568, 39.792665;116.110369, 39.78959;116.108873, 39.792459;116.107431, 39.78888;116.097615, 39.788216;116.095629, 39.797104;116.092023, 39.799239;116.091005, 39.818077;116.095381, 39.823038;116.090663, 39.825264;116.0946, 39.82529;116.095644, 39.835118;116.093187, 39.836506;116.090487, 39.832231;116.091293, 39.838849;116.089112, 39.833674;116.078763, 39.844895;116.054574, 39.853172;116.038246, 39.852055;116.024996, 39.84645;116.022505, 39.855664;116.01222, 39.855575;116.007626, 39.850279;115.994371, 39.847549;115.99021, 39.856785;115.995596, 39.867678;115.993512, 39.873087;115.999733, 39.873148;116.003291, 39.881523;115.987263, 39.879812;115.982282, 39.874661;115.976027, 39.875019;115.974349, 39.87821;115.966835, 39.873533;115.960086, 39.873465;115.953852, 39.879176;115.932384, 39.882133;115.929017, 39.892363;115.943066, 39.905376;115.952103, 39.908885;115.948718, 39.923302;115.907931, 39.921095;115.896339, 39.925034;115.882286, 39.92;115.878554, 39.921229;115.872773, 39.910963;115.851834, 39.902862;115.844006, 39.908264;115.83689, 39.909022;115.832261, 39.917719;115.820309, 39.919903;115.813436, 39.92593;115.804268, 39.929135;115.77817, 39.92848;115.774026, 39.931911;115.754994, 39.925561;115.739215, 39.915328;115.696583, 39.909211;115.682465, 39.894561;115.662994, 39.891128;115.643584, 39.878649;115.636125, 39.879196;115.62907, 39.875319;115.600735, 39.829583;115.590698, 39.822091;115.575643, 39.819741;115.57307, 39.811205;115.558665, 39.801297;115.550738, 39.802418;115.519505, 39.794138;115.513357, 39.788984;115.498847, 39.802132;115.490144, 39.804462;115.466597, 39.789538;115.446208, 39.789696;115.443016, 39.782414;115.4537, 39.755596;115.475508, 39.746881;115.489207, 39.748202;115.498946, 39.744467;115.494841, 39.737957;115.498926, 39.707306;115.506367, 39.69717;115.495458, 39.687104;115.49821, 39.674617;115.485294, 39.661638;115.485203, 39.656314;115.513505, 39.65776;115.522393, 39.648146;115.528856, 39.645963;115.525992, 39.618943;115.539326, 39.617612;115.552049, 39.625147;115.575098, 39.604458;115.580881, 39.602542;115.57802, 39.598252;115.592675, 39.595736;115.606081, 39.605443;115.624996, 39.609891;115.640839, 39.603874;115.640124, 39.60979;115.648167, 39.609304;115.650382, 39.605047;115.664199, 39.607415;115.677061, 39.614593;115.687469, 39.602859;115.6977, 39.597042;115.700636, 39.58446;115.698616, 39.572297;115.724345, 39.567191;115.733957, 39.55403;115.744881, 39.549176;115.750469, 39.530171;115.758146, 39.518671;115.769417, 39.52097;115.774597, 39.513389;115.77468, 39.521173;115.803517, 39.516067;115.833646, 39.518631;115.834908, 39.547445;115.852755, 39.549069;115.853237, 39.557078;115.859607, 39.558462;115.872222, 39.553433;115.893877, 39.55684;115.893426, 39.562061;115.89959, 39.562647;115.900299, 39.57279;115.914709, 39.575423;115.918661, 39.579418;115.92096, 39.5894;115.91514, 39.59102;115.913687, 39.602606;115.919764, 39.605797;115.927621, 39.603682;115.927525, 39.600123;115.93517, 39.59979;115.936548, 39.590961;115.950787, 39.582123;115.956732, 39.572271;115.964618, 39.57154;115.983172, 39.576154;115.983491, 39.600071;115.991092, 39.600501;115.998195, 39.599442;115.999942, 39.589146;116.003687, 39.588679;116.001695, 39.582687;116.014635, 39.583917;116.022136, 39.593854;116.043035, 39.57876;116.07333, 39.577713;116.110362, 39.580779;116.111984, 39.576795;116.153802, 39.575452;116.16104, 39.586423;116.200314, 39.588234;116.207352, 39.58384;116.227953, 39.584402;116.233313, 39.599622;116.225057, 39.614221;116.227166, 39.632502;116.222425, 39.647618;116.233061, 39.681297;116.228525, 39.688562;116.235101, 39.695099;116.232517, 39.700565;116.236438, 39.704961;116.236021, 39.713468;116.251844, 39.724818;116.254304, 39.736976;116.250508, 39.747446;116.260067, 39.760394;116.260501, 39.785006;116.25476, 39.811064;116.240731, 39.828792;116.234878, 39.831177;116.220145, 39.829412;116.222484, 39.822667;116.214865, 39.817114;116.215719, 39.812206;116.208419, 39.805525;116.206846, 39.783949;116.194623, 39.788074;116.190902, 39.786516;116.190438, 39.790366;116.175093, 39.791002;116.172405, 39.780018;116.166792, 39.77348;116.152942, 39.776116;116.153328, 39.77254;116.145812, 39.770833;116.144619, 39.774184;116.131546, 39.768804";
                boundary_location['大兴区'] = "116.381464, 39.791614;116.373981, 39.790829;116.373788, 39.805579;116.363526, 39.806492;116.36231, 39.811396;116.350569, 39.81346;116.346976, 39.807642;116.334793, 39.80701;116.333171, 39.803811;116.329653, 39.803931;116.328358, 39.789516;116.324301, 39.789189;116.316446, 39.775618;116.311058, 39.778993;116.304814, 39.797705;116.299128, 39.79707;116.297442, 39.799567;116.30255, 39.801777;116.300383, 39.80406;116.29561, 39.8028;116.29357, 39.805137;116.268574, 39.799022;116.265202, 39.803607;116.257664, 39.798946;116.261125, 39.769293;116.2589, 39.75605;116.250508, 39.747446;116.254304, 39.736976;116.251844, 39.724818;116.236021, 39.713468;116.236438, 39.704961;116.232517, 39.700565;116.235101, 39.695099;116.228525, 39.688562;116.233061, 39.681297;116.223666, 39.657541;116.222425, 39.647618;116.227166, 39.632502;116.225057, 39.614221;116.233313, 39.599622;116.227915, 39.584526;116.245105, 39.556047;116.250727, 39.552413;116.251984, 39.521643;116.258316, 39.516687;116.261105, 39.50889;116.282528, 39.501232;116.285552, 39.497833;116.310498, 39.493163;116.325583, 39.480138;116.332267, 39.468477;116.349029, 39.458592;116.351422, 39.453985;116.371229, 39.453886;116.372291, 39.457582;116.383324, 39.459122;116.394203, 39.456088;116.399532, 39.458963;116.425853, 39.454582;116.429217, 39.449554;116.439309, 39.445717;116.457641, 39.452528;116.462321, 39.46309;116.456546, 39.468347;116.454885, 39.482176;116.44748, 39.492161;116.427339, 39.502878;116.413425, 39.529626;116.425291, 39.528906;116.432281, 39.522346;116.441316, 39.522359;116.446318, 39.524486;116.449053, 39.535027;116.483584, 39.545471;116.484288, 39.555351;116.51236, 39.561538;116.533535, 39.579411;116.530868, 39.603113;116.561077, 39.604456;116.575397, 39.60992;116.574035, 39.615511;116.578352, 39.625892;116.585801, 39.626099;116.585933, 39.629159;116.608882, 39.627922;116.60958, 39.617675;116.618347, 39.614326;116.63956, 39.598435;116.649575, 39.602253;116.65341, 39.612935;116.701393, 39.602494;116.710341, 39.59463;116.735224, 39.599557;116.712803, 39.615639;116.712707, 39.620278;116.732272, 39.622677;116.729067, 39.629092;116.733155, 39.64067;116.72791, 39.643192;116.719037, 39.642614;116.715298, 39.646085;116.70976, 39.663174;116.710236, 39.679719;116.693069, 39.682482;116.675993, 39.68148;116.673469, 39.685993;116.677234, 39.686566;116.676741, 39.693578;116.670488, 39.691879;116.659802, 39.694028;116.652955, 39.705726;116.655871, 39.709855;116.660465, 39.708853;116.660878, 39.713958;116.651277, 39.716906;116.645859, 39.722983;116.645438, 39.730645;116.637961, 39.730287;116.634223, 39.734718;116.625531, 39.732035;116.62283, 39.727838;116.619619, 39.728867;116.612454, 39.724849;116.613074, 39.718513;116.607379, 39.719882;116.607428, 39.715263;116.581503, 39.715533;116.579596, 39.720216;116.55286, 39.72121;116.545338, 39.719243;116.533708, 39.723595;116.535887, 39.726998;116.541676, 39.726222;116.539627, 39.744757;116.546568, 39.74421;116.547969, 39.746464;116.547755, 39.748454;116.534634, 39.7487;116.54035, 39.756615;116.525359, 39.756949;116.529939, 39.766364;116.528427, 39.773925;116.534219, 39.768421;116.547066, 39.767162;116.550335, 39.76952;116.545704, 39.774366;116.554858, 39.775712;116.551247, 39.779949;116.544078, 39.776178;116.537508, 39.78367;116.547537, 39.787008;116.536327, 39.798533;116.543233, 39.802877;116.540702, 39.806449;116.548019, 39.809831;116.545414, 39.820736;116.541229, 39.823766;116.546729, 39.829532;116.532967, 39.832723;116.532584, 39.83575;116.520692, 39.835145;116.515981, 39.829544;116.516491, 39.822714;116.50154, 39.821867;116.501637, 39.824196;116.496314, 39.824938;116.491975, 39.818782;116.480899, 39.815293;116.475494, 39.82014;116.469959, 39.819999;116.460356, 39.828481;116.450671, 39.826127;116.446775, 39.835831;116.427606, 39.836076;116.426128, 39.832878;116.422414, 39.835591;116.420636, 39.830117;116.424287, 39.828389;116.425879, 39.821073;116.416286, 39.8225;116.416209, 39.817351;116.427931, 39.816515;116.430595, 39.80969;116.435096, 39.80971;116.434512, 39.7985;116.428264, 39.798983;116.426144, 39.793452;116.402776, 39.793023;116.404908, 39.772039;116.398612, 39.771406;116.397113, 39.787789;116.385589, 39.784822;116.385112, 39.791699;116.381464, 39.791614";
                this.boundary_location =boundary_location;
            },
            hideBox:function(e){
                if($(e.target).closest("close").length>0){

                }

            },
            init:function(){
                var options={
                    x:'116.39147',
                    y:'39.90555',
                    cityName: '北京',
                    dataUrl: 'http://bj.5i5j.com/bJ_Map/api/',
                    defaultZoom: this.zoomId,
                    mapBoxId: 'map'
                };
                this.YSMap = new myMap(options);
                this.YSMap.loadMap(this.YSMap, this); //地图实例初始化
            },
            zoomendEvent:function(){
                if(!this.only_around) {
                    this.switchOperate();
                }
            },
            moveendEvent:function(){
                if(this.only_around) {
                    return false;
                }
                if(this.YSMap.mapStatu == 'district') {
                    this.changeToDistrict(); //重新加载区域
                } else if(this.YSMap.mapStatu == 'community') {
                    if(this.is_community_load) {
                        this.changeToCommunity(); //重新加载小区
                    }
                }
            },
            removeMapLoading:function(){
                $('#t_L').css('display', 'none');
                $('#t_L').empty();
            },
            addMapLoading:function(){
                var htm='<div class="loadingsty"><div class="location_indicator"></div><div class="content_loadinfo">努力加载中...</div></div>';
                $('#t_L').html(htm);
                $('#t_L').show();
            },
            loadArea:function(){
                var data = {
                    t: this.house_type,
                    dataType: 'area',
                    s_p:this.s_price,
                    s_a:this.s_area,
                    s_r:this.s_room,
                    s_t:this.s_tag,
                    zoom: this.YSMap.mapObj.getZoom()
                }, this_=this;
                this.YSMap.loadDataAjax = $.ajax({
                    url: this.YSMap.options.dataUrl,
                    type: 'GET',
                    data: data,
                    dataType: 'json',
                    beforeSend:function(XMLHttpRequest){
                        this_.addMapLoading(); //地图加载中
                    },
                    success: function(data) {
                        if (data.houses.length > 0) {
                            this_.YSMap.mapObj.clearOverlays();
                            this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                        } else {
                            //alert('附近未找到房源，请重新选择！');
                        }
                    },
                    complete:function(XMLHttpRequest) {
                        this_.removeMapLoading(); //移除地图加载中
                    },
                    error: function() {
                        // alert('附近未找到房源，请重新选择！');
                        //本地测试
                        var testData= {
                            houses: [
                                {
                                    exchangeNumber: 7608,
                                    rentNumber: 1841,
                                    countNumber: 9449,
                                    title: "朝阳",
                                    point: "116.49674|39.93258",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "6"
                                },
                                {
                                    exchangeNumber: 4228,
                                    rentNumber: 1055,
                                    countNumber: 5283,
                                    title: "海淀",
                                    point: "116.32949|39.99316",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "5"
                                },
                                {
                                    exchangeNumber: 3315,
                                    rentNumber: 781,
                                    countNumber: 4096,
                                    title: "丰台",
                                    point: "116.30185|39.84615",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "7"
                                },
                                {
                                    exchangeNumber: 1310,
                                    rentNumber: 629,
                                    countNumber: 1939,
                                    title: "东城",
                                    point: "116.41493|39.9272",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "1"
                                },
                                {
                                    exchangeNumber: 2159,
                                    rentNumber: 744,
                                    countNumber: 2903,
                                    title: "西城",
                                    point: "116.37855|39.91649",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "2"
                                },
                                {
                                    exchangeNumber: 746,
                                    rentNumber: 59,
                                    countNumber: 805,
                                    title: "石景山",
                                    point: "116.22789|39.90617",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "8"
                                },
                                {
                                    exchangeNumber: 1933,
                                    rentNumber: 692,
                                    countNumber: 2625,
                                    title: "大兴",
                                    point: "116.35355|39.73293",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "990"
                                },
                                {
                                    exchangeNumber: 1796,
                                    rentNumber: 715,
                                    countNumber: 2511,
                                    title: "通州",
                                    point: "116.66406|39.91199",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "970"
                                },
                                {
                                    exchangeNumber: 1010,
                                    rentNumber: 381,
                                    countNumber: 1391,
                                    title: "顺义",
                                    point: "116.65839|40.13294",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "1010"
                                },
                                {
                                    exchangeNumber: 2338,
                                    rentNumber: 524,
                                    countNumber: 2862,
                                    title: "昌平",
                                    point: "116.2405|40.22647",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "21"
                                },
                                {
                                    exchangeNumber: 2571,
                                    rentNumber: 635,
                                    countNumber: 3206,
                                    title: "房山",
                                    point: "116.15337|39.74106",
                                    isOpen: 0,
                                    icon: "w:20,h:29",
                                    type: 2,
                                    id: "1030"
                                }
                            ],
                            zoom: "12"
                        };
                        var data = testData;
                        if (data.houses.length > 0) {
                            this_.YSMap.mapObj.clearOverlays();
                            this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                        } else {
                            //alert('附近未找到房源，请重新选择！');
                        }
                    }
                });
            },
            loadDistrict:function() {

                this.YSMap.resetCondition();
             var  data = {
            t:  this.house_type,
            dataType: 'district',
            s_p:this.s_price,
            s_a:this.s_area,
            s_r:this.s_room,
            s_t:this.s_tag,
            areaid: this.YSMap.area.id,
            sw: this.YSMap.condition.sw,
            ne: this.YSMap.condition.ne,
            zoom: this.YSMap.mapObj.getZoom()
        }, this_=this;
                this.YSMap.loadDataAjax = $.ajax({
                url: this.YSMap.options.dataUrl,
                type: 'GET',
                data: data,
                dataType: 'json',
                beforeSend:function(XMLHttpRequest){
                    this_.addMapLoading(); //地图加载中
            },
            success: function(data) {
                this.YSMap.area.id=''; //重置区域id
                if (data.houses.length > 0) {
                    this_.YSMap.mapObj.clearOverlays();
                    this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                } else {
                    //alert('附近未找到房源，请重新选择！');
                }
            },
            complete:function(XMLHttpRequest) {
                this_.removeMapLoading(); //移除地图加载中
            },
            error: function() {
                //alert('附近未找到房源，请重新选择！');
                var testData = {
                    houses: [
                        {
                            exchangeNumber: 196,
                            rentNumber: 131,
                            countNumber: 327,
                            title: "后沙峪",
                            point: "116.570793|40.119865",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "55476"
                        },
                        {
                            exchangeNumber: 5,
                            rentNumber: 1,
                            countNumber: 6,
                            title: "空港工业区",
                            point: "116.565849|40.084347",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000072"
                        },
                        {
                            exchangeNumber: 105,
                            rentNumber: 25,
                            countNumber: 130,
                            title: "马坡",
                            point: "116.66438|40.177134",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000084"
                        },
                        {
                            exchangeNumber: 57,
                            rentNumber: 17,
                            countNumber: 74,
                            title: "首都机场",
                            point: "116.603443|40.088108",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000105"
                        },
                        {
                            exchangeNumber: 536,
                            rentNumber: 173,
                            countNumber: 709,
                            title: "顺义城",
                            point: "116.633226|40.120592",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000107"
                        },
                        {
                            exchangeNumber: 5,
                            rentNumber: 0,
                            countNumber: 5,
                            title: "天竺",
                            point: "116.594288|40.055234",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000114"
                        },
                        {
                            exchangeNumber: 81,
                            rentNumber: 16,
                            countNumber: 97,
                            title: "杨镇",
                            point: "116.837409|40.159188",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000139"
                        },
                        {
                            exchangeNumber: 25,
                            rentNumber: 18,
                            countNumber: 43,
                            title: "中央别墅区",
                            point: "116.49588|40.105473",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000153"
                        }
                    ],
                    zoom: "15"
                }
                var data=testData;
                this_.YSMap.area.id=''; //重置区域id
                if (data.houses.length > 0) {
                    this_.YSMap.mapObj.clearOverlays();
                    this_.YSMap.addOverlay(data.houses, data.zoom); //绑定点击事件
                } else {
                    //alert('附近未找到房源，请重新选择！');
                }
                   }
                });
             },
            loadCommunity:function() {
                this.YSMap.resetCondition();
        var data = {}, this_=this;
        data = {
            t: this.house_type,
            dataType: 'community',
            s_p:this.s_price,
            s_a:this.s_area,
            s_r:this.s_room,
            s_t:this.s_tag,
            districtid: this.YSMap.district.id,
            zoom: this.YSMap.condition.zoom,
            sw: this.YSMap.condition.sw,
            ne: this.YSMap.condition.ne
        };
        $.ajax({
            url: this.YSMap.options.dataUrl,
            type: 'GET',
            data: data,
            dataType: 'json',
            beforeSend:function(XMLHttpRequest){
                this_.addMapLoading(); //地图加载中
            },
            success: function(data) {
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
            },
            complete:function(XMLHttpRequest) {
                this_.removeMapLoading(); //移除地图加载中
            },
            error: function() {
                //alert('附近未找到房源，请重新选择！');
                var testData = {
                    houses: [
                        {
                            exchangeNumber: 536,
                            rentNumber: 173,
                            countNumber: 709,
                            title: "顺义城",
                            point: "116.633226|40.120592",
                            isOpen: 0,
                            icon: "w:20,h:29",
                            type: 2,
                            id: "10000107"
                        }
                    ],
                    zoom: "17"
                };
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
            }
        });
    },

            changeToList:function(){
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'area';
                this.YSMap.operate.loadList = false;
                this.loadArea();
            },
            changeToCity:function(){},
            changeToArea:function(){
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'area';
                this.YSMap.operate.loadList = false;
                this.loadArea();
            },
            changeToDistrict:function(){
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'area';
                this.YSMap.operate.loadList = false;
                this.loadDistrict();
            },
            changeToCommunity:function(){
                this.YSMap.mapObj.clearOverlays(); //清除地图上所有标注
                this.YSMap.mapStatu = 'area';
                this.YSMap.operate.loadList = false;
                this.loadCommunity();
            },
            switchOperate:function(){
                    if (this.YSMap.mapObj.getZoom() >= 16) { //安全小区
                        this.YSMap.mapStatu = 'community';
                        this.YSMap.operate.loadList = false;
                    } else if(this.YSMap.mapObj.getZoom() >= 14) {//呼家楼
                        this.autoSearchMaker = '';
                        this.autoSearchVal = '';
                        this.YSMap.condition.searchType='all';
                        this.YSMap.mapStatu = 'district';
                    } else {  //通州区
                        this.autoSearchMaker = '';
                        this.autoSearchVal = '';
                        this.YSMap.condition.searchType='all';
                        this.YSMap.mapStatu = 'area';
                    }

                    switch ( this.YSMap.mapStatu) {
                        case 'list'://初使为小区列表状态
                            this.changeToList();
                            break;
                        case 'area'://
                            this.changeToArea();
                            break;
                        case 'district'://
                            this.changeToDistrict();
                            break;
                        case 'community'://
                            this.changeToCommunity();
                            break;
                        default:
                            break;
                    }
            },
            contains:function(parentNode, childNode) {
                if (parentNode.contains) {
                    return parentNode != childNode && parentNode.contains(childNode);
                } else {
                    return !!(parentNode.compareDocumentPosition(childNode) & 16);
                }
            },

             checkHover:function(e, target, vueobj) {
                  var e=e || window.event;
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
        beforeDestroy(){

        }

    }

</script>


