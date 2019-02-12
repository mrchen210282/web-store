import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component(resolve){
        require(['@/views/home/index.vue'], resolve)
      }
    },
    {
      path: '/classification',
      name: 'classification',
      component(resolve){
        require(['@/views/classification/index.vue'], resolve)
      }
    },
		  {
		  path: '/classification/list/:id',
		  name: 'list',
		  component(resolve){
		    require(['@/views/classification/list.vue'], resolve)
		  }
		},
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component(resolve){
        require(['@/views/shoppingcart/index.vue'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component(resolve){
        require(['@/views/mine/index.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component(resolve){
        require(['@/views/search/index.vue'], resolve)
      }
    },
    {
      path: '/service',
      name: 'service',
      component(resolve){
        require(['@/views/service/index.vue'], resolve)
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component(resolve){
        require(['@/views/detail/index.vue'], resolve)
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component(resolve){
        require(['@/views/pay/index.vue'], resolve)
      }
    },
    {
      path: '/user/order/:id',
      name: 'user-order',
      component(resolve){
        require(['@/views/user/order/list.vue'], resolve)
      }
    },
    {
      path: '/user/order/info/:id',
      name: 'order-info',
      component(resolve){
        require(['@/views/user/order/info.vue'], resolve)
      }
    },
    {
      path: '/user/order/logistics/:id',
      name: 'order-logistics',
      component(resolve){
        require(['@/views/user/order/logistics.vue'], resolve)
      }
    },
    {
      path: '/user/aftersale',
      name: 'aftersale-list',
      component(resolve){
        require(['@/views/user/aftersale/list.vue'], resolve)
      }
    },
    {
      path: '/user/aftersale/apply/:id',
      name: 'aftersale-apply',
      component(resolve){
        require(['@/views/user/aftersale/apply.vue'], resolve)
      }
    },
    {
      path: '/user/aftersale/detail/:ordercode',
      name: 'aftersale-detail',
      component(resolve){
        require(['@/views/user/aftersale/detail.vue'], resolve)
      }
    },
    {
      path: '/user/aftersale/track/:id',
      name: 'aftersale-track',
      component(resolve){
        require(['@/views/user/aftersale/track.vue'], resolve)
      }
    },
    {
      path: '/user/favorite',
      name: 'user-favorite',
      component(resolve){
        require(['@/views/user/favorite/list.vue'], resolve)
      }
    },
    {
      path: '/user/address',
      name: 'user-address',
      component(resolve){
        require(['@/views/user/address/list.vue'], resolve)
      }
    },
    {
      path: '/user/address/edit',
      name: 'address-edit',
      component(resolve){
        require(['@/views/user/address/edit.vue'], resolve)
      }
    },
    {
      path: '/user/info',
      name: 'user-info',
      component(resolve){
        require(['@/views/user/info/detail.vue'], resolve)
      }
    },
		 {
		  path: '/user/info/geren',
		  name: 'user-geren',
		  component(resolve){
		    require(['@/views/user/info/geren.vue'], resolve)
		  }
		},
    {
      path: '/user/info/change',
      name: 'user-change',
      component(resolve){
        require(['@/views/user/info/change.vue'], resolve)
      }
    },
    {
      path: '/error/404',
      name: 'error-404',
      component(resolve){
        require(['@/views/error/404.vue'], resolve)
      }
    },
    {
      path: '/error/110',
      name: 'error-110',
      component(resolve){
        require(['@/views/error/110.vue'], resolve)
      }
    }
  ]
})
