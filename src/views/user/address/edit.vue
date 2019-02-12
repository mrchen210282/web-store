<template>
  <div>
    <header-back title="修改地址"></header-back>
    <van-address-edit
      :area-list="areaList"
      :showDelete="showDelete"
      show-set-default
      @save="onSave"
      @delete="onDelete"
      :address-info="info"
    />
  </div>
</template>

<script>
  import areaList from '../../../util/area';
  import headerBack from '../../../components/header-back'
  import {AddressEdit} from 'vant'
  export default {
    components: {
      [AddressEdit.name]: AddressEdit, headerBack
    },
    data() {
      return {
        areaList,
        showDelete: false,
        info: {},
      }
    },

    methods: {
      onSave(data) {
        console.log(data)
        this.submit(data)
        // 设置默认地址
        // this.$http({
        //   headers: this.$config.getToken(),
        //   method: 'POST',
        //   url: `${this.$config.server()}/api/user/setDefaultAddress?id=${data.id}`,
        // }).then(res => {
        //   console.log(res.data);
        //   this.submit(data)
        // }).catch(error => {
        //   console.log(error);
        // });
      },
      submit(data) {
        var id = this.$route.query.id;
        if (id > 0) {
          let formData = {
            'id': data.id,
            'name': data.name,
            'tel': data.tel.toString(),
            'state': data.province,
            'city': data.city,
            'district': data.county,
            'addressDetail': data.addressDetail,
            'areaCode': data.areaCode,
            'isDefault': data.isDefault.toString()
          }
          console.log(formData)
          this.$http({
            headers: this.$config.getToken(),
            method: 'POST',
            url: `${this.$config.server()}/api/user/updateAddress`,
            data: formData
          }).then(res => {
            console.log(res.data);
            this.$toast('保存成功');
            this.$router.go(-1);
          }).catch(error => {
            console.log(error);
          });
        } else {
          let formData = {
            'name': data.name,
            'tel': data.tel.toString(),
            'state': data.province,
            'city': data.city,
            'district': data.county,
            'addressDetail': data.addressDetail,
            'areaCode': data.areaCode,
            'isDefault': data.isDefault.toString()
          }
          console.log(formData)
          this.$http({
            headers: this.$config.getToken(),
            method: 'POST',
            url: `${this.$config.server()}/api/user/createAddress`,
            data: formData
          }).then(res => {
            console.log(res.data);
            this.$toast('保存成功');
            this.$router.go(-1);
          }).catch(error => {
            console.log(error);
          });
        }
      },
      onDelete(data) {
        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/user/delAddress?id=${data.id}`,
        }).then(res => {
          console.log(res.data);
          this.$toast('删除成功');
          this.$router.go(-1);
        }).catch(error => {
          console.log(error);
        });
      },
    },
    created: function () {
      var id = this.$route.query.id;
      if (id > 0) {
        this.showDelete = true;
        this.$http({
          headers: this.$config.getToken(),
          method: 'GET',
          url: `${this.$config.server()}/api/user/queryAddressById/${id}`
        }).then(res => {
          console.log(res.data)
          let formData = {
            id: res.data.id,
            name: res.data.name,
            tel: res.data.tel,
            areaCode: res.data.areaCode,
            province: res.data.state,
            city: res.data.city,
            county: res.data.district,
            addressDetail: res.data.addressDetail,
            isDefault: JSON.parse(res.data.isDefault)
          }
          console.log(formData)
          this.info = formData;
        }).catch(error => {
          console.log(error);
        });
      }
    }

  }
</script>

<style>
  .van-picker__toolbar {
    font-size: 16px;
  }
</style>
