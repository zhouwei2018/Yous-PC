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
                        <h2 class="fl"><i class="detail-icon rent"></i>{{buildingNameSingle}}共有&nbsp;<strong
                                class="text-blue" v-text="total_items"></strong>&nbsp;套房源待租</h2>
                    </div>

                    <div class="screening-range ph10" v-show="initFlag">

                        <!--面积-->
                        <div class="screening-range-list">
                            <span>面积:</span>
                            <ul class="clearfix">
                                <li v-for="(item1,index) in area_arr" v-if="index == 0">
                                    <a href="javascript:;"
                                       :id="item1.code"
                                       :class="{on:areaActive == index}"
                                       :data-sortType="'sort_are_'+index"
                                       @click="sel_area_list($event)"
                                    >全部</a>
                                </li>
                                <template v-else>
                                    <li v-if="index == area_arr.length-1">
                                        <a href="javascript:;" class="last" @click="sel_area_list($event)">>{{item1.minnum}}m²</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;" @click="sel_area_list($event)">{{item1.minnum}}-{{item1.maxnum}}m²</a>
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
                                       @click="sel_price_list($event)"
                                    >全部</a>
                                </li>
                                <template v-else>
                                    <li v-if="index == range_unit_prices.length-1">
                                        <a href="javascript:;" class="last" @click="sel_price_list($event)">>{{item2.minnum}}{{item2.unit}}</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;" @click="sel_price_list($event)">{{item2.minnum}}-{{item2.maxnum}}{{item2.unit}}</a>
                                    </li>
                                </template>

                                <li>
                                    <div class="price-wrap">
                                        <a class="active cur-pointer conts_option">按单价</a>
                                        <a class="cur-pointer conts_option">按总价</a>
                                    </div>
                                </li>
                            </ul>
                            <ul class="clearfix none">

                                <li v-for="(item3,index) in range_total_prices" v-if="index == 0">
                                    <a href="javascript:;"
                                       :id="item3.code"
                                       :class="{on:areaActive == index}"
                                       :data-sortType="'sort_are_'+index"
                                       @click="self_price_tot($event)"
                                    >全部</a>
                                </li>
                                <template v-else>
                                    <li v-if="index == range_total_prices.length-1">
                                        <a href="javascript:;" @click="sel_tot_price_list($event)">>{{item3.minnum}}{{item3.unit}}</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;" @click="sel_tot_price_list($event)">{{item3.minnum}}-{{item3.maxnum}}{{item3.unit}}</a>
                                    </li>
                                </template>

                                <li>
                                    <div class="price-wrap">
                                        <a class="cur-pointer conts_option">按单价</a>
                                        <a class="cur-pointer conts_option active">按总价</a>
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
                        <div class="fr sort-meet-result ">共 <b></b> 套房源符合条件</div>
                    </div>

                    <!--加载中-->
                    <div class="loading_wrap" v-show="loadingFlag">
                        <Spin fix>
                            <Icon type="load-c" size=20 class="demo-spin-icon-load"></Icon>
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

                    <!--暂无结果-->
                    <h3 class="no_result" v-show="buildingShowFlag">暂无待出租写字楼 !</h3>

                    <!--page-->
                    <div class="page_wrap" v-show="pageFlag">
                        <Page :total="100" @on-change="change"></Page>
                    </div>

                </div>
            </div>

            <!--右侧悬浮box start-->
            <div class="sidebar_box">
                <div class="sidebar_main" id="sidebar_fix">
                    <div class="side_model_tit mb10"><i></i>快速找房</div>
                    <div class="booking_house">
                        <div class="booking_house_mes">
                            <div class="side_model_tit cl_blue">快速委托找房</div>
                            <form id="freeLookForm" class="nice-validator n-default">
                                <input id="freeLook_inp" name="phone" class="form_control form_telphone"
                                       type="text"
                                       autocomplete="off"
                                       placeholder="输入您的手机号" maxlength="11"
                                       onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                       onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                <span class="db text-left mt05" id="msg-phone"></span>
                                <div class="form_control form_btn mt10 tc cur_pointer"
                                     @click="instance('success')">一键咨询</div>
                            </form>

                            <p class="nearby">* 客服将在10分钟内联系您</p>
                        </div>
                        <div class="consult_box tc">
                            <i class="right_logo_icon"></i>咨询热线：<b class="text_pink_app">400-810-6698</b>
                        </div>
                    </div>
                    <div class="app_download tc">
                        <img src="../../resources/images/ys_weixin.jpg" alt="扫描二维码关注">
                        <p>随时随地查阅最新房源<br>即刻关注官方微信</p>
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

                building_id:"",
                buildingShowFlag:false,
                house_res_show:false,

                pageFlag: true, //页码是否显示

                buildingName: "", //拼出的楼盘周边配套
                buildingNameSingle: "", //单独楼盘名称

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

                area:"",
                price_dj:"",
                price_zj:"",

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
            }
        },
        methods: {
            //分页
            change(page){
                this.curPage = page;
                this.getList(); //获取楼盘列表
                $(window).scrollTop(0);
            },

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

            //获取楼盘列表
            getDetList(){
                var _this = this;
                this.building_id = this.$route.query.building_id;
                this.buildList = [];

                this.loadingFlag = true;
                this.pageFlag = false;

                this.buildingShowFlag = false;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "building_id": this.building_id,
                            "area": this.area,
                            "price_dj": this.price_dj,
                            "price_zj": this.price_zj,
                            "orderby": "D",
                            "curr_page": "1",
                            "items_perpage": "5"
                        },
                        "foreEndType": 2,
                        "code": "30000003"
                    }
                ).then(function (res) {

                    var result = JSON.parse(res.bodyText);
                    _this.loadingFlag = false;

                    if (result.success) {
                        if(result.data.houses.length){
                            _this.buildList = result.data.houses;
                            _this.total_items = res.data.total_items;
                        }else {
                            _this.house_res_show = false; //结果不展示
                            _this.buildingShowFlag = true;
                            _this.total_items = 0;
                        }
                    } else {
                        _this.total_items = 0;

                    }

                }, function (res) {
                    this.$Message.error('获取楼盘列表失败');
                });
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

            //改变面积
            sel_area_list(e){
                var _this = this;
                $(e.target).addClass('on').parent().siblings('li').find('a').removeClass('on');
                var min = 0, max = 0;
                if ($(e.target).html() == '全部') {
                    this.area = "";

                } else if ($(e.target).hasClass('last')) {
                    this.area = [];
                    min = Math.floor($(e.target).html().match(/\d+/g)[0]);
                    max = "";
                    this.area.push(min);
                    this.area.push(max);
                } else {

                    this.area = [];
                    var newArr=$(e.target).html().split('-');
                    min = Math.floor(newArr[0]);
                    max = Math.floor(newArr[1].match(/\d+/g)[0]);
                    this.area.push(min);
                    this.area.push(max);
                }
                this.getDetList();
            },

            //改变单价筛选
            sel_price_list(e){
                $(e.target).addClass('on').parent().siblings('li').find('a').removeClass('on');

                var min = 0, max = 0;

                if ($(e.target).html() == '全部') {
                    this.price_dj = "";

                } else if ($(e.target).hasClass('last')) {
                    min = Math.floor($(e.target).html().match(/\d+/g));
                    max = "";
                    this.price_dj = [];
                    this.price_dj.push(min);
                    this.price_dj.push(max);
                } else {
                    var newArr=$(e.target).html().split('-');
                    min = Math.floor(newArr[0]);
                    max = Math.floor(newArr[1].match(/\d+/g)[0]);
                    this.price_dj = [];
                    this.price_dj.push(min);
                    this.price_dj.push(max);
                }
                this.price_zj = ""; //总价置空
                this.getDetList();
            },

            //改变总价筛选
            sel_tot_price_list(e){
                var _this = this;
                $(e.target).addClass('on').parent().siblings('li').find('a').removeClass('on');

                var min = 0, max = 0;

                if ($(e.target).html() == '全部') {
                    this.price_zj = "";

                } else if ($(e.target).hasClass('last')) {
                    min = Math.floor($(e.target).html().match(/\d+/g));
                    max = "";
                    this.price_zj = [];
                    this.price_zj.push(min);
                    this.price_zj.push(max);
                } else {
                    var newArr=$(e.target).html().split('-');
                    min = Math.floor(newArr[0]);
                    max = Math.floor(newArr[1].match(/\d+/g)[0]);
                    this.price_zj = [];
                    this.price_zj.push(min);
                    this.price_zj.push(max);
                }
                this.price_dj = ""; //总价置空
                this.getDetList();

            },
        },

        mounted(){
            var _this = this;

            this.getSortList(); //获取筛选条件

            this.getDetList(); //搜索结果列表



            //单价总价切换
            $('.conts_option').click(function () {
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
        }
    }
</script>
