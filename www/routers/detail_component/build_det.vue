<style lang="less">

</style>


<template>

    <div class="category-message-box mt20 clearfix mb50">
        <div class="category-message" id="category_message">
            <div class="building-information">
                <div class="category-item-title-first pt05">
                    <h1 class="fl"><i class="detail-icon introduce"></i>{{buildingName}}</h1>
                </div>
                <h4 class="ml20 mt30 font16">基本信息</h4>
                <table class="ml10 mh05">
                    <tbody>
                    <tr>
                        <td colspan="2" v-if='developer'>
                            <em>开发商：</em><span v-text="developer"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>开发商：</em><span>暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>

                        <td colspan="2" v-if='price'>
                            <em>均价：</em><span v-text="price+'元/m²·天'"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>均价：</em><span>暂无数据</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" v-if="opening_date">
                            <em>建成年代：</em><span v-text="opening_date"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>建成年代：</em><span>暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>
                        <td colspan="2" v-if="building_level">
                            <em>楼盘级别：</em><span v-text="building_level"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>楼盘级别：</em><span>暂无数据</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" v-if="property_rights">
                            <em>产权性质：</em><span v-text="property_rights"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>产权性质：</em><span>暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>
                        <td colspan="2" v-if="building_area">
                            <em>建筑面积：</em><span v-text="building_area+'m²'"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>建筑面积：</em><span>暂无数据</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" v-if="total_households">
                            <em>总户数：</em><span v-text="total_households"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>总户数：</em><span >暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>
                        <td colspan="2" v-if="use_rate">
                            <em>使用率：</em>
                            <span v-text="use_rate+'%'"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>使用率：</em>
                            <span>暂无数据</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
                <table class="ml10 mh05" id="desc">
                    <tbody>
                    <tr>
                        <td colspan="2" v-if="property_company">
                            <em>物业管理公司：</em><span v-text="property_company"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>物业管理公司：</em><span>暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>
                        <td colspan="2" v-if="property_fee">
                            <em>物业费：</em><span v-text="property_fee+'元/m²·月 '"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>物业费：</em><span>暂无数据</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" v-if="vehicle_number">
                            <em>停车数量：</em><span v-text="vehicle_number"></span>
                        </td>
                        <td colspan="2" v-else>
                            <em>停车数量：</em><span>暂无数据</span>
                        </td>
                        <td colspan="2">
                            <em></em><span></span>
                        </td>
                        <td colspan="2" v-if="monthly_rent">
                            <em>停车费：</em><span v-text="monthly_rent+'元/月'"></span>
                        </td>
                        <td colspan="2">
                            <em>停车费：</em><span>暂无数据</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
                <h4 class="ml20 mt20 mb10 font16">楼盘简介</h4>
                <div class="ml20 text-gray6 message" v-if="building_introduction">
                    <p v-text="building_introduction"></p>
                </div>
                <div class="ml20 text-gray6 message">
                    <p>暂无数据</p>
                </div>

            </div>
        </div>


    </div>

</template>

<script>
    export default {
        data(){
            return {
                building_id: '',
                buildingName: '',


                developer: '', //开发商
                price: '', //价格
                opening_date: '',// 建成年代
                building_level: '', //楼盘级别
                property_rights: '', //产权性质
                building_area: '', //建筑面积
                total_households: '',  //总户数
                use_rate: '', //使用率
                property_company: '', //物业公司
                property_fee: '', //物业费
                vehicle_number: '',  //停车数量
                monthly_rent: '', //停车费
                building_introduction: '',// 楼盘介绍
            }
        },
        methods: {
            //获取楼盘详情30002
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
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        if (result.data) {
                            _this.buildingName = result.data.building_name + '详情';

                            _this.developer = result.data.developer;
                            _this.price = result.data.price;
                            _this.opening_date = result.data.opening_date == null ? ' -- ' : result.data.opening_date.replace('0:00:00','');
                            _this.building_level = result.data.building_level;
                            _this.property_rights = result.data.property_rights;
                            _this.building_area = result.data.building_area;

                            _this.total_households = result.data.total_households;
                            _this.use_rate = result.data.use_rate;
                            _this.property_company = result.data.property_company;
                            _this.property_fee = result.data.property_fee;
                            _this.vehicle_number = result.data.vehicle_number;
                            _this.monthly_rent = result.data.monthly_rent;
                            _this.building_introduction = result.data.building_introduction;
                        }
                    }

                }, function (res) {
                    this.$Message.error('获取楼盘详情失败');
                });
            },

        },

        mounted(){
            this.getDetail();
        },
        created(){
            document.body.style.backgroundColor='#fff';
        },
        beforeDestroy(){
            document.body.style.backgroundColor='#f5f5f5';
        }
    }
</script>
