<template>
    <div class="app-init scroll-box aftersale">
      <!--售后-->
      <van-tabs  v-model="active" @click="selectTabs">
            <van-tab title="售后申请">
                <van-panel v-for="(order,index) in orders1" :key="index" :title="'订单号：'+order.orderId" style="margin-top:10px;">
                <div>
                    <product-card :product='order' >
                        <div class="van-panel_product_footer">
                            <van-button size="small" type="danger" tag="a" @click="newPage('apply',order.orderId)" >申请售后</van-button>
                        </div>
                    </product-card>
                </div>
                </van-panel>
            </van-tab>
            <van-tab title="申请记录">
                <van-panel v-for="(order,index) in orders2" :key="index" :title="'服务单号：'+order.orderId" style="margin-top:10px;">
                    <div>
                        <product-card :product='order'/>
                    </div>
                    <div>
                      <van-cell title="已完成" style="background-color: #f8f8f8;"  />
                        <!--<van-cell title="已完成" @click="newPage('detail',order.orderId)"  is-link label="服务已完成，感谢您对京东的支持" style="background-color: #f8f8f8;"  />-->
                    </div>
                </van-panel>

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
  import productCard from '../../../components/common/product-card'
  export default {
    data(){
        return{
            id:0,
            active: 2,
            orders2:[],
            orders1:[
                // {
                //     ordercode:'79340944225',
                //     products: [
                //         {
                //             id:1,
                //             imageURL:
                //                 "https://img10.360buyimg.com/N2/jfs/t21733/218/377678809/177209/1b98ae56/5b0b96e1Nc0e37080.jpg",
                //             title: "子初婴儿手口柔湿巾90片*3包  新生儿纸巾 宝宝婴儿湿巾",
                //             quantity: 2
                //         },
                //     ]
                // },
                // {
                //     ordercode:'79341094465',
                //     products: [
                //         {
                //             id:1,
                //             imageURL:
                //                 "https://img10.360buyimg.com/mobilecms/s88x88_jfs/t22720/128/1410375403/319576/8dbd859f/5b5e69b3Nf4f0e9e7.jpg",
                //             title: "元朗 鸡蛋卷 饼干糕点 中秋礼盒 广东特产680g",
                //             desc: "1.320kg/件",
                //             quantity: 1,
                //         },
                //     ]
                // },
                // {
                //     ordercode:'79341094462',
                //     products: [
                //         {
                //             id:1,
                //             imageURL:
                //                 "https://img10.360buyimg.com/mobilecms/s88x88_jfs/t17572/12/840082281/351445/e1828c58/5aab8dbbNedb77d88.jpg",
                //             title: "良品铺子 肉肉聚汇猪肉脯 猪蹄卤 辣味小吃520g",
                //             desc: "0.670kg/件，肉肉聚汇520g",
                //             quantity: 2
                //         },
                //         {
                //             id:1,
                //             imageURL:
                //                 "https://img10.360buyimg.com/mobilecms/s88x88_jfs/t22720/128/1410375403/319576/8dbd859f/5b5e69b3Nf4f0e9e7.jpg",
                //             title: "元朗 鸡蛋卷 饼干糕点 中秋礼盒 广东特产680g",
                //             desc: "1.320kg/件",
                //             quantity: 1,
                //         },
                //     ]
                // },
            ],

        }
    },
    components: {
      productCard
    },
    created (){
      this.onLoad(0)
    },
    methods: {
      selectTabs(index, title) {
        this.active = index;
        this.id = index;
        console.log(index);
        this.onLoad(index)
      },
      newPage(param1, param2) {
        console.log('return success!!')
        let url = ''
        switch (param1) {
          case 'apply':
            url = this.$config.calllbackWebURI(`/user/aftersale/apply/${param2}`, '申请售后')
            uni.navigateTo({
              url: url
            });
            break;
          case 'detail':
            url = this.$config.calllbackWebURI(`/user/aftersale/detail/${param2.ordercode}`, '服务单详情')
            uni.navigateTo({
              url: url
            });
            break;
        }
      },
      onLoad(id){
        if (id === 0){
          this.$http({
            headers: this.$config.getToken(),
            method: 'POST',
            url: this.$config.server() + '/api/order/queryAfterSales',
          }).then(res=>{
            console.log(res.data);
            this.orders1 = JSON.parse(JSON.stringify(res.data).replace(/imageUrl/g,"imageURL"));
          });
        } else {
          this.$http({
            headers: this.$config.getToken(),
            method: 'POST',
            url: this.$config.server() + '/api/order/queryComplete',
          }).then(res=>{
            console.log(res.data);
            this.orders2 = JSON.parse(JSON.stringify(res.data).replace(/imageUrl/g,"imageURL"));
          });
        }

      }

    }
}
</script>

<style lang="less">
.aftersale{
    font-size:12px;background: #f0f2f5;
    .van-panel{
        margin-top: 10px;
        &_product_footer{
            text-align: right;padding: 0 10px 15px;
        }
    }
}
</style>
