<style scoped lang="less">
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
          <div class="contents clearfix">
              <div class="about_left fl">
                  <ul>
                      <li class="active">关于幼狮</li>
                      <li>工作机会</li>
                      <li>条款与隐私</li>
                  </ul>
              </div>
              <div class="about_right fl">
                  <h3>关于幼狮</h3>
                  <img src="../resources/images/about_us/about_us_bg.jpg" alt=""/>

                  <p>“幼狮空间”是企业升级服务资源高效统筹的综合服务平台，为解决企业在进阶中对人才、空间、资金、风险控制等四大核心元素的需求，以提供租赁、装修、家具、空间定制服务的办公空间为载体，构建商学院、投融资平台，给予财务、法务税务支持，深入企业发展的核心环节，为企业进阶提供充足养分，使企业在制定和执行价值创造的过程中，拥有持续竞争力。</p>

                  <p class="about_two_pra">目前，“幼狮空间”在北京各大核心商圈已构建5万㎡办公空间、50个产品项目，并拥有300家入驻企业、1.5万人渠道对接平台，未来“幼狮空间”将搭建全新的办公生态体系，助力每一家幼狮空间企业能够更省、更快走向强大！</p>
              </div>
          </div>
      </div>



      <!--footer-->
      <footer1></footer1>
  </div>
</template>
<script>

import header1 from '../components/header.vue';
import footer1 from '../components/footer.vue';
export default {
    components: { header1,footer1 }
}
</script>
