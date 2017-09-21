<style lang="less">
    @import "../resources/css/detail/detail.less";
    @import "../resources/css/right_column/right_column.less";
</style>
<style scoped>
    .anchorBL {
        display: none !important;
    }

    .detail_ld_name {
        font-size: 30px;
        font-weight: bold;
        line-height: 69px !important;
    }
    .pid{
         color: #3facf8;
          margin-right:  20px;     
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
                    <li>
                        <router-link :to="{path:'/list'}"><i class="detail-icon"></i>幼狮空间 &gt;</router-link>
                    </li>
                    <li><a href="javascript:;">办公楼</a>&gt;</li>
                    <li><a href="javascript:;" v-text="buildingName"></a>></li>
                    <li v-text="buildingName+'办公楼'"></li>
                </ul>
            </div>
            <!--搜索 end-->
            <!--logo-->
            <div class="building-label clearfix">
                <h2 class="detail_ld_name" v-text="buildingName"></h2>
            </div>

            <!--img detail-->
            <div class="common-info clearfix">
                <!--轮播图 start-->
                <div class="carousel-wrapper">
                    <div class="carousel-box" id="carousel_building">
                        <div class="carousel-big" id="carousel_big">
                            <ul>
                                <li v-for="item in building_images">
                                    <a><img :src="item" alt=""></a>
                                </li>
                            </ul>
                        </div>
                        <div class="carousel-small-box">
                            <div class="carousel-small-prev toggle-button" id="carousel_small_prev">
                                <img src="../resources/images/detail/small-prev.png" width="20" height="62" alt="">
                            </div>
                            <div class="carousel-small clearfix" id="carousel_small">
                                <ul>
                                    <li class="on" v-for="item1 in building_images">
                                        <a class="pr db cur-pointer">
                                            <div class="small-mask"></div>
                                            <img :src="item1" alt=""/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="carousel-small-next toggle-button" id="carousel_small_next">
                                <img src="../resources/images/detail/small-next.png" width="20" height="62" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!--轮播图 end-->

                <div class="building-message">

                    <div class="price-box clearfix mt20 pr">
                        <div class="building-price clearfix">
                            <div class="fl" v-if="monthly_price">
                                <strong v-text="monthly_price">&nbsp;</strong><span>元/月</span>
                            </div>
                            <div class="fl month_no_data" v-else>
                                <span>&nbsp;暂无数据</span>
                            </div>
                            <div class="fl per_price_wrap" v-if="daily_price">
                                <span class="ml20">单价 : </span><i v-text="daily_price"></i><span>元/<em
                                    class="font-num">m²</em>·天</span>
                            </div>
                            <div class="fl per_price_wrap" v-else>
                                <span class="ml20">单价 : 暂无数据</span>
                            </div>
                        </div>
                        <div class="build_weixin_top"><i class="detail-icon"></i><span>分享</span>
                            <div class="attention-share-ewm none">
                                <div class="build_weixin_img" id="ys_weixin_img"></div>
                            </div>
                        </div>
                    </div>

                    <dl class="rental-info clearfix">
                        <dd v-if="room_area">
                            <i class="bold db rent_num" v-text="room_area+' m²'"></i>
                            <span>面积</span>
                        </dd>
                        <dd v-else>
                            <span class="bold db rent_num">暂无数据</span>
                            <span>面积</span>
                        </dd>
                        <dd v-if="workstation">
                            <span class="bold db rent_num">
                                <i class="bold" v-text="workstation"></i>个</span>
                            <span>工位</span>
                        </dd>
                        <dd v-else>
                            <span class="bold db rent_num">暂无数据</span>
                            <span>工位</span>
                        </dd>
                        <dd>
                            <span class="bold db rent_num"><i class="bold">精装修</i></span>
                            <span>装修</span>
                        </dd>
                    </dl>
                    <p class="building-address mb20 clearfix">
                        <span class="mr180" v-if="locat_floor">楼层：<i v-text="locat_floor"></i></span>
                        <span class="mr180" v-else>楼层：<i>暂无数据</i></span>
                        <span>朝向：<i>朝南</i></span>
                    </p>
                    <p class="building-address mb20 clearfix">
                        <span class="mr180" v-if="locat_floor">层高：<i v-text="floor_height+'m'"></i></span>
                        <span class="mr180" v-else>层高：<i>暂无数据</i></span>
                        <span v-if="property_fee">物业费：<i>{{property_fee}}元/<em class="font-num">m²</em>·天</i></span>
                        <span v-else>物业费：<i>暂无数据</i></span>
                    </p>
                    <p class="building-address clearfix">
                        <i class="detail-icon fl"></i><span v-text="address"></span><a href="#buildmap"
                                                                                       class="show-map">&nbsp;查看地图</a>
                    </p>

                    <p class="building-consult clearfix">
                        <!-- <i class="detail-icon fl"></i><span>距离14号线阜通站808米</span> -->
                    </p>

                    <!--免费回拨-->
                    <div class="consulting clearfix mobile_consult">

                        <div class="quick">
                            <em class="pid">销售负责人</em>
                            <i class="detail-icon"></i>
                            <div class="tel">
                                <em class="tel_num_all" v-text="pid"></em></div>
                        </div>
                        <div class="mobile_box">
                            <a href="javascript:;" class="call_back_btn" @click="modal5 = true">免费回拨</a>
                        </div>
                    </div>
                </div>

            </div>

            <!--building 信息分类start-->
            <div class="category-message-box clearfix ">

                <div class="category-message" id="category_message">

                    <div class="building-information">
                        <div class="category-item-title">
                            <h2 class="fl"><i class="detail-icon introduce"></i>{{buildingName}}简介</h2>
                            <router-link :to="{path:'/detail',query:{building_id:building_id,name:3}}"
                                         class="show-link mr20">查看详情
                            </router-link>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td colspan="2" class="clearfix">
                                    <em class="fl">物业公司：</em>
                                    <span class="fl whitespace  w550" v-text="property_company"></span>
                                </td>
                                <td colspan="2" v-if="property_fee">
                                    <em>物业费：</em><span v-text="property_fee+'/m²·月 '"></span>
                                </td>
                                <td colspan="2" v-else>
                                    <em>物业费：</em><span>暂无数据</span>
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
                                    <em>产权性质：</em><span class="whitespace dib w220" v-text="property_rights"></span>
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
                                <div class="side_model_tit cl_blue">快速委托找房</div>
                                <form id="freeLookForm" class="nice-validator n-default">
                                    <div class="form_control form_btn mt10 tc cur_pointer"
                                         @click="modal6 = true">一键咨询
                                    </div>
                                </form>

                                <p class="nearby">* 客服将在10分钟内联系您</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--右侧悬浮box end-->

            </div>
            <!--building 信息分类end-->

            <!--一键咨询弹窗-->
            <Modal v-model="modal6" width="420" @on-cancel="cancel_one">
                <div popup>
                    <Form ref="formInline2" :model="formInline2" id="wt_form">
                        <h3>一键咨询</h3>
                        <Form-item prop="telephone">
                            <div class="popItem">
                                <span class="inp_icon phone"></span>
                                <form action="" id="form_send2">
                                    <input type="text" maxlength="11" required="" value=""
                                           autocomplete="off"
                                           name="ys_mobile2"
                                           onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                           onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                           placeholder="请输入您的手机号码"
                                           v-model="formInline2.telephone">
                                </form>
                                <TimerBtn ref="timerbtn2" class="btn btn-default pop_sendcode_btn"
                                          v-on:run="sendCode2"
                                          second="60"></TimerBtn>
                            </div>
                        </Form-item>
                        <div class="popItem">
                            <span class="inp_icon password"></span>
                            <input type="text" value=""
                                   name="identify_code2"
                                   autocomplete="off"
                                   maxlength="4"
                                   onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                   onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                   v-model="formInline2.InputCode"
                                   placeholder="请输入您收到的验证码">
                        </div>
                        <p class="pt10">您也可以拨打<i> 400-078-8800 </i>直接委托需求给幼狮</p>
                        <Form-item>
                            <input type="primary" readonly class="pop_subbtn" value="提交"
                                   @click="handleSubmit2('formInline2')">
                        </Form-item>
                    </Form>
                </div>
            </Modal>

            <!--免费回拨弹窗-->
            <Modal v-model="modal5" width="420" @on-cancel="cancel_free">
                <div popup>
                    <Form ref="formInline4" :model="formInline3" id="free_form">
                        <h3>免费回拨</h3>
                        <Form-item prop="telephone">
                            <div class="popItem">
                                <span class="inp_icon phone"></span>
                                <form action="" id="form_send3">
                                    <input type="text" maxlength="11"
                                           value=""
                                           autocomplete="off"
                                           name="ys_mobile3"
                                           onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                           onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                           placeholder="请输入您的手机号码"
                                           v-model="formInline4.telephone">
                                </form>
                                <TimerBtn ref="timerbtn3" class="btn btn-default pop_sendcode_btn" v-on:run="sendCode3"
                                          second="60"></TimerBtn>
                            </div>
                        </Form-item>
                        <div class="popItem">
                            <span class="inp_icon password"></span>
                            <input type="text" value=""
                                   maxlength="4"
                                   autocomplete="off"
                                   name="identify_code3"
                                   onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                   onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                   v-model="formInline4.InputCode"
                                   placeholder="请输入您收到的验证码">
                        </div>
                        <p class="pt10">您也可以拨打<i> 400-078-8800 </i>直接委托需求给幼狮</p>
                        <Form-item>
                            <input type="primary"
                                   name="free_sub_btn"
                                   readonly class="pop_subbtn" value="提交"
                                   @click="handleSubmit3('formInline4')">
                        </Form-item>
                    </Form>
                </div>
            </Modal>

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

    import '../resources/plugin/qrcode/jquery.qrcode.min.js';

    export default {
        components: {
            header1,
            footer1,
            mapPart
        },
        data(){
            return {

                modal6: false, //弹窗
                formInline1: {
                    telephone: '',
                    city: '',
                    trade_area: ''
                },

                formInline2: {
                    telephone: ''
                },

                modal5: false, //弹窗
                formInline3: {
                    telephone: '',
                    city: '',
                    trade_area: ''
                },

                formInline4: {
                    telephone: ''
                },

                building_images: [
                    'http://116.62.71.76:81/default-youshi.png',
                    'http://116.62.71.76:81/default-youshi.png',
                    'http://116.62.71.76:81/default-youshi.png',
                    'http://116.62.71.76:81/default-youshi.png',
                    'http://116.62.71.76:81/default-youshi.png'
                ], //banner图片

                buildingName: "", //楼盘name
                pid:"",//销售电话

                room_area: '',

                positionData: "", //经纬度

                building_id: this.$route.query.building_id, //楼盘id
                house_id: this.$route.query.house_id, //楼栋id
                address: "",//地址
                daily_price: "",//价格
                monthly_price: "",//月价格
                workstation: "",
                lease_nums: "",

                locat_floor: "",
                floors: "--",
                floor_height: "",


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

            cancel_one(){
                this.$refs.timerbtn2.stop(); //关闭倒计时
                this.formInline2.telephone = ''; //
                this.formInline2.InputCode = ''; //
            },

            sendCode2: function () {
                if ($('#form_send2').valid()) {

                    this.$refs.timerbtn2.start(); //启动倒计时
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 3,
                                "Col_telephone": this.formInline2.telephone
                            },
                            foreEndType: "1",
                            code: "90000102"
                        }
                    ).then(function (response) {
                        var reslute = JSON.parse(response.bodyText);
                        if (!reslute.success) {
                            this.$Message.error(reslute.message);
                        }

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;
                    });
                }

            },

            handleSubmit2(name) {

                if ($('#wt_form').valid()) {
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 3,
                                "Col_telephone": this.formInline2.telephone,
                                "InputCode": this.formInline2.InputCode
                            },
                            foreEndType: "1",
                            code: "20000004"
                        }
                    ).then(function (response) {
                        var reslute = JSON.parse(response.bodyText);
                        if (reslute.success) {
                            this.$Message.success('委托单提交成功!');

                        } else {
                            this.$Message.error(reslute.message);
                        }

                        this.$refs.timerbtn2.stop(); //关闭倒计时
                        this.formInline2.telephone = ''; //
                        this.formInline2.InputCode = ''; //
                        this.modal6 = false;

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;

                        this.$refs.timerbtn2.stop(); //关闭倒计时
                        this.formInline2.telephone = ''; //
                        this.formInline2.InputCode = ''; //
                    });
                }
            },

            cancel_free(){
                this.$refs.timerbtn3.stop(); //关闭倒计时
                this.formInline4.telephone = ''; //
                this.formInline4.InputCode = ''; //
            },

            sendCode3: function () {

                if ($('#form_send3').valid()) {

                    this.$refs.timerbtn3.start(); //启动倒计时
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 3,
                                "Col_telephone": this.formInline4.telephone
                            },
                            foreEndType: "1",
                            code: "90000102"
                        }
                    ).then(function (response) {
                        var reslute = JSON.parse(response.bodyText);
                        if (!reslute.success) {
                            this.$Message.error(reslute.message);
                        }

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;
                    });
                }
            },

            handleSubmit3(name) {

                if ($('#free_form').valid()) {
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 3,
                                "Col_telephone": this.formInline4.telephone,
                                "InputCode": this.formInline4.InputCode
                            },
                            foreEndType: "1",
                            code: "20000004"
                        }
                    ).then(function (response) {
                        var reslute = JSON.parse(response.bodyText);
                        if (reslute.success) {
                            this.$Message.success('委托单提交成功!');

                        } else {
                            this.$Message.error(reslute.message);
                        }

                        this.$refs.timerbtn2.stop(); //关闭倒计时
                        this.formInline2.telephone = ''; //
                        this.formInline2.InputCode = ''; //
                        this.modal5 = false;

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;

                        this.$refs.timerbtn3.stop(); //关闭倒计时
                        this.formInline4.telephone = ''; //
                        this.formInline4.InputCode = ''; //
                    });
                }
            },

            //获取楼盘详情
            getDetail(){
                var _this = this;

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
                            _this.room_area = result.data.room_area;
                            _this.workstation = result.data.workstation;
                            _this.daily_price = result.data.daily_price;
                            _this.monthly_price = result.data.monthly_price;
                            _this.building_images = result.data.houses_images;

                            _this.pid=result.data.pid;

                            _this.locat_floor = result.data.locat_floor;
                            _this.floors = result.data.floors == null ? '--' : result.data.floors;
                            _this.floor_height = result.data.floor_height;
                            _this.address = result.data.address;
                            _this.address = result.data.address;
                            _this.address = result.data.address;
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

            //获取物业信息
            getProperty(){
                var _this = this;

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

                          //  _this.building_images = result.data.building_images;

                            _this.positionData = result.data.longitude + ',' + result.data.latitude;

                            //物业信息
                            _this.property_company = result.data.property_company; //物业公司
                            _this.property_fee = result.data.property_fee; //物业费
                            if (result.data.opening_date) {
                                _this.opening_date = result.data.opening_date.replace('0:00:00', ''); // 建成年代
                            }

                            _this.building_level = result.data.building_level; //楼盘级别
                            _this.property_rights = result.data.property_rights; //产权性质
                            _this.building_area = result.data.building_area;  //建筑面积

                            setTimeout(function () {
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
                            }, 1000);

                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

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

            //qrcode生成微信二维码

            $('#ys_weixin_img').qrcode({
                width: 78,
                height: 78,
                text: window.location.href
            });

            //微信
            $('.build_weixin_top').hover(function () {
                $(this).find('.attention-share-ewm').show();
            }, function () {
                $(this).find('.attention-share-ewm').hide();
            });

            $("#form_send2").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile2: {
                        required: true,
                        mobile: true
                    }

                },
                messages: {
                    ys_mobile2: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    }
                }
            });

            $("#wt_form").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile2: {
                        required: true,
                        mobile: true
                    },
                    identify_code2: {
                        required: true,
                        identify_four: true
                    }
                },
                messages: {
                    ys_mobile2: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    },
                    identify_code2: {
                        required: "请输入验证码",
                        identify_four: "验证码格式错误"
                    }
                }
            });

            //免费回拨验证码
            $("#form_send3").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile3: {
                        required: true,
                        mobile: true
                    }

                },
                messages: {
                    ys_mobile3: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    }
                }
            });

            //免费回拨
            $("#free_form").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile3: {
                        required: true,
                        mobile: true
                    },
                    identify_code3: {
                        required: true,
                        identify_four: true
                    }
                },
                messages: {
                    ys_mobile3: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    },
                    identify_code3: {
                        required: "请输入验证码",
                        identify_four: "验证码格式错误"
                    }
                }
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
