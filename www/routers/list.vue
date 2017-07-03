<style lang="less">
    @import "../resources/css/list/list.less";
    @import "../resources/css/right_column/right_column.less";

    //加载中
    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .loading_wrap {
        width: 100px;
        height: 60px;
        margin: 0 auto;
        position: relative;
    }

    //分页
    .page_wrap {
        text-align: center;
        width: 400px;
        margin: 0 auto;
        padding-top: 50px;
    }

    .ivu-modal-confirm {
        padding: 20px;
    }


</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--list  start-->
        <div list>

            <div class="search_box">
                <div class="contents clearfix">
                    <div class="list_search fl">
                        <div class="fl">
                            <input type="text" autocomplete="off" placeholder="请输入写字楼名称或商圈" maxlength="30">
                            <div class="search-3">
                                <div class="s-result sem-search" id="association" style="display: none;">智能提示</div>
                            </div>
                        </div>
                        <a class="map_btn" id="bannerSearchbtn">搜索</a>
                    </div>
                </div>
            </div>

            <div class="address_tit contents">
                <h1>
                    <i class="sem_icon"></i>
                    <a href="/">幼狮空间</a>
                    <a class="text_gray6">&gt; 写字楼出租</a>
                </h1>
            </div>

            <!--sem-main-->
            <div class="contents">
                <!-- 筛选区域 start  -->
                <div class="screening_conditions mt15">

                    <div class="screening_item">
                        <div class="screening_conts tj_box" id="care_nav">
                            <a href="javascript:;"
                               v-for="(section,index) in sections"
                               v-html="section.name"
                               :class="{active:active==index}"
                               @click="toggle(index,section.view)">

                            </a>
                            <!--<a href="javascript:;" class="active"><i class="sem_icon quyu"></i>区域</a>-->
                            <!--<a href="javascript:;"><i class="sem_icon ditie"></i>地铁</a>-->
                            <router-link target="_blank" :to="{path:'/map_search'}"><i class="sem_icon ditu"></i>地图
                            </router-link>
                        </div>

                        <component :is="currentView" @refreshbizlines="selList"></component>

                    </div>

                    <div class="screening_conts_detail pv20">
                        <div class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">面积:</span>

                            <a v-for="(item1,index) in area_arr" v-if="index == 0"
                               href="javascript:;"
                               :class="{active:areaActive == index}"
                               @click="sel_area_list($event)"
                            >全部</a>
                            <template v-else>
                                <a v-if="index == area_arr.length-1" href="javascript:;"
                                   :class="{active:areaActive == index}"
                                   class="last"
                                   @click="sel_area_list($event)"
                                ><span class="font_num">{{item1.startNum}}</span><span class="font_num">m²</span></a>
                                <a v-else href="javascript:;" :class="{active:areaActive == index}"
                                   @click="sel_area_list($event)">
                                    <span class="font_num">{{item1.startNum}}</span>-<span
                                        class="font_num">{{item1.endNum}}</span><span class="font_num">m²</span>
                                </a>
                            </template>

                            <div class="area_wrap pr" @mouseenter="areaShowFlag = true"
                                 @mouseleave="areaShowFlag = false">
                                <div class="interval pr">
                                    <input type="text" autocomplete="off" name="temp-beginArea" value=""
                                           v-model="bArea">
                                    <samp>-</samp>
                                    <input type="text" autocomplete="off" name="temp-endArea" value="" v-model="eArea">
                                    <em class="ml05 font_num">m²</em>
                                </div>

                                <!--面积选择窗 默认隐藏 start-->
                                <div class="interval_pop clearfix" style="display: none" v-show="areaShowFlag">
                                    <div class="interval ma0">
                                        <form style="display:inline-block" id="areaForm">
                                            <input type="text" autocomplete="off" name="beginArea" maxlength="5"
                                                   value=""
                                                   v-model="bArea"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>—</samp>
                                            <input type="text" autocomplete="off" name="endArea" maxlength="5" value=""
                                                   v-model="eArea"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <a class="confrim-btn cur-pointer" style="display: none;" id="areaConfirm">确定</a>
                                            <em class="ml05 font-num">m²</em>
                                        </form>
                                    </div>
                                </div>
                                <!--面积选择窗 end-->
                            </div>

                        </div>
                    </div>

                    <div class="screening_conts_detail clearfix pv20" id="price-list">
                        <div class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">价格:</span>

                            <a v-for="(item2,index) in price_arr" v-if="index == 0"
                               :class="{active:perPriceActive == index}"
                               @click="sel_price_list($event)"
                            >全部</a>
                            <template v-else>
                                <a v-if="index == price_arr.length-1" :class="{active:perPriceActive == index}" class="last"
                                   @click="sel_price_list($event)"
                                ><span class="font_num">{{item2.startNum}}</span><span class="font_num">元</span></a>
                                <a v-else href="javascript:;" :class="{active:perPriceActive == index}" @click="sel_price_list($event)">
                                    <span class="font_num">{{item2.startNum}}</span>-<span
                                        class="font_num">{{item2.endNum}}</span><span class="font_num">元</span>
                                </a>
                            </template>

                            <div class="price_wrap pr" @mouseenter="priceShowFlag = true"
                                 @mouseleave="priceShowFlag = false">
                                <div class="interval pr">
                                    <input name="temp-startprice" type="text" autocomplete="off" v-model="bNum">
                                    <samp>-</samp>
                                    <input name="temp-endprice" type="text" autocomplete="off" v-model="eNum">
                                    <em class="text-black ml05">元</em>
                                </div>
                                <div class="interval_pop clearfix" style="display: none;" v-show="priceShowFlag">
                                    <div class="interval ma0">
                                        <form action="">
                                            <input type="text" autocomplete="off" id="beginPrice4Day" name="startprice"
                                                   maxlength="5"
                                                   v-model="bNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>-</samp>
                                            <input type="text" autocomplete="off" id="endPrice4Day" name="endprice"
                                                   maxlength="5"
                                                   v-model="eNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <em class="text-black ml05">元</em>
                                            <input type="hidden" name="type" value="1">

                                            <a class="cur-pointer priceConfirm" id="priceConfirm"
                                               style="display: none;">确定</a>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="conts_section ml15">
                                <a class="conts_option tag"><em>按单价</em></a>
                                <a class="conts_option"><em>按总价</em></a>
                            </div>
                        </div>
                        <div class="tj_box_1 screening_conts_list clearfix none">
                            <span class="screening_title mr15">价格:</span>

                            <a v-for="(item3,index) in price_tot_arr" v-if="index == 0"
                               :class="{active:totPriceActive == index}"
                               @click="sel_tot_price_list($event)"
                            >全部</a>
                            <template v-else>
                                <a v-if="index == price_arr.length-1" :class="{active:perPriceActive == index}" class="last"
                                   @click="sel_tot_price_list($event)"
                                ><span class="font_num">{{item3.startNum}}</span><span class="font_num">万元</span></a>
                                <a v-else href="javascript:;" :class="{active:totPriceActive == index}" @click="sel_tot_price_list($event)">
                                    <span class="font_num">{{item3.startNum}}</span>-<span
                                        class="font_num">{{item3.endNum}}</span><span class="font_num">万元</span>
                                </a>
                            </template>

                            <div class="price_wrap pr" @mouseenter="priceShowFlag_tot = true"
                                 @mouseleave="priceShowFlag_tot = false">
                                <div class="interval pr">
                                    <input type="text" autocomplete="off" name="temp-startprice" v-model="bNum_tot">
                                    <samp>-</samp>
                                    <input type="text" autocomplete="off" name="temp-endprice" v-model="eNum_tot">
                                    <em class="text-black ml05">万元</em>
                                </div>
                                <div class="interval_pop clearfix" v-show="priceShowFlag_tot">
                                    <div class="interval ma0">
                                        <form action="">
                                            <input type="text" autocomplete="off" name="startprice_tot" maxlength="5"
                                                   v-model="bNum_tot"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>-</samp>
                                            <input type="text" autocomplete="off" name="endprice_tot" maxlength="5"
                                                   v-model="eNum_tot"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <input type="hidden" name="type" value="2">

                                            <em class="text-black ml05">万元</em>
                                            <a class="cur-pointer priceConfirm" id="priceConfirm_tot"
                                               style="display: none;">确定</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="conts_section ml15">
                                <a class="conts_option"><em>按单价</em></a>
                                <a class="conts_option tag"><em>按总价</em></a>
                            </div>
                        </div>
                    </div>

                    <div class="screening_conts_detail clearfix pv20">
                        <div class="screening_conts_list clearfix">
                            <span class="screening_title mr15">特色:</span>
                            <a href="javascript:;" v-for="(item4,index) in feature_arr"
                               :class="{active:featureActive == index}"
                                @click="sel_feature_list($event)"
                               v-text="item4"
                            ></a>
                        </div>
                    </div>

                    <div class="screening_conts_detail clearfix pv20">
                        <div class="screening_conts_list clearfix selected_item">
                            <span class="screening_title mr15">已选:</span>
                            <a href="javascript:;">海淀<i class="sem_icon hover"></i></a>
                            <a href="javascript:;">互联网<i class="sem_icon hover"></i></a>
                            <a href="javascript:;">100-200m²<i class="sem_icon hover"></i></a>
                            <a href="javascript:;" class="del_all "><i class="sem_icon"></i>全部清除</a>
                        </div>
                    </div>

                </div>
                <!-- 筛选区域 end  -->

                <div class="list_result clearfix mb40 pr" id="list_result">
                    <div class="office_list pt20">
                        <div class="conditions_result_box clearfix tj_box">
                            <div class="fl mt07">
                                <i class="sem_icon"></i><em class="result_conts_txt">为您找到 <span
                                    class="font-num">2580</span> 栋写字楼</em>
                            </div>
                        </div>

                        <div class="sort_box" @click="buildSort($event)">
                            <a href="javascript:;" class="on">默认</a>
                            <a href="javascript:;" class="pr">面积<i class="sem_icon up"></i>
                                <p class="bubble">点击按面积从小到大排序</p></a>
                            <a href="javascript:;" class="pr">价格<i class="sem_icon"></i>
                                <p class="bubble">点击按价格从低到高排序</p></a>
                        </div>
                        <hr class="sort_box_line">

                        <!--搜索结果list start-->

                        <div class="office_list_item" v-for="(item,index) in buildList">
                            <router-link :to="{path:'/detail',query:{houseid:item.id}}" class="db pr clearfix"
                                         :id="item.id" target="_blank">
                                <div class="fl pr">
                                    <img :src="item.imgPath" :alt="item.imgAlt">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app"
                                                                    v-text="item.price"></em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl" v-text="item.buildingName"></b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i><span v-text="item.address"></span>
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb"
                                                                                     v-text="'0-'+item.rentArea"></span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb" v-text="item.leaseNums"></span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover" v-text="item.inquiriesNums"></b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <!--<span v-for="perlabel in item.label" v-text="perlabel"></span>-->
                                        </div>
                                    </dd>
                                </dl>
                            </router-link>
                        </div>

                        <!--搜索结果list end-->
                        <div class="page_wrap" v-show="pageFlag">
                            <Page :total="200" @on-change="change"></Page>
                        </div>

                        <!--加载中-->
                        <div class="loading_wrap" v-show="loadingFlag">
                            <Spin fix>
                                <Icon type="load-c" size=20      class="demo-spin-icon-load"></Icon>
                                <div>加载中……</div>
                            </Spin>
                        </div>


                    </div>

                    <!--右侧栏-->
                    <div class="sidebar_box">
                        <div class="sidebar_main" id="sidebar_fix">
                            <div class="map_house">
                                <img src="../resources/images/list/maps.png" alt="">
                                <router-link target="_blank" class="map_find_btn" :to="{path:'/map_search'}">地图找房
                                </router-link>
                            </div>
                            <div class="booking_house mt20">
                                <div class="booking_house_mes">
                                    <h2>快速找房</h2>
                                    <form id="freeLookForm" class="nice-validator n-default">
                                        <input id="freeLook_inp" name="phone" class="form_control form_telphone"
                                               type="text"
                                               autocomplete="off"
                                               placeholder="手机号" maxlength="11"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                        <span class="db text-left mt05" id="msg-phone"></span>
                                        <div class="form_control form_btn mt10 cur_pointer"
                                             id="list_yijianyuyue"
                                             @click="instance('success')">一键咨询
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
                                    <img src="../resources/images/ys_weixin.jpg" class="ml25 weixin_img"
                                         alt="扫描二维码关注">
                                </div>
                                <p>扫描二维码关注</p>
                            </div>
                        </div>
                    </div>
                    <!--右侧栏-->
                </div>

            </div>

        </div>
        <!--list  end-->

        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';


    import field from './list_component/field.vue'
    import subway from './list_component/subway.vue'

    export default {
        components: {
            header1,
            footer1,
            field,
            subway
        },

        data(){
            return {
                list_scroll: true, //屏幕滚动

                //五大组件tab切换
                active: 0,  //初始化tab index
                currentView: 'field', //默认展示楼盘首页
                sections: [
                    {
                        name: '<i class="sem_icon quyu"></i>区域',
                        view: 'field'  //对应展示组件内容
                    },
                    {
                        name: '<i class="sem_icon ditie"></i>地铁',
                        view: 'subway'
                    }
                ],

                areaActive:0,
                perPriceActive:0,
                totPriceActive:0,
                featureActive:0,

                buildList: [], //楼盘列表，搜索结果

                areaShowFlag: false, //默认面积窗不显示
                bArea: "", //起始面积
                eArea: "", //结束面积

                //单价
                priceShowFlag: false, //默认价格窗不显示
                bNum: "", //起始价格
                eNum: "", //结束价格

                //总价
                priceShowFlag_tot: false, //默认价格窗不显示
                bNum_tot: "", //起始价格
                eNum_tot: "", //结束价格


                //分页
                pageSize: 10, //每页个数
                curPage: 1, //当前页数

                loadingFlag: true, //loading是否显示
                pageFlag: false, //页码是否显示

                //面积筛选数组
                area_arr: [
                    {
                        startNum: '全部'
                    },
                    {
                        startNum: 0,
                        endNum: 100,
                    },
                    {
                        startNum: 100,
                        endNum: 200,
                    },
                    {
                        startNum: 200,
                        endNum: 300,
                    },
                    {
                        startNum: 300,
                        endNum: 500,
                    },
                    {
                        startNum: 500,
                        endNum: 1000,
                    },
                    {
                        startNum: 1000,
                        endNum: 2000,
                    },
                    {
                        startNum: 2000,
                        endNum: 3000,
                    },
                    {
                        startNum: '>3000',
                    }
                ],

                //价格筛选数组
                price_arr: [
                    {
                        startNum: '全部'
                    },
                    {
                        startNum: 1,
                        endNum: 3,
                    },
                    {
                        startNum: 3,
                        endNum: 5,
                    },
                    {
                        startNum: 5,
                        endNum: 8,
                    },
                    {
                        startNum: 8,
                        endNum: 10,
                    },
                    {
                        startNum: 10,
                        endNum: 20,
                    },
                    {
                        startNum: 20,
                        endNum: 30,
                    },
                    {
                        startNum: '>30',
                    }
                ],

                price_tot_arr:[
                    {
                        startNum: '全部'
                    },
                    {
                        startNum: 0,
                        endNum: 1,
                    },
                    {
                        startNum: 1,
                        endNum: 3,
                    },
                    {
                        startNum: 3,
                        endNum: 5,
                    },
                    {
                        startNum: 5,
                        endNum: 8,
                    },
                    {
                        startNum: 8,
                        endNum: 10,
                    },
                    {
                        startNum: 10,
                        endNum: 20,
                    },
                    {
                        startNum: 20,
                        endNum: 30,
                    },
                    {
                        startNum: '>30',
                    }
                ],


                //特色数组
                feature_arr: [
                    '全部',
                    '地铁周边',
                    '互联网',
                    '金融精英',
                    '健康空气',
                    'LEED',
                    '新楼',
                    '地标建筑',
                    '创意园区',
                    '名企开发商',
                    '知名物业',
                    '5A写字楼',
                    '纳什空间'
                ],


                //筛选条件全局参数
                search_keywork:"", //模糊查询
                district: "", //区域
                business:"", //商圈
                area:"", //面积
                price_dj:"",
                price_zj:"",
                label:"",

            }
        },

        methods: {

            //区域和地铁tab
            toggle(i, v){
                this.active = i;
                this.currentView = v;
            },

            //获取楼盘列表
            getList(){
                var _this = this;

                this.buildList = [];

                this.loadingFlag = true;
                this.pageFlag = false;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "search_keywork": "", //楼盘/商圈描述search
                            "district": this.district, //区域
                            "business": this.business, //商圈
                            "line_id": "", //地铁线路ID
                            "station_id": "", //地铁站点ID
                            "area": this.area, //面积
                            "price_dj": this.price_dj, //价格（[30,100]）单价
                            "price_zj": this.price_zj, //价格（[30,100]）总价
                            "label": this.label, //特色标签
                            "orderby": "", //排序(默认:D，面积:A，价格:P)
                            "curr_page": this.curPage,
                            "items_perpage": this.pageSize
                        },
                        "foreEndType": 2,
                        "code": "30000001"
                    }
                ).then(function (response) {
                    //var result = JSON.parse(response.bodyText);
//                    if (result.success) {
//
//                    } else {
//                        this.$Message.error(reslult.message);
//                    }

                    _this.buildList = [{
                        "id": 1,
                        "label": ["互联网", "地标建筑"],
                        "buildingName": "望京SOHO",
                        "address": "望京街与阜安西路交叉路口",
                        "imgAlt": null,
                        "imgPath": "upload/default.jpg",
                        "price": 0.0,
                        "rentArea": "0",
                        "leaseNums": 0,
                        "inquiriesNums": 0,
                        "district": "朝阳",
                        "business": "望京"
                    }, {
                        "id": 2,
                        "label": ["互联网", "地标建筑"],
                        "buildingName": "建外SOHO",
                        "address": "朝阳区建国门外大街4号（国贸中心对面）",
                        "imgAlt": null,
                        "imgPath": "upload/default.jpg",
                        "price": 0.0,
                        "rentArea": "0",
                        "leaseNums": 475,
                        "inquiriesNums": 0,
                        "district": "朝阳",
                        "business": "CBD"
                    }, {
                        "id": 3,
                        "label": ["互联网", "地标建筑"],
                        "buildingName": "SK大厦",
                        "address": "建国门外大街甲6号",
                        "imgAlt": null,
                        "imgPath": "upload/default.jpg",
                        "price": 0.0,
                        "rentArea": "0",
                        "leaseNums": 0,
                        "inquiriesNums": 0,
                        "district": "朝阳",
                        "business": "CBD"
                    }];

                    _this.loadingFlag = false;
                    _this.pageFlag = true;


                }, function (response) {
                    this.$Message.error('获取楼盘列表失败');
                });
            },

            //改变区域筛选
            selList(district){
                this.district = district;
                this.getList();
            },

            //改变面积筛选
            sel_area_list(e){
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
                if ($(e.currentTarget).html() == '全部') {
                    this.area="";
                } else if ($(e.currentTarget).hasClass('last')) {
                    this.area=[];
                    this.area.push(Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g)[0]));
                    this.area.push("");
                } else {
                    this.area=[];
                    this.area.push(Math.floor($(e.currentTarget).find('span:first-child').html()));
                    this.area.push(Math.floor($(e.currentTarget).find('span:nth-child(2)').html()));
                }
                this.getList();

            },

            //改变单价筛选
            sel_price_list(e){
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
                if ($(e.currentTarget).html() == '全部') {
                    this.price_dj="";
                } else if ($(e.currentTarget).hasClass('last')) {
                    this.price_dj=[];
                    this.price_dj.push(Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g)));
                    this.price_dj.push("");
                } else {
                    this.price_dj=[];
                    this.price_dj.push(Math.floor($(e.currentTarget).find('span:first-child').html()));
                    this.price_dj.push(Math.floor($(e.currentTarget).find('span:nth-child(2)').html()));
                }
                this.getList();
            },

            //改变总价筛选
            sel_tot_price_list(e){
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
                if ($(e.currentTarget).html() == '全部') {
                    this.price_zj="";
                } else if ($(e.currentTarget).hasClass('last')) {
                    this.price_zj=[];
                    this.price_zj.push(Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g)));
                    this.price_zj.push("");
                } else {
                    this.price_zj=[];
                    this.price_zj.push(Math.floor($(e.currentTarget).find('span:first-child').html()));
                    this.price_zj.push(Math.floor($(e.currentTarget).find('span:nth-child(2)').html()));
                }
                this.getList();
            },

            //改变特色筛选
            sel_feature_list(e){
                $(e.currentTarget).addClass('active').siblings().removeClass('active');
                this.label=$(e.currentTarget).html();
                this.getList();
            },

            //排序
            buildSort(e){
                $(e.target).addClass('on').siblings().removeClass('on');
                if ($(e.target).find('.sem_icon').length > 0) {
                    $(e.target).siblings().find('.sem_icon').hide();
                    $(e.target).find('.sem_icon').css('display', 'inline-block');
                    if ($(e.target).find('.sem_icon').hasClass('up')) {
                        $(e.target).find('.sem_icon').removeClass('up');
                    } else {
                        $(e.target).find('.sem_icon').addClass('up');
                    }
                }
                this.getList(); //排序后的列表
            },

            //分页
            change(page){
                this.curPage = page;
                this.getList(); //获取楼盘列表
                $(window).scrollTop(0);
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
                    default:
                        ;
                }
            }

        },
        mounted: function () {
            var _this = this;
            //右侧栏 跟随滑动
            $(window).on("scroll", function () {
                if (_this.list_scroll) {
                    var scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    var standard_line = $('.office_list').offset().top;
                    var standard_line_wrap = $('.office_list').height();
                    var fixed_self = $('#sidebar_fix').height();
                    if (scroll_top > (standard_line)) {
                        $('#sidebar_fix').addClass('right_fixed');
                        $('.sidebar_box').css('bottom', 'auto');
                    } else {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css('bottom', 'auto');
                    }

                    if (scroll_top > (standard_line + standard_line_wrap - 75 - fixed_self )) {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css({'bottom': '73px'});
                    }

                    if (fixed_self > standard_line_wrap) {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css({'bottom': 'auto'});
                    }
                }

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


            //总价
            $('input[name="startprice_tot"]').on("input propertychange", function () {
                if (_this.bNum_tot && _this.eNum_tot) {
                    $('#priceConfirm_tot').show();
                } else {
                    $('#priceConfirm_tot').hide();
                }
            });
            $('input[name="endprice_tot"]').on("input propertychange", function () {
                if (_this.bNum_tot && _this.eNum_tot) {
                    $('#priceConfirm_tot').show();
                } else {
                    $('#priceConfirm_tot').hide();
                }
            });


            //单价总价切换
            $('.conts_option').click(function () {
                $('#price-list').children('div').toggleClass('none');
            });


            this.getList(); //获取楼盘列表

        },

        created(){
            document.body.style.backgroundColor = "#fff";
        },
        beforeDestroy(){
            document.body.style.backgroundColor = "#f5f5f5";
        },

        destroyed(){
            this.list_scroll = false;
        }
    }
</script>
