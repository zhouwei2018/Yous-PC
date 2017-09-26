<style lang="less">
    @import "../../src/styles/index.less";
    @import "../resources/css/index/index.less";
    @import "../resources/css/popup/popup.less";
    @import "../resources/plugin/animate/animate.min.css";
    /*弹窗*/
    @import "../resources/plugin/swiper/css/swiper.css"; /*swiper 轮播*/

</style>

<style scoped>

    /*首页header特殊样式*/
    [header] {
        background-color: transparent;
    }

    .ivu-form-item {
        margin-bottom: 12px;
    }

    /*回到顶部start*/

    .side-contact {
        position: fixed;
        right: 40px;
        bottom: 100px;
    }

    .side-contact > a {
        display: block;
        width: 50px;
        height: 50px;
        margin: 10px 0;
        background-color: #fff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .18);
        -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .18);
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .18);
    }

    #sideTop:hover {
        background-color: #0d6daa;
        background-position: 3px -300px;
    }

    .side-contact > a.active {
        width: 185px;
        line-height: 50px;
        padding-left: 15px;
        color: #fff;
        font-size: 18px;
        text-align: left;
        border-radius: 0 50px 50px 0;
        background: url("../resources/images/index/base-icon.png") no-repeat #0d6daa;
        background-position: 138px -191px;
    }

    .baseIcon {
        background: url("../resources/images/index/base-icon.png");
    }

    .baseIcon-tel {
        background-position: 4px -244px;
        position: relative;
    }

    .baseIcon-back {
        background-position: 3px -347px;
    }

    /*回到顶部 end*/

</style>

