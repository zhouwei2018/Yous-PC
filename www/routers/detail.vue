<style lang="less">
    @import "../resources/css/detail/detail.less";
    @import "../resources/css/right_column/right_column.less";
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
                    <li>
                        <router-link :to="{path:'/index'}"><i class="detail-icon"></i>幼狮空间 &gt;</router-link>
                    </li>
                    <li><router-link to="/list" >办公楼</router-link> &gt;</li>
                    <li v-text="building_name"></li>
                </ul>
                <div class="search-box">
                    <input type="text" placeholder="请输入写字楼名称或商圈"
                           onkeyup="this.value=this.value.replace(/(^\s*)/g,'')"
                           @keyup.enter="searchClick();"
                           v-model="search_keywork" maxlength="30" id="detail-search-keyword">
                    <router-link class="search-btn" target="_blank" id="detail-search-btn" :to="{path:'/list',query:{search_keywork:search_keywork}}">搜索</router-link>
                </div>
            </div>
            <!--搜索 end-->

            <!--&lt;!&ndash;logo&ndash;&gt;-->
            <!--<div class="building-label clearfix">-->
                <!--<div class="building-tag">-->
                    <!--<h1 v-text="building_name"></h1>-->
                    <!--<ul class="tag-item">-->
                        <!--&lt;!&ndash;<li>互联网</li>&ndash;&gt;-->
                        <!--<li v-for="item in labels" v-text="item"></li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->

            <!--楼盘 tab start-->
            <div class="nav-consulting clearfix">
                <ul class="nav-building fl clearfix">

                    <!--<li class="active"><a href="javascript:;">楼盘首页</a></li>-->

                    <!--<li><a href="javascript:;">待租房源</a></li>-->
                    <!--<li><a href="javascript:;">周边配套</a></li>-->
                    <!--<li><a href="javascript:;">楼盘详情</a></li>-->
                    <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active === index}">
                        <a href="javascript:;">{{tab.type}}</a>
                    </li>

                </ul>
            </div>

            <!--scroll nav 滚动时才出现-->
            <div class="navfixed-box">
                <div class="navfixed" style="display: none">
                    <ul class="nav-building fl">
                        <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class="{active:active === index}">
                            <a href="javascript:;">{{tab.type}}</a>
                        </li>
                    </ul>
                    <div class="consulting">
                        <div class="quick">
                            <i class="detail-icon"></i>
                            <div class="tel">
                                <em>400-078-8800</em></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--scroll nav end -->

            <!--楼盘 tab end-->

            <component :is="currentView"
                       @listenchild="getName"
                       @listenchild2="toggle(1,'build_rent')"
                       @listenchild3="toggle(3,'build_det')"
                       ref="company_proper"
            ></component>

        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    //引入五个tab组件
    import build_index from './detail_component/build_index.vue';
    import build_rent from './detail_component/build_rent.vue';
    import surrounds from './detail_component/surrounds.vue';
    import build_det from './detail_component/build_det.vue';
    import price_history from './detail_component/price_history.vue';

    export default {
        components: {
            header1,
            footer1,

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
                active: 0,  //初始化tab index
                currentView: 'build_index', //默认展示楼盘首页
                tabs: [
                    {
                        type: '楼盘首页', //选项卡名字
                        view: 'build_index'  //对应展示组件内容
                    },
                    {
                        type: '待租房源',
                        view: 'build_rent'
                    },
                    {
                        type: '周边配套',
                        view: 'surrounds'
                    },
                    {
                        type: '楼盘详情',
                        view: 'build_det'
                    }

                ],

                building_name: "", //楼盘名称
                labels: [],//标签

                //scroll flag
                detScrollFlag: true,

                search_keywork:'' //关键词
            }
        },

        methods: {
            //tab
            toggle(i, v){
                this.active = i;
                this.currentView = v;
                $(window).scrollTop(0);
            },

            //获取子组件传来的名称和label
            getName(obj){
                this.building_name = obj.name;
                this.labels = obj.labels;
            },

            //模糊搜索
            searchClick(){
                this.$router.push({path:'/list',query:{search_keywork:this.search_keywork}});
            },

        },
        mounted: function () {
            var _this=this;
            //top悬浮窗固定
            $(window).on("scroll", function () {
                if (_this.detScrollFlag) {
                    var window_height = $(window).height(); //浏览器当前窗口可视区域高度
                    var document_height = $(document).height(); //浏览器当前窗口文档的高度
                    var scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    var navStandard_line = $('.navfixed-box').offset().top;
                    var standard_line = $('.category-message-box').offset().top;
                    var standard_line_wrap = $('#category_message').height();
                    var fixed_self = $('#sidebar_fix').height();
                    if (scroll_top > navStandard_line) {
                        $('.navfixed').slideDown(50);
                    } else {
                        $('.navfixed').slideUp(50);
                    }

                    if (scroll_top > (standard_line)) {
                        $('#sidebar_fix').addClass('fixed');
                        $('.sidebar-box').css('bottom', 'auto');
                    } else {
                        $('#sidebar_fix').removeClass('fixed');
                        $('.sidebar-box').css('bottom', 'auto');
                    }

                    if (scroll_top > (standard_line + standard_line_wrap - fixed_self - 66)) {
                        $('#sidebar_fix').removeClass('fixed');
                        $('.sidebar-box').css('bottom', '0');
                    }
                }

            });

            //跳转记录参数
            this.active = this.$route.query.name == undefined ? 0 : this.$route.query.name;
            this.toggle(this.active, this.tabs[this.active].view);

            $('.nav-building li').eq(this.active).addClass('active');

        },

        created(){
            document.body.style.backgroundColor = "#fff";
        },
        beforeDestroy(){
            document.body.style.backgroundColor = "#f5f5f5";
        },

        destroyed () {
            this.detScrollFlag = false;
        }

    }

</script>
