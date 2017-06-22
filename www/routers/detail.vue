<style lang="less">
    @import "../resources/css/detail/detail.less";
    @import "../resources/css/right_column/right_column.less";
    @import "../resources/css/update/page.less";
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
                    <li><a href="javascript:;">望京办公楼</a>&gt;</li>
                    <li>望京SOHO</li>
                </ul>
                <div class="search-box">
                    <input type="text" placeholder="请输入写字楼名称或商圈" maxlength="30" id="detail-search-keyword">
                    <button class="search-btn" type="button" id="detail-search-btn">搜索</button>
                </div>
            </div>
            <!--搜索 end-->

            <!--logo-->
            <div class="building-label clearfix">
                <img class="fl" src="../resources/images/ys_weixin.jpg" alt="望京SOHO二维码">
                <div class="building-tag">
                    <h1>望京SOHO</h1>
                    <ul class="tag-item">
                        <li>互联网</li>
                        <li>LEED认证</li>
                        <li>地标建筑</li>
                        <li>名企开发商</li>
                    </ul>
                </div>
            </div>

            <!--楼盘 tab start-->
            <div class="nav-consulting clearfix">
                <ul class="nav-building fl clearfix">

                    <!--<li class="active"><a href="javascript:;">楼盘首页</a></li>-->

                    <!--<li><a href="javascript:;">待租房源</a></li>-->
                    <!--<li><a href="javascript:;">周边配套</a></li>-->
                    <!--<li><a href="javascript:;">楼盘详情</a></li>-->
                    <!--<li><a href="javascript:;">历史挂牌</a></li>-->
                    <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active === index}">
                        <a href="javascript:;">{{tab.type}}</a>
                    </li>

                </ul>
            </div>

            <!--scroll nav 滚动时才出现-->
            <div class="navfixed-box">
                <div class="navfixed" style="display: none">
                    <ul class="nav-building fl">

                        <li class="active"><a href="/detail-184.html">楼盘首页</a></li>

                        <li><a href="/detail/houses-184.html">待租房源</a></li>
                        <li><a href="/detail/surrounding-184.html">周边配套</a></li>
                        <li><a href="/detail/info-184.html">楼盘详情</a></li>
                        <li><a href="/detail/trade-184.html">历史挂牌</a></li>
                    </ul>
                    <div class="consulting">
                        <div class="quick">
                            <i class="detail-icon"></i>
                            <div class="tel">
                                <em>400-810-6698</em></div>
                        </div>
                        <div class="online cur-pointer detail-head-consultation" data-id="184"><i
                                class="detail-icon"></i><span class="text">在线咨询</span></div>
                    </div>
                </div>
            </div>
            <!--scroll nav end -->

            <!--楼盘 tab end-->

            <component :is="currentView"></component>

        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
//    import mapPart from '../components/map-part.vue';

    //引入五个tab组件 start

    import build_index from './office_component/build_index.vue';
    import build_rent from './office_component/build_rent.vue';
    import surrounds from './office_component/surrounds.vue';
    import build_det from './office_component/build_det.vue';
    import price_history from './office_component/price_history.vue';

    //引入五个tab组件 end

    //import '../resources/plugin/pic_tab/pic_tab.js';

    export default {
         components: {
             header1,
             footer1,
//             mapPart,

             //五大组件tab
             build_index,
             build_rent,
             surrounds,
             build_det,
             price_history
         },
        data(){
            return {
                //五大组件tab切换
                active:0,  //初始化tab index
                currentView:'build_index', //默认展示楼盘首页
                tabs:[
                    {
                        type:'楼盘首页', //选项卡名字
                        view:'build_index'  //对应展示组件内容
                    },
                    {
                        type:'待租房源',
                        view:'build_rent'
                    },
                    {
                        type:'周边配套',
                        view:'surrounds'
                    },
                    {
                        type:'楼盘详情',
                        view:'build_det'
                    },
                    {
                        type:'历史价格',
                        view:'price_history'
                    }

                ]
            }
        },
        methods: {
            //tab
            toggle(i, v){
                this.active = i;
                this.currentView = v;
                $(window).scrollTop(0);
            }
        },
        mounted: function () {
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
                pop_up: true,//大图是否有弹出框
                pop_div: '#pop_carousel_box',//弹出框框架
                pop_pic: '#pop_carousel',//弹出框图片框架
                pop_xx: '.pop-carousel-close',//关闭弹出框按钮
                pop_prev: '#pop_carousel_prev',//弹出框左箭头
                pop_next: '#pop_carousel_next',//弹出框右箭头
                mhc: '.carousel-mask'//朦灰层
            });
        }

    }

</script>


