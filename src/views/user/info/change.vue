<template>
  <div>
    <div>
      <div class="form">
        <van-cell-group>
          <van-field
            label="原密码"
            placeholder="请输入原密码"
            type="password" clearable required
            v-model="dataForm.oldPassword"
          />
          <van-field
            label="新密码"
            placeholder="请输入新密码"
            type="password" clearable required
            v-model="dataForm.newPassword"
          />
          <van-field
            label="确认密码"
            placeholder="请再次输入"
            type="password" clearable required
            v-model="dataForm.confirmPassword"
          />
        </van-cell-group>
        <div class="save-btn">
          <van-button size="large" type="warning" round :disabled="isDisabled" @click="save">保存</van-button>
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
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        }
      }
    },
    components: {
      Field
    },
    methods: {
      save() {
        console.log(this.dataForm)
        if (this.dataForm.newPassword.length < 6 || this.dataForm.confirmPassword.length < 6) {
          this.$toast('新密码最少输入6位数');
          return;
        }
        if (this.dataForm.newPassword !== this.dataForm.confirmPassword) {
          this.$toast('新密码与确认密码不一致');
          return;
        }
        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/user/changePwd?oldPwd=${this.dataForm.oldPassword}&newPwd=${this.dataForm.newPassword}`
        })
          .then(res => {
            console.log(res.data);
            this.$toast('保存成功');
            this.$router.go(-1);
          })
          .catch(error => {
            console.log(error);
            this.$toast('原密码错误');
          });
      }
    },
    created() {
    },
    computed: {
      isDisabled() {
        return this.dataForm.confirmPassword.length === 0 || this.dataForm.oldPassword.length === 0 || this.dataForm.newPassword.length === 0
      }
    }

  }
</script>

<style>
  .form {
    /*padding-top: 40px;*/
  }
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
