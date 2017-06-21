<style scoped lang="less">
    @import "../resources/css/popup/popup.less";
    /*弹窗*/
    @import "../resources/css/office/office.less";

    img[lazy=loading] {
        
    }

    img[lazy=error] {
        
    }

    img[lazy=loaded] {
        
    }

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--office  start-->
        <div office>
            <h2>
                <div class="contents">一站式服务</div>
            </h2>
            <div class="contents procedure">
                <ul class="clearfix">
                    <li class="clearfix">
                        <span class="office_num one fl"></span>

                        <div class="fl office_mid">
                            <span class="office_icon icon1"></span>

                            <p class="office_text">确定需求</p>
                        </div>
                        <span class="office_arrow"></span>
                    </li>
                    <li class="clearfix">
                        <span class="office_num two fl"></span>

                        <div class="fl office_mid">
                            <span class="office_icon icon2"></span>

                            <p class="office_text">匹配房源</p>
                        </div>
                        <span class="office_arrow"></span>
                    </li>
                    <li class="clearfix">
                        <span class="office_num three fl"></span>

                        <div class="fl office_mid">
                            <span class="office_icon icon3"></span>

                            <p class="office_text">实地看房</p>
                        </div>
                        <span class="office_arrow"></span>
                    </li>
                    <li class="clearfix">
                        <span class="office_num four fl"></span>

                        <div class="fl office_mid">
                            <span class="office_icon icon4"></span>

                            <p class="office_text">拎包入住</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="center_trade clearfix contents">
                <div class="center_trade_head clearfix">
                    <div class="title">热门商圈</div>
                    <div class="fl">
                        <a href="javascript:;" v-for='(item,index) in areaItems' v-text="item.category"
                           :class="{active:item.iscur}" @click="setCur(index,item.areaId)"></a>
                    </div>
                </div>

                <div class="center_list clearfix">
                    <ul class="fl center_left_ul">
                        <li class="clearfix" v-for='item in areaItem.areaHouse'>
                            <!--<img class="fl" src="../resources/images/office/tradeArea01.png" alt=""/>-->
                            <img class="fl" v-lazy="item.imgUrl"/>
                            <div style="height:200px;width:100%;position:relative">
                                <div class="fl center_detail">
                                    <h3>{{item.name}}</h3>
                                    <span><Icon
                                            type="ios-location-outline"></Icon><span>[{{areaItem.category}}-{{areaItem.name}}]  {{item.address}}</span></span>
                                    <ul>
                                        <li v-for='label in item.labels'>
                                            <span class="label">{{label}}</span>
                                        </li>

                                    </ul>

                                </div>
                                <div class="fr right_div">
                                    <div>
                                        <em>{{item.price}}</em><span>元/m²天</span>
                                    </div>
                                    <div>
                                        <span>均价</span>
                                    </div>
                                    <div>
                                        <!--<router-link :to="{ path: '/detail'}" class="apply_btn">申请入驻</router-link>-->
                                        <a href="javascript:;" class="apply_btn" @click="modal5 = true">帮我找楼</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="office_side">
                        <div id="trade_man_fix" class="trade_per">
                            <h3>与我们的团队取得联系</h3>
                            <div class="manager_wrap">
                                <img src="../resources/images/office/trade_person.png" alt="" class="manager_portrait"/>
                                <span class="manager_name">赵东伟</span>
                                <span class="manage_pos">社区经理</span>
                            </div>
                            <span class="tel_number">联系电话：13810419384</span>
                        </div>
                    </div>

                    <Modal v-model="modal5" :styles="{top: '50px'}" width="420">
                        <div popup>
                            <Form ref="formInline1" :model="formItem">
                                <h4>帮我找楼</h4>

                                <div class="popItem">
                                    <span class="inp_icon phone"></span>
                                    <input type="num" maxlength="11" required="" value="" name=""
                                           placeholder="请输入您的手机号码">
                                    <TimerBtn ref="timerbtn0" class="btn btn-default pop_sendcode_btn bg_orange"
                                              v-on:run="sendCode0"
                                              style="width: 140px; height: 50px;"
                                              second="60"></TimerBtn>
                                </div>
                                <div class="popItem">
                                    <span class="inp_icon password"></span>
                                    <input type="num" value="" maxlength="6" required="" name=""
                                           placeholder="请输入您收到的验证码">
                                </div>
                                <p class="help_tips">*输入您的手机号码,以便幼狮提供更高效的服务</p>

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
                                <textarea class="pop_textarea" placeholder="请输入您的其他需求：如、互联网企业密集,周边交通方便等"></textarea>

                                <p>您也可以拨打<i> 400-078-8800 </i>直接委托需求给幼狮</p>

                                <input type="submit" class="pop_subbtn bg_orange" value="确    认"
                                       @click="handleSubmit1('formInline1')">
                            </Form>
                        </div>
                    </Modal>
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
    export default {
        components: {header1, footer1},
        data(){
            return {
                modal5: false, //弹窗

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


                areaItem: {},
                areaItems: [
                    {
                        "areaId": 0,
                        "category": "CBD",
                        "name": "南CBD核心",
                        "iscur": true,
                        "areaHouse": [
                            {
                                "name": "华腾北搪商务大厦",
                                "address": "朝阳区劲松桥东",
                                "labels": ["名企开发商"],
                                "price": "4.5",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "富力双子座",
                                "address": "北京市朝阳区东三环中路辅路55号",
                                "labels": ["知名物业", "5A写字楼"],
                                "price": "7",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "苹果社区",
                                "address": "百子湾路32号",
                                "labels": ["知名物业", "联合办公"],
                                "price": "3.7",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "首城国际",
                                "address": "广渠路36号院5号楼",
                                "labels": ["互联网", "5A写字楼"],
                                "price": "3.4",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "新世界中心",
                                "address": "崇门外大街3号",
                                "labels": ["地铁周边", "地标建筑"],
                                "price": "6.8",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "新城文化",
                                "address": "崇文崇外大街11号",
                                "labels": ["地铁周边", "联合办公"],
                                "price": "6",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "搜宝崇文大厦",
                                "address": "北京市东城区磁器口东北角崇文门新世界旁",
                                "labels": ["地铁周边", "地标建筑"],
                                "price": "5.5",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "领行国际中心",
                                "address": "崇文区广渠门南小街1号",
                                "labels": ["地铁周边"],
                                "price": "2.9",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "冠城名敦道",
                                "address": "广渠门外南小街",
                                "labels": ["地铁周边", "纳什空间", "联合办公"],
                                "price": "4.5",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "新裕商务大厦",
                                "address": "广渠门内大街90",
                                "labels": ["联合办公"],
                                "price": "5.5",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            },
                            {
                                "name": "便宜坊大厦",
                                "address": "东城区崇文门外大街16号",
                                "labels": ["联合办公"],
                                "price": "6.8",
                                "imgUrl": "http://116.62.71.76/2e1f18bbe48351f684e0c641e6db2963.jpg"
                            }
                        ]
                    },
                    {
                        "areaId": 1,
                        "category": "朝阳门",
                        "name": "东直门",
                        "iscur": false,
                        "areaHouse": [
                            {"name": "朝外MEN", "address": "朝外大街26号", "labels": ["地铁周边", "知名物业"], "price": "7.5"},
                            {"name": "泛利大厦", "address": "朝外大街22号", "labels": ["地铁周边", "知名物业"], "price": "6.7"},
                            {"name": "丰联广场", "address": "朝阳门外大街18号", "labels": ["地铁周边", "知名物业"], "price": "7"},
                            {"name": "昆泰国际中心", "address": "朝阳门外大街12号", "labels": ["地铁周边", "知名物业"], "price": "8"},
                            {"name": "天辰大厦", "address": "朝阳门北大街乙12", "labels": ["地铁周边"], "price": "6"},
                            {
                                "name": "悠唐国际中心",
                                "address": "北京市朝阳区东二环外交部东侧50米",
                                "labels": ["知名物业", "名企开发商"],
                                "price": "9"
                            },
                            {"name": "雍和大厦", "address": "安定门东大街丙7号", "labels": ["地铁周边", "联合办公"], "price": "8"},
                            {"name": "北京INN", "address": "东水井胡同3号", "labels": ["地铁周边", "联合办公"], "price": "5.9"},
                            {"name": "朝阳门SOHO", "address": "朝阳门内大街2号", "labels": ["地铁周边", "知名物业"], "price": "7.4"},
                            {"name": "佳汇中心", "address": "朝阳门外吉庆里14号楼", "labels": ["地标建筑", "5A写字楼"], "price": "5.6"},
                            {"name": "蓝筹名座", "address": "吉祥里10", "labels": ["名企开发商"], "price": "4.5"}
                        ]
                    },
                    {
                        "areaId": 2,
                        "category": "大望路",
                        "name": "慈云寺",
                        "iscur": false,
                        "areaHouse": [
                            {"name": "华业国际中心", "address": "朝阳区东四环中路39号", "labels": ["5A写字楼"], "price": "4.6"},
                            {
                                "name": "远洋国际中心",
                                "address": "朝阳路与东四环交叉路口慈云寺桥东北角",
                                "labels": ["地铁周边", "LEED认证", "名企开发商"],
                                "price": "10"
                            },
                            {"name": "远洋商务", "address": "朝阳区东四环八里庄西里61号", "labels": ["地铁周边", "联合办公"], "price": "5"},
                            {"name": "住邦2000", "address": "朝阳门外大街12号", "labels": ["地铁周边", "联合办公"], "price": "5.3"},
                            {"name": "大成国际中心", "address": "百子湾甲12号", "labels": ["地铁周边", "互联网", "知名物业"], "price": "3"},
                            {"name": "华贸商务楼", "address": "建国路91号院", "labels": ["地铁周边", "互联网", "联合办公"], "price": "6"},
                            {
                                "name": "金海商富中心",
                                "address": "朝阳东四环与广渠路交口大郊亭桥广渠路21号",
                                "labels": ["地铁周边", "互联网", "联合办公"],
                                "price": "4"
                            },
                            {"name": "蓝堡国际中心", "address": "西大望路3号", "labels": ["精选"], "price": "7"},
                            {"name": "温特莱中心", "address": "西大望路1号", "labels": ["地铁周边", "名企开发商", "5A写字楼"], "price": "8"},
                            {"name": "SOHO现代城", "address": "建国路88号", "labels": ["地标建筑", "5A写字楼"], "price": "7"},
                            {
                                "name": "阳光财富大厦",
                                "address": "西大望路63号",
                                "labels": ["地铁周边", "名企开发商", "知名物业"],
                                "price": "4.5"
                            }
                        ]
                    },
                    {
                        "areaId": 3,
                        "category": "三里屯",
                        "name": "三元桥",
                        "iscur": false,
                        "areaHouse": [
                            {"name": "新恒基国际大厦", "address": "麦子店西路3号", "labels": ["地铁周边", "金融精英", "地标建筑"], "price": "6"},
                            {"name": "百富国际大厦", "address": "工体东路18号", "labels": ["地铁周边", "地铁周边", "联合办公"], "price": "6"},
                            {
                                "name": "三里屯SOHO",
                                "address": "朝阳区三里屯工体北路南侧，南三里屯路西侧",
                                "labels": ["地铁周边", "地标建筑", "名企开发商"],
                                "price": "7.5"
                            },
                            {"name": "世茂工三", "address": "朝阳区工体北门对面", "labels": ["地铁周边", "联合办公", "互联网"], "price": "10"},
                            {"name": "首开幸福广场", "address": "朝阳区幸福村新东路两侧", "labels": ["名企开发商"], "price": "3.5"},
                            {"name": "中国红街", "address": "朝阳工人体育场北路与东路交汇处", "labels": ["地铁周边", "名企开发商"], "price": "7"},
                            {"name": "第三置业", "address": "曙光西里甲1号", "labels": ["地铁周边", "地标建筑", "5A写字楼"], "price": "6"},
                            {"name": "琨莎中心", "address": "新源里16号", "labels": ["地铁周边", "地标建筑", "5A写字楼"], "price": "6"},
                            {
                                "name": "时间国际中心",
                                "address": "朝阳区东三环北路三元东桥",
                                "labels": ["地铁周边", "金融精英", "知地标建筑"],
                                "price": "5.5"
                            },
                            {"name": "天元港中心", "address": "建国路88号", "labels": ["地标建筑", "5A写字楼"], "price": "8"},
                            {
                                "name": "中冶置业霄云国际",
                                "address": "霄云路28号",
                                "labels": ["地铁周边", "地标建筑", "知名物业"],
                                "price": "6.6"
                            },
                            {
                                "name": "瑞辰国际中心",
                                "address": "农展馆南路13号",
                                "labels": ["地铁周边", "地标建筑", "5A写字楼"],
                                "price": "5.5"
                            }
                        ]
                    }

                ],

                office_scroll: true  //offce页面滚动boolean
            }
        },
        methods: {
            setCur: function (index, areaId) {
                this.areaItems.map(function (v, i) {
                    i == index ? v.iscur = true : v.iscur = false;
                });
                this.setAreaItem(index)
            },
            setAreaItem: function (index) {
                this.areaItem = this.areaItems[index]
            },
            asyBtnCheckIn: function (id) {
                this.$router.go({path: "list"});
                //this.$route.router.go({name:"detail"});
            },
            sendCode0: function () {
                this.$refs.timerbtn0.start(); //启动倒计时
            },
        },

        mounted: function () {
            var _this = this;
            this.setAreaItem(0);

            //scroll
            $(window).scroll(function () {
                if (_this.office_scroll) {
                    var scroll_top = $(window).scrollTop();
                    var standard_line = $('.center_left_ul').offset().top;
                    var standard_line_wrap = $('.center_left_ul').height();
                    var fixed_self = $('#trade_man_fix').height();

                    if (scroll_top > (standard_line)) {
                        $('#trade_man_fix').addClass('right_fixed');
                    } else {
                        $('#trade_man_fix').removeClass('right_fixed');
                    }
                }
            });
        },

        destroyed(){
            this.office_scroll = false;
        }
    }
</script>
