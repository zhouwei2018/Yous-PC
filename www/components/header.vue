<style  lang="less">
    @import "../resources/css/color.less";
    @import "../resources/css/base.less";
    @import "../resources/css/index/index.less";
    @import "../resources/css/main_head_foot.less";

</style>

<!--header start-->
<template>
    <div header>
        <div class="contents clearfix">
            <router-link to="/index">
                <div class="fl">
                    <h2 class="lion_text">幼狮空间</h2>
                    <img src="../resources/images/lion_logo.png" class="lion_logo"/>
                </div>
            </router-link>
            <div nav_boxs class="fr">
                <ul class="nav clearfix">
                    <router-link to="/index" tag="li" active-class="active" exact>
                        <a href="javascript:;">首页</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/office" tag="li" active-class="active">
                        <a href="javascript:;">办公空间</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/service" tag="li" active-class="active">
                        <a href="javascript:;">升级服务</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/collect" tag="li" active-class="active">
                        <a href="javascript:;">幼狮汇</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/invest" tag="li" active-class="active">
                        <a href="javascript:;">投融资</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/about" tag="li" active-class="active">
                        <a href="javascript:;">关于我们</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/score" tag="li" active-class="active">
                        <a href="javascript:;">积分商城</a><span class="icon"></span>
                    </router-link>
                    <router-link to="/register" tag="li" active-class="active">
                        <a href="javascript:;">登录/注册</a><span class="icon"></span>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
