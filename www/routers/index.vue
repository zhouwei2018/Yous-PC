<style lang="less">
    @import "../../src/styles/index.less";
    @import "../resources/css/index/index.less";
    @import "../resources/css/popup/popup.less";
    /*弹窗*/
    @import "../resources/plugin/swiper/css/swiper.css"; /*swiper 轮播*/

</style>

<style scoped>

    /*首页header特殊样式*/
    [header] {
        background-color: transparent;
    }

    /*回到顶部*/
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

    .baseIcon {
        background: url("../resources/images/index/base-icon.png");
    }

    .baseIcon-tel {
        background-position: 5px -248px;
    }

    .baseIcon-back {
        background-position: 4px -321px;
    }

</style>

<template>
    <div class="all">
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
                                    <div class="banner_img banner02"></div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner01"></div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner03"></div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <div class="banner_img banner04"></div>
                                </a>
                            </div>
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
                                <span><i id="bannerNum1"></i>㎡</span>
                            </li>
                            <li class="area02">
                                <p>入驻企业</p>
                                <span><i id="bannerNum2"></i>+</span>
                            </li>
                            <li class="area03">
                                <p>联合服务商</p>
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
                <h3 class="content_tit">领先的一站式创业服务重创空间</h3>

                <div class="contents">
                    <ul class="clearfix">
                        <li>
                            <span class="one_tip location"></span>
                            <h4>办公选址</h4>

                            <p>幼狮空间强大的运营团队，承载了13年的运营实践，久经考验值得信赖。多渠道无缝融合，服务质量和效率倍增，高于行业，先于时代。</p>
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

                            <p>精选合作服务商，让你在工作之余享受生活，原来创业如此快乐。</p>
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
                            <span>建外SOHO-时尚灵活风格</span>
                        </div>
                    </div>
                    <div class="fl clearfix space_top_right">
                        <div class="spa_top clearfix">
                            <div class="spa_top_left fl spa_item">
                                <img src="../resources/images/index/space02.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>建外SOHO-时尚灵活风格</span>
                                </div>
                            </div>
                            <div class="spa_top_right fl spa_item">
                                <img src="../resources/images/index/space03.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>建外SOHO-时尚灵活风格</span>
                                </div>
                            </div>
                        </div>
                        <div class="spa_bot clearfix">
                            <div class="spa_bot_left fl spa_item">
                                <img src="../resources/images/index/space04.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>建外SOHO-时尚灵活风格</span>
                                </div>
                            </div>
                            <div class="spa_bot_right fl spa_item">
                                <img src="../resources/images/index/space05.jpg" alt=""/>

                                <div class="ys_bg"></div>
                                <div class="space_bg_wrap">
                                    <div class="space_bg"></div>
                                    <span>建外SOHO-时尚灵活风格</span>
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
                                        <a href="javascript:;" @click="modal5 = true">帮我找楼</a>
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
                    <!--<ul class="clearfix contents">-->
                    <!--<li @click="modal5 = true">-->
                    <!--<span class="space_tip"></span>-->
                    <!--<h4>帮我找楼</h4>-->

                    <!--<p>专业、可靠、免费提供一对一全程找房服务</p>-->
                    <!--<a href="javascript:;" class="look_more">了解更多></a>-->
                    <!--</li>-->
                    <!--<li @click="modal6 = true">-->
                    <!--<span class="space_tip company"></span>-->
                    <!--<h4>业主委托</h4>-->

                    <!--<p>解决业主闲置房源提供在线托管平台</p>-->
                    <!--<a href="javascript:;" class="look_more">了解更多></a>-->
                    <!--</li>-->
                    <!--</ul>-->
                </div>
                <Modal v-model="modal5" width="420">
                    <div popup>
                        <Form :model="formItem">
                            <h3>安心委托,快速成交</h3>

                            <p>只需一个电话，房源直接上线，坐等海量客户上门看房</p>

                            <div class="popItem">
                                <span class="inp_icon phone"></span>
                                <input type="num" maxlength="11" required="" value="" name="" placeholder="请输入您的手机号码">
                                <a href="javascript:;" class="pop_sendcode_btn">发送验证码</a>
                            </div>
                            <div class="popItem">
                                <span class="inp_icon password"></span>
                                <input type="num" value="" maxlength="6" required="" name="" placeholder="请输入您收到的验证码">
                            </div>
                            <p>您也可以拨打<i> 400-810-6698 </i>直接委托房源</p>
                            <input type="submit" class="pop_subbtn" value="提交委托"></button>
                        </Form>
                    </div>
                </Modal>

                <Modal v-model="modal6" :styles="{top: '50px'}" width="420">
                    <div popup>
                        <Form :model="formItem">
                            <h4>业主委托</h4>

                            <div class="popItem">
                                <span class="inp_icon phone"></span>
                                <input type="num" maxlength="11" required="" value="" name="" placeholder="请输入您的手机号码">
                                <a href="javascript:;" class="pop_sendcode_btn">发送验证码</a>
                            </div>
                            <div class="popItem">
                                <span class="inp_icon password"></span>
                                <input type="num" value="" maxlength="6" required="" name="" placeholder="请输入您收到的验证码">
                            </div>
                            <p class="help_tips">*输入您的手机号码,以便优办提供更高效的服务</p>

                            <div class="clearfix">

                                <Form-item label="区域" prop="city" class="pop_list fl right_none">
                                    <Select v-model="formValidate.city" placeholder="请选择城市">
                                        <Option v-for="item in cityList"
                                                :value="item.value"
                                                :key="item">{{ item.label }}
                                        </Option>
                                    </Select>
                                </Form-item>

                                <Form-item label="商圈" prop="trade_area" class="pop_list fr right_none">
                                    <Select v-model="formValidate.trade_area" placeholder="请选择商圈">
                                        <Option v-for="item in trade_areaList"
                                                :value="item.value"
                                                :key="item">{{ item.label }}
                                        </Option>
                                    </Select>
                                </Form-item>

                                <div class="pop_list fl">
                                    <span>面积</span>
                                    <input type="text" maxlength="9" id="area_text" value="" name="">
                                    <i class="pop_list_text">平米</i>
                                </div>

                                <div class="pop_list fr">
                                    <span>租金</span>
                                    <input type="text" id="rent_text" value="" name="">
                                    <i class="pop_list_text">元/月</i>
                                </div>
                            </div>
                            <textarea class="pop_textarea" placeholder="请输入您的其他需求：如、互联网企业密集,周边交通方便等">

                    </textarea>

                            <p>您也可以拨打<i> 400-810-6698 </i>直接委托需求给优办</p>

                            <input type="submit" class="pop_subbtn" value="确    认"></button>
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

                                    <p class="clearfix">如果你爱父母，妻子孩子，就主动的多打电话，多陪陪他们，因为再不陪，父母真的就老去了，孩子就长大了！<a
                                            href="javascript:;" class="look_detail fr">【查看详情】</a></p>

                                </li>
                                <li>
                                    <h4><i></i>幼狮空间，展现不一样的风采</h4>

                                    <p class="clearfix">如果你爱父母，妻子孩子，就主动的多打电话，多陪陪他们，因为再不陪，父母真的就老去了，孩子就长大了！<a
                                            href="javascript:;" class="look_detail fr">【查看详情】</a></p>

                                </li>
                            </ul>
                            <a href="javascript:;" class="look_more">查看更多</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--footer-->
        <footer1></footer1>

        <!--回到顶部-->
        <Back-top :height="100" :bottom="200">
            <div class="side-contact">
                <a class="baseIcon baseIcon-tel cur-pointer" id="sideTel" data-val="400-810-6698"></a>
                <a class="baseIcon baseIcon-back"></a>
            </div>
        </Back-top>

    </div>

