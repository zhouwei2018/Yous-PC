<style scoped lang="less">
    @import "../resources/css/detail/detail.less";
    @import "../resources/css/service/page.less";
</style>
<style scoped>

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--list  start-->
        <div detail>

            <!--搜索 start-->
            <div class="breadcrumb-search clearfix">
                <ul class="breadcrumb fl clearfix">
                    <li><a href="javascript:;"><i class="detail-icon"></i>幼狮空间</a>&gt;</li>
                    <li><a href="javascript:;">写字楼出租</a>&gt;</li>
                    <li><a href="javascript:;">朝阳办公室</a>&gt;</li>
                    <li><a href="javascript:;">望京办公楼</a>&gt;</li>
                    <li>望京SOHO</li>
                </ul>
                <div class="search-box">
                    <input type="text" placeholder="请输入写字楼名称或商圈" maxlength="30" id="detail-search-keyword">
                    <button class="search-btn" type="button" id="detail-search-btn">搜索</button>
                </div>
            </div>
            <!--搜索 end-->

            <!--logo-->
            <div class="building-label clearfix">
                <img class="fl" src="../resources/images/ys_weixin.png" alt="望京SOHO二维码">
                <div class="building-tag">
                    <h1>望京SOHO</h1>
                    <ul class="tag-item">
                        <li>互联网</li>
                        <li>LEED认证</li>
                        <li>地标建筑</li>
                        <li>名企开发商</li>
                    </ul>
                </div>
            </div>

            <!--楼盘 tab start-->
            <div class="nav-consulting clearfix">
                <ul class="nav-building fl clearfix">

                    <li class="active"><a href="javascript:;">楼盘首页</a></li>

                    <li><a href="javascript:;">待租房源</a></li>
                    <li><a href="javascript:;">周边配套</a></li>
                    <li><a href="javascript:;">楼盘详情</a></li>
                    <li><a href="javascript:;">历史挂牌</a></li>
                </ul>
            </div>

            <!--scroll nav-->
            <div class="navfixed-box">
                <div class="navfixed" style="display: none">
                    <ul class="nav-building fl">

                        <li class="active"><a href="/detail-184.html">楼盘首页</a></li>

                        <li><a href="/detail/houses-184.html">待租房源</a></li>
                        <li><a href="/detail/surrounding-184.html">周边配套</a></li>
                        <li><a href="/detail/info-184.html">楼盘详情</a></li>
                        <li><a href="/detail/trade-184.html">历史挂牌</a></li>
                    </ul>
                    <div class="consulting">
                        <div class="quick">
                            <i class="detail-icon"></i><div class="tel">
                            <em>400-810-6698</em></div>
                        </div>
                        <div class="online cur-pointer detail-head-consultation" data-id="184"><i class="detail-icon"></i><span class="text">在线咨询</span></div>
                    </div>
                </div>
            </div>
            <!--scroll nav end -->

            <!--楼盘 tab end-->

            <!--img detail-->
            <div class="common-info clearfix">

                <!--轮播图 start-->
                <div class="carousel-wrapper">
                    <div class="carousel-box" id="carousel_building">
                        <div class="carousel-big" id="carousel_big">
                            <ul>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a><img src="../resources/images/detail/det_banner01.jpg" alt=""></a>
                                </li>
                            </ul>
                        </div>
                        <div class="panorama">
                            <img src="../resources/images/detail/panorama.png" id="panorama_btn" class="cur-pointer" width="94" height="62" alt="720°全景">
                        </div>
                        <div class="carousel-small-box">
                            <div class="carousel-small-prev toggle-button" id="carousel_small_prev">
                                <img src="http://img2.static.uban.com/www/images/small-prev.png" width="20" height="62" alt="望京SOHO优办写字楼">
                            </div>
                            <div class="carousel-small clearfix" id="carousel_small">
                                <ul>
                                    <li class="on"><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                    <li><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                    <li><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                    <li><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                    <li><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                    <li><a class="pr db cur-pointer"><div class="small-mask" style="display: block;"></div><img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62" alt="望京SOHO优办写字楼"></a></li>
                                </ul>
                            </div>
                            <div class="carousel-small-next toggle-button" id="carousel_small_next"><img src="http://img2.static.uban.com/www/images/small-next.png" width="20" height="62" alt="保利国际广场优办写字楼"></div>
                        </div>
                    </div>
                    <div class="carousel-mask"></div>
                    <div class="pop-carousel-box" id="pop_carousel_box">
                        <div class="pop-carousel-close"><img src="http://img2.static.uban.com/www/images/swiper-close.png" width="35" height="35" alt="关闭"></div>
                        <div class="pop-carousel" id="pop_carousel">
                            <ul style="width: 11000px;">
                                <li><a class="cur-pointer"><img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-w1000x500" alt="望京SOHO优办写字楼" width="1000" height="500"></a></li>
                            </ul>
                        </div>
                        <div class="pop-carousel-prev" id="pop_carousel_prev"><img src="http://img2.static.uban.com/www/images/zuoanniu.png" width="25" height="45" alt="上一页"></div>
                        <div class="pop-carousel-next" id="pop_carousel_next"><img src="http://img2.static.uban.com/www/images/youanniu.png" width="25" height="45" alt="下一页"></div>
                    </div>
                </div>
                <!--轮播图 end-->

                <div class="building-message">
                    <h2>精品地标，世界500强和众多互联网公司入驻，LEED金级认证</h2>
                    <div class="price-box clearfix mt20">
                        <p class="building-price">
                            <strong>6.5&nbsp;</strong><span>元/<em class="font-num">m²</em>·天</span>
                        </p>
                    </div>
                    <p class="building-address clearfix">
                        <i class="detail-icon fl"></i><span>[朝阳-望京] 望京街与阜安西路交叉路口</span><a href="#map" class="show-map">查看地图</a>
                    </p>
                    <p class="building-consult clearfix">
                        <i class="detail-icon fl"></i><span>距离14号线阜通站808米</span>
                    </p>
                    <div class="around-circle clearfix">
                        <span class="fl"><i class="detail-icon minute"></i>10分钟生活圈</span>
                        <ul class="fl">
                            <li class="subway-cnt"><i class="detail-icon subway"></i>地铁 <em class="text-black">1</em></li>
                            <li><i class="detail-icon restaurant"></i>餐厅 <em class="text-black">33</em></li>
                            <li><i class="detail-icon hotel"></i>酒店 <em class="text-black">25</em></li>
                            <li><i class="detail-icon bodybuilding"></i>健身 <em class="text-black">4</em></li>
                            <li><i class="detail-icon bank"></i>银行 <em class="text-black">22</em></li>
                        </ul>
                    </div>
                    <dl class="rental-info clearfix">
                        <dd>
                            <span>全部待租</span>
                            <p>2380套 <a href="#category_message">查看全部</a></p>
                        </dd>
                        <dd>
                            <span>价格范围</span>
                            <p>5.3~9.8元/<em class="font-num">m²</em>·天</p>
                        </dd>
                        <dd>
                            <span>面积范围</span>
                            <p>0-4576<em class="font-num">m²</em></p>
                        </dd>
                    </dl>

                </div>
            </div>

            <!--building 信息分类start-->
            <div class="category-message-box clearfix ">

                <div class="category-message" id="category_message">

                    <div id="detail-infomation">
                        <div class="category-item-title-first">
                            <h2 class="fl"><i class="detail-icon rent"></i>望京SOHO共有&nbsp;<strong class="text-blue">2380</strong>&nbsp;套房源待租</h2>
                            <a class="show-link mr20" href="/detail/houses-184.html" target="_blank">查看全部</a>
                        </div>
                        <div class="screening-range ph10">
                            <div class="screening-range-list">
                                <span>面积:</span>
                                <ul class="clearfix">
                                    <li>
                                        <a class="on" href="/detail-184.html#detail-infomation">全部</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a1.html#detail-infomation">0-100<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a2.html#detail-infomation">100-200<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a3.html#detail-infomation">200-300<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a4.html#detail-infomation">300-500<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a5.html#detail-infomation">500-1000<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a6.html#detail-infomation">1000-2000<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a7.html#detail-infomation">2000-3000<i class="font-num">m²</i></a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/a8.html#detail-infomation">&gt;3000<i class="font-num">m²</i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="screening-range-list" id="price-list">
                                <span>价格:</span>

                                <ul class="clearfix">
                                    <li>
                                        <a href="/detail-184.html#detail-infomation" class="on">全部</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p1.html#detail-infomation">
                                            1-3元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p2.html#detail-infomation">
                                            3-5元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p3.html#detail-infomation">
                                            5-8元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p4.html#detail-infomation">
                                            8-10元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p5.html#detail-infomation">
                                            10-20元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p6.html#detail-infomation">
                                            20-30元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t1-p7.html#detail-infomation">
                                            &gt;30元</a>
                                    </li>
                                    <li>
                                        <div class="price-wrap">
                                            <a class="active cur-pointer">按单价</a>
                                            <a class="cur-pointer">按总价</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="clearfix none">
                                    <li class="on">
                                        <a href="/detail-184.html#detail-infomation">全部</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p1.html#detail-infomation">
                                            &lt;1万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p2.html#detail-infomation">
                                            1-3万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p3.html#detail-infomation">
                                            3-5万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p4.html#detail-infomation">
                                            5-8万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p5.html#detail-infomation">
                                            8-10万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p6.html#detail-infomation">
                                            10-20万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p7.html#detail-infomation">
                                            20-30万元</a>
                                    </li>
                                    <li>
                                        <a href="/detail-184/t2-p8.html#detail-infomation">
                                            &gt;30万元</a>
                                    </li>
                                    <li>
                                        <div class="price-wrap">
                                            <a class="cur-pointer">按单价</a>
                                            <a class="active cur-pointer">按总价</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="screening-range-list">
                                <span>自定义:</span>
                                <ul class="clearfix pl20">
                                    <li><a class=" fb">面积</a></li>
                                    <li class="area-wrap clearfix pr">
                                        <div>
                                            <input name="temp-beginArea" maxlength="6" value="" type="text" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input name="temp-endArea" maxlength="6" value="" type="text" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="font-num text-black ml05">m²</i>
                                        </div>
                                        <div class="inp-pop none">
                                            <form action="/detail-184.html#detail-infomation" class="fl" id="areaForm">
                                                <input name="beginArea" maxlength="6" value="" type="text" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                                <i class="mv05 text-grayC">-</i>
                                                <input name="endArea" maxlength="6" value="" type="text" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                                <i class="font-num text-black ml05">m²</i>
                                                <a class="confrim-btn cur-pointer ml05 none" id="areaConfirm">确定</a>
                                            </form>
                                        </div>

                                    </li>
                                    <li>
                                        <a class="fb">价格</a>
                                    </li>
                                    <li class="price-inp-wrap pr">
                                        <div>
                                            <input type="text" name="temp-startprice" value="" maxlength="2" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input type="text" name="temp-endprice" value="" class="mr05" maxlength="2" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="text-black">元</i>
                                        </div>
                                        <div class="inp-pop none">
                                            <form action="/detail-184.html#detail-infomation" class="fl" id="priceForm">

                                                <input type="text" name="startprice" value="" maxlength="2" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                                <i class="mv05 text-grayC">-</i>
                                                <input type="text" name="endprice" value="" class="mr05" maxlength="2" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                                <i class="text-black">元</i>

                                                <input type="hidden" name="priceFlag" value="1">
                                                <a class="confrim-btn cur-pointer ml05 none" id="priceConfirm">确定</a>
                                            </form>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="clearfix">

                            <div class="sort-list clearfix fl">
                                <a href="javascript:;" class="tag">默认</a>
                                <a href="javascript:;" class="">最新</a>

                                <a href="javascript:;">价格</a>
                                <a href="javascript:;">面积</a>
                            </div>
                            <div class="fr sort-meet-result ">共 <b>2380</b> 套房源符合条件</div>
                        </div>

                        <ul class="detail-office-list">
                            <li>
                                <a href="javascript:;" target="_blank">
                                    <div class="list-img">
                                        <img src="../resources/images/detail/detail01.jpg" alt="">
                                    </div>
                                    <div class="list-introduce">
                                        <div class="introduce-primary clearfix">
                                            <span class="font20">173<em class="font-num">m²</em>·精装</span>
                                            <div>
                                                <span class="text-gray6"><em class="font-num">3.7</em> 万元/月</span>
                                                <div><b class="font-num text-black">7</b> 元/<span class="font-num">m²</span>·天</div>
                                            </div>
                                        </div>
                                        <div class="introduce-second">
                                            <span><em class="text-gray6">工位：</em>22-43个</span>
                                        </div>
                                        <div class="introduce-time-btn">
                                            <span>更新于：2017-04-17 15:50</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" target="_blank">
                                    <div class="list-img">
                                        <img src="../resources/images/detail/detail01.jpg" alt="">
                                    </div>
                                    <div class="list-introduce">
                                        <div class="introduce-primary clearfix">
                                            <span class="font20">173<em class="font-num">m²</em>·精装</span>
                                            <div>
                                                <span class="text-gray6"><em class="font-num">3.7</em> 万元/月</span>
                                                <div><b class="font-num text-black">7</b> 元/<span class="font-num">m²</span>·天</div>
                                            </div>
                                        </div>
                                        <div class="introduce-second">
                                            <span><em class="text-gray6">工位：</em>22-43个</span>
                                        </div>
                                        <div class="introduce-time-btn">
                                            <span>更新于：2017-04-17 15:50</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <div class="page_box">
                            <span class="pg_pre"><i>&lt;</i>上一页</span>
                            <a class="pg_link" href="javascript:;">1</a>
                            <a class="pg_link" href="javascript:;">2</a>
                            <a class="pg_link" href="javascript:;">3</a>
                            <a class="pg_link" href="javascript:;">4</a>
                            <a class="pg_link" href="javascript:;">…</a>
                            <a class="pg_link" href="javascript:;">14</a>
                            <span class="pg_next">下一页<i>&gt;</i></span>
                        </div>

                    </div>

                    <div class="building-information">
                        <div class="category-item-title">
                            <h2 class="fl"><i class="detail-icon introduce"></i>望京SOHO简介</h2>
                            <a class="show-link mr20" href="/detail/info-184.html" target="_blank">查看详情</a>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <em>业主类型：</em><span>大业主+小业主</span>
                                </td>
                                <td colspan="2">
                                    <em>物业管理公司：</em><span>北京锦融物业有限公司</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <em>净层高：</em><span>2.7m</span>
                                </td>
                                <td>
                                    <em>建筑面积：</em><span>521265m²</span>
                                </td>
                                <td>
                                    <em>物业费：</em><span>24元/m²·月 </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <em>层数：</em><span>47</span>
                                </td>
                                <td>
                                    <em>得房率：</em><span>65%</span>
                                </td>
                                <td>
                                    <em>物业等级：</em><span>甲级</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--右侧悬浮box start-->

                <!--右侧悬浮box end-->
            </div>
            <!--building 信息分类end-->

            <!--分类信息-->
            <div class="category-message-box mt35 clearfix mb40">
                <div class="category-item-title-first mb15 pt05">
                    <h2 class="fl"><i class="detail-icon supporting"></i>中关村SOHO周边配套</h2>
                </div>
                <div class="clearfix">
                    <div class="map-container" id="mapContainer" data-mapx="116.316451" data-mapy="39.989617" data-cnname="中关村SOHO" style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;"><div style="overflow: visible; position: absolute; z-index: 0; left: 0px; top: 0px; cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default;"><div class="BMap_mask" style="position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; user-select: none; width: 800px; height: 420px;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 800;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 700;"><span class="BMap_Marker BMap_noprint" unselectable="on" "="" style="position: absolute; padding: 0px; margin: 0px; border: 0px; cursor: pointer; background: url(&quot;http://api0.map.bdimg.com/images/blank.gif&quot;); width: 24px; height: 32px; left: 391px; top: 166px; z-index: -7997922;" title=""></span><span class="BMap_Marker BMap_noprint" unselectable="on" "="" style="position: absolute; padding: 0px; margin: 0px; border: 0px; cursor: pointer; background: url(&quot;http://api0.map.bdimg.com/images/blank.gif&quot;); width: 24px; height: 32px; left: 480px; top: 166px; z-index: -7997990; user-select: none;" title=""></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 600;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 500;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 400;"><span class="BMap_Marker" unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 0px; height: 0px; left: 391px; top: 166px; z-index: -7997922;"><div style="position: absolute; margin: 0px; padding: 0px; width: 24px; height: 32px; overflow: hidden;"><img src="http://img2.static.uban.com/www/map/images/local.png" style="display: block; border:none;margin-left:0px; margin-top:0px; ; width:24px; height:32px;"></div></span><span class="BMap_Marker" unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 0px; height: 0px; left: 480px; top: 166px; z-index: -7997990;"><div style="position: absolute; margin: 0px; padding: 0px; width: 24px; height: 32px; overflow: hidden;"><img src="http://img2.static.uban.com/www/map/images/marker2.png" style="display: block; border:none;margin-left:0px; margin-top:0px; ; width:24px; height:32px;"></div><label class="BMapLabel" unselectable="on" style="position: absolute; display: inline; cursor: inherit; background-color: transparent; border: none; padding: 1px; white-space: nowrap; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: 23px; font-family: arial, sans-serif; z-index: 80; color: rgb(255, 255, 255); width: 21px; height: 23px; text-align: center; user-select: none; left: 0px; top: 1px;">1</label></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 300;"><span unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 20px; height: 11px; left: 394px; top: 199px;"><div style="position: absolute; margin: 0px; padding: 0px; width: 20px; height: 11px; overflow: hidden;"><img src="http://api0.map.bdimg.com/images/marker_red_sprite.png" style="display: block; border:none;margin-left:-19px; margin-top:-13px; "></div></span><span unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 20px; height: 11px; left: 486px; top: 193px;"><div style="position: absolute; margin: 0px; padding: 0px; width: 20px; height: 11px; overflow: hidden;"><img src="http://api0.map.bdimg.com/images/marker_red_sprite.png" style="display: block; border:none;margin-left:-19px; margin-top:-13px; "></div></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 201;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"><svg version="1.1" type="system" x="1800px" y="1420px" viewBox="-500 -500 1800 1420" style="position: absolute; top: -500px; left: -500px; width: 1800px; height: 1420px;"><path stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd" stroke="#3a6bdb" stroke-width="1" stroke-dasharray="none" fill="#608CEB" stroke-opacity="0.2" fill-opacity="0.2" style="cursor: pointer; user-select: none;" d="M 400 48 L 374 50 350 55 326 65 304 79 285 95 268 114 255 136 245 160 239 185 237 210 239 235 245 260 255 284 268 306 285 325 304 341 326 355 350 365 374 370 400 372 426 370 450 365 474 355 496 341 515 325 532 306 545 284 555 260 561 235 563 210 561 185 555 160 545 136 532 114 515 95 496 79 474 65 450 55 426 50 400 48"></path></svg></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 1;"><div style="position: absolute; overflow: visible; z-index: -100; left: 400px; top: 210px; display: block; transform: translate3d(0px, 0px, 0px);"><img src="http://online3.map.bdimg.com/tile/?qt=tile&amp;x=6322&amp;y=2361&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -121px; top: -82px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=tile&amp;x=6321&amp;y=2361&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -377px; top: -82px; max-width: none; opacity: 1;"><img src="http://online4.map.bdimg.com/tile/?qt=tile&amp;x=6323&amp;y=2361&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 135px; top: -82px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=tile&amp;x=6322&amp;y=2360&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -121px; top: 174px; max-width: none; opacity: 1;"><img src="http://online4.map.bdimg.com/tile/?qt=tile&amp;x=6322&amp;y=2362&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -121px; top: -338px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=tile&amp;x=6324&amp;y=2361&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 391px; top: -82px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=tile&amp;x=6320&amp;y=2361&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -633px; top: -82px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=tile&amp;x=6321&amp;y=2360&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -377px; top: 174px; max-width: none; opacity: 1;"><img src="http://online3.map.bdimg.com/tile/?qt=tile&amp;x=6323&amp;y=2360&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 135px; top: 174px; max-width: none; opacity: 1;"><img src="http://online3.map.bdimg.com/tile/?qt=tile&amp;x=6321&amp;y=2362&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -377px; top: -338px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=tile&amp;x=6323&amp;y=2362&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 135px; top: -338px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=tile&amp;x=6320&amp;y=2360&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -633px; top: 174px; max-width: none; opacity: 1;"><img src="http://online4.map.bdimg.com/tile/?qt=tile&amp;x=6324&amp;y=2360&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 391px; top: 174px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=tile&amp;x=6320&amp;y=2362&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: -633px; top: -338px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=tile&amp;x=6324&amp;y=2362&amp;z=15&amp;styles=pl&amp;scaler=1&amp;udt=20170428" style="position: absolute; border: none; width: 256px; height: 256px; left: 391px; top: -338px; max-width: none; opacity: 1;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 2; display: none;"><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 0; display: none;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 3;"></div></div><div class="pano_close" title="退出全景" style="z-index: 1201; display: none;"></div><a class="pano_pc_indoor_exit" title="退出室内景" style="z-index: 1201; display: none;"><span style="float:right;margin-right:12px;">出口</span></a><ul class="navbtns BMap_noprint anchorBR" style="position: absolute; z-index: 10; text-size-adjust: none; bottom: 25px; right: 20px; top: auto; left: auto;"><li class="navbtn-item item-panorama" id="panoramabtn" data-type="jj"></li><li class="navbtn-item item-hybrid" data-type="wx"></li><li class="navbtn-item item-normal active" data-type="pmt"></li></ul><div class=" anchorBL" style="height: 32px; position: absolute; z-index: 30; text-size-adjust: none; bottom: 20px; right: auto; top: auto; left: 1px;"><a title="到百度地图查看此区域" target="_blank" href="http://map.baidu.com/?sr=1" style="outline: none;"><img style="border:none;width:77px;height:32px" src="http://api0.map.bdimg.com/images/copyright_logo.png"></a></div><div id="zoomer" style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:url(http://api0.map.bdimg.com/images/openhand.cur) 8 8,default"><div class="BMap_zoomer" style="top:0;left:0;"></div><div class="BMap_zoomer" style="top:0;right:0;"></div><div class="BMap_zoomer" style="bottom:0;left:0;"></div><div class="BMap_zoomer" style="bottom:0;right:0;"></div></div><div unselectable="on" class=" BMap_stdMpCtrl BMap_stdMpType0 BMap_noprint anchorTL" style="width: 62px; height: 138px; bottom: auto; right: auto; top: 18px; left: 18px; position: absolute; z-index: 1100; text-size-adjust: none;"><div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="向上平移"></div><div class="BMap_button BMap_panW" title="向左平移"></div><div class="BMap_button BMap_panE" title="向右平移"></div><div class="BMap_button BMap_panS" title="向下平移"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div><div class="BMap_stdMpZoom" style="height: 93px; width: 62px;"><div class="BMap_button BMap_stdMpZoomIn" title="放大一级"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="缩小一级" style="top: 72px;"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSlider" style="height: 54px;"><div class="BMap_stdMpSliderBgTop" style="height: 54px;"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot" style="top: 19px; height: 39px;"></div><div class="BMap_stdMpSliderMask" title="放置到此级别"></div><div class="BMap_stdMpSliderBar" title="拖动缩放" style="cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default; top: 19px;"><div class="BMap_smcbg"></div></div></div><div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div></div><div class="BMap_stdMpGeolocation" style="position: initial; display: none; margin-top: 43px; margin-left: 10px;"><div class="BMap_geolocationContainer" style="position: initial; width: 24px; height: 24px; overflow: hidden; margin: 0px; box-sizing: border-box;"><div class="BMap_geolocationIconBackground" style="width: 24px; height: 24px; background-image: url(http://api0.map.bdimg.com/images/navigation-control/geolocation-control/pc/bg-20x20.png); background-size: 20px 20px; background-position: 3px 3px; background-repeat: no-repeat;"><div class="BMap_geolocationIcon" style="position: initial; width: 24px; height: 24px; cursor: pointer; background-image: url('http://api0.map.bdimg.com/images/navigation-control/geolocation-control/pc/success-10x10.png'); background-size: 10px 10px; background-repeat: no-repeat; background-position: center;"></div></div></div></div></div><div unselectable="on" class=" BMap_cpyCtrl BMap_noprint anchorBL" style="cursor: default; white-space: nowrap; color: black; background: none; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 11px; line-height: 15px; font-family: arial, sans-serif; bottom: 2px; right: auto; top: auto; left: 2px; position: absolute; z-index: 10; text-size-adjust: none;"><span _cid="1" style="display: inline;"><span style="background: rgba(255, 255, 255, 0.701961);padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">©&nbsp;2017 Baidu - GS(2016)2089号&nbsp;- Data © 长地万方</span></span></div></div>
                    <div class="map-conts">
                        <ul id="mapTypeNav" class="map-type-nav">
                            <li class="map-type-item on" data-w="交通" data-key="地铁,公交,停车场,加油站"><i class="detail-icon jt"></i>交通</li>
                            <li class="map-type-item" data-w="餐饮" data-key="中餐,西餐,快餐,咖啡厅,茶座"><i class="detail-icon ct"></i>餐饮</li>
                            <li class="map-type-item" data-w="酒店" data-key="星级酒店,快捷酒店,公寓式酒店"><i class="detail-icon jd"></i>酒店</li>
                            <li class="map-type-item" data-w="健身" data-key="体育场馆,极限运动场所,健身中心"><i class="detail-icon js"></i>健身</li>
                            <li class="map-type-item" data-w="金融" data-key="银行,ATM,投资理财"><i class="detail-icon yh"></i>金融</li>
                        </ul>
                        <ul id="typeNavSel" class="type-item-sel"><li class="currenttype">地铁</li><li>公交</li><li>停车场</li><li>加油站</li></ul>
                        <ul id="resultsPanel" class="results-panel"><li title="中关村（地铁4号线大兴线）"><i>1</i><p>中关村（地铁4号线大兴线）</p><span>565米</span></li></ul>
                    </div>
                </div>
            </div>

        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    import '../resources/plugin/pic_tab/pic_tab.js';

    export default {
        components: {header1, footer1},

        data(){
            return {}
        },
        mounted: function () {
            //首屏轮播
            $('#carousel_building').banqh({
                box: '#carousel_building',//总框架
                pic: '#carousel_big',//大图框架
                pnum: '#carousel_small',//小图框架
                prev_btn: '#carousel_small_prev',//小图左箭头
                next_btn: '#carousel_small_next',//小图右箭头
                autoplay: true,//是否自动播放
                interTime: 5000,//图片自动切换间隔
                delayTime: 400,//切换一张图片时间
                pop_delayTime: 400,//弹出框切换一张图片时间
                order: 0,//当前显示的图片（从0开始）
                picdire: true,//大图滚动方向（true为水平方向滚动）
                mindire: true,//小图滚动方向（true为水平方向滚动）
                min_picnum: 4,//小图显示数量
                pop_up: true,//大图是否有弹出框
                pop_div: '#pop_carousel_box',//弹出框框架
                pop_pic: '#pop_carousel',//弹出框图片框架
                pop_xx: '.pop-carousel-close',//关闭弹出框按钮
                pop_prev: '#pop_carousel_prev',//弹出框左箭头
                pop_next: '#pop_carousel_next',//弹出框右箭头
                mhc: '.carousel-mask'//朦灰层
            });

        },
        methods: {}
    }
</script>
