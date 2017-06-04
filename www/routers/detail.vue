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
