<template>
  <img src="http://192.168.31.43:8899/qrcode/lxwm.png" alt="" width="100%">
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data() {
      return {
        isLogin: false
      }
    },
    created() {
    },
    methods: {
      newPage(param) {

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
