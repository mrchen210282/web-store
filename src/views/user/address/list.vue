<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :class="isSelect?'':'hideselect'"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
  import {AddressList} from 'vant';
  import headerBack from '../../../components/header-back'
  // import axios from 'axios'


  export default {
    components: {
      [AddressList.name]: AddressList, headerBack
    },
    data() {
      return {
        chosenAddressId: '1',
        isSelect: false,
        list: [],
      }
    },

    methods: {
      onAdd() {
        this.$router.push('/user/address/edit')
      },

      onEdit(item, index) {
        this.$router.push('/user/address/edit?id=' + item.id);
      },
      onSelect(item, index) {
        if (!this.isSelect) {
          return;
        }
        this.$emit('selectAddress', item);
        this.$router.go(-1);
      }
    },
    created: function () {
      // console.log(this.$config.getToken())
      // console.log(this.$config.server())
      this.$http({
        headers: this.$config.getToken(),
        method: 'POST',
        url: `${this.$config.server()}/api/user/queryAddress`
      })
        .then(res => {
          console.log(res.data);
          let data = [];
          res.data.map((m) => {
            data.push({
              id: m.id,
              name: m.name,
              tel: m.tel,
              address: m.addressDetail
            })
          })
          this.list = data;
        })
        .catch(error => {
          console.log(error);
        });
//         this.chosenAddressId=this.$route.query.id;
//         this.isSelect=this.$route.query.id>0;
//         this.list=[
//         {
//           "id": "1",
//           "name": "张三",
//           "tel": "13000000000",
//           "address": "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
//         },
//         {
//           "id": "2",
//           "name": "李四",
//           "tel": "1310000000",
//           "address": "浙江省杭州市拱墅区莫干山路 50 号"
//         }
//       ];
    }

  }
</script>

<style lang="less">
  .hideselect {
    .van-radio__input {
      display: none;
    }
  }
</style>
