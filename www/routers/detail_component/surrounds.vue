<style lang="less">

</style>


<template>
    <div class="common-info">
        <!--周边配套信息-->
        <div class="category-message-box clearfix ">
            <div class="category-item-title-first mb15 pt05">
                <h2 class="fl"><i class="detail-icon supporting"></i>中关村SOHO周边配套</h2>
            </div>
            <!--地图-->
            <map-part></map-part>
        </div>

    </div>

</template>

<script>

    import mapPart from '../../components/map-part.vue';
    import '../../resources/plugin/pic_tab/pic_tab.js';

    export default {
        components: {
            mapPart
        },
        methods: {},

        mounted(){

        }
    }
</script>
