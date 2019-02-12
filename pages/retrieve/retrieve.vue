<template>    
		<view class="white"> 	
		
			<image src="../../static/wangjimima.png" class="login-logo"></image>
				<view class="clearfix">
					<view class="mui-input-line mt60">
							<view class="icos-iphone"></view>
							<input type="tel" maxlength="11" id='mobile'  class="mui-input" v-model="phone" placeholder="请输入手机号码">
						</view>
						
					<view class="mui-input-line mt20" id="example">
							<view class="icos-mation"></view>
							<input type="tel" id="Verification" maxlength="4"  v-model="code"  class="mui-input" placeholder="验证码" style="width:50% !important;">
							<view class="regbtn" @click="sending" v-if="sendMsgDisabled">{{time+'秒后获取'}}</view>
							<view class="regbtn" @click="send" v-if="!sendMsgDisabled">获取验证码</view>
					</view>									
					<view class="mui-input-line mt20">
							<view class="icos-lock"></view>
							<input id='password' type="password"  class="mui-input"  v-model="password" placeholder="请输入新密码">
						</view>
					<view class="mui-input-line mt20 mb40">
							<view class="icos-lock"></view>
							<input id='password_confirm' type="password" class="mui-input"  v-model="passwordtwo" placeholder="请确认新密码">						
					</view>
				
					<view class="btn-next btn " @tap="primaryHandler" >完成</view>
				
				
			</view>
			</view>
</template>

<script>
//	import uniCountdown from "@/components/uni-countdown.vue"
	export default {
//		components: {uniCountdown},
		data() {
		    return {
		       time: 60, // 发送验证码倒计时
				sendMsgDisabled: false,
		        phone: '',
				code:'',
		        password: '',
		        passwordtwo: '',
		    }
		},
		onLoad:function(){					
			
		},
		methods: {	
			send() {
				let me = this;
				me.sendMsgDisabled = true;
				let interval = window.setInterval(function() {
				 if ((me.time--) <= 0) {
				  me.time = 60;
				  me.sendMsgDisabled = false;
				  window.clearInterval(interval);
				 }
				}, 1000);
			   },
			   sending() {
				      // if (this.account.length < 5) {
				       uni.showToast({
				           icon: 'none',
				           title: '正在获取验证码'
				       });
				       // return;
				   // }
			   },
			primaryHandler: function() {
				uni.request({
					url: 'http://192.168.31.158:10010/api/user/register', //仅为示例，并非真实接口地址。
					method:'POST',
					data: {
							'phone': this.phone,
							'password': this.password,
							'code': this.code
					},        
					header: {
						'content-type' : 'application/x-www-form-urlencoded'
					},
					success: (res) => {            
						console.log(res)
					}
				});
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
@import "../../common/style.css";
</style>