</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    import '../resources/plugin/swiper/js/swiper.min.js';

    export default {
        components: {header1, footer1},
        data () {
            return {

                modal5: false, //弹窗1
                modal6: false, //弹窗2

                formItem: {
                    input: '',
                    select: ''
                },

                formValidate: {
                    city: '',
                    trade_area: ''
                },

                //弹窗城市和商圈选择
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],

                trade_areaList: [
                    {
                        value: 'cbd',
                        label: 'CBD商圈'
                    },
                    {
                        value: 'wagfujing',
                        label: '王府井商圈'
                    },
                    {
                        value: 'sanlitun',
                        label: '三里屯商圈'
                    }
                ],

            }
        },

        methods: {
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

            //表单验证
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        },

        mounted: function () {
            $(window).scrollTop(0);
            //数字滚动
            this.show_num('#bannerNum1', 140000);
            this.show_num('#bannerNum2', 1000);
            this.show_num('#bannerNum3', 2000);
            this.show_num('#bannerNum4', 410);

            //top固定
            var lion_head = $('#lion_head'),
                lion_offset = lion_head.offset();
            $(document).on('scroll', function () {
                var win_scrollTop = $(document).scrollTop();
                if (lion_offset.top < win_scrollTop) {
                    lion_head.css({
                        position: 'fixed',
                        top: 0,
                        backgroundColor: '#333',

                    })
                } else {
                    lion_head.css({
                        position: 'relative',
                        top: 0,
                        backgroundColor: 'transparent'
                    })
                }
            })

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
                //effect : 'fade', //切换效果(淡入淡出)
                //fade: {
                //    crossFade: false,
                //},
                autoplayDisableOnInteraction: true  //鼠标操作时关闭autopaly

            })

        }
    }
</script>
