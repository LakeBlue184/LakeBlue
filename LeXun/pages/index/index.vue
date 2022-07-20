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
			
		<view class="main">
			
			<view class="chats">
				<view class="chats-list">
							
					<view class="chats-list-left">
						<text class="tips">1</text>
						<image src="../../static/images/index/FriendsApply.png"></image>
					</view>
							
					<view class="chats-list-right">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">13:27</view>
						</view>
						
						<view class="content">BUG毁灭者请求添加您的好友</view>
						
					</view>
								
				</view>
			</view>
			
			<view class="chats">
				<view class="chats-list" v-for="(item, index) in chats" :key="index">
							
					<view class="chats-list-left">
						<text class="tips">{{item.tip}}</text>
						<image :src="item.imgurl"></image>
					</view>
							
					<view class="chats-list-right">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						
						<view class="content">{{item.content}}</view>
						
					</view>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import datas from '@/commons/js/datas.js';
	import MyFunction from '@/commons/js/MyFunction.js';
	export default {
		data() {
			return {
				chats:[],
			}
		},
		onLoad() {
			
			this.getChats();

		},
		methods: {
			
			changeTime:function(date){
				
				return MyFunction.dateTime(date);
				
			},
			
			getChats:function(){
				
				this.chats = datas.chats();
				
				for(let i=0; i<this.chats.length;i++){
					
					this.chats[i].imgurl = '../../static/images/img/' + this.chats[i].imgurl;
					
				}							
			}
		}
	}
</script>

<style lang="scss">
	.content {
		//display: flex;
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
		//padding-left: $uni-spacing-col-base;
		//padding-right: $uni-spacing-col-base;
		z-index: 1000;
		
		.top-bar-left{
			float: left;
			padding-left: $uni-spacing-col-base;
				
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
			padding-right: $uni-spacing-col-base;
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
	
	.main{
		
		padding: 88rpx $uni-spacing-col-base 0;
		
	}
	
	.chats-list{
		
		height: 96rpx;
		padding: 16rpx 0;
		
		.chats-list-left{
			
			position: relative;
			float: left;
			
			image{
				
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-bg-color;
			}
			.tips{
		
				position: absolute;
				top: -6rpx;
				left: 68rpx;
				min-width: 36rpx;
				height: 36rpx;
				line-height: 36rpx;
				text-align: center;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				z-index: 1001;
				
			}
		}	
		.chats-list-right{
			
			padding-left: 128rpx;
			
			.top{
				
				height: 50rpx;
				
				.name{
					
					float: left;
					font-size: 34rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
					
				}
				.time{
					
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
					
				}
				
			}
			
		}
		.content{
			
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}
</style>
