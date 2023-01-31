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
			
			<view class="sex">
				
				<image src="../../static/images/UserHome/female.png"></image>
				
			</view>
			
			<view class="UserHead">
				
				<image src="../../static/images/img/head3.jpeg" mode="aspectFill" class="UserHead-img"></image>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				
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
		
		.UserHead{
			
			padding-top: 148rpx;
			
			.sex{
				
				
				
			}
			
			.UserHead-img{
				
				position: relative;				
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(225, 225, 225, 1);
				
			}
			
		}
		
	}

</style>
