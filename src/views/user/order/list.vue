<template>
  <div>
    <div class="app-init scroll-box">
      <div class="scroll-box">
        <van-tabs v-model="active" @click="selectTabs">
          <van-tab title="全部">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <div v-for="(item,index) in lister" :key="index">
                <van-cell-group class="order-item">
                  <van-panel>
                    <div slot="header">
                      <van-cell class="title" :title="'订单：'+item.orderId" :value="item.desc"
                                @click="newPage(item)"/>
                    </div>
                    <div>
                      <div @click="newPage(item)">
                        <div v-if="item.list.length==1" v-for="(product,i) in item.list" :key="i">
                          <product-card :product='product'/>
                        </div>
                        <div v-if="item.list.length>1" class="more">
                          <div class="item" v-for="(product,i) in item.list" :key="i">
                            <div>
                              <img :src="product.imageURL"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div slot="footer">
                      <span class="total">总价：￥{{item.total}}</span>
                      <van-button size="small" type="danger" v-if="item.status ==2"   @click="newqueren(item)">确认收货</van-button>
                      <van-button size="small" type="danger" v-if="item.status ==1">支付</van-button>
                    </div>
                  </van-panel>
                </van-cell-group>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="待付款">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <div v-for="(item,index) in lister" :key="index">
                <van-cell-group class="order-item">
                  <van-panel>
                    <div slot="header">
                      <van-cell class="title" :title="'订单：'+item.orderId" :value="item.desc"
                                @click="newPage(item)"/>
                    </div>
                    <div>
                      <div @click="newPage(item)">
                        <div v-if="item.list.length==1" v-for="(product,i) in item.list" :key="i">
                          <product-card :product='product'/>
                        </div>
                        <div v-if="item.list.length>1" class="more">
                          <div class="item" v-for="(product,i) in item.list" :key="i">
                            <div>
                              <img :src="product.imageURL"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div slot="footer">
                      <span class="total">总价：￥{{item.total}}</span>
                      <van-button size="small" type="danger" v-if="item.status ==2"   @click="newqueren(item)">确认收货</van-button>
                      <van-button size="small" type="danger" v-if="item.status ==1">支付</van-button>
                    </div>
                  </van-panel>
                </van-cell-group>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="待收货">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <div v-for="(item,index) in lister" :key="index">
                <van-cell-group class="order-item">
                  <van-panel>
                    <div slot="header">
                      <van-cell class="title" :title="'订单：'+item.orderId" :value="item.desc"
                                @click="newPage(item)"/>
                    </div>
                    <div>
                      <div @click="newPage(item)">
                        <div v-if="item.list.length==1" v-for="(product,i) in item.list" :key="i">
                          <product-card :product='product'/>
                        </div>
                        <div v-if="item.list.length>1" class="more">
                          <div class="item" v-for="(product,i) in item.list" :key="i">
                            <div>
                              <img :src="product.imageURL"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div slot="footer">
                      <span class="total">总价：￥{{item.total}}</span>
                      <van-button size="small" type="danger" v-if="item.status ==2" @click="newqueren(item)">确认收货</van-button>
                      <van-button size="small" type="danger" v-if="item.status ==1">支付</van-button>
                    </div>
                  </van-panel>
                </van-cell-group>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="已完成">
            <van-list
              v-model="loading"
              :finished="finished"
              @load="onLoad"
            >
              <div v-for="(item,index) in lister" :key="index">
                <van-cell-group class="order-item">
                  <van-panel>
                    <div slot="header">
                      <van-cell class="title" :title="'订单：'+item.orderId" :value="item.desc"
                                @click="newPage(item)"/>
                    </div>
                    <div>
                      <div @click="newPage(item)">
                        <div v-if="item.list.length==1" v-for="(product,i) in item.list" :key="i">
                          <product-card :product='product'/>
                        </div>
                        <div v-if="item.list.length>1" class="more">
                          <div class="item" v-for="(product,i) in item.list" :key="i">
                            <div>
                              <img :src="product.imageURL"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div slot="footer">
                      <span class="total">总价：￥{{item.total}}</span>
                      <van-button size="small" type="danger" v-if="item.status ==2"   @click="newqueren(item)">确认收货</van-button>
                      <van-button size="small" type="danger" v-if="item.status ==1">支付</van-button>
                    </div>
                  </van-panel>
                </van-cell-group>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>

</template>

<script>
  import productCard from '../../../components/common/product-card'
  import { Dialog } from 'vant';

  export default {
    components: {
      productCard
    },
    data() {
      return {
        active: 0,
        id: 0,
        loading: false,
        finished: false,
        page: 0,
        lister: []
      }
    },
    methods: {
      selectTabs(index, title) {
        this.active = index;
        this.id = index;
        this.onLoad()
      },
      onLoad() {
        this.page++;
        if (this.active === 0) this.id = '';
        this.$http({
          headers: this.$config.getToken(),
          method: 'POST',
          url: `${this.$config.server()}/api/order/queryOrder?status=${this.id}`,
        }).then(res => {
          console.log(res.data);
          this.lister = res.data;


         //this.lister = JSON.parse(JSON.stringify(res.data).replace(/imageUrl/g,"imageURL"));
          console.log(this.lister);

          this.loading = false;
          this.finished = true;
        }).catch(error => {
          console.log(error);
        });
      },
      newPage(item) {
        console.log(item.orderId)
        let url = this.$config.calllbackWebURI(`/user/order/info/${item.orderId}`, '订单详情')
        uni.navigateTo({
          url: url
        });
      },
      newqueren (item) {
        console.log(item.orderId)
        Dialog.confirm({
          message: '是否确认收货'
        }).then(() => {
          this.$http({
            headers: this.$config.getToken(),
            method: 'POST',
            url: `${this.$config.server()}/api/order/confirmOrder?orderId=${item.orderId}`,
          }).then(res => {
            console.log(res.status);
            if (res.status == 200){
              this.$router.go(0);
            }
          }).catch(error => {
            console.log(error);
          });
        }).catch(() => {
        });
      }
    },
    created: function () {
      this.id = this.$route.params.id;
      this.active = Number(this.id);
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../../assets/sass/util"
  .order-item
    margin-bottom: 10px
    font-size: 12px
    .title
      border-bottom: 1px solid #e5e5e5

      .van-cell__title
        flex: 2

      .van-cell__value
        color: red

    .van-panel__footer
      text-align: right
      border-bottom: 1px solid #e5e5e5

    .van-button
      margin-left: 5px

    .total
      position: absolute
      top: 17px
      left: 15px
      font-size: 13px

    .more
      overflow-x: scroll
      white-space: nowrap
      -webkit-overflow-scrolling: touch
      margin: 5px 0 5px 15px
      .item
        width: 90px
        height: 90px
        margin-right: 10px
        display: inline-block
        img
          width: 100%


</style>
<style>
  .van-button--danger{color:#ffffff;background-color:#e57f3e;border:1px solid #e57f3e}
  .van-tabs__line {background-color: #e57f3e;}
</style>
