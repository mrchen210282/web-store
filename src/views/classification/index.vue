<template>
  <div class="app-init classification">
    <div class="classification-header">
      <header-back title="分类"></header-back>
    </div>

    <div class="wrap-box">
      <div class="left-menu absolute scroll-box" ref="left">
        <ul>
          <li class="item" v-for="(target, index) in dataItem" :class="{ 'active': index == active }" @click="jumpToTarget(index)">{{target.name}}</li>
        </ul>
      </div>

      <div class="right-box absolute scroll-box" ref="rightView">
        <ul>
          <li class="item" v-for="(target, index) in dataItem">
            <p class="title">
              <span>{{target.name}}</span>
            </p>
            <div class="shop-item-wrap clear">
              <div class="shop-item" v-for="shop in target.children"  @click="newPage(shop.id)">
                <p><img :src="shop.src" alt=""></p>
                <p class="name">{{shop.name}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../../components/header-back'
  import _ from 'lodash'
  import VueDB from '../../util/vue-db/vue-db'
  import axios from 'axios'

  let DB = new VueDB()

  export default{
    name: 'classification',
    data(){
      return {
        active: 0,
        dataItem:[],
        offset: []
      }
    },
    created() {
      axios({
        headers: this.$config.getToken(),
        method: 'GET',
        url: this.$config.server() + '/api/item/category/lastList?pid=0',
      })
        .then(res=>{
          console.log(res);
          this.dataItem = res.data;
        });
    },
    components: {
      headerBack
    },
    methods: {
      jumpToTarget(index) {
        var scrollTop = this.offset[index];
        console.log(scrollTop);
        this.$refs.rightView.scrollTop = scrollTop;

        setTimeout(()=>{
          this.active = index
        }, 10)
      },
      newPage(shop) {
        console.log('return success!!')
        var url = this.$config.calllbackWebURIwu(`/classification/list/${shop}`, '产品列表')
        uni.navigateTo({
          url: url
        });
      },
    },
    mounted() {

      var scrollDB = {
        left: DB.getItemOnce('classification-left-scrollTop').toNumber(),
        right: DB.getItemOnce('classification-right-scrollTop').toNumber()
      }
      setTimeout(()=>{
        _.forEach(this.$refs.rightView.querySelectorAll('.item'), (value, key)=>{
          this.offset.push(value.offsetHeight*key)
        })


        var mySort = this.offset;

        this.$refs.rightView.addEventListener('scroll', e=>{

          var eScrollTop = this.$refs.rightView.scrollTop;

          for(var indexer=0; indexer<mySort.length; indexer++){
            if(eScrollTop > mySort[indexer]){
              this.active =  indexer;
            }
          }

        })

        setTimeout(()=>{
          this.$refs.left.scrollTop = scrollDB.left
          this.$refs.rightView.scrollTop = scrollDB.right
        }, 10)
      }, 100)



    },
    beforeRouteLeave (to, from, next) {
      DB.setItem('classification-left-scrollTop', this.$refs.left.scrollTop)
      DB.setItem('classification-right-scrollTop', this.$refs.rightView.scrollTop)
      next();
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .classification
    background-color: #fff

    .wrap-box
      position: absolute
      width: 100%
      top: getIphonese(100px)
      left: 0px
      bottom: 0px

    .left-menu
      width: getIphonese(133px)
      left: 0px
      top: 0px
      bottom: 0px
      border-right: 1px solid #efefef
      overflow-x: hidden
      @include box-sizing

      ul
        padding-bottom: 0.44rem
      li.item
        margin-top: getIphonese(56px)
        text-align: center
        -webkit-transition: all .1s ease
        transition: all .1s ease
      li.item.active
        color: #fb7d34
        transform: scale(1.2)
    .right-box
      left: getIphonese(133px)
      top: 0px
      right: 0px
      bottom: 0px
      .item
        padding-top: 0.8rem
      .title
        text-align: center
        padding-bottom: 0.2rem
        span
          position: relative
          display: inline-block

          &:after,&:before
            display: inline-block
            width: getIphonese(34px)
            height: 1px
            top: 50%
            background-color: #e0e0e0
            position: absolute
            content: ''
          &:after
            left: getIphonese(-50px)
          &:before
            right: getIphonese(-50px)
      .shop-item-wrap
        .shop-item
          text-align: center
          float: left
          width: 33.3%
          color: #757575
          margin-bottom: 0.1rem
          @include f12px
          img
            width: getIphonese(80px)
            padding-bottom: 0.1rem
</style>
