<style scoped lang="less">
    @import "../resources/css/detail/detail.less";
</style>
<style scoped>

</style>

<template>
    <div class="all">
      <!--header-->
      <header1></header1>

      <!--list  start-->
      <div detail>
          <h2>
              <div class="contents">一站式服务</div>
          </h2>

      </div>


      <!--footer-->
      <footer1></footer1>
  </div>
</template>
<script>

import header1 from '../components/header.vue';
import footer1 from '../components/footer.vue';
export default {
    components: { header1,footer1 },

    data(){
  　　　return {

       }
  　},
    mounted:function(){

    },
    methods:{

    }
}
</script>
