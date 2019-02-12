<template>
  <div class="app-init search-page">
    <header class="public-header" style="box-shadow: none">
      <form class="search-box clear" @submit.stop.prevent="submit">
        <div class="fl logo" style="position: relative; top: -0.01rem;" @click="$router.back()">
          <span class="iconfont icon-backer" style="color: #9F9F9F; font-size: 0.6rem"></span>
        </div>
        <div class="input-box">
          <input type="text" style="padding-left: 0.3rem;" v-model="nowInput" class="input-controller" placeholder="搜索商品名称">
        </div>
        <div class="myself-center fr">
          <span class="iconfont icon-sousuo-copy" style="color: #9F9F9F"></span>
        </div>
      </form>
    </header>

    <div class="my-body scroll-box">
      <ul class="resout">
        <li class="item" v-for="target in getResoutItem" @click="$router.openPage(target.link)">{{ target.name }}</li>
      </ul>

      <div class="shop-item">
        <div class="shop-box clear">

          <div class="shop-box-item" v-for="target in shoplist" @click="$router.openPage('/detail/'+target.id)">
            <!--<img v-lazy="target.images" alt="">-->
            <img src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"/>
            <p class="title">{{ target.title }}</p>
            <!--<p class="con">{{ target.con }}</p>-->
            <p class="money">
              <span class="small">￥</span> {{ target.price }}
            </p>
          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    name: 'search-page',
    data() {
      return {
        resout: [],
        nowInput: '',
        shoplist : [],
      }
    },
    methods: {
      submit(){

      }
    },
    created(){
      var id = this.$router.currentRoute.params.id;

      this.$http({
        method: 'GET',
        url: this.$config.server() + '/api/item/goods/carts/list?cateId='+id,
      }).then(res=>{
        console.log(res);
        this.shoplist = res.data;
      });

    },
    mounted() {
      // 默认请求一遍
      // 由于为本地json 不对错误进行处理
      // axios.get('./static/server/lib.json')
      //   .then(response=> {
      //     this.resout = response.data.resout;
      //   })
      //   .catch(error=> {
      //     // this.$router.replace('/error/404')
      //   });
    },
    computed: {
      getResoutItem() {
        let callback = []

        if(this.nowInput == ''){
            return callback
        }

        for(var i=0; i<this.resout.length; i++){
          if(this.resout[i].name.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1){
            callback.push(this.resout[i])
          }
        }

        return callback
      }
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import '../../assets/sass/util'
  .search-page
    background-color: #fff
    .public-header
      position: absolute
      top: 0px
      width: 100%
      left: 0px
    .my-body
      position: absolute
      left: 0px
      bottom: 0px
      right: 0px
      top: 1.37rem
    .title
      padding: .3rem
      @include f12px
      color: #3c3c3c
        line-height: 30px
      height: 65px
      text-overflow: -o-ellipsis-lastline
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 2
      line-clamp: 2
      -webkit-box-orient: vertical
    .hot-box
      padding: .3rem
      @include f12px
      li.item
        display: inline-block
        padding: 0 .4rem
        line-height: 0.8rem
        margin-right: 0.2rem
        margin-bottom: 0.2rem
        border: 1px solid #E4E4E4
        background-color: #FFF9F8
    .resout
      background-color: #F5F5F5
      .item
        color: #3c3c3c
        @include f12px
        padding: 0 0.4rem
        line-height: 1.2rem
        border-bottom: 1px solid #e0e0e0
      .item:first-child
        border-top: 1px solid #e0e0e0
</style>
