<template>
	<view class="aui-address-content">
		<view class="aui-address-box">
			<view class="aui-address-box-list">
				<view href="my-addres.html" class="aui-address-box-default" @click="selectAddress">
					<ul>
						<li>
							<strong>{{address.name + ' ' + address.tel}}</strong>
							<span class="aui-tag aui-tag-default" id="aui-default" v-if="address.isDefault == 'true'">默认</span>
						</li>
						<li>
							{{address.addressDetail}}
						</li>
					</ul>
				</view>
			</view>
		</view>
		<view v-for="(item, i) in sales" :key="i">
			<view class="aui-dri"></view>
			<view class="buy-list">
				<ul>
					<view>
						<figure>
							<image :src="item.image" class="imgtp"></image>
						</figure>
						<li>
							<view class="texth">{{item.title}}</view>
							<view class="" v-for="(val, key, index) in item.ownSpec" :key="index">
								<span> {{ key }} - {{ val }}</span>
							</view>
							<!-- <span>
								颜色：粉红
								<br />
								尺寸：M
							</span> -->
							<b>￥{{item.price}}.00</b>
							<small>× {{item.num}}</small>
						</li>
					</view>
				</ul>
				<dl>
					<dd>
						<span>运费</span>
						<small>包邮</small>
					</dd>
				</dl>
			</view>
		</view>
		<view class="buy-list">
			<dl>
				<dd>
					<span>买家留言: </span>
					<small style="float: right; width: 77%;"><input type="text" v-model="buyerMessage" placeholder="给卖家留言"></small>
				</dd>
			</dl>
		</view>
		<view class="aui-payment-bar">
			<view class="shop-total">
				<span class="aui-red aui-size">实付款: ￥{{totalMoney}}.00</span>
			</view>
			<view href="Settlement.html" class="settlement" @click="submit">提交订单</view>
		</view>
	</view>

</template>

