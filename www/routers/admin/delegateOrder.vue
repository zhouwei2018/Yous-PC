<template>
    <Table border :content="self" :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '电话',
                        key: 'Col_telephone',
                        render (row, column, index) {
                            return `<Icon type="ios-telephone"></Icon> <strong>${row.Col_telephone}</strong>`;
                        }
                    },
                    {
                        title: '发布时间',
                        key: 'Col_createtime'
                    }
                ],
                data6:[]
            }
        },
        methods: {
            remove (index) {
                this.data6.splice(index, 1);
            },
            bindDate(){
              this.$http.post(
                  this.$api,
                  {
                      parameters: {

                      },
                      foreEndType: "1",
                      code: "20000005"
                  }
              ).then(function (response) {
                  var reslute = JSON.parse(response.bodyText);
                  console.info(reslute);
                  this.data6=reslute.data
                  if (!reslute.success) {
                        this.$Message.error(reslute.message);
                  }
              }, function (response) {
                  this.$Message.error('API接口报错-网络错误!');
                  this.loading = false;
              });
              this.$emit()
            }
        },
        mounted() {
          this.$nextTick(function() {
            this.bindDate()
          })
        }
    }
</script>
