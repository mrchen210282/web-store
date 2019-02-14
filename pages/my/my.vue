<template>
	<view class="">
		<view class="user-box public-padding">
			<view class="login" v-if="isLogin">
				<view class="face-book"><img src="http://192.168.31.43:8899/qrcode/touxiang.png" alt=""></view>
				<view class="logintext">
					<h2>{{username}}</h2>
					<p class="fl">1954115872</p>
				</view>
			</view>
			<view class="login" v-if="!isLogin">
				<view class="face-book"><img src="http://192.168.31.43:8899/qrcode/weidenglu.png" alt=""></view>
				<view class="logintext">
					<p class="fl" @click="mine"> 登录 / 注册 </p>
				</view>
			</view>

		</view>
		<view class="dingdan public-padding p-item" @click="newPage('order')">
			我的订单
		</view>
		<view class="tab-box clear line">
			<view class="item" @click="newPage('order-ywc')">
				<p class="icon"><span class="iconfont icon-wancheng"></span></p>
				<p class="name">已完成</p>
			</view>
			<view class="item" @click="newPage('order-dfk')">
				<p class="icon"><span class="iconfont icon-qianbao"></span></p>
				<p class="name">待付款</p>
			</view>
			<view class="item" @click="newPage('order-dsh')">
				<p class="icon"><span class="iconfont icon-daishouhuo"></span></p>
				<p class="name">待收货</p>
			</view>
			<view class="item" @click="newPage('aftersale')">
				<p class="icon"><span class="iconfont icon-buoumaotubiao46"></span></p>
				<p class="name">退换修</p>
			</view>
		</view>
		<view class="new-wrap">
			<view class="dingdan public-padding p-item" @click="newPage('favorite')"><span class="iconfont icon-shop" style="color: rgb(153, 153, 153);"></span>
				<span>我的收藏</span></view>
			<view class="dingdan public-padding p-item" @click="newPage('address')"><span class="iconfont icon-addrerss" style="color: rgb(153, 153, 153);"></span>
				<span>收货地址</span></view>
			<view class="dingdan public-padding p-item" @click="newPage('service')"><span class="iconfont icon-fuwuerji2" style="color: rgb(153, 153, 153);"></span>
				<span>服务中心</span></view>
			<view class="dingdan public-padding p-item" @click="newPage('info')"><span class="iconfont icon-shezhi" style="color: rgb(153, 153, 153);"></span>
				<span>设置</span></view>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				src: '',			
				username: 'wzl',				
				isLogin: false
			};
		},
		onLoad: function() {
			console.log(helper.websiteUrl);
			var self = this;
			uni.getStorage({
				key: 'token',
				success: function(res) {
					self.isLogin = res.data !== null
					self.initUser();
				},
				fail: function() {
					console.log('token is null')
				}
			});
		},
		methods: {
			initUser() {
				var self = this;
				uni.getStorage({
					key: 'token',
					success: function(res) {						
						uni.request({					
						    url: helper.loginUrl+"/api/auth/verify?token=" + res.data,
							method:'GET',				    			    
						    success: (res) => {		
								 console.log(res.data);
								  console.log(res.data.userInfo.username);
						          self.username = res.data.userInfo.username;
								self.isLogin = res.data !== null;
								uni.setStorage({
									key: 'token',
									data: res.data.token,
									success: function () {								
									}
								});
							},
							fail: function(error) {
								console.log(error);
								uni.removeStorage({
									key: 'token',
									success: function(res) {
										console.log('success');
									}
								});
								self.isLogin = res.data !== null
							}
						});
					},
					fail: function() {}
				});
				
			},
			newPage(param) {
				console.log('return success!!')
				let url = ''
				switch (param) {
					case 'order':
						console.log(helper.websiteUrl);
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/order/0&title=我的订单'
						});
						break;
					case 'order-ywc':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/order/3&title=我的订单'
						});
						break;
					case 'order-dfk':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/order/1&title=我的订单'
						});
						break;
					case 'order-dsh':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/order/2&title=我的订单'
						});
						break;
					case 'aftersale':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/aftersale&title=退货维修'
						});
						break;
					case 'favorite':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/favorite&title=我的收藏'
						});
						break;
					case 'address':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/address&title=收货地址'
						});
						break;
					case 'service':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/service&title=服务中心'
						});
						break;
					case 'info':
						uni.navigateTo({
							url: '../new-page/new-page?src=' + helper.websiteUrl + '/#/user/info&title=设置中心'
						});
						break;
				}
			},
			mine() {

				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>
<style>
	@import "../../static/font/iconfont.css";

	.index {
		flex: 1;
		flex-direction: column;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #FFFFFF;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
	}

	.content {
		justify-content: center;
		align-items: center;
	}

	.user-box {
		height: 190px;
		background: #f37d0f url(http://192.168.31.43:8899/qrcode/background.png) repeat top center;
		background-size: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding-top: 0.4375rem;
		padding-bottom: 0.4375rem;
	}

	.login {
		padding-top: 40px;
	}

	.user-box .face-book {
		width: 80px;
		height: 80px;
		float: left;
		border-radius: 100%;
		border: 3px solid rgba(255, 255, 255, 0.4);
		overflow: hidden;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-left: 20px;
	}

	.face-book img {
		width: 80px;
		height: 80px;
		margin-top: 0;
	}

	.logintext {
		float: left;
		line-height: 25px;
		padding-top: 5px;
	}

	.logintext h2 {
		color: #FFFFFF;
		font-size: 24px;
		font-weight: normal;
		margin-left: 10px;
		margin-top: 10px;

	}

	.user-box p {
		padding-left: 10px;
		color: #fff;
		font-size: 16px;
		margin-top: 5px;
	}

	.van-button--danger {
		background-color: #e57f3e;
		border: 1px solid #e57f3e;
		margin: auto;
	}

	.line {
		border-bottom: 1px solid #D9D9D9;
	}

	.tab-box {
		background-color: #fff;
		height: 70px;
		padding-top: 20px;
	}

	.tab-box .item {
		float: left;
		width: 25%;
		text-align: center;
		height: 50px;
		font-size: 14px;
	}

	.p-item {
		background-color: #fff;
		color: rgba(0, 0, 0, 0.87);
		position: relative;
		border-bottom: 1px solid #D9D9D9;
		line-height: 48px;
		padding-left: 15px;
		font-size: 16px;
	}

	.p-item:after {
		font-family: 'iconfont';
		content: "\E628";
		position: absolute;
		right: 15px;
		color: #777777;
	}

	.iconfont {
		font-size: 24px;
		display: inline-block;
		margin-right: 5px;

	}
</style>
