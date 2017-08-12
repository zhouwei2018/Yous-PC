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
                            <li v-for="item in building_images">
                                <a><img :src="item" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="panorama">
                        <img src="../../resources/images/detail/panorama.png" id="panorama_btn" class="cur-pointer"
                             width="94" height="62" alt="720°全景">
                    </div>
                    <div class="carousel-small-box">
                        <div class="carousel-small-prev toggle-button" id="carousel_small_prev">
                            <img src="../../resources/images/detail/small-prev.png" width="20" height="62" alt="">
                        </div>
                        <div class="carousel-small clearfix" id="carousel_small">
                            <ul>
                                <li class="on" v-for="item1 in building_images">
                                    <a class="pr db cur-pointer">
                                        <div class="small-mask"></div>
                                        <img :src="item1" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="carousel-small-next toggle-button" id="carousel_small_next">
                            <img src="../../resources/images/detail/small-next.png" width="20" height="62" alt=""></div>
                    </div>
                </div>
            </div>
            <!--轮播图 end-->

            <div class="building-message">

                <!--logo-->
                <div class="building-label clearfix">
                    <div class="building-tag">
                        <h1 v-text="buildingNameSingle"></h1>
                        <ul class="tag-item">
                            <!--<li>互联网</li>-->
                            <li v-for="item in labels" v-text="item"></li>
                        </ul>
                    </div>
                </div>

                <div class="price-box clearfix mt20">
                    <p class="building-price">
                        <strong v-text="price">&nbsp;</strong><span>元/<em class="font-num">m²</em>·天</span>
                    </p>
                </div>

                <dl class="rental-info clearfix">
                    <dd>
                        <i class="bold db rent_num" v-text="total_items"></i>
                        <span>待租套数</span>
                    </dd>
                    <dd>
                        <span class="bold db rent_num">
                            <i class="bold" v-text="min_renge_price"></i> ~ <i class="bold"
                                                                               v-text="max_renge_price"></i> 元/<em
                                class="font-num">m²</em>·天</span>
                        <span>价格范围</span>
                    </dd>
                    <dd>
                        <span class="bold db rent_num"><i class="bold" v-text="min_renge_area"></i> - <i class="bold"
                                                                                                         v-text="max_renge_area"></i><em
                                class="font-num"> m²</em></span>
                        <span>面积范围</span>
                    </dd>
                </dl>

                <p class="building-address clearfix">
                    <i class="detail-icon fl"></i><span v-text="address"></span><a href="#buildmap" class="show-map">&nbsp;查看地图</a>
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
                    </div>
                </div>

                <div class="build_weixin_top"><i class="detail-icon"></i><span>分享</span>
                    <div class="attention-share-ewm none">
                        <div class="build_weixin_img" id="ys_weixin_img"></div>
                    </div>
                </div>

            </div>

        </div>

        <!--building 信息分类start-->
        <div class="category-message-box clearfix ">

            <div class="category-message" id="category_message">

                <div id="detail-infomation">
                    <div class="category-item-title-first">
                        <h2 class="fl"><i class="detail-icon rent"></i>{{buildingNameSingle}}共有&nbsp;<strong
                                class="text-blue" v-text="total_items"></strong>&nbsp;套房源待租</h2>
                        <a class="show-link mr20" href="javascript:;" target="_blank" @click="lookAll()">查看全部</a>
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
                                        <a href="javascript:;" class="last"
                                           @click="sel_area_list($event)">>{{item1.minnum}}m²</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;"
                                           @click="sel_area_list($event)">{{item1.minnum}}-{{item1.maxnum}}m²</a>
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
                                        <a href="javascript:;" class="last"
                                           @click="sel_price_list($event)">>{{item2.minnum}}{{item2.unit}}</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;"
                                           @click="sel_price_list($event)">{{item2.minnum}}-{{item2.maxnum}}{{item2.unit}}</a>
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
                                        <a href="javascript:;"
                                           @click="sel_tot_price_list($event)">>{{item3.minnum}}{{item3.unit}}</a>
                                    </li>
                                    <li v-else>
                                        <a href="javascript:;"
                                           @click="sel_tot_price_list($event)">{{item3.minnum}}-{{item3.maxnum}}{{item3.unit}}</a>
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
                        <div class="fr sort-meet-result ">共 <b v-text="total_items"></b> 套房源符合条件</div>
                    </div>

                    <!--加载中-->
                    <div class="loading_wrap" v-show="loadingFlag">
                        <Spin fix>
                            <Icon type="load-c" size=20        class="demo-spin-icon-load"></Icon>
                            <div>加载中……</div>
                        </Spin>
                    </div>

                    <ul class="detail-office-list" v-show="house_res_show">
                        <li v-for="item in buildList">
                            <router-link target="_blank"
                                         :to="{path:'/house_det',query:{building_id:building_id,house_id:item.id}}">
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
                            </router-link>
                        </li>
                    </ul>

                    <!--暂无结果-->
                    <h3 class="no_result" v-show="buildingShowFlag">暂无待出租写字楼 !</h3>

                    <!--page-->
                    <div class="page_det_box" v-show="pageFlag">
                        <Page :total="100" @on-change="change"></Page>
                    </div>

                </div>

                <div class="building-information">
                    <div class="category-item-title">
                        <h2 class="fl"><i class="detail-icon introduce"></i>{{buildingNameSingle}}简介</h2>
                        <a class="show-link mr20" href="javascript:;" target="_blank" @click="lookMore()">查看详情</a>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <td colspan="2" class="clearfix">
                                <em class="fl">物业公司：</em>
                                <span class="fl" v-text="property_company"></span>
                            </td>
                            <td colspan="2"></td>
                            <td colspan="2">
                                <em>物业费：</em><span v-text="property_fee+'/m²·月 '"></span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <em>建成年代：</em><span v-text="opening_date"></span>
                            </td>
                            <td colspan="2"></td>
                            <td colspan="2">
                                <em>楼盘级别：</em><span v-text="building_level"></span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <em>产权性质：</em><span v-text="property_rights"></span>
                            </td>
                            <td colspan="2"></td>
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
                                     @click="modal6 = true">一键咨询
                                </div>
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

        <!--一键咨询弹窗-->
        <Modal v-model="modal6" width="420">
            <div popup>
                <Form ref="formInline2" :model="formInline1" :rules="ruleValidate">
                    <h3>安心委托,快速成交</h3>

                    <p>只需一个电话，房源直接上线，坐等海量客户上门看房</p>
                    <Form-item  prop="telephone">
                        <div class="popItem">
                            <span class="inp_icon phone"></span>
                            <input type="num" maxlength="11" required="" value="" name="" placeholder="请输入您的手机号码" v-model="formInline2.telephone">
                            <TimerBtn ref="timerbtn2" class="btn btn-default pop_sendcode_btn" v-on:run="sendCode2"
                                      style="width: 140px; height: 50px;"
                                      second="60"></TimerBtn>
                        </div>
                    </Form-item>
                    <div class="popItem">
                        <span class="inp_icon password"></span>
                        <input type="num" value="" maxlength="6" required="" v-model="formInline2.InputCode"  placeholder="请输入您收到的验证码">
                    </div>
                    <p>您也可以拨打<i> 400-078-8800 </i>直接委托房源</p>
                    <Form-item>
                        <input type="primary" class="pop_subbtn" value="提交委托" @click="handleSubmit2('formInline2')">
                    </Form-item>
                </Form>
            </div>
        </Modal>

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

    import '../../resources/plugin/qrcode/jquery.qrcode.min.js';

    export default {
        data(){
            return {

                modal6: false, //弹窗
                formInline1: {
                    telephone:'',
                    city: '',
                    trade_area: ''
                },

                formInline2:{
                    telephone: ''
                },

                ruleValidate: {
                    telephone: [
                        { required: true, message: '手机号不能为空', trigger: 'blur' }
                    ]
                },


                buildingShowFlag: true, //无结果
                house_res_show: true,  //楼盘结果ul

                labels: [],

                buildingName: "", //拼出的楼盘周边配套
                buildingNameSingle: "", //单独楼盘名称

                positionData: "", //经纬度

                pageFlag: true, //页码是否显示

                building_id: "", //楼盘id
                address: "",//地址
                price: "",//价格
                min_renge_area: "",
                max_renge_area: "",
                min_renge_price: "",
                max_renge_price: "",
                lease_nums: "",

                building_images:[], //banner图片


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

                area: "",
                price_dj: "",
                price_zj: "",

                buildList: [], //楼盘列表，搜索结果
                total_items: '--', //结果总数
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


                //物业信息
                property_company: '', //物业公司
                property_fee: '', //物业费
                opening_date: '',// 建成年代
                building_level: '', //楼盘级别
                property_rights: '', //产权性质
                building_area: '', //建筑面积

            }
        },
        components: {
            mapPart
        },
        methods: {

            sendCode2: function () {
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
            },

            handleSubmit2(name) {
                this.$http.post(
                    this.$api,
                    {
                        parameters: {
                            "VerifiationCCodeType": 3,
                            "Col_telephone": this.formInline2.telephone,
                            "InputCode":this.formInline2.InputCode
                        },
                        foreEndType: "1",
                        code: "20000004"
                    }
                ).then(function (response) {
                    var reslute = JSON.parse(response.bodyText);
                    if (reslute.success) {
                        this.$Message.success('委托单提交成功!');
                        this.modal6=false;
                    } else {
                        this.$Message.error(reslute.message);
                    }

                }, function (response) {
                    this.$Message.error('API接口报错-网络错误!');
                    this.loading = false;
                });
                this.$Message.error('委托单提交成功!');
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

                            _this.labels = result.data.label.split('、');
                            var obj = {
                                name: result.data.building_name,
                                labels: result.data.label.split('、')
                            };
                            _this.$emit("listenchild", obj);

                            _this.district = result.data.district == null ? '区域' : result.data.district; //区域
                            _this.business = result.data.business == null ? '商圈' : result.data.business; //商圈

                            _this.building_images=result.data.building_images;

                            _this.address = '[' + _this.district + '-' + _this.business + '] ' + result.data.address;
                            _this.price = result.data.price == null ? '--' : result.data.price;
                            _this.positionData = result.data.longitude + ',' + result.data.latitude;

                            _this.min_renge_area = result.data.min_renge_area == null ? '--' : result.data.min_renge_area;
                            _this.max_renge_area = result.data.max_renge_area == null ? '--' : result.data.max_renge_area;
                            _this.min_renge_price = result.data.min_renge_price == null ? '--' : result.data.min_renge_price;
                            _this.max_renge_price = result.data.max_renge_price == null ? '--' : result.data.max_renge_price;
                            _this.lease_nums = result.data.lease_nums == null ? '--' : result.data.lease_nums;


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
                        if (result.data.houses.length) {
                            _this.buildList = result.data.houses;
                            _this.total_items = result.data.total_items == null ? '--' : result.data.total_items;
                        } else {
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

            //查看全部
            lookAll(){
                this.$emit('listenchild2');
            },

            //查看详情
            lookMore(){
                this.$emit('listenchild3');
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
                    var newArr = $(e.target).html().split('-');
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
                    var newArr = $(e.target).html().split('-');
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
                    var newArr = $(e.target).html().split('-');
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
                pop_up: false,//大图是否有弹出框
                pop_div: '#pop_carousel_box',//弹出框框架
                pop_pic: '#pop_carousel',//弹出框图片框架
                pop_xx: '.pop-carousel-close',//关闭弹出框按钮
                pop_prev: '#pop_carousel_prev',//弹出框左箭头
                pop_next: '#pop_carousel_next',//弹出框右箭头
                mhc: '.carousel-mask'//朦灰层
            });


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


        }
    }
</script>
