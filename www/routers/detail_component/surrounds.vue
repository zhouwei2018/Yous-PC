<style lang="less">

</style>


<template>
    <div class="common-info">
        <!--周边配套信息-->
        <map-part :building-name="buildingName" :position-data="positionData"></map-part>
    </div>
</template>

<script>

    import mapPart from '../../components/map-part.vue';
    import '../../resources/plugin/pic_tab/pic_tab.js';

    export default {
        data(){
            return {
                buildingName:'建外SOHO周边配套',
                positionData: "116.646319, 40.006356", //经纬度
            }
        },
        components: {
            mapPart
        },
        methods: {},

        mounted(){

        }
    }
</script>
