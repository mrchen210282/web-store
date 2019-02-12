<template>
    <div>
      <van-cell-group>
            <van-cell title="修改个人信息"  is-link @click="newPage('geren')"/>
            <van-cell title="修改登录密码"  is-link @click="newPage('change')"/>
        </van-cell-group>
      <div class="save-btn">
        <van-button size="large" type="warning" :block="true" round @click="logout">退出登录</van-button>
      </div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    components: {
      Dialog
    },
    methods: {
      newPage(param) {
        console.log('return success!!')
        let url = ''
        switch (param) {
          case 'geren':
            url = this.$config.calllbackWebURI(`/user/info/geren`, '修改个人信息')
            uni.navigateTo({
              url: url
            });
            break;
          case 'change':
            url = this.$config.calllbackWebURI(`/user/info/change`, '修改登录密码')
            uni.navigateTo({
              url: url
            });
            break;
        }
      },
      logout() {
        console.log(uni);
        Dialog.confirm({
          message: '是否退出登录'
        }).then(() => {
          // on confirm
          uni.postMessage({
            data: {
              action: 'logout'
            }
          });
          uni.reLaunch({
            url: '../my/my'
          });
          this.$config.clearToken()
        }).catch(() => {
          // on cancel
        });
      }
    }
}
</script>

<style>
  .van-cell{
    padding: 15px;
    border-bottom: 1px solid #D9D9D9;
  }
  .save-btn {
    margin: 80px 10px 10px 10px;
    van-button {
      height: 45px;line-height:45px;
    }
  }
</style>
