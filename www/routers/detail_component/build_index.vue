<style lang="less" scoped>
    .page_det_box {
        padding: 30px 0;
        margin: 0 auto;
        width: 400px;
    }
</style>


<template>
    <div>
        <!--img detail-->
        <div class="common-info clearfix">
            <!--轮播图 start-->
            <div class="carousel-wrapper">
                <div class="carousel-box" id="carousel_building">
                    <div class="carousel-big" id="carousel_big">
                        <ul>
                            <li>
                                <a><img src="../../resources/images/detail/det_banner01.jpg" alt=""></a>
                            </li>
                            <li>
                                <a><img src="../../resources/images/detail/det_banner01.jpg" alt=""></a>
                            </li>
                            <li>
                                <a><img src="../../resources/images/detail/det_banner01.jpg" alt=""></a>
                            </li>
                            <li>
                                <a><img src="../../resources/images/detail/det_banner01.jpg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="panorama">
                        <img src="../../resources/images/detail/panorama.png" id="panorama_btn" class="cur-pointer"
                             width="94" height="62" alt="720°全景">
                    </div>
                    <div class="carousel-small-box">
                        <div class="carousel-small-prev toggle-button" id="carousel_small_prev">
                            <img src="http://img2.static.uban.com/www/images/small-prev.png" width="20" height="62"
                                 alt="">
                        </div>
                        <div class="carousel-small clearfix" id="carousel_small">
                            <ul>
                                <li class="on"><a class="pr db cur-pointer">
                                    <div class="small-mask" style="display: block;"></div>
                                    <img src="../../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                         alt=""></a></li>
                                <li><a class="pr db cur-pointer">
                                    <div class="small-mask" style="display: block;"></div>
                                    <img src="../../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                         alt=""></a></li>
                                <li><a class="pr db cur-pointer">
                                    <div class="small-mask" style="display: block;"></div>
                                    <img src="../../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                         alt=""></a></li>
                                <li><a class="pr db cur-pointer">
                                    <div class="small-mask" style="display: block;"></div>
                                    <img src="../../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                         alt=""></a></li>
                            </ul>
                        </div>
                        <div class="carousel-small-next toggle-button" id="carousel_small_next"><img
                                src="http://img2.static.uban.com/www/images/small-next.png" width="20" height="62"
                                alt=""></div>
                    </div>
                </div>
                <div class="carousel-mask"></div>
                <div class="pop-carousel-box" id="pop_carousel_box">
                    <div class="pop-carousel-close"><img
                            src="http://img2.static.uban.com/www/images/swiper-close.png" width="35" height="35"
                            alt="关闭"></div>
                    <div class="pop-carousel" id="pop_carousel">
                        <ul style="width: 11000px;">
                            <li><a class="cur-pointer"><img
                                    src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-w1000x500"
                                    alt="" width="1000" height="500"></a></li>
                        </ul>
                    </div>
                    <div class="pop-carousel-prev" id="pop_carousel_prev"><img
                            src="http://img2.static.uban.com/www/images/zuoanniu.png" width="25" height="45"
                            alt="上一页"></div>
                    <div class="pop-carousel-next" id="pop_carousel_next"><img
                            src="http://img2.static.uban.com/www/images/youanniu.png" width="25" height="45"
                            alt="下一页"></div>
                </div>
            </div>
            <!--轮播图 end-->

            <div class="building-message">
                <h2 v-text="highlights"></h2>
                <div class="price-box clearfix mt20">
                    <p class="building-price">
                        <strong v-text="price">&nbsp;</strong><span>元/<em class="font-num">m²</em>·天</span>
                    </p>
                </div>
                <p class="building-address clearfix">
                    <i class="detail-icon fl"></i><span v-text="address"></span><a href="#buildmap" class="show-map">查看地图</a>
                </p>
                <p class="building-consult clearfix">
                    <i class="detail-icon fl"></i><span>距离14号线阜通站808米</span>
                </p>

                <!--电话咨询-->
                <div class="consulting clearfix mobile_consult">
                    <div class="quick">
                        <i class="detail-icon"></i>
                        <div class="tel">
                            <em class="tel_num_all">400-078-8800</em></div>
                    </div>
                    <div class="mobile_box">
                        <a href="javascript:;" class="call_back_btn">免费回拨</a>
                        <a href="javascript:;" class="call_back_btn">在线咨询</a>
                    </div>
                </div>

                <dl class="rental-info clearfix">

                    <dd>
                        <span>全部待租</span>
                        <span><i class="bold">2380</i> 套 <a href="#category_message">查看全部</a></span>
                    </dd>
                    <dd>
                        <span>价格范围</span>
                        <span><i class="bold" v-text="min_renge_price"></i> ~ <i class="bold"
                                                                                 v-text="max_renge_price"></i> 元/<em
                                class="font-num">m²</em>·天</span>
                    </dd>
                    <dd>
                        <span>面积范围</span>
                        <span><i class="bold" v-text="min_renge_area"></i> - <i class="bold"
                                                                                v-text="max_renge_area"></i><em
                                class="font-num"> m²</em></span>
                    </dd>
                </dl>
                <div class="around-circle clearfix">
                    <span class="fl"><i class="detail-icon minute"></i>10分钟生活圈</span>
                    <ul class="fl">
                        <li class="subway-cnt"><i class="detail-icon subway"></i>地铁 <em class="text-black">1</em>
                        </li>
                        <li><i class="detail-icon restaurant"></i>餐厅 <em class="text-black">33</em></li>
                        <li><i class="detail-icon hotel"></i>酒店 <em class="text-black">25</em></li>
                        <li><i class="detail-icon bodybuilding"></i>健身 <em class="text-black">4</em></li>
                        <li><i class="detail-icon bank"></i>银行 <em class="text-black">22</em></li>
                    </ul>
                </div>

            </div>
        </div>

        <!--building 信息分类start-->
        <div class="category-message-box clearfix ">

            <div class="category-message" id="category_message">

                <div id="detail-infomation">
                    <div class="category-item-title-first">
                        <h2 class="fl"><i class="detail-icon rent"></i>{{buildingNameSingle}}共有&nbsp;<strong
                                class="text-blue">2380</strong>&nbsp;套房源待租</h2>
                        <a class="show-link mr20" href="javascript:;" target="_blank" @click="lookAll()">查看全部</a>
                    </div>


                    <div class="screening-range ph10" v-show="initFlag">

                        <!--面积-->
                        <div class="screening-range-list">
                            <span>面积:</span>
                            <ul class="clearfix">
                                <li v-for="(item4,index) in area_arr" v-if="index == 0">
                                    <a href="javascript:;"
                                       :id="item4.code"
                                       :class="{on:areaActive == index}"
                                       :data-sortType="'sort_are_'+index"
                                       @click="sel_area_list($event)"
                                    >全部</a>
                                </li>
                                <template v-else>
                                    <li v-if="index == area_arr.length-1">
                                        <a href="javascript:;">>{{item4.minnum}}m²</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;">{{item4.minnum}}-{{item4.maxnum}}m²</a>
                                    </li>
                                </template>
                                <li></li>
                            </ul>
                        </div>

                        <!--价格-->
                        <div class="screening-range-list" id="price-list">
                            <span>价格:</span>

                            <ul class="clearfix">
                                <li v-for="(item2,index) in range_unit_prices" v-if="index == 0">
                                    <a href="javascript:;"
                                       :id="item2.code"
                                       :class="{on:areaActive == index}"
                                       :data-sortType="'sort_are_'+index"
                                       @click="sel_area_list($event)"
                                    >全部</a>
                                </li>
                                <template v-else>
                                    <li v-if="index == range_unit_prices.length-1">
                                        <a href="javascript:;">>{{item2.minnum}}元</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;">{{item2.minnum}}-{{item2.maxnum}}元</a>
                                    </li>
                                </template>

                                <li>
                                    <div class="price-wrap">
                                        <a class="active cur-pointer">按单价</a>
                                        <a class="cur-pointer">按总价</a>
                                    </div>
                                </li>
                            </ul>
                            <ul class="clearfix none">
                                <li class="on">
                                    <a href="javascript:;">全部</a>
                                </li>
                                <li>
                                    <a href="javascript:;">&lt;1万元</a>
                                </li>
                                <li>
                                    <div class="price-wrap">
                                        <a class="cur-pointer">按单价</a>
                                        <a class="active cur-pointer">按总价</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!--自定义面积和价格-->
                        <div class="screening-range-list">
                            <span>自定义:</span>
                            <ul class="clearfix pl20">
                                <li><a class="fb">面积</a></li>
                                <li class="area-wrap clearfix pr" @mouseenter="areaShowFlag = true"
                                    @mouseleave="areaShowFlag = false">
                                    <div>
                                        <input name="temp-beginArea"
                                               maxlength="6"
                                               value=""
                                               type="text"
                                               autocomplete="off"
                                               v-model="bArea"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="mv05 text-grayC">-</i>
                                        <input name="temp-endArea"
                                               maxlength="6"
                                               value=""
                                               type="text"
                                               autocomplete="off"
                                               v-model="eArea"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="font-num text-black ml05">m²</i>
                                    </div>
                                    <div class="inp-pop" v-show="areaShowFlag">
                                        <form action="/detail-184.html#detail-infomation" class="fl" id="areaForm">
                                            <input name="beginArea"
                                                   maxlength="6"
                                                   value=""
                                                   type="text"
                                                   autocomplete="off"
                                                   v-model="bArea"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input name="endArea"
                                                   maxlength="6"
                                                   value=""
                                                   type="text"
                                                   autocomplete="off"
                                                   v-model="eArea"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="font-num text-black ml05">m²</i>
                                            <a class="confrim-btn cur-pointer ml05" @click="self_area($event)"
                                               id="areaConfirm">确定</a>
                                        </form>
                                    </div>
                                </li>
                                <li>
                                    <a class="fb">价格</a>
                                </li>
                                <li class="price-inp-wrap pr" @mouseenter="priceShowFlag = true"
                                    @mouseleave="priceShowFlag = false">
                                    <div>
                                        <input type="text"
                                               autocomplete="off"
                                               name="temp-startprice"
                                               value=""
                                               maxlength="3"
                                               v-model="bNum"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="mv05 text-grayC">-</i>
                                        <input type="text"
                                               autocomplete="off"
                                               name="temp-endprice"
                                               value=""
                                               class="mr05"
                                               maxlength="2"
                                               v-model="eNum"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <i class="text-black">元</i>
                                    </div>
                                    <div class="inp-pop" v-show="priceShowFlag">
                                        <form action="/detail-184.html#detail-infomation" class="fl" id="priceForm">

                                            <input type="text"
                                                   autocomplete="off" name="startprice" value="" maxlength="2"
                                                   v-model="bNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="mv05 text-grayC">-</i>
                                            <input type="text" autocomplete="off" name="endprice"
                                                   value="" class="mr05" maxlength="2"
                                                   v-model="eNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <i class="text-black">元</i>

                                            <input type="hidden" name="priceFlag" value="1">
                                            <a class="confrim-btn cur-pointer ml05" id="priceConfirm">确定</a>
                                        </form>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>

                    <!--搜索结果-->
                    <div class="clearfix">

                        <div class="sort-list clearfix fl" @click="buildSort($event)">
                            <a href="javascript:;" class="tag">默认</a>
                            <a href="javascript:;">最新</a>
                            <a href="javascript:;">价格<span></span></a>
                            <a href="javascript:;">面积<span></span></a>
                        </div>
                        <div class="fr sort-meet-result ">共 <b>2380</b> 套房源符合条件</div>
                    </div>

                    <!--加载中-->
                    <div class="loading_wrap" v-show="loadingFlag">
                        <Spin fix>
                            <Icon type="load-c" size=20     class="demo-spin-icon-load"></Icon>
                            <div>加载中……</div>
                        </Spin>
                    </div>

                    <ul class="detail-office-list">
                        <li v-for="item in buildList">
                            <a href="javascript:;" target="_blank">
                                <div class="list-img">
                                    <img :src="item.housing_icon" alt="">
                                </div>
                                <div class="list-introduce">
                                    <div class="introduce-primary clearfix">
                                        <span class="font20">{{item.housing_area}}<em
                                                class="font-num">m²</em>·{{item.decoration_level}}</span>
                                        <div>
                                            <span class="text-gray6"><em class="font-num"
                                                                         v-text="item.monthly_price"></em> 万元/月</span>
                                            <div><b class="font-num text-black" v-text="item.daily_price"></b> 元/<span
                                                    class="font-num">m²</span>·天
                                            </div>
                                        </div>
                                    </div>
                                    <div class="introduce-second">
                                        <span><em class="text-gray6">工位：</em>{{item.workstation}}个</span>
                                    </div>
                                    <div class="introduce-time-btn">
                                        <span>更新于：{{item.refreshTime}}</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <!--page-->
                    <div class="page_det_box" v-show="pageFlag">
                        <Page :total="100" @on-change="change"></Page>
                    </div>

                </div>

                <div class="building-information">
                    <div class="category-item-title">
                        <h2 class="fl"><i class="detail-icon introduce"></i>{{buildingNameSingle}}简介</h2>
                        <a class="show-link mr20" href="javascript:;" target="_blank">查看详情</a>
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
            <div class="sidebar_box">
                <div class="sidebar_main" id="sidebar_fix">
                    <div class="booking_house mt20">
                        <div class="booking_house_mes">
                            <h2>快速找房</h2>
                            <form id="freeLookForm" class="nice-validator n-default" novalidate="novalidate">
                                <input type="hidden" name="flag" value="5">
                                <input name="searchengine" type="hidden" value="">
                                <input name="phone" class="form_control form_telphone" type="text" autocomplete="off"
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
                            <img src="../../resources/images/ys_logo2.jpg" alt="幼狮APP">
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

        <!--周边配套信息-->
        <div class="category-message-box clearfix " id="buildmap">
            <!--地图-->
            <map-part :building-name="buildingName" :position-data="positionData" v-if="positionData"></map-part>
        </div>

    </div>

