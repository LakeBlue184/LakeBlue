<template>
	<view class="content">
		
		<view class="top-bar">
				
			<view class="top-bar-right" @tap="ToSignUp()">
					
				<view class="button">注册</view>
						
			</view>
				
		</view>	
		
		<view class="logo">
			
			<image src="../../static/images/sign/SignInLogo.png"></image>
			
		</view>
		
		<view class="main">
			
			<view class="title">登录</view>
			<view class="slogan">您好！欢迎来到LeXun!</view>
			
			<view class="inputs">
				
				<input class="user" type="text" placeholder="用户名/邮箱" placeholder-style="color:#999; font-weight:400;" @blur="getUser"/>
				<input class="password" type="password" placeholder="密码" placeholder-style="color:#999; font-weight:400;" @blur="getPassword"/>
				
			</view>
			
			<view class="tips">用户名或密码错误！</view>
			
		</view>
		
		<view class="submit" @tap="Login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				user:'',
				password:'',
				
			}
		},
		methods:{
			
			//后台链接测试
			testFun: function(){
				
				uni.request({
					
					url:'http://192.168.0.105:8080/test',
					data:{
						
					},
					method:'GET',
					success:(data) => {
						
						console.log(data);
						
					}
					
				})
				
			},
			
			//跳转到注册页面
			ToSignUp: function(){
				
				uni.navigateTo({
					url: '/pages/SignUp/SignUp',
				});
				
			},
			
			//获取用户名/邮箱
			getUser: function(e){
				
				this.user = e.detail.value
				
			},
			
			//获取密码
			getPasswored: function(e){
				
				this.password = e.detail.value
				
			},
			
			//登陆提交
			Login: function(){
				
				if(this.user && this.password){
					
					
					
				}
				
			}
			
		}
		
	}
</script>

<style lang="scss">
	@import"../../commons/css/MyCSS.scss";
	
	.top-bar{
		
		background: $uni-color-primary;
		border-bottom: 1px solid $uni-border-color;
				
	}
	
	.logo {
		text-align: center;
		image{
			
			padding-top: 256rpx;
			width: 150rpx;
			height: 100rpx;
			margin: 0 auto;
		}
	
	}
	.main{
		
		padding: 54rpx $uni-spacing-row-lg 120rpx;

		.slogan{
			
			font-size: 40rpx;
			line-height: 56rpx;
			color: $uni-text-color-grey;
			
		}
		.inputs{
			
			padding-top: 8rpx;
			input{
				
				padding-top: 48rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color:$uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
			
		}
		.tips{
			
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;
			
		}
		
	}
	.submit{
		
		width: 520rpx;
		height: 96rpx;
		margin: 0 auto;
		background: $uni-color-primary;
		box-shadow: 0 50rpx 32rpx -36rpx rgba(138,198,209,0.4);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: #fff7f7;
		line-height: 96rpx;
		text-align: center;
		
	}
	

</style>
