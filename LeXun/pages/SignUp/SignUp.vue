<template>
	<view class="content">
		<view class="top-bar">
				
			<view class="top-bar-left" @tap="ToSignIn()">
					
				<image src="../../static/images/common/back.png" class="back"></image>
						
			</view>
				
		</view>	
		
		<view class="logo">
			
			<image src="../../static/images/sign/SignInLogo.png"></image>
			
		</view>
		
		<view class="main">
			
			<view class="title">注册</view>
			<view class="slogan">您好！欢迎来到LeXun!</view>
			
			<view class="inputs">
				<view class="DivInputs">
					
					<input class="user" type="text" placeholder="取一个新名字吧!" placeholder-style="color:#999; font-weight:400;" @input="GetUser"/>
					<view class="occupy" v-if="UserOccupy">该用户名已被占用！</view>
					<image class="itsOK" src="../../static/images/sign/right1.png" v-if="isUser"></image>
					
				</view>
				
				<view class="DivInputs">
					
					<input class="email" type="text" placeholder="请输入您的邮箱!" placeholder-style="color:#999; font-weight:400;" @input="GetEmail"/>
					<view class="occupy" v-if="EmailOccupy">邮箱已被占用！</view>
					<view class="null" v-if="Null">无效邮箱！</view>
					<image class="itsOK" src="../../static/images/sign/right1.png" v-if="isEmail"></image>
					
				</view>
				
				<view class="DivInputs">
					
					<input :type="type" placeholder="我已经捂好眼睛啦~输入新密码!" placeholder-style="color:#999; font-weight:400;" @input="GetPassword"/>
					<image :src="lookUrl" class="look" @tap="looks"></image>
				</view>
				
			</view>
						
		</view>
		
		<view :class="[{submit:isok},{submit1:!isok}]">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				//登陆界面用的变量池
				type:'password',
				isUser:true,//用户名是否可用
				isEmail:true,//邮箱是否可用
				Look:false,//是否显示密码
				Null:false,//邮箱是否有效
				UserOccupy:false,//用户名是否被占用
				EmailOccupy:false,//邮箱是否被占用
				lookUrl:'../../static/images/sign/hidden.png',
				user:'',//获取到的注册用户名
				password:'',//获取到的注册密码
				email:'',//获取到的注册邮箱
				isok: false,
				
			}
		},
		methods: {
			
			looks: function(){
				
				//密码显示或隐藏
				if(this.look){
					
					this.type = "password";
					this.look = !this.look;
					this.lookUrl='../../static/images/sign/hidden.png';
					
				}else{
					
					this.type = "text";
					this.look = !this.look;
					this.lookUrl='../../static/images/sign/show.png';
					
				}
				
			},
			//判断邮箱是否有效
			GetEmail: function(e){
				
				//JS邮箱正则表达式验证
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([A-zA-Z]{2,4})$/;
				this.email = e.detail.value;
				
				if(this.email.length > 0){
					
					if(reg.test(this.email)){
						
						this.Null = false;
						
					}else{
						
						this.Null = true;
						
					}
					
				}
				
				this.AllRight();
				
			},
			
			//获取注册用户名
			GetUser: function(e){
				
				this.user = e.detail.value;
				
				this.AllRight();
				
			},
			
			//获取注册密码
			GetPassword: function(e){
				
				this.password = e.detail.value;
				
				this.AllRight();
				
			},
			
			//是否可以注册
			AllRight: function(){
				
				if(this.isUser && this.isEmail && this.password.length > 5){
					
					this.isok = true;
					
				}else{
					
					this.isok = false;
					
				}
				
			},
			
			//返回登陆界面
			ToSignIn: function(){
				
				uni.navigateBack({
					delta: 1
				});
				
			}
			
		}
	}
</script>

<style lang="scss">
	.content{
		
		padding-top: var(--status-bar-height);
		
	}
	
	.top-bar{
		
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: $uni-bg-color;
		//border-bottom: 1px solid $uni-border-color;
		padding-top: var(--status-bar-height);
		z-index: 1000;
				
		.top-bar-left{
			
			width: 88rpx;
			height: 88rpx;
			padding-left: 32rpx;
			float: left;
			
		}
		.cancel{
			
			font-size: $uni-font-size-lg;
			font-weight: 500;
			color: #fff7f7;
			line-height: 88rpx;
		}
		.back{
			
			margin-top: 21rpx;
			width: 30rpx;
			height: 44rpx;
			
		}
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
		.title{
			
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
			
		}
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
		.DivInputs{
				
			position: relative;
				
		}
		.occupy,.null{
			
			position: absolute;
			right: 0;
			top:40rpx;
			font-size: $uni-font-size-base;
			font-weight: 500;
			color: $uni-color-warning;
			line-height: 88rpx;
			
		}
		.itsOK{
			
			position: absolute;
			right: 0;
			top:76rpx;
			width: 42rpx;
			height: 32rpx;
			
		}
		.look{
			
			position: absolute;
			right: 0;
			top:76rpx;
			width: 42rpx;
			height: 32rpx;
			
		}
			
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
	.submit1{
		
		width: 520rpx;
		height: 96rpx;
		margin: 0 auto;
		background:rgba(39,40,50,0.2);
		box-shadow: 0 50rpx 32rpx -36rpx rgba(39,40,50,0.2);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color-inverse;
		line-height: 96rpx;
		text-align: center;
		
	}
	

</style>
