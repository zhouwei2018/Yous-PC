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
        height: 84px;
        margin: 0 auto;
        position: relative;
    }

    //分页
    .page_wrap {
        text-align: center;
        width: 410px;
        margin: 0 auto;
        padding-top: 50px;
    }

    .ivu-modal-confirm {
        padding: 20px;
    }

    .ivu-btn-primary {
        background-color: #3facf8;
        border-color: #3facf8;
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
                        <div class="fl clearfix">
                            <input id="search_inp" type="text" autocomplete="off" v-model="search_keywork"
                                   placeholder="请输入写字楼名称或商圈"
                                   onkeyup="this.value=this.value.replace(/(^\s*)/g,'')"
                                   @keyup.enter="searchClick();"
                                   maxlength="30">
                        </div>
                        <a class="map_btn fl ml10" id="bannerSearchbtn" @click="searchClick()">搜索</a>
                        <router-link target="_blank" :to="{path:'/map_search'}" class="map_find_room fl ml10"><i></i>地图搜索
                        </router-link>
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
                <div class="screening_conditions mt15 pr">

                    <!--区域地铁切换-->
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
                        </div>

                        <component :is="currentView"
                                   @refreshbizlines="selList"
                                   @refreshbizlines2="selList_business"
                                   @refreshbizlines3="selList_lines"
                                   @refreshbizlines4="selList_station"
                                   ref="selectdis"
                        ></component>

                    </div>

                    <!--面积筛选-->
                    <div class="screening_conts_detail pv20" v-show="initFlag">
                        <div id="areaSort_wrap" class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">面积:</span>

                            <a v-for="(item1,index) in area_arr" v-if="index == 0"
                               href="javascript:;"
                               :id="item1.code"
                               :class="{active:areaActive == index}"
                               :data-sortType="'sort_are_'+index"
                               @click="sel_area_list($event)"
                            >全部</a>
                            <template v-else>
                                <a v-if="index == area_arr.length-1" href="javascript:;"
                                   :class="{active:areaActive == index}"
                                   class="last"
                                   :data-sortType="'sort_are_'+index"
                                   @click="sel_area_list($event)"
                                ><span class="font_num">>{{item1.minnum}}</span><span class="font_num">m²</span></a>
                                <a v-else href="javascript:;"
                                   :class="{active:areaActive == index}"
                                   :data-sortType="'sort_are_'+index"
                                   @click="sel_area_list($event)">
                                    <span class="font_num">{{item1.minnum}}</span>-<span
                                        class="font_num">{{item1.maxnum}}</span><span class="font_num">m²</span>
                                </a>
                            </template>

                            <div class="area_wrap pr" @mouseenter="areaShowFlag = true"
                                 @mouseleave="hidePop('areaShowFlag','bArea','eArea')">
                                <div class="interval pr">
                                    <input type="text" autocomplete="off" name="temp-beginArea" value=""
                                           readonly
                                           v-model="bArea">
                                    <samp>-</samp>
                                    <input type="text" autocomplete="off" name="temp-endArea" value=""
                                           readonly
                                           v-model="eArea">
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
                                            <a class="confrim-btn cur-pointer" style="display: none;"
                                               @click="self_area($event)" id="areaConfirm">确定</a>
                                            <em class="ml05 font-num">m²</em>
                                        </form>
                                    </div>
                                </div>
                                <!--面积选择窗 end-->
                            </div>

                        </div>
                    </div>

                    <!--价格筛选-->
                    <div class="screening_conts_detail clearfix pv20" v-show="initFlag" id="price-list">
                        <div class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">价格:</span>

                            <a v-for="(item2,index) in range_unit_prices" v-if="index == 0"
                               :class="{active:perPriceActive == index}"
                               :data-sortType="'sort_pri_per'+index"
                               :id="item2.code"
                               @click="sel_price_list($event)">全部</a>
                            <template v-else>
                                <a v-if="index == range_unit_prices.length-1" :class="{active:perPriceActive == index}"
                                   class="last"
                                   :data-sortType="'sort_pri_per'+index"
                                   @click="sel_price_list($event)"
                                ><span class="font_num">>{{item2.minnum}}</span><span class="font_num"
                                                                                      v-text="item2.unit"></span></a>
                                <a v-else href="javascript:;" :class="{active:perPriceActive == index}"
                                   :data-sortType="'sort_pri_per'+index"
                                   @click="sel_price_list($event)">
                                    <span class="font_num">{{item2.minnum}}</span>-<span class="font_num">{{item2.maxnum}}</span><span
                                        class="font_num" v-text="item2.unit"></span>
                                </a>
                            </template>

                            <div class="price_wrap pr" @mouseenter="priceShowFlag = true"
                                 @mouseleave="hidePop('priceShowFlag','bNum','eNum')">
                                <div class="interval pr">
                                    <input name="temp-startprice" type="text" autocomplete="off"
                                           readonly
                                           v-model="bNum">
                                    <samp>-</samp>
                                    <input name="temp-endprice" type="text" autocomplete="off"
                                           readonly
                                           v-model="eNum">
                                    <em class="text-black ml05">元</em>
                                </div>
                                <div class="interval_pop clearfix" style="display: none;" v-show="priceShowFlag">
                                    <div class="interval ma0">
                                        <form action="">
                                            <input type="text" autocomplete="off" id="beginPrice4Day" name="startprice"
                                                   maxlength="6"
                                                   v-model="bNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>-</samp>
                                            <input type="text" autocomplete="off" id="endPrice4Day" name="endprice"
                                                   maxlength="6"
                                                   v-model="eNum"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <em class="text-black ml05">元</em>
                                            <input type="hidden" name="type" value="1">

                                            <a class="cur-pointer priceConfirm" id="priceConfirm"
                                               style="display: none;" @click="self_price_per($event)">确定</a>
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

                            <a v-for="(item3,index) in range_total_prices" v-if="index == 0"
                               :class="{active:totPriceActive == index}"
                               :data-sortType="'sort_pri_tot'+index"
                               @click="sel_tot_price_list($event)">全部</a>
                            <template v-else>
                                <a v-if="index == range_unit_prices.length-1" :class="{active:perPriceActive == index}"
                                   class="last"
                                   :data-sortType="'sort_pri_tot'+index"
                                   @click="sel_tot_price_list($event)"
                                ><span class="font_num">>{{item3.minnum}}</span><span class="font_num"
                                                                                      v-text="item3.unit"></span></a>
                                <a v-else href="javascript:;" :class="{active:totPriceActive == index}"
                                   :data-sortType="'sort_pri_tot'+index"
                                   @click="sel_tot_price_list($event)">
                                    <span class="font_num">{{item3.minnum}}</span>-<span
                                        class="font_num">{{item3.maxnum}}</span><span class="font_num"
                                                                                      v-text="item3.unit"></span>
                                </a>
                            </template>

                            <div class="price_wrap pr" @mouseenter="priceShowFlag_tot = true"
                                 @mouseleave="hidePop('priceShowFlag_tot','bNum_tot','eNum_tot')">
                                <div class="interval pr">
                                    <input type="text" autocomplete="off" name="temp-startprice"
                                           readonly
                                           v-model="bNum_tot">
                                    <samp>-</samp>
                                    <input type="text" autocomplete="off" name="temp-endprice"
                                           readonly
                                           v-model="eNum_tot">
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
                                               style="display: none;" @click="self_price_tot($event)">确定</a>
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

                    <!--特色label-->
                    <div class="screening_conts_detail clearfix pv20">
                        <div class="screening_conts_list clearfix">
                            <span class="screening_title mr15">特色:</span>
                            <a href="javascript:;" v-for="(item4,index) in labels"
                               :id="item4.code"
                               :class="{active:featureActive == index}"
                               :data-sortType="'sort_lab_'+index"
                               @click="sel_feature_list($event)"
                               v-text="item4.name"
                            ></a>
                        </div>
                    </div>

                    <!--已选择条件-->
                    <div class="screening_conts_detail clearfix pv20" v-show="chosenFlag">
                        <div class="screening_conts_list clearfix selected_item">
                            <span class="screening_title mr15">已选:</span>

                            <a href="javascript:;" v-for="sort_item in chosenArr"
                               :data-sortType="sort_item.sortType"
                               v-if="sort_item.sort_two == 1">{{sort_item.min + '-' + sort_item.max + sort_item.unit}}<i
                                    class="sem_icon hover" @click="del_one($event)"></i>
                            </a>
                            <template v-else>
                                <a href="javascript:;" v-if="sort_item.sort_two == 2"
                                   :data-sortType="sort_item.sortType"
                                   :class="sort_item.class">{{'>' + sort_item.min + sort_item.unit}}<i
                                        class="sem_icon hover"
                                        @click="del_one($event)"></i>
                                </a>
                                <a href="javascript:;" v-else
                                   :data-sortType="sort_item.sortType"
                                   :class="sort_item.class">{{sort_item.name}}<i class="sem_icon hover"
                                                                                 @click="del_one($event)"></i>
                                </a>
                            </template>


                            <span class="del_all cursor" @click="del_all()"><i class="sem_icon"></i>全部清除</span>

                        </div>
                    </div>

                </div>
                <!-- 筛选区域 end  -->

                <div class="list_result clearfix mb40 pr" id="list_result">
                    <div class="office_list pt20">
                        <div class="conditions_result_box clearfix tj_box">
                            <div class="fl mt07">
                                <i class="sem_icon"></i><em class="result_conts_txt">为您找到 <span
                                    class="font-num" v-text="total_items"></span> 栋写字楼</em>
                            </div>
                        </div>

                        <div class="sort_box" @click="buildSort($event)">
                            <a href="javascript:;" class="on">默认</a>
                            <a href="javascript:;" id="areaSort" class="pr">面积<i class="sem_icon"></i>
                                <p class="bubble">点击按面积从小到大排序</p></a>
                            <a href="javascript:;" id="priceSort" class="pr">价格<i class="sem_icon"></i>
                                <p class="bubble">点击按价格从低到高排序</p></a>
                        </div>
                        <hr class="sort_box_line">

                        <!--搜索结果list start-->

                        <div class="office_list_item" v-for="(item,index) in buildList">
                            <router-link :to="{path:'/detail',query:{building_id:item.id}}" class="db pr clearfix"
                                         :id="item.id" target="_blank">
                                <div class="fl pr">
                                    <img :src="item.img_path" :alt="item.img_alt">
                                    <!--<img :src="http://116.62.71.76:81/default-youshi.png" :alt="item.img_alt">-->
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app"
                                                                    v-text="item.price"></em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl" v-text="item.building_name"></b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i><span v-text="item.address"></span>
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积
                                        <span v-if="item.min_areas==item.max_areas" class="text-black fb" v-text="item.min_areas"></span>
                                        <span v-else class="text-black fb" v-text="item.min_areas+'-'+item.max_areas"></span>
                                        <span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb" v-text="item.lease_nums"></span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover" v-text="item.inquiries_nums"></b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span v-for="perlabel in item.tags" v-text="perlabel"></span>
                                        </div>
                                    </dd>
                                </dl>
                            </router-link>
                        </div>

                        <!--搜索结果list end-->
                        <div class="page_wrap" v-show="pageFlag">
                            <Page :total="total_pages*10" @on-change="change"></Page>
                        </div>

                        <!--加载中-->
                        <div class="loading_wrap" v-show="loadingFlag">
                            <Spin fix>
                                <Icon type="load-c" size=20         class="demo-spin-icon-load"></Icon>
                                <div>加载中……</div>
                            </Spin>
                        </div>

                        <!--暂无结果-->
                        <h3 class="no_result" v-show="buildingShowFlag">暂无待出租写字楼 !</h3>


                    </div>

                    <!--右侧栏-->
                    <div class="sidebar_box pt70">
                        <div class="sidebar_main" id="sidebar_fix">
                            <div class="side_model_tit"><i></i>地图找房</div>
                            <div class="map_house pr mt10">
                                <div class="map_hover_wrap">
                                    <div class="map_hover_bg"></div>
                                    <div class="pr">
                                        <img src="../resources/images/list/maps.png" alt="">
                                        <router-link target="_blank" class="quick_btn" :to="{path:'/map_search'}">立即找房
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="side_model_tit mb10"><i></i>快速找房</div>
                            <div class="booking_house">
                                <div class="booking_house_mes">
                                    <div class="side_model_tit cl_blue">快速委托找房</div>
                                    <form id="freeLookForm" class="nice-validator n-default">
                                        <div class="form_control form_btn mt10 tc cur_pointer" @click="modal6 = true">
                                            一键咨询
                                        </div>
                                    </form>

                                    <p class="nearby">* 客服将在10分钟内联系您</p>
                                </div>
                                <div class="consult_box tc">
                                    <i class="right_logo_icon"></i>咨询热线：<b class="text_pink_app">400-078-8800</b>
                                </div>
                            </div>
                            <div class="app_download tc">
                                <img src="../resources/images/ys_weixin.jpg" alt="扫描二维码关注">
                                <p>随时随地查阅最新房源<br>即刻关注官方微信</p>
                            </div>
                        </div>
                    </div>
                    <!--右侧栏-->
                </div>

            </div>

        </div>

        <!--一键咨询弹窗-->
        <Modal v-model="modal6" width="420" @on-cancel="cancel_one">
            <div popup>
                <Form ref="formInline2" id="wt_form" :model="formInline2">
                    <h3>一键咨询</h3>
                    <Form-item prop="telephone">
                        <div class="popItem">
                            <span class="inp_icon phone"></span>
                            <form action="" id="form_send2">
                                <input type="text" maxlength="11" required="" value=""
                                       name="ys_mobile2"
                                       onkeyup="this.value=this.value.replace(/[^\d]/g,'');"
                                       onafterpaste="this.value=this.value.replace(/[^\d]/g,'')"
                                       placeholder="请输入您的手机号码"
                                       v-model="formInline2.telephone">
                            </form>
                            <TimerBtn ref="timerbtn2" class="btn btn-default pop_sendcode_btn" v-on:run="sendCode2"
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

                modal6: false, //弹窗
                formInline1: {
                    telephone: '',
                    city: '',
                    trade_area: ''
                },

                formInline2: {
                    telephone: ''
                },


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

                initFlag: false,

                areaActive: 0,
                perPriceActive: 0,
                totPriceActive: 0,
                featureActive: 0,

                buildList: [], //楼盘列表，搜索结果
                total_items: '--', //结果总数
                total_pages: 0, //总页数

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

                //已选择条件是否显示
                chosenFlag: false,
                chosenArr: [], //已选择条件arr


                //分页
                pageSize: 10, //每页个数
                curPage: 1, //当前页数

                loadingFlag: true, //loading是否显示
                pageFlag: false, //页码是否显示

                //面积筛选数组
                area_arr: [],

                //价格筛选数组
                range_unit_prices: [],

                range_total_prices: [],

                //特色数组
                labels: [],

                buildingShowFlag: false, //暂无楼盘显示与否

                //筛选条件全局参数
                search_keywork: "", //模糊查询
                district: "", //区域
                business: "", //商圈
                line_id: "", //线路
                station_id: "",//车站
                area: "", //面积
                price_dj: "",
                price_zj: "",
                label: "",
                orderby: "D",

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

            //模糊搜索
            searchClick(){
                this.getList();
            },

            //删除一条
            del_one(e){
                var _this = this;
                var del_tip = $(e.target).parent().attr('data-sortType');
                console.log(this.chosenArr);
                if (del_tip.indexOf('sort_reg_dis') != -1) { //点击的是删除区域

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }

                        if (del_tip.indexOf(val.sortType.substring(0, 8)) != -1) {
                            _this.chosenArr.splice(i, 1);
                        }

                    });

                    this.$refs.selectdis.districtHide(del_tip); //子组件联动
                    this.district = ""; //区域置空
                    this.business = ""; //商圈置空

                } else if (del_tip.indexOf('sort_reg_bus') != -1) { //点击的是删除商圈

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }
                    });
                    this.$refs.selectdis.businessInit(del_tip);
                    this.business = ""; //商圈置空

                } else if (del_tip.indexOf('sort_sub_lin') != -1) { //点击的是删除地铁线路

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }
                        if (del_tip.indexOf(val.sortType.substring(0, 8)) != -1) {
                            _this.chosenArr.splice(i, 1);
                        }
                    });

                    this.$refs.selectdis.lineHide(del_tip);
                    this.line_id = ""; //线路置空
                    this.station_id = ""; //车站置空

                } else if (del_tip.indexOf('sort_sub_sta') != -1) { //点击的是删除车站

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }
                    });
                    this.$refs.selectdis.stationInit(del_tip);
                    this.station_id = ""; //车站置空

                } else if (del_tip.indexOf('sort_lab') != -1) { //点击的是删除label

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }
                    });
                    this.label = ""; //特色标签置空

                } else if (del_tip.indexOf('sort_are') != -1) { //点击的是删除面积100-300m2

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {
                            _this.chosenArr.splice(i, 1);
                        }
                    });
                    this.area = ""; //面积置空
                } else if (del_tip.indexOf('sort_pri') != -1) { //点击的是删除价格

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType == del_tip) {

                            _this.chosenArr.splice(i, 1);
                        }
                    });
                    this.price_dj = ""; //单价置空
                    this.price_zj = ""; //总价置空
                }

                //查询
                this.getList();


                if (this.chosenArr.length < 1) {
                    this.chosenFlag = false;
                    this.del_all();
                }

            },

            //清除条件
            del_all(){
                this.chosenArr = [];
                this.chosenFlag = false;

                if (this.$refs.selectdis.districtHide) {
                    this.$refs.selectdis.districtHide(); //区域子组件联动
                }

                if (this.$refs.selectdis.lineHide) {
                    this.$refs.selectdis.lineHide(); //地铁子组件联动
                }

                $('#sub_line').hide();

                $('#areaSort_wrap a').removeClass('active');  //面积回到全部
                $('#area_all').addClass('active');

                $('#price-list a').removeClass('active');  //价格回到全部
                $('#range_pri_per_all').addClass('active');
                $('#range_pri_tot_all').addClass('active');

                $('#label_all').parent().find('>a').removeClass('active');
                $('#label_all').addClass('active');

                //清空条件
                this.search_keywork = ""; //模糊查询
                this.district = "";//区域
                this.business = "";//商圈
                this.line_id = "";//地铁线路ID
                this.station_id = "";//地铁站点ID
                this.area = "";//面积
                this.price_dj = "";//价格（[30,100]）单价
                this.price_zj = "";//价格（[30,100]）总价
                this.label = "";////特色标签
                this.curPage = 1;//区域
                this.orderby = "D";//区域

                //升序降序
                $('.sort_box a:first-child').addClass('on').siblings().removeClass('on');

                //查询
                this.getList();

            },

            //区域和地铁tab
            toggle(i, v){
                this.active = i;
                this.currentView = v;
                this.del_all();
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

                        _this.labels = result.data.labels; //特色

                        var all_labels = {
                            code: "",
                            name: "全部"
                        };
                        _this.labels.unshift(all_labels);

                        _this.initFlag = true;


                    } else {
                        this.$Message.error(result.message);
                    }
                }, function (res) {
                    this.$Message.error('获取区域失败');
                });
            },

            //获取楼盘列表
            getList(){
                var _this = this;

                this.buildList = [];

                this.loadingFlag = true;
                this.pageFlag = false;

                this.buildingShowFlag = false;
                this.total_items = '--';

                this.search_keywork = this.search_keywork.replace(/(^\s*)|(\s*$)/g, '');

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "search_keywork": this.search_keywork, //楼盘/商圈描述search
                            "district": this.district, //区域
                            "business": this.business, //商圈
                            "line_id": this.line_id, //地铁线路ID
                            "station_id": this.station_id, //地铁站点ID
                            "area": this.area, //面积
                            "price_dj": this.price_dj, //价格（[30,100]）单价
                            "price_zj": this.price_zj, //价格（[30,100]）总价
                            "label": this.label, //特色标签
                            "orderby": this.orderby, //排序默认：D ，面积升序：AA，面积降序：AD，价格升序：PA，价格降序：PD
                            "curr_page": this.curPage,
                            "items_perpage": this.pageSize
                        },
                        "foreEndType": 2,
                        "code": "30000001"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    _this.loadingFlag = false;
                    if (result.success) {
                        if(result.data){
                            if (result.data.total_items > 0) {

                                _this.buildingShowFlag = false;

                                for (var i = 0; i < result.data.buildings.length; i++) {
                                    if (result.data.buildings[i].label) {
                                        result.data.buildings[i].tags = result.data.buildings[i].label.split(',');
                                    } else {
                                        result.data.buildings[i].tags = [];
                                    }

                                }
                                _this.buildList = result.data.buildings;
                                _this.total_items = result.data.total_items;
                                _this.total_pages = result.data.total_pages;

                                if (_this.total_pages <= 1) {
                                    _this.pageFlag = false;
                                } else {
                                    _this.pageFlag = true;
                                }

                            } else {
                                _this.pageFlag = false;
                                _this.buildingShowFlag = true;
                                _this.total_items = 0;
                            }
                        }else{
                            _this.pageFlag = false;
                            _this.buildingShowFlag = true;
                            _this.total_items = 0;
                        }

                    }

                }, function (res) {
                    this.$Message.error('获取楼盘列表失败');
                });
            },

            //比较条件是否已存在
            compareStr(obj, arr){
                var findStr = obj.sortType.substring(0, 12),
                    findStr2 = obj.sortType.substring(0, 8);
                var n = 0,
                    curr_index = 0;
                if (arr.length > 0) {
                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf(findStr2) != -1 && val.sortType.indexOf(findStr) == -1) {
                            obj.class = "rem_together";
                        } else if (val.sortType.indexOf(findStr2) != -1) {
                            n++;
                            curr_index = i;
                            obj.class = "";
                        }
                        ;
                    });

                    if (n > 0) {
                        arr.splice(curr_index, 1);
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].class == 'rem_together') {
                                arr.splice(arr[i]);
                            }
                        }
                        this.business = ""; //商圈跟着删
                    }
                }

                if (obj.id == 'district_all') {

                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_reg') != -1) {
                            arr.splice(i, 1);
                        }
                        ;
                    });

                    this.district = ""; //区域
                    this.business = ""; //商圈

                } else if (obj.id == 'dis_sta_all') {

                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_reg_bus') != -1) {
                            arr.splice(i, 1);
                        }
                        ;
                    });
                    this.business = ""; //商圈

                } else if (obj.id == 'line_all') {

                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_sub') != -1) {
                            arr.splice(i, 1);
                        }
                        ;
                    });

                    this.line_id = ""; //线路
                    this.station_id = ""; //车站

                } else if (obj.id == 'line_sta_all') {

                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_sub_sta') != -1) {
                            arr.splice(i, 1);
                        }
                        ;
                    });
                    this.station_id = ""; //车站

                } else {
                    arr.push({
                        name: obj.name,
                        id: obj.id,
                        sortType: obj.sortType,
                        class: obj.class
                    });

                }
                //显示已选择条件
                if (arr.length <= 0) {
                    this.chosenFlag = false;
                } else {
                    this.chosenFlag = true;
                }
                this.getList();
            },

            //改变区域筛选
            selList(obj){
                this.district = obj.id;
                this.compareStr(obj, this.chosenArr);
            },

            //改变商圈
            selList_business(obj){
                this.business = obj.id;
                this.compareStr(obj, this.chosenArr);
            },

            //改变地铁线路
            selList_lines(obj){
                this.line_id = obj.id;
                this.compareStr(obj, this.chosenArr);
            },

            //改变车站
            selList_station(obj){
                this.station_id = obj.id;
                this.compareStr(obj, this.chosenArr);
            },

            //改变面积
            sel_area_list(e){
                var _this = this;
                $(e.currentTarget).addClass('active').siblings().removeClass('active');

                //清空自定义
                this.bArea = ''; //起始面积
                this.eArea = ''; //结束面积

                var min = 0, max = 0, sort_two_single = 1;
                if ($(e.currentTarget).html() == '全部') {
                    this.area = "";
                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_are') != -1) {
                            _this.chosenArr.splice(i, 1);
                        }
                        ;
                    });

                    //显示已选择条件
                    if (this.chosenArr.length <= 0) {
                        this.chosenFlag = false;
                    } else {
                        this.chosenFlag = true;
                    }
                    this.getList();

                    return;

                } else if ($(e.currentTarget).hasClass('last')) {
                    this.area = [];
                    min = Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g)[0]);
                    max = "";
                    this.area.push(min);
                    this.area.push(max);
                    sort_two_single = 2;
                } else {
                    this.area = [];
                    var curr_index = 0, n = 0;
                    if (this.chosenArr.length > 0) {
                        this.chosenArr.forEach(function (val, i) {
                            if (val.sortType.indexOf('sort_are') != -1) {
                                n++;
                                curr_index = i;
                            }
                            ;
                        });

                        if (n > 0) {
                            this.chosenArr.splice(curr_index, 1);
                        }
                    }

                    min = Math.floor($(e.currentTarget).find('span:first-child').html());
                    max = Math.floor($(e.currentTarget).find('span:nth-child(2)').html());
                    this.area.push(min);
                    this.area.push(max);
                }

                //添加已筛选
                //this.chosenArr.push();
                var comObj = {
                    id: $(e.currentTarget).attr('id'),
                    name: $(e.currentTarget).text(),
                    sortType: $(e.currentTarget).attr('data-sortType'),
                    min: min,
                    max: max,
                    unit: $(e.currentTarget).find('span:last-child').text(),
                    sort_two: sort_two_single, //两组min-max标记
                };
                this.compareStr3(comObj, this.chosenArr);
            },

            //自定义面积
            self_area(e){
                var _this = this;
                this.area = [Math.floor(this.bArea), Math.floor(this.eArea)];
                $('#areaSort_wrap >a').removeClass('active');

                if ($('.selected_item >a').length) {
                    for (var i = 0; i < $('.selected_item >a').length; i++) {
                        if ($('.selected_item >a').eq(i).attr('data-sortType').indexOf('sort_are') != -1) {
                            this.chosenArr.splice(i, 1);
                            $('.selected_item >a').eq(i).attr('data-sortType', 'sort_are_9').html(this.bArea + '-' + this.eArea + 'm²<i class="sem_icon hover"></i>');
                        }
                    }
                } else {
                    //创建自定义的条件
                    this.chosenFlag = true;
                }

                this.chosenArr.push({
                    id: $(e.target).id,
                    sortType: 'sort_are_9',
                    min: Math.floor($(e.target).parent().find('input').eq(0).val()),
                    max: Math.floor($(e.target).parent().find('input').eq(1).val()),
                    unit: 'm²',
                    sort_two: 1 //min-max形式
                });

                $('.sem_icon').off().click(function (e) {
                    _this.del_one(e);
                });

                this.getList();
            },

            //比较条件是否已存在（面积）
            compareStr3(obj, arr){

                var findStr = obj.sortType.substring(0, 8);
                var n = 0, curr_index = 0;
                if (arr.length > 0) {
                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf(findStr) != -1) {
                            n++;
                            curr_index = i;
                        }
                        ;
                    });

                    if (n > 0) {
                        arr.splice(curr_index, 1);
                    }
                }

                arr.push({
                    name: obj.name,
                    id: obj.id,
                    sortType: obj.sortType,
                    min: obj.min,
                    max: obj.max,
                    unit: obj.unit,
                    sort_two: obj.sort_two //两组min-max标记
                });

                //显示已选择条件
                if (arr.length <= 0) {
                    this.chosenFlag = false;
                } else {
                    this.chosenFlag = true;
                }
                this.getList();
            },


            //自定义单价
            self_price_per(e){
                var _this = this;
                this.price_dj = [Math.floor(this.bNum), Math.floor(this.eNum)];
                $('#price-list a').removeClass('active');

                if ($('.selected_item >a').length) {
                    for (var i = 0; i < $('.selected_item >a').length; i++) {
                        if ($('.selected_item >a').eq(i).attr('data-sortType').indexOf('sort_pri_per') != -1) {
                            $('.selected_item >a').eq(i).attr('data-sortType', 'sort_pri_per8').html(this.bNum + '-' + this.eNum + '元/m²·天<i class="sem_icon hover"></i>');
                        }
                    }
               } else {
                    alert(1);
                    //创建自定义的单价条件
                    this.chosenFlag = true;

                    this.chosenArr.push({
                        id: $(e.target).id,
                        sortType: 'sort_pri_per8',
                        min: Math.floor($(e.target).parent().find('input[type="text"]').eq(0).val()),
                        max: Math.floor($(e.target).parent().find('input[type="text"]').eq(1).val()),
                        unit: '元/m²·天',
                        sort_two: 1 //min-max形式
                    });
                }

                $('.sem_icon').off().click(function (e) {
                    _this.del_one(e);
                });

                this.getList();
            },

            //自定义总价
            self_price_tot(e){
                this.price_zj = [this.bNum_tot * 10000, this.eNum_tot * 10000];
                this.getList();
            },

            //改变单价筛选
            sel_price_list(e){
                var _this = this;
                $(e.currentTarget).addClass('active').siblings().removeClass('active');

                //清空自定义
                this.bNum = ''; //起始价格
                this.eNum = ''; //结束价格
                this.bNum_tot = ''; //起始价格
                this.eNum_tot = ''; //结束价格

                var min = 0, max = 0, sort_two_single = 1;

                if ($(e.currentTarget).html() == '全部') {
                    this.price_dj = "";

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_pri') != -1) {
                            _this.chosenArr.splice(i, 1);
                        }
                        ;
                    });

                    //显示已选择条件
                    if (this.chosenArr.length <= 0) {
                        this.chosenFlag = false;
                    } else {
                        this.chosenFlag = true;
                    }
                    this.getList();

                    return;

                } else if ($(e.currentTarget).hasClass('last')) {
                    min = Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g));
                    max = "";
                    this.price_dj = [];
                    this.price_dj.push(min);
                    this.price_dj.push(max);
                    sort_two_single = 2;
                } else {
                    min = Math.floor($(e.currentTarget).find('span:first-child').html());
                    max = Math.floor($(e.currentTarget).find('span:nth-child(2)').html());
                    this.price_dj = [];
                    this.price_dj.push(min);
                    this.price_dj.push(max);
                }
                this.price_zj = ""; //总价置空

                //添加已筛选
                var comObj = {
                    id: $(e.currentTarget).attr('id'),
                    name: $(e.currentTarget).text(),
                    sortType: $(e.currentTarget).attr('data-sortType'),
                    min: min,
                    max: max,
                    unit: $(e.currentTarget).find('span:last-child').text() + '/m²·天',
                    sort_two: sort_two_single //两组min-max标记
                };
                this.compareStr4(comObj, this.chosenArr);
            },

            //改变总价筛选
            sel_tot_price_list(e){
                var _this = this;
                $(e.currentTarget).addClass('active').siblings().removeClass('active');

                //清空自定义
                this.bNum = ''; //起始价格
                this.eNum = ''; //结束价格
                this.bNum_tot = ''; //起始价格
                this.eNum_tot = ''; //结束价格

                var min = 0, max = 0, sort_two_single = 1;

                if ($(e.currentTarget).html() == '全部') {
                    this.price_zj = "";

                    this.chosenArr.forEach(function (val, i) {
                        if (val.sortType.indexOf('sort_pri') != -1) {
                            _this.chosenArr.splice(i, 1);
                        }
                        ;
                    });

                    //显示已选择条件
                    if (this.chosenArr.length <= 0) {
                        this.chosenFlag = false;
                    } else {
                        this.chosenFlag = true;
                    }
                    this.getList();

                    return;

                } else if ($(e.currentTarget).hasClass('last')) {
                    this.price_zj = [];
                    min = Math.floor($(e.currentTarget).find('span:first-child').html().match(/\d+/g));
                    max = "";
                    this.price_zj.push(min);
                    this.price_zj.push(max);
                    sort_two_single = 2;
                } else {
                    this.price_zj = [];
                    min = Math.floor($(e.currentTarget).find('span:first-child').html());
                    max = Math.floor($(e.currentTarget).find('span:nth-child(2)').html());
                    this.price_zj.push(min);
                    this.price_zj.push(max);
                }

                this.price_dj = ""; //单价置空

                //添加已筛选
                var comObj = {
                    id: $(e.currentTarget).attr('id'),
                    name: $(e.currentTarget).text(),
                    sortType: $(e.currentTarget).attr('data-sortType'),
                    min: min,
                    max: max,
                    unit: $(e.currentTarget).find('span:last-child').text() + '/月',
                    sort_two: sort_two_single //两组min-max标记
                };
                this.compareStr4(comObj, this.chosenArr);

            },

            //比较条件是否已存在（价格）
            compareStr4(obj, arr){

                var findStr = obj.sortType.substring(0, 8);
                var n = 0,
                    curr_index = 0;
                if (arr.length > 0) {
                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf(findStr) != -1) {
                            n++;
                            curr_index = i;
                        }
                        ;
                    });

                    if (n > 0) {
                        arr.splice(curr_index, 1);
                    }
                }

                arr.push({
                    name: obj.name,
                    id: obj.id,
                    sortType: obj.sortType,
                    min: obj.min,
                    max: obj.max,
                    unit: obj.unit,
                    sort_two: obj.sort_two //两组min-max标记
                });

                //显示已选择条件
                if (arr.length <= 0) {
                    this.chosenFlag = false;
                } else {
                    this.chosenFlag = true;
                }
                this.getList();
            },

            //改变label特色筛选
            sel_feature_list(e){
                $(e.target).addClass('active').siblings().removeClass('active');
                this.label = $(e.target).attr("id");

                var comObj = {
                    id: $(e.target).attr('id'),
                    name: $(e.target).text(),
                    sortType: $(e.target).attr('data-sortType')
                };
                this.compareStr2(comObj, this.chosenArr);
            },

            //比较条件是否已存在2
            compareStr2(obj, arr){
                var findStr = obj.sortType.substring(0, 8);
                var n = 0,
                    curr_index = 0;
                if (arr.length > 0) {
                    arr.forEach(function (val, i) {
                        if (val.sortType.indexOf(findStr) != -1) {
                            n++;
                            curr_index = i;
                        }
                        ;
                    });

                    if (n > 0) {
                        arr.splice(curr_index, 1);
                    }
                }

                arr.push({
                    name: obj.name,
                    id: obj.id,
                    sortType: obj.sortType
                });

                //显示已选择条件
                if (arr.length <= 0) {
                    this.chosenFlag = false;
                } else {
                    this.chosenFlag = true;
                }
                this.getList();
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
                    target.addClass('on').siblings().removeClass('on');
                    if (target.find('.sem_icon').length > 0) {
                        target.siblings().find('.sem_icon').hide();
                        target.find('.sem_icon').css('display', 'inline-block');
                        if (target.find('.sem_icon').hasClass('up')) {
                            target.find('.sem_icon').removeClass('up');
                            if (target.attr('id') == 'areaSort') {
                                this.orderby = 'AD'; //面积降序：AD
                                target.find('.bubble').html('点击按面积从大到小排序');
                            } else if (target.attr('id') == 'priceSort') {
                                this.orderby = 'PD'; //价格降序：PD
                                target.find('.bubble').html('点击按价格从低到高排序');
                            }
                        } else {
                            target.find('.sem_icon').addClass('up');
                            if (target.attr('id') == 'areaSort') {
                                this.orderby = 'AA'; //面积升序：AA
                                target.find('.bubble').html('点击按面积从小到大排序');
                            } else if (target.attr('id') == 'priceSort') {
                                this.orderby = 'PA'; //价格升序：PA
                                target.find('.bubble').html('点击按价格从高到低排序');
                            }
                        }
                    } else {
                        this.orderby = 'D'; //默认排序D
                    }
                    this.getList(); //排序后的列表
                }
            },

            //分页
            change(page){
                this.curPage = page;
                this.getList(); //获取楼盘列表
                $(window).scrollTop(400);
            },

            //隐藏弹窗
            hidePop(flag, data1, data2){
                this[data1] = this[data1].replace(/[^\d.]/g, '');
                this[data2] = this[data2].replace(/[^\d.]/g, '');
                this[flag] = false;
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

            this.getSortList(); //获取筛选条件

            if (this.$route.query.search_keywork) {
                this.search_keywork = this.$route.query.search_keywork;
            }

            this.getList(); //获取楼盘列表

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
