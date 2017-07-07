<style lang="less">
    /*分页*/
    .page_wrap {
        text-align: center;
        width: 400px;
        margin: 0 auto;
        padding-top: 50px;
    }
</style>


<template>
    <div class="common-info clearfix">
        <!--building 信息分类start-->
        <div class="category-message-box clearfix ">

            <div class="category-message" id="category_message">

                <div id="detail-infomation">
                    <div class="category-item-title-first">
                        <h2 class="fl"><i class="detail-icon rent"></i>建外SOHO共有&nbsp;<strong
                                class="text-blue">2380</strong>&nbsp;套房源待租</h2>
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
                                    <a href="/detail-184/a2.html#detail-infomation">100-200<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a3.html#detail-infomation">200-300<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a4.html#detail-infomation">300-500<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a5.html#detail-infomation">500-1000<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a6.html#detail-infomation">1000-2000<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a7.html#detail-infomation">2000-3000<i
                                            class="font-num">m²</i></a>
                                </li>
                                <li>
                                    <a href="/detail-184/a8.html#detail-infomation">&gt;3000<i
                                            class="font-num">m²</i></a>
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
                                        <input name="temp-beginArea" maxlength="6" value="" type="text"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="mv05 text-grayC">-</i>
                                        <input name="temp-endArea" maxlength="6" value="" type="text"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="font-num text-black ml05">m²</i>
                                    </div>
                                    <div class="inp-pop none">
                                        <form action="/detail-184.html#detail-infomation" class="fl" id="areaForm">
                                            <input name="beginArea" maxlength="6" value="" type="text"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input name="endArea" maxlength="6" value="" type="text"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
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
                                        <input type="text" name="temp-startprice" value="" maxlength="2"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="mv05 text-grayC">-</i>
                                        <input type="text" name="temp-endprice" value="" class="mr05" maxlength="2"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="text-black">元</i>
                                    </div>
                                    <div class="inp-pop none">
                                        <form action="/detail-184.html#detail-infomation" class="fl" id="priceForm">

                                            <input type="text" name="startprice" value="" maxlength="2"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input type="text" name="endprice" value="" class="mr05" maxlength="2"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
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
                                    <img src="../../resources/images/detail/detail01.jpg" alt="">
                                </div>
                                <div class="list-introduce">
                                    <div class="introduce-primary clearfix">
                                        <span class="font20">173<em class="font-num">m²</em>·精装</span>
                                        <div>
                                            <span class="text-gray6"><em class="font-num">3.7</em> 万元/月</span>
                                            <div><b class="font-num text-black">7</b> 元/<span
                                                    class="font-num">m²</span>·天
                                            </div>
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
                                    <img src="../../resources/images/detail/detail01.jpg" alt="">
                                </div>
                                <div class="list-introduce">
                                    <div class="introduce-primary clearfix">
                                        <span class="font20">173<em class="font-num">m²</em>·精装</span>
                                        <div>
                                            <span class="text-gray6"><em class="font-num">3.7</em> 万元/月</span>
                                            <div><b class="font-num text-black">7</b> 元/<span
                                                    class="font-num">m²</span>·天
                                            </div>
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

                    <!--page-->
                    <div class="page_wrap" v-show="pageFlag">
                        <Page :total="100" @on-change="change"></Page>
                    </div>

                </div>
            </div>

            <!--右侧悬浮box start-->
            <div class="sidebar_box">
                <div class="sidebar_main" id="sidebar_fix">
                    <div class="booking_house mt20">
                        <div class="booking_house_mes">
                            <h2>快速找房</h2>
                            <form id="freeLookForm" class="nice-validator n-default" novalidate="novalidate">
                                <input type="hidden" name="flag" value="5">
                                <input name="searchengine" type="hidden" value="">
                                <input name="phone" class="form_control form_telphone" type="text"
                                       placeholder="手机号" maxlength="11"
                                       onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                       onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')"
                                       aria-required="true" data-target="#msg-phone" data-tip="请输入您的手机号码。">
                                <span class="db text-left mt05" id="msg-phone"></span>
                                <div class="form_control form_btn mt10 cur_pointer" id="list_yijianyuyue">一键咨询
                                </div>
                            </form>

                            <p class="nearby">客服将在10分钟内联系您</p>
                        </div>
                        <div class="ph20 tc text_gray9">
                            咨询热线：<b class="text_pink_app">400-810-6698</b>
                        </div>
                    </div>
                    <div class="app_download mt20">
                        <p>随时随地查阅最新房源，<br>即刻关注官方微信</p>
                        <div class="mh25">
                            <img src="http://img2.static.uban.com/www/images/appicon72.png" alt="幼狮APP">
                            <img src="../../resources/images/ys_weixin.jpg" class="ml25 weixin_img"
                                 alt="扫描二维码关注">
                        </div>
                        <p>扫描二维码关注</p>
                    </div>
                </div>
            </div>
            <!--右侧悬浮box end-->
        </div>
        <!--building 信息分类end-->
    </div>

</template>

<script>
    export default {
        data(){
            return {
                pageFlag: true, //页码是否显示
            }
        },
        methods: {
            //分页
            change(page){
                this.curPage = page;
                this.getList(); //获取楼盘列表
                $(window).scrollTop(0);
            },
        },

        mounted(){

        }
    }
</script>
