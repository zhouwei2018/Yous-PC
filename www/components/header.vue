<style  lang="less">
    @import "../resources/css/color.less";
    @import "../resources/css/base.less";
    @import "../resources/css/index/index.less";
    @import "../resources/css/main_head_foot.less";

</style>

<!--header start-->
<template>
    <div header id="lion_head">
        <div class="contents clearfix">
            <router-link to="/index">
                <div class="fl">
                    <h2 class="lion_text">幼狮空间</h2>
                    <img src="../resources/images/lion_logo.png" class="lion_logo"/>
                </div>
            </router-link>
            <div nav_boxs class="fr">
                <div class="nav clearfix">
                    <router-link to="/index" active-class="active">首页</router-link>
                    <router-link to="/office" active-class="active">办公空间</router-link>
                    <router-link to="/service" active-class="active">升级服务</router-link>
                    <router-link to="/collect" active-class="active">幼狮汇</router-link>
                    <router-link to="/invest" active-class="active">投融资</router-link>
                    <router-link to="/about" active-class="active">关于我们</router-link>
                    <!--<router-link to="/score" active-class="active">积分商城</router-link>-->
                    <router-link to="/register" active-class="active">登录/注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
