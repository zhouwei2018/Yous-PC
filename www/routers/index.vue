<style  lang="less">
    @import "../../src/styles/index.less";
    @import "../resources/css/popup/popup.less";
</style>

<style scoped>

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
                <Carousel autoplay v-model="value2">
                    <Carousel-item>
                        <div class="demo-carousel"><img src="../resources/images/index/banner01.png" alt=""/></div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="demo-carousel"><img src="../resources/images/index/banner01.png" alt=""/></div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="demo-carousel"><img src="../resources/images/index/banner01.png" alt=""/></div>
                    </Carousel-item>
                    <Carousel-item>
                        <div class="demo-carousel"><img src="../resources/images/index/banner01.png" alt=""/></div>
                    </Carousel-item>
                </Carousel>
            </div>
            <div class="banner_bot">
                <div class="contents">
                    <ul class="banner_introduce clearfix">
                        <li class="active">
                            <p>运营面积</p>
                            <span><i id="bannerNum1">140000</i>㎡</span>
                        </li>
                        <li>
                            <p>入驻企业</p>
                            <span><i id="bannerNum2">1000</i>+</span>
                        </li>
                        <li>
                            <p>联合服务商</p>
                            <span><i id="bannerNum3">2000</i>+</span>
                        </li>
                        <li>
                            <p>管理团队</p>
                            <span><i id="bannerNum4">410</i>+</span>
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

            <div class="space_top contents clearfix" style="overflow:visible">
                <div class="fl space_top_left">
                    <img src="../resources/images/index/space01.png" alt=""/>
                    <!--<div class="space_bg_wrap">-->
                    <!--<div class="space_bg"></div>-->
                    <!--<span>235243</span>-->
                    <!--</div>-->
                </div>
                <div class="fl clearfix space_top_right" style="overflow:visible">
                    <div class="spa_top clearfix" style="overflow:visible">
                        <div class="spa_top_left fl">
                            <img src="../resources/images/index/space02.png" alt=""/>
                            <!--<div class="space_bg_wrap">-->
                            <!--<div class="space_bg"></div>-->
                            <!--<span>235243</span>-->
                            <!--</div>-->
                        </div>
                        <div class="spa_top_right fl">
                            <img src="../resources/images/index/space03.png" alt=""/>
                            <!--<div class="space_bg_wrap">-->
                            <!--<div class="space_bg"></div>-->
                            <!--<span>235243</span>-->
                            <!--</div></div>-->
                        </div>
                    </div>
                    <div class="spa_bot clearfix" style="overflow:visible">
                        <div class="spa_bot_left fl">
                            <img src="../resources/images/index/space02.png" alt=""/>
                            <!--<div class="space_bg_wrap">-->
                            <!--<div class="space_bg"></div>-->
                            <!--<span>235243</span>-->
                            <!--</div>-->
                        </div>
                        <div class="spa_bot_right fl">
                            <img src="../resources/images/index/space03.png" alt=""/>
                            <!--<div class="space_bg_wrap">-->
                            <!--<div class="space_bg"></div>-->
                            <!--<span>235243</span>-->
                            <!--</div></div>-->
                        </div>
                    </div>
                </div>
            </div>

            <div class="space_bot">
                <div class="space_bot_bg"></div>
                <ul class="clearfix contents">
                    <li  @click="modal5 = true">
                        <span class="space_tip"></span>
                        <h4 >帮我找楼</h4>

                        <p>专业、可靠、免费提供一对一全程找房服务</p>
                        <a href="javascript:;" class="look_more">了解更多></a>
                    </li>
                    <li @click="modal6 = true">
                        <span class="space_tip company"></span>
                        <h4>业主委托</h4>

                        <p>解决业主闲置房源提供在线托管平台</p>
                        <a href="javascript:;" class="look_more">了解更多></a>
                    </li>
                </ul>
            </div>
            <Modal v-model="modal5">
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

            <Modal v-model="modal6">
                <div popup>
                    <Form :model="formItem">
                        <h4>帮我找楼</h4>
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
                        <textarea class="pop_textarea" placeholder="请输入您的其他需求：如、互联网企业密集,周边交通方便等" >
                            
                        </textarea>

                        <p>您也可以拨打<i> 400-810-6698 </i>直接委托需求给优办</p>

                        <input type="submit" class="pop_subbtn" value="确    认"></button>
                    </Form>
                </div>
            </Modal>

    </div>
    <!--邻居-->
    <div neighbour>
        <h3 class="content_tit">他们将是你的邻居</h3>

        <div class="contents">
            <div class="clearfix">
                <div class="fl neigh_left">
                    <div class="naight_left_tab">
                        <div class="neight_mask_wrap">
                            <img class="person_bg_img" src="../resources/images/index/company.png" alt=""/>

                            <div class="neigh_mask"></div>
                            <div class="neigh_content clearfix">
                                <img class="neight_icon fl" src="../resources/images/index/person.png" alt=""/>

                                <div class="fl neight_per_wrap">
                                    <span>杜绍斐  <em>知乎知名作者</em></span>

                                    <p class="person_detail">
                                        “随着团队的壮大，在我急需一个既独立又能满足我创业灵活工作时间的办公室时，幼狮空间出现了，我就拎了台电脑，真正体会到了什么叫拎包入驻！”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fl neigh_right">
                        <ul class="fl com_detail">
                            <li>
                                <img class="com_detail_img" src="../resources/images/index/neighbour01.png" alt=""/>

                                <div class="com_detail_mask_wrap">
                                    <div class="com_detail_mask"></div>
                                    <div class="com_detail_cont">
                                        <h4>职派</h4>

                                        <p>已入驻超级工作室</p>
                                        <a href="javascript:;">查看相似空间 &gt;</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img class="com_detail_img" src="../resources/images/index/neighbour01.png" alt=""/>

                                <div class="com_detail_mask_wrap">
                                    <div class="com_detail_mask"></div>
                                    <div class="com_detail_cont">
                                        <h4>职派</h4>

                                        <p>已入驻超级工作室</p>
                                        <a href="javascript:;">查看相似空间 &gt;</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img class="com_detail_img" src="../resources/images/index/neighbour01.png" alt=""/>

                                <div class="com_detail_mask_wrap">
                                    <div class="com_detail_mask"></div>
                                    <div class="com_detail_cont">
                                        <h4>职派</h4>

                                        <p>已入驻超级工作室</p>
                                        <a href="javascript:;">查看相似空间 &gt;</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img class="com_detail_img" src="../resources/images/index/neighbour01.png" alt=""/>

                                <div class="com_detail_mask_wrap">
                                    <div class="com_detail_mask"></div>
                                    <div class="com_detail_cont">
                                        <h4>职派</h4>

                                        <p>已入驻超级工作室</p>
                                        <a href="javascript:;">查看相似空间 &gt;</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--footer-->
    <footer1></footer1>
</div>
</template>
<script type="text/ecmascript-6">

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    export default {
        components: { header1,footer1 },
        data () {
            return {

                value2: 1,
                modal5: false,
                modal6: false,

                formItem: {
                    input: '',
                    select: ''
                },

                formValidate: {
                    city: '',
                    trade_area:''
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

        methods:{
            show_num:function (id,d){
            //d 跳动到最后的数字
            var time = 1500, //全部时间
                outTime = 0, //实时时间
                interTime = 30; //增长速率
                var powertimer=null;
                clearInterval(powertimer);
                powertimer = setInterval(function () {
                    outTime += interTime;
                    if (outTime < time) {
                        $(id).html(parseInt(d / time * outTime));
                    } else {
                        $(id).html(d);
                    }
                }, interTime);
            },

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

        mounted:function(){
            //数字滚动
            this.show_num('#bannerNum1',140000);
            this.show_num('#bannerNum2',1000);
            this.show_num('#bannerNum3',2000);
            this.show_num('#bannerNum4',410);
        }
    }
</script>
