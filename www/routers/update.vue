<style scoped lang="less">
    @import "../resources/css/update/update.less";
</style>
<template>
    <div class="all">
        <!--header-->
        <header1></header1>
        <!--update start-->
        <div update>
            <!--<div class="update_banner">-->
                <!--&lt;!&ndash;<img src="../resources/images/index/banner02.jpg" alt="">&ndash;&gt;-->
            <!--</div>-->
            <img src="../resources/images/update/update.png" alt="">
        </div>

        <!--footer-->
        <footer1></footer1>
    </div>

</template>
<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    export default {
        components: {header1, footer1},
        mounted(){
            $(window).scrollTop(0);
        }
    }
</script>