<template>
    <div class="all" id="ys_index_flag">
        <!--header-->
        <header1></header1>

        <!--content区域-->
        <div index_content>
            <!--banner start-->
            <div class="banner_wrap">
                <div class="banner_cont">

                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner01">
                                        <img class="banner_tips" src="../resources/images/index/banner1_icon.png"
                                             alt="">
                                        <img id="animate_index1" src="../resources/images/index/ban_word1.png" alt="">
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner02">
                                        <img id="animate_index2" src="../resources/images/index/ban_word2.png" alt="">
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner03">
                                        <img id="animate_index4" src="../resources/images/index/ban_word3.png" alt="">
                                    </div>
                                </a>
                            </div>
                            <!--<div class="swiper-slide">-->
                            <!--<a href="javascript:;">-->
                            <!--<div class="banner_img banner04">-->

                            <!--</div>-->
                            <!--</a>-->
                            <!--</div>-->
                        </div>

                        <!--左右按钮-->
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                        <!-- 分页器 -->
                        <div class="swiper-pagination"></div>
                    </div>

                    <div class="banner_bot">
                        <ul class="banner_introduce clearfix">
                            <li class="area01">
                                <p>运营面积</p>
                                <span><i id="bannerNum1"></i>m²</span>
                            </li>
                            <li class="area02">
                                <p>入驻企业</p>
                                <span><i id="bannerNum2"></i>+</span>
                            </li>
                            <li class="area03">
                                <p>渠道经纪人</p>
                                <span><i id="bannerNum3"></i>+</span>
                            </li>
                            <li class="area04">
                                <p>管理团队</p>
                                <span><i id="bannerNum4"></i>+</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <!--一站式-->
            <div one_state>
                <h3 class="content_tit">领先的一站式创业服务众创空间</h3>

                <div class="contents">
                    <ul class="clearfix">
                        <li>
                            <span class="one_tip location"></span>
                            <h4>空间定制</h4>

                            <p>满足客户个性化需求，提供可定制的楼盘项目、面积、装修专属服务，为每一个梦想，创造专属办公空间。</p>
                        </li>
                        <li>
                            <span class="one_tip service"></span>
                            <h4>客服管家</h4>

                            <p>空间客服核心人员均3年以上工作经验，严格执行专业化考核对接业务问题经验丰富，为客户提供全方位的贴心服务。</p>
                        </li>
                        <li>
                            <span class="one_tip update"></span>
                            <h4>升级服务</h4>

                            <p>深入企业发展核心环节，解决企业进阶中对资金、市场、人才风险控制等需求，针对性的构建商学院、投资平台以及财法税配套支持。</p>
                        </li>
                        <li>
                            <span class="one_tip communicate"></span>
                            <h4>企业互联</h4>

                            <p>面向入驻企业开放的动态发布、商机推广，实现线上线下企业服务资源高效配置，构建高成长性企业创新生态圈。</p>
                        </li>
                    </ul>
                </div>

            </div>
            <!--空间展示-->
            <div space>
                <h3 class="content_tit">空间展示</h3>

                <div class="space_top contents clearfix">
                    <div class="fl space_top_left spa_item">
                        <img src="../resources/images/index/space01.jpg" alt=""/>

                        <div class="ys_bg"></div>
                        <div class="space_bg_wrap">
                            <div class="space_bg"></div>
                            <span>时尚灵活风格</span>
                        </div>
                    </div>
                    <div class="fl clearfix space_top_right">
                        <div class="spa_top clearfix">
                            <div class="spa_top_left fl spa_item">
                                <img src="../resources/images/index/space02.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>时尚简约风格</span>
                                </div>
                            </div>
                            <div class="spa_top_right fl spa_item">
                                <img src="../resources/images/index/space03.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>大气通透风格</span>
                                </div>
                            </div>
                        </div>
                        <div class="spa_bot clearfix">
                            <div class="spa_bot_left fl spa_item">
                                <img src="../resources/images/index/space04.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>经典简约风格</span>
                                </div>
                            </div>
                            <div class="spa_bot_right fl spa_item">
                                <img src="../resources/images/index/space05.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>现代雅致风格</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space_bot">
                    <div class="contents">
                        <h4>一键导航 助您成功</h4>
                        <ul>
                            <li class="clearfix">
                                <span class="space_tip fl"></span>

                                <div class="fl">
                                    <div class="help_wrap">
                                        <a href="javascript:;" @click="help_find">帮我找楼</a>
                                    </div>

                                    <p>专业、可靠、免费提供一对一全程找房服务</p>
                                </div>
                            </li>
                            <li class="clearfix">
                                <span class="space_tip fl company"></span>

                                <div class="fl">
                                    <div class="help_wrap">
                                        <a href="javascript:;" @click="modal6 = true">业主委托</a>
                                    </div>

                                    <p>解决业主闲置房源提供在线托管平台</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Modal v-model="modal5" :styles="{top: '50px'}" scrollable="false" width="420" @on-cancel="cancel_find">
                    <div popup>
                        <Form id="findForm" ref="formInline1" :model="formInline1">
                            <h4>帮我找楼</h4>
                            <Form-item prop="telephone">
                                <div class="popItem">
                                    <span class="inp_icon phone"></span>
                                    <form action="" id="form_send1">
                                        <input type="text" v-model="formInline1.telephone"
                                               name="ys_mobile"
                                               autocomplete="off"
                                               maxlength="11"
                                               onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                               placeholder="请输入您的手机号码">
                                    </form>
                                    <TimerBtn ref="timerbtn1" class="btn btn-default pop_sendcode_btn"

                                              v-on:run="sendCode1" second="60"></TimerBtn>
                                </div>
                            </Form-item>
                            <Form-item prop="InputCode">
                                <div class="popItem">
                                    <span class="inp_icon password"></span>
                                    <input type="text"
                                           maxlength="4"
                                           onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                           onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                           autocomplete="off"
                                           name="identify_code1"
                                           placeholder="请输入您收到的验证码" v-model="formInline1.InputCode">
                                </div>
                            </Form-item>
                            <p class="help_tips">*输入您的手机号码,以便幼狮提供更高效的服务</p>

                            <div class="clearfix">

                                <div class="pop_list fl clearfix">
                                    <label class="fl">区域</label>
                                    <select class="fr"
                                            name="region1"
                                            placeholder="请选择区域"
                                            @change="getBusiness">
                                        <option v-for="item in cityList"
                                                :value="item.code">{{ item.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="pop_list fr clearfix">
                                    <label class="fl">商圈</label>
                                    <select class="fr"
                                            name="region2"
                                            placeholder="请选择商圈"
                                            @change="chooseBusiness">
                                        <option v-for="item in trade_areaList"
                                                :value="item.code">{{ item.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="pop_list fl">
                                    <span>面积</span>
                                    <input type="text" maxlength="9" id="area_text" value=""
                                           name="area"
                                           v-model="formInline1.Col_measure">
                                    <i class="pop_list_text">平米</i>
                                </div>

                                <div class="pop_list fr">
                                    <span>租金</span>
                                    <input type="text" id="rent_text"
                                           value=""
                                           name="rent_money"
                                           v-model="formInline1.Col_rent">
                                    <i class="pop_list_text">元/月</i>
                                </div>
                            </div>
                            <textarea class="pop_textarea"
                                      name="desc1"
                                      v-model="formInline1.Col_desc"
                                      placeholder="请输入您的其他需求：如、互联网企业密集,周边交通方便等"> </textarea>

                            <p>您也可以拨打<i> 400-078-8800 </i>直接委托需求给幼狮</p>
                            <Form-item>
                                <input type="primary"
                                       name="bd_btn"
                                       class="pop_subbtn" readonly value="确    认"
                                       @click="handleSubmit1('formInline1')">
                            </Form-item>

                        </Form>
                    </div>
                </Modal>

                <Modal v-model="modal6" width="420" scrollable="false" @on-cancel="cancel_wt">
                    <div popup>
                        <Form ref="formInline2" id="wt_form" :model="formInline2">
                            <h3>安心委托,快速成交</h3>
                            <p>只需一个电话，房源直接上线，坐等海量客户上门看房</p>
                            <Form-item prop="telephone">
                                <div class="popItem">
                                    <span class="inp_icon phone"></span>

                                    <form action="" id="form_send2">
                                        <input type="text" maxlength="11" value=""
                                               name="ys_mobile2"
                                               autocomplete="off"
                                               onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                               placeholder="请输入您的手机号码" v-model="formInline2.telephone">
                                    </form>

                                    <TimerBtn ref="timerbtn2" class="btn btn-default pop_sendcode_btn"
                                              v-on:run="sendCode2" second="60"></TimerBtn>
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
                                <input type="primary"
                                       name="direct_wt"
                                       readonly class="pop_subbtn" value="提交"
                                       @click="handleSubmit2('formInline2')">
                            </Form-item>
                        </Form>
                    </div>
                </Modal>

            </div>
            <!--邻居-->
            <div response>
                <h3 class="content_tit">让幼狮空间陪您一起成长</h3>

                <div class="contents">
                    <div class="clearfix">
                        <div class="fl res_left">
                            <img class="res_left_img" src="../resources/images/index/res01.png" alt=""/>

                            <div class="res_wrap">
                                <div class="res_bg"></div>
                                <div class="res_text_box"><span>责任即价值</span></div>
                            </div>

                        </div>

                        <div class="fr res_right">
                            <ul>
                                <li>
                                    <h4><i></i>幼狮空间，传递爱的力量</h4>

                                    <p class="clearfix">幼狮空间加入爱百福基金，为孩子们送去温暖。
                                        <router-link :to="{path:'/love'}" target="_blank" class="look_detail fr">
                                            【查看详情】
                                        </router-link>
                                    </p>
                                </li>
                                <li>
                                    <h4><i></i>幼狮空间，租房优惠卡上线了！</h4>
                                    <p class="clearfix">
                                        幼狮空间租房优惠卡正式上线，为您的企业快速成长献出一份力
                                        <router-link :to="{path:'/room_sale'}" target="_blank" class="look_detail fr">
                                            【查看详情】
                                        </router-link>
                                    </p>
                                </li>
                            </ul>
                            <!--<a href="javascript:;" class="look_more">查看更多</a>-->
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--footer-->
        <footer1></footer1>

        <!--回到顶部-->
        <div class="side-contact clearfix none" id="phone_and_top" style="width: 50px;">
            <a class="baseIcon baseIcon-tel cur-pointer fr" id="sideTel" @mouseenter="telShow($event)"
               @mouseleave="telHide($event)"
               data-val="400-078-8800">
                <!--<img class="tel_hover" src="../resources/images/index/tel_hover.png" alt="">-->
            </a>
            <a class="baseIcon baseIcon-back fr" id="sideTop"></a>
        </div>

    </div>

</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    import '../resources/plugin/swiper/js/swiper.min.js';
    import '../resources/plugin/validate/jquery.validate';
    import '../resources/plugin/validate/validate.config';

    export default {
        components: {header1, footer1},
        data () {
            return {

                modal5: false, //弹窗1
                modal6: false, //弹窗2
                formInline1: {
                    telephone: '',
                    InputCode:'',
                    Col_city: '', //区域
                    Col_business: '', //商圈
                    Col_measure: '', //平米
                    Col_rent: '', //租金
                },
                formInline2: {
                    telephone: '',
                    InputCode:''
                },

                //弹窗城市和商圈选择
                cityList: [],
                trade_areaList: [],

            }
        },

        methods: {

            telShow(e){
                $(e.target).addClass('active').html('400-078-8800');
            },

            telHide(e){
                $(e.target).removeClass('active').html('');
            },

            cancel_find () {
                this.$refs.timerbtn1.stop(); //关闭倒计时
                this.formInline1.telephone = ''; //
                this.formInline1.InputCode = ''; //
            },

            cancel_wt(){
                this.$refs.timerbtn2.stop(); //关闭倒计时
                this.formInline2.telephone = ''; //
                this.formInline2.InputCode = ''; //
            },

            sendCode1: function () {

                if ($('#form_send1').valid()) {

                    this.$refs.timerbtn1.start(); //启动倒计时
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 2,
                                "Col_telephone": this.formInline1.telephone
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

            handleSubmit1(name) {

                if ($('#findForm').valid()) {
                    this.$http.post(
                        this.$api,
                        {
                            parameters: {
                                "VerifiationCCodeType": 2,
                                "Col_telephone": this.formInline1.telephone,
                                "InputCode": this.formInline1.InputCode,
                                "Col_business": this.formInline1.Col_business,
                                "Col_city": this.formInline1.Col_city,
                                "Col_measure": this.formInline1.Col_measure,
                                "Col_rent": this.formInline1.Col_rent,
                                "Col_desc": this.formInline1.Col_desc
                            },
                            foreEndType: "1",
                            code: "20000002"
                        }
                    ).then(function (response) {
                        var reslute = JSON.parse(response.bodyText);
                        if (reslute.success) {
                            this.$Message.success('需求单提交成功!');

                            this.$refs.timerbtn1.stop(); //关闭倒计时
                            this.formInline1.telephone = ''; //
                            this.formInline1.InputCode = ''; //

                            this.modal5 = false;
                        } else {
                            this.$Message.error(reslute.message);
                        }

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;
                        this.$refs.timerbtn1.stop(); //关闭倒计时
                        this.formInline1.telephone = ''; //
                        this.formInline1.InputCode = ''; //
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

                            this.$refs.timerbtn2.stop(); //关闭倒计时
                            this.formInline2.telephone = ''; //
                            this.formInline2.InputCode = ''; //

                            this.modal6 = false;
                        } else {
                            this.$Message.error(reslute.message);
                        }

                    }, function (response) {
                        this.$Message.error('API接口报错-网络错误!');
                        this.loading = false;
                        this.$refs.timerbtn2.stop(); //关闭倒计时
                        this.formInline2.telephone = ''; //
                        this.formInline2.InputCode = ''; //
                    });
                }
            },

            show_num: function (id, d) {
                //d 跳动到最后的数字
                var time = 1500, //全部时间
                    outTime = 0, //实时时间
                    interTime = 30; //增长速率
                var powertimer = null;
                clearInterval(powertimer);
                powertimer = setInterval(function () {
                    outTime += interTime;
                    if (outTime < time) {
                        $(id).html(parseInt(d / time * outTime));
                    } else {
                        $(id).html(d);
                        clearInterval(powertimer);
                    }
                }, interTime);
            },

            //帮我找楼点击
            help_find(){
                this.modal5 = true;
                this.loadDistrict();
            },


            //获取区域
            loadDistrict: function () {

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {},
                        "foreEndType": 2,
                        "code": "90000301"
                    }
                ).then(function (response) {
                    var result = JSON.parse(response.bodyText);
                    if (result.success) {
                        this.cityList = result.data.districts;
                        this.cityList.unshift({
                            code:'',
                            name:'全部'
                        });
                    } else {
                        this.$Message.error(reslute.message);
                    }

                }, function (response) {
                    this.$Message.error('API接口报错-网络错误!');

                });
            },

            //获取商圈
            getBusiness(e){

                if (e.target.value == '') {
                    return;
                };

                this.formInline1.Col_city=e.target.value;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "city_code": e.target.value
                        },
                        "foreEndType": 2,
                        "code": "90000302"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        this.trade_areaList = result.data;
                        this.trade_areaList.unshift({
                            code:'',
                            name:'全部'
                        });
                    } else {
                        this.$Message.error(result.message);
                    }
                }, function (res) {
                    this.$Message.error('获取商圈失败');
                });
            },

            //获取商圈
            chooseBusiness(e){

                if (e.target.value == '') {
                    return;
                };

                this.formInline1.Col_business=e.target.value;
            },

        },

        mounted: function () {
            $(window).scrollTop(0);
            //数字滚动
            this.show_num('#bannerNum1', 250000);
            this.show_num('#bannerNum2', 1200);
            this.show_num('#bannerNum3', 550);
            this.show_num('#bannerNum4', 160);


            $('#sideTop').click(function () {
                $('html, body').animate({scrollTop: 0}, 1000);
                $('#phone_and_top').hide();
            });

            //banner swiper
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination', //分页器
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,  //分页可点
                //spaceBetween: 30,  //无缝
                centeredSlides: true,
                autoplay: 3500,
                autoplayDisableOnInteraction: false,  //鼠标操作时关闭autopaly

                onSlideChangeEnd: function (swiper) {

                    $('.banner_img').eq(swiper.activeIndex).find('img').animate({
                        opacity: 1
                    }, 1000);
                },
                onSlideNextStart: function (swiper) {
                    $('.banner_img').eq(swiper.activeIndex).find('img').css({
                        opacity: 0
                    });
                }

            });


            //validate
            $("#form_send1").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile: {
                        required: true,
                        mobile: true
                    }

                },
                messages: {
                    ys_mobile: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    }
                }
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

            //validate
            $("#findForm").validate({
                debug: true, //调试模式取消submit的默认提交功能
                focusInvalid: true, //当为false时，验证无效时，没有焦点响应
                focusCleanup: true, //当前元素输入时，移除error
                rules: {
                    //全部为input name值
                    ys_mobile: {
                        required: true,
                        mobile: true
                    },
                    identify_code1: {
                        required: true,
                        identify_four: true
                    }

                },
                messages: {
                    ys_mobile: {
                        required: "请输入手机号",
                        mobile: "请输入有效手机号"
                    },
                    identify_code1: {
                        required: "请输入验证码",
                        identify_four: "验证码格式错误"
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
        }
    }
</script>
