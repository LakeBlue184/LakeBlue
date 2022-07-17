<template>
	<view class="content">
		<view class="top-bar">
			
			<view class="top-bar-left">
				<image src="../../static/images/img/head1.jpeg"></image>
			</view>
			
			<view class="top-bar-center">
				<image src="../../static/images/index/chat.png" class="Logo"></image>
			</view>
			
			<view class="top-bar-right">
				
				<view class="search">
					<image src="../../static/images/index/search.png"></image>
				</view>
				
				<view class="Add">
					<image src="../../static/images/index/AddGroup.png"></image>
				</view>
					
			</view>
			
		</view>	
			
		<view class="apply"></view>	
		
		<view class="chats">
			<view class="chats-list">
						
				<view class="chats-list-left">
					<text class="tips">1</text>
					<image src="../../static/images/img/head3.jpeg"></image>
				</view>
						
				<view class="chats-list-right">
					<view class="top">
						<view class="name">飞翔的企鹅</view>
						<view class="time">13:45</view>
					</view>
				</view>
							
				<view class="content">开会记得带文件</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'LeXun'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.top-bar{
		
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: $uni-bg-color;
		border-bottom: 1px solid $uni-border-color;
		box-sizing: border-box;
		padding-left: $uni-spacing-col-base;
		padding-right: $uni-spacing-col-base;
		
		.top-bar-left{
			
			float: left;
				
			image{
					
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
				margin-top: 10rpx;
					
			}
		}
		
		.top-bar-center{
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			margin: auto;
			.Logo{
				
				width: 44rpx;
				height: 44rpx;
				padding-top: 19rpx;
				
			}
			
		}
		
		.top-bar-right{
			
			float: right;
						
			.search{
				
				width: 85rpx;
				height: 88rpx;
				display: inline-block;
				
			}
			.Add{
				
				width: 60rpx;
				height: 88rpx;
				display: inline-block;
				
			}
			
			image{
				
				width: 52rpx;
				height: 52rpx;
				padding: 18rpx 0 0 18rpx;
				
			}
			
		}
	}
	
</style>
