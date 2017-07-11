<style lang="less">
    @import "../resources/css/detail/detail.less";
    @import "../resources/css/right_column/right_column.less";
</style>
<style>
    .anchorBL {
        display: none !important;
    }

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
                    <li><a href="javascript:;">办公楼</a>&gt;</li>
                    <li><a href="javascript:;" v-text="buildingName"></a>></li>
                    <li v-text="buildingName+'办公楼'"></li>
                </ul>
            </div>
            <!--搜索 end-->
            <!--labels-->
            <div class="building-label clearfix">
                <div class="building-tag">
                    <h1 v-text="buildingName"></h1>
                    <ul class="tag-item">
                        <!--<li>互联网</li>-->
                        <li v-for="item in labels" v-text="item"></li>
                    </ul>
                </div>
            </div>

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
                            </ul>
                        </div>
                        <div class="panorama">
                            <img src="../resources/images/detail/panorama.png" id="panorama_btn" class="cur-pointer"
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
                                        <img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                             alt=""></a></li>
                                    <li><a class="pr db cur-pointer">
                                        <div class="small-mask" style="display: block;"></div>
                                        <img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                             alt=""></a></li>
                                    <li><a class="pr db cur-pointer">
                                        <div class="small-mask" style="display: block;"></div>
                                        <img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
                                             alt=""></a></li>
                                    <li><a class="pr db cur-pointer">
                                        <div class="small-mask" style="display: block;"></div>
                                        <img src="../resources/images/detail/det_sm_banner01.jpg" width="94" height="62"
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
                            <strong v-text="daily_price">&nbsp;</strong><span>元/<em class="font-num">m²</em>·天</span>
                        </p>
                    </div>
                    <p class="building-address clearfix">
                        <i class="detail-icon fl"></i><span v-text="address"></span><a href="#buildmap"
                                                                                       class="show-map">查看地图</a>
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
                            <span><i class="bold" v-text="total_items"></i> 套 <a
                                    href="#category_message">查看全部</a></span>
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

                    <div class="building-information">
                        <div class="category-item-title">
                            <h2 class="fl"><i class="detail-icon introduce"></i>{{buildingName}}简介</h2>
                            <a class="show-link mr20" href="javascript:;" target="_blank" @click="lookMore()">查看详情</a>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td colspan="2">
                                    <em>物业公司：</em><span v-text="property_company"></span>
                                </td>
                                <td colspan="2">
                                    <em>物业费：</em><span v-text="property_fee+'/m²·月 '"></span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <em>建成年代：</em><span v-text="opening_date"></span>
                                </td>
                                <td colspan="2">
                                    <em>楼盘级别：</em><span v-text="building_level"></span>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <em>产权性质：</em><span v-text="property_rights"></span>
                                </td>
                                <td colspan="2">
                                    <em>建筑面积：</em><span v-text="building_area+'m²'"></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!--右侧悬浮box start-->
                <div class="sidebar_box">
                    <div class="sidebar_main" id="sidebar_fix">
                        <div class="booking_house">
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
                                    <div class="form_control form_btn mt10 cur_pointer" @click="instance('success')" >一键咨询
                                    </div>
                                </form>

                                <p class="nearby">客服将在10分钟内联系您</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--右侧悬浮box end-->
            </div>
            <!--building 信息分类end-->

            <!--地图-->
            <div class="category-message-box clearfix " id="buildmap">
                <!--地图-->
                <map-part :building-name="buildingName" :position-data="positionData" v-if="positionData"></map-part>
            </div>


        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    import mapPart from '../components/map-part.vue';
    import '../resources/plugin/pic_tab/pic_tab.js';

    export default {
        components: {
            header1,
            footer1,
            mapPart
        },
        data(){
            return {
                labels: [],//标签

                buildingName: "", //楼盘name

                total_items: 0,

                positionData: "", //经纬度

                building_id: "", //楼盘id
                highlights: "", //特色
                address: "",//地址
                daily_price: "",//价格
                min_renge_area: "",
                max_renge_area: "",
                min_renge_price: "",
                max_renge_price: "",
                lease_nums: "",


                //物业信息
                property_company: '', //物业公司
                property_fee: '', //物业费
                opening_date: '',// 建成年代
                building_level: '', //楼盘级别
                property_rights: '', //产权性质
                building_area: '', //建筑面积

            }
        },

        methods: {
            //获取楼盘详情
            getDetail(){
                var _this = this;

                this.building_id = this.$route.query.building_id;
                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "hourse_id": this.$route.query.house_id
                        },
                        "foreEndType": 2,
                        "code": "30000004"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        if (result.data) {
                            _this.buildingName = result.data.building_name;
                            _this.labels = result.data.labels.split('、');
                            _this.daily_price = result.data.daily_price == null ? '--' : result.data.daily_price;
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

            //获取物业信息
            getProperty(){
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

                            _this.highlights = result.data.highlights == "" ? '特色标题占位' : result.data.highlights; //特色

                            _this.district = result.data.district == null ? '区域' : result.data.district; //区域
                            _this.business = result.data.business == null ? '商圈' : result.data.business; //商圈

                            _this.address = '[' + _this.district + '-' + _this.business + '] ' + result.data.address;


                            _this.min_renge_area = result.data.min_renge_area == null ? '--' : result.data.min_renge_area;
                            _this.max_renge_area = result.data.max_renge_area == null ? '--' : result.data.max_renge_area;
                            _this.min_renge_price = result.data.min_renge_price == null ? '--' : result.data.min_renge_price;
                            _this.max_renge_price = result.data.max_renge_price == null ? '--' : result.data.max_renge_price;
                            _this.lease_nums = result.data.lease_nums == null ? '--' : result.data.lease_nums;
                            _this.positionData = result.data.longitude + ',' + result.data.latitude;

                            //物业信息
                            _this.property_company = result.data.property_company; //物业公司
                            _this.property_fee = result.data.property_fee; //物业费
                            _this.opening_date = result.data.opening_date; // 建成年代
                            _this.building_level = result.data.building_level; //楼盘级别
                            _this.property_rights = result.data.property_rights; //产权性质
                            _this.building_area = result.data.building_area;  //建筑面积
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

            //一键咨询
            instance (type) {
                $('#freeLook_inp').focus();
                const title = '提交成功';
                const content = '<p>客服将在10分钟内联系您，和您沟通找房需求</p>';
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    default:;
                }
            }

        },
        mounted: function () {
            var _this = this;

            this.getDetail(); //获取楼盘详情
            this.getProperty();//获取物业信息

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
                pop_up: false,//大图是否有弹出框
                pop_div: '#pop_carousel_box',//弹出框框架
                pop_pic: '#pop_carousel',//弹出框图片框架
                pop_xx: '.pop-carousel-close',//关闭弹出框按钮
                pop_prev: '#pop_carousel_prev',//弹出框左箭头
                pop_next: '#pop_carousel_next',//弹出框右箭头
                mhc: '.carousel-mask'//朦灰层
            });
        },

        created(){
            document.body.style.backgroundColor = "#fff";
        },
        beforeDestroy(){
            document.body.style.backgroundColor = "#f5f5f5";
        }

    }

</script>


