<template>
  <div style="background: #f7f7f7;" class="app-init scroll-box">
    <!--订单详情-->
    <van-steps :active="active">
      <van-step>提交订单</van-step>
      <van-step>配送中</van-step>
      <van-step>交易完成</van-step>
    </van-steps>

    <van-cell class="logistics" @click="newPage"
              title="您的订单已由本人签收（已在配送员处采用无纸化方式签收本订单）。感谢您在京东购物，欢迎再次光临。参加评价还能赢取京豆哟。" label="2018-08-31 21:04:03"
              icon="logistics" is-link/>
    <div style="height:15px;"></div>
    <van-cell-group>
      <van-cell
        center
        :border="false"
      >
        <template>
          <div>{{name}} {{tel}}</div>
          <div>{{state}}{{city}}{{district}}{{addressDetail}}</div>
        </template>
      </van-cell>
    </van-cell-group>

    <div style="height:15px;"></div>
    <div v-for="(product,i) in products" :key="i">
      <product-card :product='product'/>
    </div>
    <div style="height:15px;"></div>
    <van-cell-group>
      <van-cell title="订单编号"  v-model="orderId"/>
      <van-cell title="下单时间"  v-model="payTime"/>
      <!--<van-cell title="订单状态" value="配送中"/>-->
    </van-cell-group>
    <div style="height:15px;"></div>
    <van-cell-group class="total">
      <!--<van-cell title="商品总额" value="9.99"/>-->
      <!--<van-cell title="运费" value="+ 0.00"/>-->
      <van-cell title="实付金额" value="9.99" style="font-weight: 700;"/>
    </van-cell-group>
    <div class="footer">
      <div class="munu">
        <van-button size="small" v-if="status ==2">确认收货</van-button>
        <van-button size="small" type="danger" v-if="status ==1">支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import productCard from '../../../components/common/product-card'

  export default {
    data() {
      return {
        active: 1,
        id: 0,
        name:null,
        state:null,
        addressDetail:null,
        city: null,
        district:null,
        tel:null,
        orderId:null,
        status:null,
        payTime:null,
        products: []
      }
    },
    components: {
      productCard
    },
    methods: {
      newPage() {
        console.log('return success!!')
        // let url = this.$config.calllbackWebURI('/user/order/logistics/1', '订单追踪')
        // uni.navigateTo({
        //   url: url
        // });
      }
    },
    created: function () {
      this.id = this.$route.params.id;
      console.log(this.id);
      this.$http({
        headers: this.$config.getToken(),
        method: 'POST',
        url: `${this.$config.server()}/api/order/queryAddressDetail?orderId=${this.id}`,
      }).then(res => {
        console.log(res.data);
        this.products = res.data.myOrderDetail.list;
        this.orderId = res.data.myOrderDetail.orderId;
        this.name = res.data.name;
        this.state= res.data.state;
        this.addressDetail= res.data.addressDetail;
        this.city= res.data.city;
        this.district= res.data.district;
        this.tel= res.data.tel;
        this.payTime= res.data.payTime ;
        this.status= res.data.status;
      }).catch(error => {
        console.log(error);
      });
    }
  }
</script>

<style lang="less">
  .logistics{
    margin-top: 15px;
    i{
      line-height: 60px;
      font-size: 20px;
    }
    .van-cell__title span{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .van-cell__label{
      color: #999;
    }
  }
  .total{
    .van-cell__value{color: red;}
  }
  .footer{
    height:50px;
    .munu{
      position: fixed;
      height: 49px;
      border-top: 1px solid #e5e5e5;
      bottom: 0;
      background: #fff;
      width: 100%;
      line-height: 24px;
      text-align: right;
      .van-button{
        margin-right: 10px;
      }
    }
  }
</style>
