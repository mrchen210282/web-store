<template>
  <div>
    <div>
      <div class="form" style="margin-top: 20px">
        <van-cell-group>
          <van-field
            label="昵称"
            placeholder="请输入昵称"
            v-model="dataForm.userName"
          />
        </van-cell-group>
        <div class="save-btn">
          <van-button size="large" type="warning" round @click="save">保存</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Field } from 'vant';
  export default {
    data() {
      return {
        dataForm: {
          userName: null
        }
      }
    },
    components: {
      Field
    },
    methods: {
      init() {
        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/user/queryById`
        })
          .then(res => {
            console.log(res.data);
            this.dataForm = res.data
          })
          .catch(error => {
            console.log(error);
          });
      },
      save() {
        console.log(this.dataForm)
        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/user/changeNickName?nickName=${this.dataForm.nickName}`
        })
          .then(res => {
            console.log(res.data);
            this.$toast('保存成功');
            this.$router.go(-1);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    created() {
      this.init()
    }

  }
</script>

<style>
  .form {
    /*padding-top: 40px;*/
  }
  .save-btn {
    margin: 80px 10px 10px 10px;
    van-button {
      height: 45px;line-height:45px;
    }
  }
</style>
