<style lang="less">

</style>


<template>
    <div class="common-info">
        <!--加载中-->
        <div class="loading_wrap" v-show="loadingFlag">
            <Spin fix>
                <Icon type="load-c" size=20    class="demo-spin-icon-load"></Icon>
                <div>加载中……</div>
            </Spin>
        </div>
        <!--周边配套信息-->
        <map-part :building-name="buildingName" :position-data="positionData" v-if="positionData"></map-part>
    </div>
</template>

<script>

    import mapPart from '../../components/map-part.vue';
    import '../../resources/plugin/pic_tab/pic_tab.js';

    export default {
        data(){
            return {
                loadingFlag:true,
                buildingName: "",
                positionData: "", //经纬度
            }
        },
        components: {
            mapPart
        },
        methods: {
            //获取楼盘详情
            getDetail(){
                var _this = this;

                this.building_id = this.$route.query.building_id;

                this.$http.post(
                    this.$api,
                    {
                        "parameters": {
                            "building_id": this.building_id,
                            "area": "",
                            "price_dj": "[0,1000000]",
                            "price_zj": "",
                            "orderby": "",
                            "curr_page": "1",
                            "items_perpage": "10"
                        },
                        "foreEndType": 2,
                        "code": "30000002"
                    }
                ).then(function (res) {
                    _this.loadingFlag=false;
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        if (result.data) {
                            _this.buildingName = result.data.building_name + '周边配套';
                            _this.positionData = result.data.longitude + ',' + result.data.latitude;
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },
        },

        mounted(){
            this.getDetail();
        }
    }
</script>