</template>

<script>

    import mapPart from '../../components/map-part.vue';
    import '../../resources/plugin/pic_tab/pic_tab.js';

    export default {
        data(){
            return {
                buildingName: "建外SOHO", //拼出的楼盘周边配套
                buildingNameSingle: "", //单独楼盘名称

                positionData: "", //经纬度

                pageFlag: true, //页码是否显示

                building_id: "", //楼盘id
                highlights: "", //特色
                address: "",//地址
                price: "",//价格
                min_renge_area: "",
                max_renge_area: "",
                min_renge_price: "",
                max_renge_price: "",
                lease_nums: "",

                //筛选部分
                initFlag: true,
                areaActive: 0,
                perPriceActive: 0,
                totPriceActive: 0,
                //面积筛选数组
                area_arr: [],

                //价格筛选数组
                range_unit_prices: [],

                range_total_prices: [],

                areaShowFlag: false, //默认面积窗不显示
                bArea: "", //起始面积
                eArea: "", //结束面积

                //单价
                priceShowFlag: false, //默认价格窗不显示
                bNum: "", //起始价格
                eNum: "", //结束价格

                buildList: [], //楼盘列表，搜索结果
                total_items: 0, //结果总数
                total_pages: 0, //总页数
                //分页
                pageSize: 10, //每页个数
                curPage: 1, //当前页数

                loadingFlag: true, //loading是否显示
                pageFlag: false, //页码是否显示

                //搜索结果
                decoration_level: "",//装修程度
                housing_area: "", //面积
                daily_price: "", //日价格
                monthly_price: "", //月价格
                housing_icon: "", //图片
                workstation: "", //工位

                //scroll flag
                detScrollFlag: true,

            }
        },
        components: {
            mapPart
        },
        methods: {

            //获取筛选条件
            getSortList(){
                var _this = this;
                //调用区域查询接口，更新数据
                this.$http.post(
                    this.$api,
                    {
                        "parameters": {},
                        "foreEndType": 2,
                        "code": "90000301"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        _this.area_arr = result.data.range_areas; //面积arr

                        var all_area = {
                            code: "area_all",
                            name: "全部"
                        };
                        _this.area_arr.unshift(all_area);
                        //alert(JSON.stringify(_this.area_arr));

                        _this.range_unit_prices = result.data.range_unit_prices; //单价


                        var all_range_unit = {
                            code: "range_pri_per_all",
                            name: "全部"
                        };
                        _this.range_unit_prices.unshift(all_range_unit);

                        _this.range_total_prices = result.data.range_total_prices; //总价

                        var all_range_total = {
                            code: "range_pri_tot_all",
                            name: "全部"
                        };
                        _this.range_total_prices.unshift(all_range_total);

                        _this.initFlag = true;


                    } else {
                        this.$Message.error(result.message);
                    }
                }, function (res) {
                    this.$Message.error('获取搜索条件失败');
                });
            },

            //获取楼盘详情
            getDetail(){
                var _this = this;

                this.building_id = this.$route.query.building_id;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "building_id": this.building_id,
                            "area": "",
                            "price_dj": "[0,1000000]",
                            "price_zj": "",
                            "orderby": "",
                            "curr_page": "1",
                            "items_perpage": "10"
                        },
                        "foreEndType": 2,
                        "code": "30000002"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        if (result.data) {
                            _this.buildingName = result.data.building_name + '周边配套';
                            _this.buildingNameSingle = result.data.building_name;
                            var obj = {
                                name: result.data.building_name,
                                labels: result.data.label.split('、')
                            };
                            _this.$emit("listenchild", obj);

                            _this.highlights = result.data.highlights == "" ? '特色标题占位' : result.data.highlights; //特色

                            _this.district = result.data.district == null ? '区域' : result.data.district; //区域
                            _this.business = result.data.business == null ? '商圈' : result.data.business; //商圈

                            _this.address = '[' + _this.district + '-' + _this.business + '] ' + result.data.address;
                            _this.price = result.data.price == null ? '--' : result.data.price;
                            _this.positionData = result.data.longitude + ',' + result.data.latitude;

                            _this.min_renge_area = result.data.min_renge_area == null ? '--' : result.data.min_renge_area;
                            _this.max_renge_area = result.data.max_renge_area == null ? '--' : result.data.max_renge_area;
                            _this.min_renge_price = result.data.min_renge_price == null ? '--' : result.data.min_renge_price;
                            _this.max_renge_price = result.data.max_renge_price == null ? '--' : result.data.max_renge_price;
                            _this.lease_nums = result.data.lease_nums == null ? '--' : result.data.lease_nums;
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

            //分页
            change(page){
                this.curPage = page;
                this.getDetList(); //获取楼盘列表
                $(window).scrollTop(0);
            },

            //获取楼盘列表
            getDetList(){
                var _this = this;

                this.buildList = [];

                this.loadingFlag = true;
                this.pageFlag = false;

                this.buildingShowFlag = false;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "building_id": this.building_id,
                            "area": "",
                            "price_dj": "[0,100000]",
                            "price_zj": "",
                            "orderby": "D",
                            "curr_page": "1",
                            "items_perpage": "5"
                        },
                        "foreEndType": 2,
                        "code": "30000003"
                    }
                ).then(function (res) {
                    //var result = JSON.parse(res.bodyText);
                    _this.loadingFlag = false;

                    var result = {
                        "items_perpage": "long,房源列表每页记录数",
                        "houses": [{
                            "id": "int,房源id",
                            "decoration_level": "装修水平",
                            "building_id": "int,楼盘id",
                            "housing_area": "180",
                            "housing_name": "房源名称",
                            "daily_price": "7",
                            "monthly_price": "3.9",
                            "housing_icon": "http://116.62.71.76:81/default-youshi.png",
                            "workstation": "200",
                            "refreshTime": "2017-07-07 22:03"
                        }],
                        "total_items": "long,房源列表总记录数",
                        "total_pages": "long,房源列表总页数",
                        "current_page": "long,房源列表当前页"
                    }

                    _this.buildList = result.houses;
                    _this.decoration_level = result.decoration_level;
                    _this.housing_area = result.housing_area;
                    _this.daily_price = result.daily_price;
                    _this.monthly_price = result.monthly_price;
                    _this.housing_icon = result.housing_icon;
                    _this.workstation = result.workstation;

//                    if (result.success) {
//
//
//                    } else {
//                        _this.buildingShowFlag = true;
//                        _this.total_items = 0;
//                    }

                }, function (res) {
                    this.$Message.error('获取楼盘列表失败');
                });
            },

            //查看全部
            lookAll(){
                this.$emit('listenchild2');
            },

            //自定义面积
            self_area(){
                this.area = [this.bArea, this.eArea];
                this.getDetList();
            },

            //自定义单价
            self_price_per(){
                this.price_dj = [this.bNum, this.eNum];
                this.getDetList();
            },

            //排序筛选 默认：D ，面积升序：AA，面积降序：AD，价格升序：PA，价格降序：PD
            buildSort(e){
                var target = null;
                if ($(e.target).parent()[0].tagName == 'A') {
                    target = $(e.target).parent();
                } else if ($(e.target)[0].tagName == 'A') {
                    target = $(e.target);
                }
                if (target) {
                    target.addClass('tag').siblings().removeClass('tag');
                    if (target.find('span').length > 0) {
                        target.siblings().find('span').hide();
                        target.find('span').css('display', 'inline-block');
                        if (target.find('span').hasClass('up')) {
                            target.find('span').removeClass('up');
                            target.find('span').html('↓');
                            if (target.attr('id') == 'areaSort') {
                                this.orderby = 'AD'; //面积降序：AD
                            } else if (target.attr('id') == 'priceSort') {
                                this.orderby = 'AD'; //价格降序：PD
                            }
                        } else {
                            target.find('span').addClass('up').html('↑');
                            if (target.attr('id') == 'areaSort') {
                                this.orderby = 'AA'; //面积升序：AA
                            } else if (target.attr('id') == 'priceSort') {
                                this.orderby = 'AD'; //价格升序：PA
                            }
                        }
                    } else {
                        this.orderby = 'D'; //默认排序D
                    }
                    this.getDetList(); //排序后的列表
                }
            },
        },

        mounted(){
            var _this = this;

            this.getSortList(); //获取筛选条件

            this.getDetail(); //获取楼盘详情

            this.getDetList(); //搜索结果列表

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

            //top悬浮窗固定
            $(window).on("scroll", function () {
                if (_this.detScrollFlag) {
                    var window_height = $(window).height(); //浏览器当前窗口可视区域高度
                    var document_height = $(document).height(); //浏览器当前窗口文档的高度
                    var scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    var navStandard_line = $('.navfixed-box').offset().top;
                    var standard_line = $('.category-message-box').offset().top;
                    var standard_line_wrap = $('#category_message').height();
                    var fixed_self = $('#sidebar_fix').height();
                    if (scroll_top > navStandard_line) {
                        $('.navfixed').slideDown(50);
                    } else {
                        $('.navfixed').slideUp(50);
                    }

                    if (scroll_top > (standard_line)) {
                        $('#sidebar_fix').addClass('fixed');
                        $('.sidebar-box').css('bottom', 'auto');
                    } else {
                        $('#sidebar_fix').removeClass('fixed');
                        $('.sidebar-box').css('bottom', 'auto');
                    }

                    if (scroll_top > (standard_line + standard_line_wrap - fixed_self - 66)) {
                        $('#sidebar_fix').removeClass('fixed');
                        $('.sidebar-box').css('bottom', '0');
                    }
                }

            });

            //单价总价切换
            $('.cur-pointer').click(function () {
                $('#price-list').children('ul').toggleClass('none');
            });

            //input propertchange事件
            $('input[name="beginArea"]').on("input propertychange", function () {
                if (_this.bArea && _this.eArea) {
                    $('#areaConfirm').show();
                } else {
                    $('#areaConfirm').hide();
                }
            });
            $('input[name="endArea"]').on("input propertychange", function () {
                if (_this.bArea && _this.eArea) {
                    $('#areaConfirm').show();
                } else {
                    $('#areaConfirm').hide();
                }
            });

            $('input[name="startprice"]').on("input propertychange", function () {
                if (_this.bNum && _this.eNum) {
                    $('#priceConfirm').show();
                } else {
                    $('#priceConfirm').hide();
                }
            });
            $('input[name="endprice"]').on("input propertychange", function () {
                if (_this.bNum && _this.eNum) {
                    $('#priceConfirm').show();
                } else {
                    $('#priceConfirm').hide();
                }
            });


        },

        destroyed () {
            this.detScrollFlag = false;
        }
    }
</script>
