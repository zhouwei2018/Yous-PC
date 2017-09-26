<!--footer start-->
<template>
  <div footer>
      <div class="contents foot_head clearfix">
          <div class="fl">
              <h3>北京幼狮科技有限公司</h3>

              <p><i class="commerce_tel"></i>400-078-8800</p>

              <p class="lion_address">地址：北京市朝阳区东三环中路39号建外SOHO东区A座2906</p>
          </div>
          <div class="fr">
              <img src="../resources/images/ys_weixin.jpg" alt="幼狮微信" style="width: 98px;height: 98px;"/>
              <span class="weixin_text">幼狮官网</span>
          </div>
      </div>
      <div class="foot_bot">
          <div class="contents">
              <span class="bottom_copyright fl">北京幼狮科技有限公司 保留所有权利&nbsp;&nbsp;京ICP备20176444</span>
              <div class="fr">
                  <span>
                      <router-link :to="{ path: '/about',query:{name:0}}">关于我们</router-link>
                  </span>
                  <i>|</i>
                  <span>
                      <router-link :to="{ path: '/about',query:{name:1}}">工作机会</router-link>
                  </span>
                  <i>|</i>
                  <span>
                      <router-link :to="{ path: '/about',query:{name:4}}">条款与隐私</router-link>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>
<!--footer end-->

<script>
    export default {

    }
</script>
