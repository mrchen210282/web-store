<template>
	<view class="index">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="content">
			<view>
				<web-view :src="src"></web-view>
			</view>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				src: '',
			};
		},
		onLoad: function() {
			console.log(helper.websiteUrl);
			var self = this;
			self.src = helper.websiteUrl+"/#/classification"
// 			uni.getStorage({
// 				key: 'token',
// 				success: function(res) {
// 					self.src = helper.websiteUrl+"/#/classification?token=" + res.data
// 					console.log(self.src);
// 				}
// 			});
		}
	}
</script>

<style>
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
</style>
