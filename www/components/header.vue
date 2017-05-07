<style  lang="less">
  @import "../resources/css/color.less";
  @import "../resources/css/base.less";
  @import "../resources/css/head_foot.less";
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
                  <li class="active"><router-link to="/index">首页<span class="icon"></span></router-link></li>
                  <li><router-link to="/office">办公空间<span class="icon"></span></router-link></li>
                  <li><router-link to="/service">升级服务<span class="icon"></span></router-link></li>
                  <li><router-link to="/collect">幼狮汇<span class="icon"></span></router-link></li>
                  <li><router-link to="/invest">投融资<span class="icon"></span></router-link></li>
                  <li><router-link to="/about">关于我们<span class="icon"></span></router-link></li>
                  <li><router-link to="/score">积分商城<span class="icon"></span></router-link></li>
                  <li><router-link to="/register">登录/注册<span class="icon"></span></router-link></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
    export default {

    }
</script>
