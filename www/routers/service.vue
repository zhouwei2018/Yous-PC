<style lang="less">
    @import "../resources/css/service/service.less";
    @import "../resources/css/service/page.less";
</style>
<template>
    <div class="all">
      <!--header-->
      <header1></header1>
      <!--update start-->
      <div update>
          <div class="update_head">
              <div class="contents clearfix">
                  <img class="fl" src="../resources/images/update/update_head.png" alt=""/>
                  <a href="javascript:;" class="fr apply_ser">申请成为服务商</a>
              </div>
          </div>

          <!--filter条件-->
          <div class="filter_box contents">
              <div class="filter_list clearfix">
                  <span class="fl filter_tit">服务类型</span>
                  <dl class="fl clearfix">
                      <dt class="fl">全部</dt>
                      <dd class="fl clearfix">
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                          <span>政务服务</span>
                          <span>金融</span>
                          <span>法律</span>
                      </dd>
                  </dl>
              </div>

          </div>

          <!--search result-->
          <div class="search_box contents">
              <div class="search_head clearfix">
                  <span class="fr">共<i class="service_tot_num">268</i>项服务</span>
              </div>
              <div class="search_content">
                  <ul class="clearfix">
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="../resources/images/update/search_res01.png" alt=""/>
                              <h3>优和维尔健康产业投资管理(北京)...</h3>
                              <div class="search_label_wrap">
                                  <span>健康、医疗</span>
                              </div>
                          </a>
                      </li>
                  </ul>
                  <div class="page_box">
                      <span class="pg_pre"><i>&lt;</i>上一页</span>
                      <a class="pg_link" href="javascript:;">1</a>
                      <a class="pg_link" href="javascript:;">2</a>
                      <a class="pg_link" href="javascript:;">3</a>
                      <a class="pg_link" href="javascript:;">4</a>
                      <a class="pg_link" href="javascript:;">…</a>
                      <a class="pg_link" href="javascript:;">14</a>
                      <span class="pg_next">下一页<i>&gt;</i></span>
                  </div>
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
