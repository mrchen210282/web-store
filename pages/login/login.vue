<template>    
		<view class="bei-logo">			
			<image src="../../static/logo.png" class="login-logo"></image>
			<view class="login mt40">
				<view class=" clearfix">
				<view class="mui-input-line mui-input-row">
						<view class="icos-iphone"></view>
						<input id='account' type="tel" class="mui-input mui-input-clear"  v-model="account" placeholder="请输入账号">
				</view>
				<view class="mui-input-line mt10 mui-input-row">
						<view class="icos-lock"></view>
						<input id='password' type="password" class="mui-input mui-input-clear"  v-model="password" placeholder="请输入密码">
				</view>
				</view>
				<view class="mt30">
					<button class="login-btn btn"  @tap="bindLogin">登录</button>
					<view class="link-area">
						<view class="forget-pwd-btn fn_left"  @tap="register">一键注册</view>
						<view class="forget-pwd-btn fn_right"  @tap="retrieve">忘记密码</view>
					</view>
				</view>		
			</view>
			<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
				<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
					<image :src="provider.image" @tap="oauth(provider.value)"></image>
				</view>
			</view>	
		</view>	
</template>
<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'
	import helper from '../../common/helper.js';
    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0
            }
        },
        computed: mapState(['forcedLogin']),
        methods: {
            ...mapMutations(['login']),
            initProvider() {
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
			
			bindLogin() {
				if (this.account.length < 5) {
				    uni.showToast({
				        icon: 'none',
				        title: '账号最短为 5 个字符'
				    });
				    return;
				}
				if (this.password.length < 6) {
				    uni.showToast({
				        icon: 'none',
				        title: '密码最短为 6 个字符'
				    });
				    return;
				}
// 				const data = {
// 				    account: this.account,
// 				    password: this.password
// 				};
// 				const validUser = service.getUsers().some(function (user) {
// 				    return data.account === user.account && data.password === user.password;
// 				});
// 				if (validUser) {
// 				    this.toMain(this.account);
// 				} else {
// 				    uni.showToast({
// 				        icon: 'none',
// 				        title: '用户账号或密码不正确',
// 				    });
// 				}
				
				uni.request({					
				    url: helper.loginUrl+"/api/auth/accredit",
					method:'POST',
				    data: {
				        username: this.account,
						password: this.password
				    },				    
				    success: (res) => {			
				        console.log(res)
						if(res.statusCode == 200){
							uni.setStorage({
								key: 'token',
								data: res.data.token,
								success: function () {								
								}
							});
							uni.reLaunch({
									url: '../index/index',
							});
							return;
						}else {
							uni.showToast({							
								icon: 'none',
								title: '用户账号或密码不正确',
							});
							return;
						}
				        
				    }
				});
				

			  },
            register() {
				uni.navigateTo({
					url: '../register/register',
				});
            },
			 retrieve() {
				uni.navigateTo({
					url: '../retrieve/retrieve',
				});
			},
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
//             toMain(userName) {
//                 this.login(userName);
//                 /**
//                  * 强制登录时使用reLaunch方式跳转过来
//                  * 返回首页也使用reLaunch方式
//                  */
//                 if (this.forcedLogin) {
//                     uni.reLaunch({
//                         url: '../main/main',
//                     });
//                 } else {
//                     uni.navigateBack();
//                 }
// 
//             }
        },
        onLoad() {
            this.initPosition();
            this.initProvider();
        }
    }
</script>

<style>
@import "../../common/style.css";
</style>

