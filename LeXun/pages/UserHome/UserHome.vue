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
		
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		
		.bg-img{
			
			position:absolute;
			left:-10rpx;
			top:-10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
			
		}
		
	}

</style>
