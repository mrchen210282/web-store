<template>
  <div class="app-init home-index">
    <header class="public-header">
      <form class="search-box clear">
        <div class="fl logo">
         <img src="http://192.168.31.43:8899/qrcode/denglu.png"/>
        </div>
        <div class="input-box" @click="$router.openPage('/search')">
          <span class="iconfont icon-sousuo-copy absolute"></span>
          <input type="text" class="input-controller" placeholder="搜索商品名称" readonly>
        </div>
        <!--<div class="myself-center fr" @click="$router.openPage('/mine')">-->
          <!--<span class="iconfont icon-smile"></span>-->
        <!--</div>-->
      </form>

      <!--<nav class="menu-box scroll-box-x noscroll">-->
        <!--<ul class="wrap-box clear">-->
          <!--<li class="item" :class="{ 'active' : index == navListActiveIndex }" v-for="(value, index) in " @click="navChange(index)">-->
            <!--<span>{{value.name}}</span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</nav>-->
    </header>




    <div ref="view01" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navListActiveIndex == 0">
      <swiper :list="bannerList"></swiper>
      <!--<div class="nav-mi-tj clear">-->
        <!--<a href="javascript:;" class="fl">-->
          <!--<img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png" alt="">-->
        <!--</a>-->
        <!--<a href="javascript:;" class="fl">-->
          <!--<img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png" alt="">-->
        <!--</a>-->
        <!--<a href="javascript:;" class="fl">-->
          <!--<img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png" alt="">-->
        <!--</a>-->
        <!--<a href="javascript:;" class="fl">-->
          <!--<img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png" alt="">-->
        <!--</a>-->
      <!--</div>-->

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1001')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png" class="fl href" alt="">
        <img @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href" style="margin-bottom: 0.05rem" alt="">
        <img @click="$router.openPage('/detail/1005')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png" class="fr href" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1003')"  v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1006')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1007')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png'" alt="">
      </div>

      <div class="shop-item">
        <div class="shop-box clear">

          <div class="shop-box-item" v-for="target in shoplist" @click="newPage(target.id)">
            <img v-lazy="target.images" alt="">
            <p class="title">{{ target.title }}</p>
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
  import swiper from '../../components/swiper'
  import VueDB from '../../util/vue-db/vue-db'

  let DB = new VueDB()

  export default {
    data() {
      return {
        bannerList : [],
        shoplist : [],
        navListActiveIndex: 0,
      }
    },
    components: {
      swiper
    },
    created() {
      this.$http({
        method: 'GET',
        url: this.$config.server() + '/api/item/banner/list',
      }).then(res=>{
        console.log(res.data);
        res.data = JSON.parse(JSON.stringify(res.data).replace(/upUrl/g,"img"));
        console.log(res.data);
        this.bannerList = res.data;
      });
      this.$http({
        method: 'GET',
        url: this.$config.server() + '/api/item/goods/sku/recommend',
      }).then(res=>{
        console.log(res.data);
        res.data = JSON.parse(JSON.stringify(res.data).replace(/upUrl/g,"img"));
        console.log(res.data);
        this.shoplist = res.data;
      });
        },
    mounted() {
      // 笨方法，设置N个盒子的scroll top

      this.navListActiveIndex = DB.getItemOnce('home-index-nowIndex').toNumber() || 0

      setTimeout(()=>{
        this.$refs.view01.scrollTop = DB.getItemOnce('home-index-view01').toNumber() || 0
        this.$refs.view02.scrollTop = DB.getItemOnce('home-index-view02').toNumber() || 0
        this.$refs.view03.scrollTop = DB.getItemOnce('home-index-view03').toNumber() || 0
        this.$refs.view04.scrollTop = DB.getItemOnce('home-index-view04').toNumber() || 0
        this.$refs.view05.scrollTop = DB.getItemOnce('home-index-view05').toNumber() || 0
        this.$refs.view06.scrollTop = DB.getItemOnce('home-index-view06').toNumber() || 0
        this.$refs.view07.scrollTop = DB.getItemOnce('home-index-view07').toNumber() || 0
      }, 10)

      let a = this.$config.getToken()
      console.log(a)
    },
    methods: {
      newPage(target) {
        console.log(target)
        var url = this.$config.calllbackWebURIwu(`/detail/${target}`, '')
        uni.navigateTo({
          url: url
        });
      },
    },
    beforeRouteLeave (to, from, next) {
      DB.setItem('home-index-view01', this.$refs.view01.scrollTop)
      DB.setItem('home-index-view02', this.$refs.view02.scrollTop)
      DB.setItem('home-index-view03', this.$refs.view03.scrollTop)
      DB.setItem('home-index-view04', this.$refs.view04.scrollTop)
      DB.setItem('home-index-view05', this.$refs.view05.scrollTop)
      DB.setItem('home-index-view06', this.$refs.view06.scrollTop)
      DB.setItem('home-index-view07', this.$refs.view07.scrollTop)

      DB.setItem('home-index-nowIndex', this.navListActiveIndex)
      next();
    }
  }
</script>

<style type="text/sass" lang="sass">

  .home-index .tab-box
    top: 1.5rem
  .home-index .tab-box.mi-tj .nav-mi-tj a
      display: block
      width:  25%
  .home-index .shop-box
    background-color: #fff

</style>
