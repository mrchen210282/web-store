<template>

  <div class="app-init scroll-box mine-page footer-hack">
    <div class="user-box public-padding">
      <div class="login" v-if="isLogin">
        <div class="face-book">
          <img @click="$router.openPage('/pay')" src="http://192.168.31.10/1111/touxiang.png" alt="">
        </div>
        <div class="logintext">
          <h2>王先生</h2>
          <p class="fl">1954115872</p>
        </div>
      </div>
      <div class="login" v-if="!isLogin">
        <div class="face-book">
          <img @click="$router.openPage('/pay')" src="http://192.168.31.10/1111/weidenglu.png" alt="">
        </div>
        <p class="fl" @click="mine"> 登录 / 注册 </p>
      </div>
    </div>

    <div class="dingdan public-padding p-item" @click="newPage('order')">
      我的订单
    </div>

    <div class="tab-box clear line">
      <div class="item" @click="newPage('order-ywc')">
        <p class="icon">
          <span class="iconfont icon-wancheng"></span>
        </p>
        <p class="name">已完成</p>
      </div>
      <div class="item" @click="newPage('order-dfk')">
        <p class="icon">
          <span class="iconfont icon-qianbao"></span>
        </p>
        <p class="name">待付款</p>
      </div>
      <div class="item" @click="newPage('order-dsh')">
        <p class="icon">
          <span class="iconfont icon-daishouhuo"></span>
        </p>
        <p class="name">待收货</p>
      </div>
      <div class="item" @click="newPage('aftersale')">
        <p class="icon">
          <span class="iconfont icon-buoumaotubiao46"></span>
        </p>
        <p class="name">退换修</p>
      </div>
    </div>

    <div class="new-wrap">
      <div class="dingdan public-padding p-item" @click="newPage('favorite')">
        <span class="iconfont icon-shop" style="color: #999;"></span>
        <span>我的收藏</span>
      </div>
      <div class="dingdan public-padding p-item" @click="newPage('address')">
        <span class="iconfont icon-addrerss" style="color: #999;"></span>
        <span>收货地址</span>
      </div>
      <div class="dingdan public-padding p-item" @click="newPage('service')">
        <span class="iconfont icon-fuwuerji2" style="color: #999;"></span>
        <span>服务中心</span>
      </div>
      <div class="dingdan public-padding p-item" @click="newPage('info')">
        <span class="iconfont icon-shezhi" style="color: #999;"></span>
        <span>设置</span>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'mine-page',
    data() {
      return {
        isLogin: false
      }
    },
    created() {
      this.isLogin = this.$config.getToken().token !== null
      uni.postMessage({
        data: {
          action: 'logout',
        }
      });
    },
    methods: {
      newPage(param) {
        console.log('return success!!')
        let url = ''
        switch (param) {
          case 'order':
            url = this.$config.calllbackWebURI('/user/order/0', '我的订单')
            uni.navigateTo({
              url: url
            });
            break;
          case 'order-ywc':
            url = this.$config.calllbackWebURI('/user/order/3', '我的订单')
            uni.navigateTo({
              url: url
            });
            break;
          case 'order-dfk':
            url = this.$config.calllbackWebURI('/user/order/1', '我的订单')
            uni.navigateTo({
              url: url
            });
            break;
          case 'order-dsh':
            url = this.$config.calllbackWebURI('/user/order/2', '我的订单')
            uni.navigateTo({
              url: url
            });
            break;
          case 'aftersale':
            url = this.$config.calllbackWebURI('/user/aftersale', '售后服务')
            uni.navigateTo({
              url: url
            });
            break;
          case 'favorite':
            url = this.$config.calllbackWebURI('/user/favorite', '我的收藏')
            uni.navigateTo({
              url: url
            });
            break;
          case 'address':
            url = this.$config.calllbackWebURI('/user/address', '收货地址')
            uni.navigateTo({
              url: url
            });
            break;
          case 'service':
            url = this.$config.calllbackWebURI('/user/service', '服务中心')
            uni.navigateTo({
              url: url
            });
            break;
          case 'info':
            url = this.$config.calllbackWebURI('/user/info', '设置中心')
            uni.navigateTo({
              url: url
            });
            break;
        }
      },
      mine() {
        console.log(this.$config.server());
        console.log(uni);
        uni.reLaunch({
          url: '../login/login'
        });
      },
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .mine-page
    .public-padding
      padding: 0 getIphonese(30px)
    .user-box
      height: getIphonese(230px)
      background: #f37d0f url(http://192.168.31.10/1111/background.png) repeat top center
      background-size: 7.7rem
      @include box-sizing
      padding-top: getIphonese(28px)
      padding-bottom: getIphonese(28px)

    .user-box
      line-height: 1.33rem
      .face-book
        width: 1.33rem
        height: 1.33rem
        float: left
        border-radius: 100%
        border: 3px solid hsla(0, 0%, 100%, .4)
        overflow: hidden
        @include box-sizing
        img
          width: 100%
          height: 100%
      p
        padding-left: 0.2rem
        color: #fff
        @include f12px

    .dingdan
      line-height: getIphonese(80px)
    .p-item:active
      background-color: #eee
    .p-item
      background-color: #fff
      color: rgba(0, 0, 0, .87)
      position: relative
      border-bottom: 1px solid #D9D9D9
    .p-item:after
      font-family: 'iconfont'
      content: "\e628"
      position: absolute
      right: getIphonese(26px)
      color: #777777
    .new-wrap
      background-color: #fff
      margin-bottom: 0.26rem
      .p-item
        position: relative
        border-bottom: none
        padding-left: 1.5rem
        @include f12px
      .p-item:before
        position: absolute
        content: ''
        display: block
        width: 8.44rem
        right: 0px
        bottom: 0px
        border-bottom: 1px solid #D9D9D9
      .p-item:last-child:before
        border-bottom: none

      .iconfont
        font-size: 0.65rem
        width: 0.8rem
        display: inline-block
        text-align: center
        position: absolute
        left: 0.5rem

    .tab-box
      background-color: #fff
      margin-bottom: 0.26rem
      .item
        float: left
        width: 25%
        text-align: center
        height: 2.32rem
        .icon
          font-size: 0.6rem
          color: #A4A4A4
          padding-top: 0.36rem
        .name
          @include f12px
          padding-top: 0.1rem
      .item:active
        background-color: #eee
</style>
<style>
  .login {
    margin-top: 20px;
  }

  .logintext {
    float: left;
    line-height: 25px;
    padding-top: 5px;
  }

  .logintext h2 {
    color: #FFFFFF;
    font-size: 18px;
    font-weight: normal;
    margin-left: 10px;
  }

  .van-button--danger {
    background-color: #e57f3e;
    border: 1px solid #e57f3e;
    margin: auto;
  }

  .line {
    border-bottom: 1px solid #D9D9D9;
  }

</style>
