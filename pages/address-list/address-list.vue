<template>
	<view class="container">
		<view class="address-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd a-address" v-for="(item, index) in addressList" :key="index">
					<view>
						<radio :value="String(item.id)" :checked="item.id === current" />
					</view>
					<view class="left-text">
						<view class="name-tel">
							{{item.name}} {{item.tel}}
						</view>
						<view class="address-box">
							{{item.addressDetail}}
						</view>
					</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	import onfire from '../../common/onfire.js';
	export default {
		data() {
			return {
				addressList: [],
				current: null
			}
		},
		components: {},
		onLoad(param) {
			this.initData(param.id)
		},
		methods: {
			radioChange: function(evt) {
				this.current = evt.target.value;
				onfire.fire('setAddressInfo',this.current);
				uni.navigateBack({
					delta: 1
				});
			},
			initData(param) {
				var self = this;
				uni.getStorage({
					key: 'token',
					success: function(res) {
						uni.request({
							header: {
								token: res.data
							},
							url: helper.loginUrl + "/api/user/queryAddress",
							method: 'POST',
							success: (res) => {
								self.addressList = res.data;
								self.current = Number(param);;
							},
							fail: function(error) {
								console.log(error);
							}
						});
					},
					fail: function() {}
				});

			}
		}
	}
</script>

<style>
	.container {
		background-color: #F2f2f2;
	}

	.address-list {
		width: 100%;
		background-color: #fff;
		margin-top: 20upx;
		padding-bottom: 100upx;
	}

	.address-list .a-address {
		width: 720upx;
		margin-left: 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30upx 0;
		border-bottom: 1upx solid #eee;
	}

	.a-address .left-text {
		width: 610upx;
		box-sizing: border-box;
	}

	.a-address .left-text .name-tel {
		margin-bottom: 20upx;
	}

	.a-address .left-text .address-box {
		font-size: 24upx;
		color: #888888;
		line-height: 36upx;
	}
</style>
