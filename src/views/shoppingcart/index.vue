<template>
  <div class="app-init gouwuche-page">
    <header-back title="购物车"></header-back>

    <div class="scroll-box gouwu-view">

      <div class="shop-wrap" v-if="carListLength == 0">
        <img src="../../assets/icon/empty-car.png" alt="" @click="openshopping">
      </div>

      <div class="shop-wrap shop-list-wrap" v-else>
        <div class="shop-item clear" v-for="target in shopCarList">
          <div class="shop-img fl" @click="OpenPage(target.skuId)">
            <img :src="target.image" alt="">
          </div>
          <div class="function-box fr">
            <p class="title">{{ target.title }}</p>
            <p class="money">售价：{{ target.price }}元</p>
            <div class="button-group">
              <div class="function-button">
                <span class="btn jia iconfont icon-jia" @click="upt(target,'jia')"></span>
                <span class="number" @click="mes(target)">{{ target.num }}</span>
                <span class="btn jian iconfont icon-jian" v-if="typeNum" @click="upt(target,'jian')"></span>
                <span class="btn jian iconfont icon-jian" v-if="!typeNum"></span>
                <!--<van-stepper v-model="target.num" integer max="99" maxlength="2" @plus="upt(target,'jia')" @minus="upt(target,'jian')" @blur="upt(target,'bu')"></van-stepper>-->
              </div>
              <span class="delete iconfont icon-del" @click="deleteShop(target.skuId)"></span>
            </div>
          </div>
        </div>
        <van-dialog
          title="修改购买数量"
          v-model="show"
          show-cancel-button
          message-align="center"
          :before-close="beforeClose"
        >
          <van-stepper class="dialogz" v-model="sNum" max="99"></van-stepper>

        </van-dialog>
      </div>
      <!--<div class="gass-you-like">-->
        <!--<img src="http://qiniu.verydog.cn//show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">-->
      <!--</div>-->
      <!--<div class="shop-item">-->
        <!--<div class="shop-box clear">-->

          <!--<div class="shop-box-item" v-for="target in shoplist" @click="$router.openPage(target.href)">-->
            <!--<img v-lazy="target.src" alt="">-->
            <!--<p class="title">{{ target.title }}</p>-->
            <!--<p class="con">{{ target.con }}</p>-->
            <!--<p class="money">-->
              <!--<span class="small">￥</span> {{ target.money }}-->
            <!--</p>-->
          <!--</div>-->

        <!--</div>-->
      <!--</div>-->
    </div>

    <div class="shopcar-footer" v-show="carListLength>0">
      <div class="item money">
        <p>共{{ getAllNum }}件 <span>金额</span></p>
        <p> <span class="mm">{{ getAllMoney }}</span> 元 </p>
      </div>
      <div class="item continue" @click="openshopping">继续购物</div>
      <div class="item pay" @click="settle">去结算</div>
      <!--$router.openPage('/pay')-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../../components/header-back'
  // import ShopCarTool from '../../util/shop-car-tool/index'
  // import axios from 'axios';
  import { Dialog  } from 'vant';


  export default{
    name: 'shop-car',
    components: {
      headerBack
    },
    data() {
      return {
        // shoplist : [
        //   {
        //     src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        //     title: '13.3"笔记本i5 独显',
        //     con: '指纹解锁，全金属机身',
        //     money: 5199,
        //     href: '/detail/1006'
        //   }
        // ],
        shopCarList: [],
        carListLength: 0,
        skuid:'',
        sNum:0,
        show: false,
        typeNum: true,
      }
    },
    created() {
      this.first()
    },
    mounted() {
      // this.shopCar = new ShopCarTool(this.$store)
      // this.shopCarList = this.shopCar.getAll()

    },
    computed: {
      //   shopCarListLength() {
      //   var n = 0;
      //   for(var i in this.shopCarList){
      //     n += this.shopCarList[i].length
      //   }
      //   return n
      // },
      getAllMoney(){
        let n = 0;
        for(let i in this.shopCarList){
          n += this.shopCarList[i].price * this.shopCarList[i].num
        }
        return n
      },
      getAllNum(){
        let n = 0;
        for(let i in this.shopCarList){
          n += this.shopCarList[i].num
        }
        return n
      }
    },
    methods: {
      openshopping(){
        uni.switchTab({
          url:'../sort/sort'
        });
      },
      mes(target){
        if (target.num < 99) {
          this.show=true;
          this.sNum = target.num;
          this.skuid = target.skuId;
        }
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
          if (this.sNum >= 99) {
            this.sNum = 99
          }
          this.update(this.skuid,this.sNum);
          setTimeout(done, 1000);
        } else {
          done();
        }
      },
      first(){
        this.$http({
            headers: this.$config.getToken(),
            // headers: {'token':'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6NTU1NSwidXNlcm5hbWUiOiJjaGVuMiIsImV4cCI6MTU0ODMwNzU1NH0.OUuIZxQwfUzlJgg3PHepDVCYEGu0H36te3EJcvRk22sLo4ssmYWGZjLlhI0m9yPEc3r2lVjR6JnTCa__9ruaNcOyUKHjoA6dhyIR_5iIG8T3Lj0bdSqrO9PtIB36x96hZS5QfVNLnC2rBcGmNrkz0GUI6Y9Cy18dERWDd-ks1eI'},
            method: 'POST',
            url: this.$config.server() + '/api/cart/queryCart',
          })
          .then(res=>{
            console.log(res.data);
            this.shopCarList = res.data;
            this.carListLength = res.data.length;
            // this.dataItem = res.data;
          })
          .catch(error=>{
            console.log(error);
          });
      },
      update(skuid,num){
        this.$http({
          headers: this.$config.getToken(),
          // headers: {'token':'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6NTU1NSwidXNlcm5hbWUiOiJjaGVuMiIsImV4cCI6MTU0ODMwNzU1NH0.OUuIZxQwfUzlJgg3PHepDVCYEGu0H36te3EJcvRk22sLo4ssmYWGZjLlhI0m9yPEc3r2lVjR6JnTCa__9ruaNcOyUKHjoA6dhyIR_5iIG8T3Lj0bdSqrO9PtIB36x96hZS5QfVNLnC2rBcGmNrkz0GUI6Y9Cy18dERWDd-ks1eI',
          //   // 'Content-Type': 'application/x-www-form-urlencoded'
          // },
          method: 'put',
          // data:{
          //   "skuId": skuid,
          //   "num": num,
          // },
          url: this.$config.server() +'/api/cart/updateCart?skuId='+skuid+'&num='+num,
        })
          .then(res=>{
            console.log(res.data);
            this.first();
            // this.dataItem = res.data;
          })
          .catch(error=>{
            console.log(error);
          });
      },
      upt(target,type) {
          let num = target.num;
          let skuid = target.skuId;
          if (type === "jia"){
              this.typeNum = true;
              num++;
              this.update(skuid,num);
          }else if (type === "jian") {
              num--;
              if (num == 1) {
                this.typeNum = false;
              }
                this.update(skuid,num);
          }else{
            // num =
          }
        // this.shopCar.add(target)
      },
      OpenPage(skuId){
        console.log(skuId)
        var url = this.$config.calllbackWebURIwu(`/detail/${skuId}`, '')
        uni.navigateTo({
          url: url
        });
      },
      deleteShop(skuId){
        console.log(skuId)
        // this.shopCar.remove(target.id)
        // this.shopCarList = this.shopCar.getAll()
        Dialog.confirm({
          // title: '标题',
          message: '确认要删除该商品吗?'
        }).then(() => {
          this.$http({
            headers: this.$config.getToken(),
            // headers: {'token':'eyJhbGciOiJSUzI1NiJ9.eyJpZCI6NTU1NSwidXNlcm5hbWUiOiJjaGVuMiIsImV4cCI6MTU0ODMwNzU1NH0.OUuIZxQwfUzlJgg3PHepDVCYEGu0H36te3EJcvRk22sLo4ssmYWGZjLlhI0m9yPEc3r2lVjR6JnTCa__9ruaNcOyUKHjoA6dhyIR_5iIG8T3Lj0bdSqrO9PtIB36x96hZS5QfVNLnC2rBcGmNrkz0GUI6Y9Cy18dERWDd-ks1eI'},
            method: 'delete',
            url: this.$config.server() +'/api/cart/deleteCart/'+skuId,
          })
            .then(res=>{
              console.log(res.data);
              this.first()
            });
          // on confirm
        }).catch(() => {
          // on cancel
        });
      },
      settle() {
        console.log(this.$config.server());
        uni.navigateTo({
          url: '../buy/buy'
        });
      }
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .dialogz
    margin-left: 33%
    margin-top: 5px
  .gouwuche-page
    .gouwu-view
      position: absolute
      width: 100%
      left: 0
      background-color: #fff
      top: $backHeaderHeight
      bottom: $footerHeight
    .shop-list-wrap
      padding: getIphonese(20px) 0
      .shop-item
        padding: 0 0.4rem
        margin-bottom: 0.4rem
        border-bottom: 1px solid #eee
        padding-bottom: 0.4rem
      .shop-img
        width: getIphonese(178px)
        height: getIphonese(178px)
        border-radius: 4px
        border: 1px solid #eeeeee
        img
          width: 100%
          height: 100%
      .function-box
        width: getIphonese(380px)
        height: getIphonese(178px)
        .title
          color: #717171
        .money
          color: #999999
          @include f12px
          padding-top: getIphonese(10px)
          padding-bottom: getIphonese(10px)
        .button-group
          position: relative
        .function-button
          width: getIphonese(160px)
          height: getIphonese(52px)
          border: 1px solid #eeeeee
          line-height: getIphonese(52px)
          position: relative
          text-align: center
          line-height: getIphonese(52px)
          .btn
            position: absolute
            width: getIphonese(52px)
            height: getIphonese(52px)
            background-color: #fafafa
            text-align: center
            color: #666666
            top: 0
            .iconfont
              color: #C3C3C3
          .jia
            right: 0px
          .jian
            left: 0px
        .delete
          display: inline-block
          position: absolute
          right: 0
          top: 0
          line-height: getIphonese(52px)
          font-size: 0.56rem
          color: #C3C3C3
    .shopcar-footer
      position: absolute
      height: $footerHeight+0.01rem
      width: 100%
      left: 0px
      bottom: 0
      .item
        width: 33.33%
        float: left
        text-align: center
        height: $footerHeight+0.01rem
        line-height: $footerHeight+0.01rem
        @include f12px
      .money
        background-color: #ffffff
        color: #9a9a9a
        line-height: normal
        height: $footerHeight+0.01rem
        @include box-sizing
        padding-top: 0.2rem
        .mm
          font-size: 0.48rem
          color: #ff5722
          font-weight: bold
      .continue
        background-color: #f4f4f4
        color: #333
      .pay
        background-color: #ff6700
        color: #fff
</style>
