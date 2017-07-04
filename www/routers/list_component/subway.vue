<style lang="less">

</style>


<template>

    <div class="screening_conts_detail pv20">
        <div class="screening_conts_list weizhi clearfix tj_box_1" @click="getStation($event)">
            <span class="screening_title mr15">位置:</span>
            <a href="javascript:;"
               v-for="(item,index) in lines"
               :class="[{active:line_active == index},item.class]"
               :id="item.code"
               :data-sortType="'sort_sub_lin_'+index"
            >{{item.name}}</a>
        </div>
        <p class="tj_box_1 clearfix" v-show="station_show_flag">
            <a href="javascript:;"
               v-for="(item1,index) in station_arr"
               :class="{active:station_active == index}"
               class="pt05"
               :id="item1.code"
               :data-sortType="'sort_sub_sta_'+index"
               @click="getHouseList($event)"
            >{{item1.name}}</a>
        </p>
    </div>

</template>

<script>
    export default {

        data (){
            return {
                lines: [],
                station_arr: [],

                line_active: 0,
                station_active: 0,

                station_show_flag: false, //默认电站不显示
            }
        },
        methods: {

            //获取地铁线路
            getLine(){
                var _this = this;
                //调用区域查询接口，更新数据
                this.$http.post(
                    this.$api,
                    {
                        "parameters": {},
                        "foreEndType": 2,
                        "code": "90000301"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        _this.lines = result.data.lines;
                        var all_lines = {
                            code: "",
                            name: "全部",
                            class:"noArrow"
                        }
                        _this.lines.unshift(all_lines);
                    } else {
                        this.$Message.error(result.message);
                    }
                }, function (res) {
                    this.$Message.error('获取地铁线路失败');
                });
            },

            //获取车站名称
            getStation(e){
                var _this = this;

                $(e.target).addClass('active').siblings().removeClass('active');


                var emitObj = {
                    id: $(e.target).attr('id'),
                    name: $(e.target).text(),
                    sortType:$(e.target).attr('data-sortType')
                };
                this.$emit("refreshbizlines3", emitObj);


                if ($(e.target).attr('id') == '') {
                    this.sub_show_flag = false;
                    if (!$(e.target).hasClass('tj_box_1')) {
                        $(e.target).parent().addClass('tj_box_1');
                    }

                } else {
                    //调用车站查询接口，更新数据

                    this.$http.post(
                        this.$api,
                        {
                            "parameters": {
                                "line": $(e.target).attr('id')
                            },
                            "foreEndType": 2,
                            "code": "90000303"
                        }
                    ).then(function (res) {
                        var result = JSON.parse(res.bodyText);
                        if (result.success) {
                            _this.station_show_flag = true;
                            _this.station_arr = result.data;
                            var all_station = {
                                code: "",
                                name: "全部",
                            }
                            _this.station_arr.unshift(all_station);

                            $(e.target).parent().removeClass('tj_box_1');
                        } else {
                            this.$Message.error(result.message);
                        }
                    }, function (res) {
                        this.$Message.error('获取车站失败');
                    });

                }
            },
            getHouseList(e){
                $(e.target).addClass('active').siblings().removeClass('active');

                var emitObj2 = {
                    id: $(e.target).attr('id'),
                    name: $(e.target).text(),
                    sortType:$(e.target).attr('data-sortType')
                };
                this.$emit("refreshbizlines4", emitObj2);
            }
        },

        mounted(){
            this.getLine(); //获取地铁线路
        }
    }
</script>
