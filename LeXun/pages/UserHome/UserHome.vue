<template>
	<view>
		
		<view class="top-bar">
			
			<view class="top-bar-left" @tap="BackWeb">
					
				<image src="../../static/images/common/back.png" class="back"></image>
						
			</view>
			
			<view class="top-bar-right">
				
				<view class="more-img" @tap="BackWeb">
					
					<image src="../../static/images/UserHome/more.png"></image>
					
				</view>
					
			</view>
			
		</view>	
		
		<view class="bg">
			
			<view class="bg-white"></view>
			
			<image src="../../static/images/img/head3.jpeg" class="bg-img" mode="aspectFill"></image>
			
		</view>
		
		<view class="main">
			
			<view class="UserHead">
				
				<view class="sex" :style="{background:SexBg}">
					
					<image src="../../static/images/UserHome/female.png"></image>
					
				</view>
				
				<image src="../../static/images/img/head3.jpeg" mode="aspectFill" class="UserHead-img"></image>
				
			</view>
			
			<view class="User-intro">
				
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称：{{user.nick}}</view>
				<view class="intro">{{user.intro}}</view>
				
			</view>
			
		</view>
		
		<view class="Bottom-bar">
			
			<view class="Bottom-btn">加为好友</view>
			
		</view>
		
		<view class="Add-Misg">
			
			<view class="name">{{user.name}}</view>
			
			<textarea :value="MyName+'请求加为好友'" maxlength="120" class="Add-Main"></textarea>
			
		</view>
		
		<view class="Add-btn">
			
			<view class="close">取消</view>
			<view class="send">发送</view>
			
		</view>
		
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				
				SexBg:'rgba(215,245,241,1)',
				
				MyName:'一截春风炒香菇',
				
				user:{
					
					name:'开发-李小K',
					nick:'一截春风炒香菇',
					intro:'5年前端开发工程师，专注前后端交互设计~混迹于CSDN的90后单身小女子兼自媒体运营一枚呀~自媒体商务合作请联系QQ：123456，XV：ABCD1234',
				},
				
			};
		},
		methods:{
			
			//返回登陆界面
			BackWeb: function(){
				
				uni.navigateBack({
					delta: 1
				});
				
			}
			
		},
	}
</script>

<style lang="scss">

	@import"../../commons/css/MyCSS.scss";
	
	.bg{
		
		z-index: -2;
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		
		.bg-white{
			
			width: 100%;
			height: 100%;
			//background-color: #eee;
			
		}
		
		.bg-img{
			
			z-index: -1;
			opacity:0.5;
			position:absolute;
			left:-10rpx;
			top:-10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
			
		}
		
	}
	
	.main{
		
		text-align: center;
		
		padding-top: 148rpx;
		
		.UserHead{
			
			position: relative;
			margin: 0 auto;
			width: 412rpx;
			height: 412rpx;
			
			.sex{
				
				position: absolute;
				bottom: 22rpx;
				right: 22rpx;
				z-index: 11;
				width: 64rpx;
				height: 64rpx;
				border-radius: $uni-border-radius-circle;
				
				image{
					
					padding:16rpx;
					width: 32rpx;
					height: 32rpx;
					
				}
			}
			
			.UserHead-img{
				
				z-index: 10;
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(225, 225, 225, 1);
				
			}
			
		}
		
		.User-intro{
			
			padding: 20rpx 100rpx;
			font-family: "PingFangSC-Light";
			color: #6E7783;
			
			.name{
				
				font-size: 52rpx;
				line-height: 74rpx;
				
			}
			
			.nick{
				
				font-size:$uni-font-size-base;
				line-height: 40rpx;
				
			}
			
			.intro{
				
				padding-top: 20rpx;
				width: 552rpx;
				height: 170rpx;
				font-size:$uni-font-size-base;
				font-weight: 300;
				line-height: 48rpx;
				
			}
			
		}
		
	}
	
	.Bottom-bar{
		
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		box-sizing: border-box;
		padding:12rpx $uni-spacing-col-base;
		
		.Bottom-btn{
			
			text-align: center;
			line-height: 80rpx;
			width: 684rpx;
			height: 80rpx;
			font-size:$uni-font-size-lg;
			color: $uni-text-color-inverse;
			background-color: $uni-color-primary;
			border-radius:$uni-border-radius-sm;
			
		}
		
	}
	
	.Add-Misg{
		
		position: fixed;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 0 56rpx;
		height: 1252rpx;
		background: #FFFF;
		border-radius: 40px 40px 0px 0px;
		
		.name{
			
			padding:168rpx 0 40rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
			
		}
		
		.Add-Main{
			
			padding:18rpx 22rpx;
			//width: 100%;
			height: 420rpx;
			background: #F3F4F6;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
			
			
		}
	}
	
	.Add-btn{
		
		position: fixed;
		bottom: 0rpx;
		width: 100%;
		height: 104rpx;
		box-sizing: border-box;
		padding:12rpx $uni-spacing-col-base;
		display: flex;
		z-index: 100;
		
		.close{
			
			text-align: center;
			line-height: 80rpx;
			width: 172+rpx;
			height: 80rpx;
			font-size:$uni-font-size-lg;
			color: $uni-text-color-inverse;
			background-color: $uni-color-primary;
			border-radius:$uni-border-radius-sm;

		}
		
		.send{
			
			flex: auto;
			text-align: center;
			line-height: 80rpx;
			height: 80rpx;
			margin-left:$uni-spacing-col-base;
			font-size:$uni-font-size-lg;
			color: $uni-text-color-inverse;
			background-color: $uni-color-primary;
			border-radius:$uni-border-radius-sm;
			
		}
		
	}

</style>
