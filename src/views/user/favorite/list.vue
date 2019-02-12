<template>
  <div class="app-init scroll-box">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <div v-for="(item,index) in list" :key="index"  @click="newPage(item)">
        <van-swipe-cell :right-width="65" :on-close="onClose(item)">
          <product-card :product='item'/>
          <span slot="right">删除</span>
        </van-swipe-cell>
      </div>
    </van-list>
  </div>
</template>

<script>
  import productCard from '../../../components/common/product-card'

  export default {
    data() {
      return {
        loading: false,
        finished: false,
        list: [],
        page: 0,
      }
    },
    components: {
      productCard
    },
    methods: {
      newPage(item) {
        console.log(item.itemId)
        var url = this.$config.calllbackWebURIwu(`/detail/${item.itemId}`, '')
        uni.navigateTo({
          url: url
        });
      },
      onClose(item) {
        return function (clickPosition, instance) {
          switch (clickPosition) {
            case 'left':
            case 'cell':
            case 'outside':
              instance.close();
              break;
            case 'right':
              this.$dialog.confirm({
                message: '确定删除吗？'
              }).then(() => {
                this.$http({
                  headers: this.$config.getToken(),
                  method: 'POST',
                  url: `${this.$config.server()}/api/item/delFavorite?id=${item.id}`,
                }).then(res => {
                  console.log(res.data);
                  this.$toast('删除成功');
                  this.$router.go(0);
                  instance.close();
                }).catch(error => {
                  console.log(error);
                });
              }).catch(() => {
                // on cancel
              });
              break;
          }
        }
      },
      onLoad() {
        this.page++;
        // let response = {
        //   "TotalPage": 10,
        //   "list": [
        //     {
        //       "id": 12,
        //       "imageURL": "https://pop.nosdn.127.net/19e33c9b-6c22-4a4b-96da-1cb7afb32712",
        //       "title": "BEYOND博洋家纺 床上套件 秋冬保暖纯棉床单被套 双人被罩 磨毛全棉印花床品四件套",
        //       "price": "499"
        //     }
        //   ]
        // }
        // response.list.forEach(item => {
        //   this.list.push(item);
        // });
        // this.loading = false;
        // if (response.TotalPage <= this.page) {
        //   this.finished = true;
        // }

        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/item/queryFavorite`
        })
          .then(res => {
            console.log(res.data);
            res.data.forEach(item => {
              this.list.push(item);
            });
            this.loading = false;
            this.finished = true;
          })
          .catch(error => {
            console.log(error);
          });

        // this.$http({
        //   headers: this.$config.getToken(),
        //   method: 'POST',
        //   url: `${this.$config.server()}/api/item/createFavorite?itemId=${7}`
        // }).then(res => {
        //   console.log(res.data);
        // }).catch(error => {
        //   console.log(error);
        // });
      }
    },
  }
</script>

<style lang="less">

  .van-swipe-cell {
    &__left,
    &__right {
      color: #FFFFFF;
      font-size: 15px;
      width: 65px;
      height: 100px;
      display: inline-block;
      text-align: center;
      line-height: 100px;
      background-color: #F44;
    }
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #D9D9D9;
  }

</style>
