<template>
	<view class="content">
		<view class="top-bar">
			
			<view class="search-div">
				
				<image class="search-img" src="../../static/images/search/search.png"></image>
				
				<input class="search" type="search" placeholder="搜索用户或群" placeholder-style="color:#999; font-weight:400;" @input="search"/>
				
			</view>
			
			<view class="top-bar-right">
				
				<view class="button">取消</view>
					
			</view>
			
		</view>	
		
		<view class="main">
			
			<view class="search-user result">
				
				<view class="title">用户</view>
				<view class="list user">
					
					<image src=""></image>
					
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	
	@import"../../commons/css/MyCSS.scss";
	
	.top-bar{
		    
		.search-div{
			
			position: absolute;
			top:0;
			left:0;
			width: 100%;
			z-index:-1;
			box-sizing: border-box;
			padding: 14rpx 118rpx 14rpx $uni-spacing-col-base;
			
		}
		
		.search{
			
			padding: 0 60rpx 0 12rpx;
			height:60rpx;
			background: rgba(242,244,246,1);
			border-radius: 10rpx;
			
		}
		
		.search-img{
			
			position: absolute;
			right: 128rpx;
			float: right;
			width: 35rpx;
			height: 35rpx;
			top: 26rpx;
			
		}
		
	}

</style>
