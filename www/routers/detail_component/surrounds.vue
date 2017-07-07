<style lang="less">

</style>


<template>
    <div class="common-info">
        <!--周边配套信息-->
        <map-part  :building-name="buildingName"></map-part>
    </div>
</template>

<script>

    import mapPart from '../../components/map-part.vue';
    import '../../resources/plugin/pic_tab/pic_tab.js';

    export default {
        data(){
            return {
                buildingName:'建外SOHO周边配套'
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
