<style lang="less">
    @import "../resources/css/about/about.less";
</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--aboutus start-->
        <div about_us>
            <div class="crumb_nav contents">
                <a href="javascript:;">首页</a>
                <i>&gt;</i>
                <span class="nav_sub_item">关于我们</span>
            </div>
            <div class="contents clearfix" id="about_us_box">
                <div class="about_left fl" id="about_us_menu">
                    <ul>
                        <!-- <li class="active" @click="tab(0)">关于幼狮</li>
                        <li @click="tab(1)">工作机会</li>
                        <li @click="tab(2)">条款与隐私</li> -->
                        <!--<li v-for='item in menueItems' v-text="item.name" :class="{active:item.iscur}"-->
                            <!--@click="setCur(item.index)"></li>-->
                        <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}">
                            {{tab.type}}
                        </li>
                    </ul>
                </div>
                <component :is="currentView" class="fr"></component>
            </div>
        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    //关于我们tab 组件
    import about_ys from './about_component/about_ys.vue';
    import join_us from './about_component/join_us.vue';
    import ys_column from './about_component/ys_column.vue';
    import contact_us from './about_component/contact_us.vue';
    import terms_privacy from './about_component/terms_privacy.vue';

    export default {
        components: {
            header1,
            footer1,
            about_ys,
            join_us,
            ys_column,
            contact_us,
            terms_privacy
        },
        data(){
            return {
//                menueItems: [
//                    {"index": 0, "name": "关于幼狮", "iscur": true},
//                    {"index": 1, "name": "加入我们", "iscur": false},
//                    {"index": 2, "name": "幼狮专栏", "iscur": false},
//                    {"index": 3, "name": "联系我们", "iscur": false},
//                    {"index": 4, "name": "条款与隐私", "iscur": false}
//                ],
                scrollWatch: true,
                active: 0, //初始index
                currentView: 'about_ys',  //初始模板
                tabs: [
                    {
                        type: '关于幼狮',
                        view: 'about_ys'
                    },
                    {
                        type: '加入我们',
                        view: 'join_us'
                    },
                    {
                        type: '幼狮专栏',
                        view: 'ys_column'
                    },
                    {
                        type: '联系我们',
                        view: 'contact_us'
                    },
                    {
                        type: '条款与隐私',
                        view: 'terms_privacy'
                    }
                ]
            }
        },
        methods: {
//            setCur: function (index) {
//                this.menueItems.map(function (v, i) {
//                    i == index ? v.iscur = true : v.iscur = false;
//                });
//            }
            //tab
            toggle(i, v){
                this.active = i;
                this.currentView = v;
                $(window).scrollTop(0);
            },

            //左侧菜单scroll 时固定
            menuFix(){
                var _this=this;
                $(window).on('scroll', function(){
                    if (_this.scrollWatch) {
                        //your code here
                        var scrollTop=$(window).scrollTop();
                        if(scrollTop >=90){
                            var fixLeft=$('#about_us_box').offset().left;
                            $('#about_us_menu').css({
                                position:'fixed',
                                left:fixLeft,
                                top:0
                            });
                        }else if(scrollTop <90){
                            $('#about_us_menu').css({
                                position:'relative',
                                left:0,
                                top:0
                            });
                        }
                    }
                });
            }
        },
        mounted(){
            $(window).scrollTop(0);
            this.menuFix();
            //跳转记录参数
            this.active=this.$route.query.name;
            this.toggle(this.active,this.tabs[this.active].view);
        },
        destroyed () {
            this.scrollWatch = false;
        }
    }
</script>
