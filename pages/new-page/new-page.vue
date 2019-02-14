<template>
	<view class="index">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="content">
			<view>
				<web-view :src="src" @message="handleMessage"></web-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ""
			};
		},
		onLoad: function(e) {
			console.log(decodeURI(e.title))
			console.log(JSON.stringify(e))
			var title = e.title ? decodeURI(e.title) : 'shop'
			uni.setNavigationBarTitle({
				title: title
			});
			if (e.src) {
				this.src = e.src
			}
		},
		methods: {
			handleMessage(evt) {
				console.log('接收到的消息：' + JSON.stringify(evt.detail.data[0].action));
				if (evt.detail.data[0].action == 'logout') {
					uni.removeStorage({
						key: 'token',
						success: function(res) {
							console.log('success');
						}
					});
				}
			}
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
		background: #8A6DE9;
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