<script>
	import helper from '../../common/helper.js';
	import onfire from '../../common/onfire.js';
	export default {
		data() {
			return {
				address: {},
				buyerMessage: '',
				paymentType: 1, // 1: 在线支付 2：货到付款
				postFee: '0',// 邮费
				sales: []
			};
		},
		onLoad: function() {
			this.getAddress();
			this.getSale();
			var self = this;
			onfire.on('setAddressInfo',function(addressId){
				self.getAddress(addressId);
			})
		},
		methods: {
			getAddress(id) {
				var self = this;
				uni.getStorage({
					key: 'token',
					success: function(res) {
						uni.request({
							url: helper.loginUrl + '/api/user/queryAddress',
							header: {
								token: res.data
							},
							method: 'POST',
							success: (res) => {
								if (!id) {
									self.address = res.data.filter(m => m.isDefault === 'true')[0];
								} else {
									self.address = res.data.filter(m => m.id == id)[0];
								}
								console.log(self.address);
							},
							fail: function(error) {
								console.log(error);
							}
						});
					},
					fail: function() {}
				});
			},
			getSale() {
				  var self = this;
				  uni.getStorage({
				  	key: 'token',
				  	success: function(res) {
				  		uni.request({
				  			header: {
				  				token: res.data
				  			},
				  			url: helper.loginUrl + "/api/cart/queryCart",
				  			method: 'POST',
				  			success: (res) => {
				  				// console.log(res.data);
								res.data.map(m => {
									m.ownSpec = JSON.parse(m.ownSpec)
								})
								self.sales = res.data;
								console.log(self.sales)
				  			},
				  			fail: function(error) {
				  				console.log(error);
				  			}
				  		});
				  	},
				  	fail: function() {}
				  });
			},
			submit() {
				var self = this;
				uni.getStorage({
					key: 'token',
					success: function(res) {
						let formData = {
						  "totalPay": self.totalMoney,
						  "actualPay": self.totalMoney,
						  "buyerMessage": self.buyerMessage,
						  "buyerNick": self.address.name,
						  "receiverAddress": String(self.address.id),
						  "receiverZip": self.address.areaCode,
						  "paymentType": self.paymentType,
						  "postFee": self.postFee,
						  "orderDetails": []
						}
						self.sales.map(m => {
							formData.orderDetails.push({
							  "skuId": m.skuId,
							  "quantity": m.num,
							  "title": m.title,
							  "price": m.price,
							  "ownSpec": JSON.stringify(m.ownSpec),
							  "imageUrl": m.image
							})
						})
						console.log(formData)
						uni.request({
							url: helper.loginUrl + '/api/order/createOrder',
							header: {
								token: res.data
							},
							method: 'POST',
							data: formData,
							success: (res) => {
								console.log(res.data.split('.')[0]);
								uni.navigateBack({
									delta: 1
								});
							},
							fail: function(error) {
								console.log(error);
							}
						});
					},
					fail: function() {}
				});
			},
			selectAddress() {
				uni.navigateTo({
					url: '../address-list/address-list?id=' + this.address.id
				});
			}
		},
		computed: {
			totalMoney() {
				let data = [];
				this.sales.map(m => data += m.price * m.num)
				return data
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";

	.aui-dri {
		height: 8px;
		background: #e5e5e5;
	}
	.aui-dri2 {
		height: 49px;
	}
	.aui-address-content {
		background: #007AFF;
	}

	.aui-address-well {
		padding-bottom: 44px;
	}

	.aui-address-box-list {
		position: relative;
		z-index: 320;
	}

	.aui-address-box-default {
		padding: 20px 10px;
		position: relative;
		display: block;
		background: #fff url(../../static/line.png) -7px bottom repeat-x;
		background-size: 44px 2px;
	}

	.aui-address-box-default ul {
		position: relative;
		padding-right: 30px;
		padding-left: 0px;
	}

	.aui-address-box-default ul li {
		font-size: 12px;
		color: #81838e;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		position: relative;
		padding-left: 15px;
	}

	.aui-address-box-default ul li strong {
		font-size: 14px;
		padding-bottom: 10px;
		display: inline-block;
		color: #555;
		padding-right: 10px;
	}

	.aui-address-box-default .aui-tag {
		display: inline-block;
		position: relative;
		overflow: hidden;
		padding: 0 5px;
		vertical-align: middle;
		margin: 0 5px 0 0;
		max-width: 8em;
		height: 15px;
		line-height: 15px;
		font-size: 0.5rem;
		color: #4b9bfb;
	}

	.aui-address-box-default .aui-tag-default {
		color: #d4244e;
		border-color: #d4244e;
	}

	.aui-address-box-default .aui-tag::after {
		content: "";
		position: absolute;
		z-index: 1;
		pointer-events: none;
		background-color: #4b9bfb;
		border: 1px solid #ddd;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: none;
		border-color: #4b9bfb;
		border-radius: 2px;
		right: -100%;
		bottom: -100%;
		-webkit-transform: scale(.5);
		-webkit-transform-origin: 0 0;
		border-radius: 4px;
	}

	.aui-address-box-default .aui-tag-default::after {
		border-color: #d4244e;
	}

	.aui-address-box-default:after {
		content: "";
		display: inline-block;
		vertical-align: middle;
		width: 15px;
		height: 15px;
		background-image: url('data:image/png;base64,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');
		background-repeat: no-repeat;
		background-size: 100%;
		position: absolute;
		top: 50%;
		right: 10px;
		margin-top: -5px;
	}

	.aui-payment-bar {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 1000;
	}

	.aui-payment-bar .shop-total {
		float: left;
		height: 49px;
		line-height: 49px;
		padding-left: 20px;
		font-size: 16px;
		color: #da4644;
	}

	.aui-payment-bar .settlement {
		display: block;
		float: right;
		width: 135px;
		height: 49px;
		line-height: 49px;
		text-align: center;
		color: #fff;
		font-size: 16px;
		background: #FF5E53;
	}

	.aui-address-cell {
		padding: 10px 15px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		color: inherit;
	}

	.buy-list {
		width: 100%;
		background-color: #fff;
		font-size: 14px;
		
	}

	.buy-list ul {
		position: relative;
		overflow: hidden;
		width: 92%;
		padding: 4%;
		border-bottom: solid 1px #ccc;
	}

	.buy-list ul a {
		display: block;
		width: 100%;
	}

	.buy-list ul figure {
		float: left;
		width: 30%;
		height: 8em;
		overflow: hidden;
	}

	.buy-list ul figure .imgtp {
		width: 100%;
		height: 88px;
	}

	.buy-list ul li {
		float: left;
		width: 66%;
		margin-left: 4%;
		overflow: hidden;
	}

	.buy-list ul li .texth {
		font-size: 14px;
		color: #333;
		font-weight: normal;
		text-align: justify;
	}

	.buy-list ul li span {
		font-size: 12px;
		color: #999;
		text-align: justify;
		line-height: 1.6;
	}

	.buy-list ul li b {
		position: absolute;
		right: 5%;
		bottom: 30%;
		font-size: 14px;
		color: #FC605A;
		font-weight: normal;
	}

	.buy-list ul li small {
		position: absolute;
		right: 5%;
		bottom: 15%;
		font-size: 1.25em;
		color: #999;
	}

	.buy-list dl {
		width: 100%;
		clear: both;
		overflow: hidden;
	}

	.buy-list dl dd {
		width: 90%;
		padding: 4% 5%;
		font-size: 1.35em;
		border-bottom: solid 1px #ccc;
		overflow: hidden;
	}

	.buy-list dl dd span {
		color: #666;
		float: left;
		font-size: 14px;
	}

	.buy-list dl dd small {
		color: #999;
		float: right;
		font-size: 14px;
	}

	.buy-list dl dt {
		width: 90%;
		padding: 3% 5%;
	}

	.buy-list dl dt textarea {
		width: 90%;
		padding: 3% 5%;
		font-size: 1.169em;
		color: #666;
		line-height: 1.6;
		text-align: justify;
		border-radius: 0.3em;
		border: solid 1px #c8c8c8;
	}
</style>
