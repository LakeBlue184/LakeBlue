<template>
	<view class="content">
		
		<view class="top-bar">
			
			<view class="top-bar-left">
				
				<image src="../../static/images/img/head1.jpeg" class="MyHead" @tap="TrunUserWeb"></image>
				
			</view>
			
			<view class="top-bar-center">
				<image src="../../static/images/index/chat.png" class="Logo"></image>
			</view>
			
			<view class="top-bar-right">
				
				<view class="search" @tap="TrunSearch">
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
						<text class="tips" v-if="item.tip > 0">{{item.tip}}</text>
						<image :src="item.imgurl"></image>
					</view>
							
					<view class="chats-list-right">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						
						<view id="content" class="u-line-1">{{item.content}}</view>
						
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
			},
			
			TrunSearch:function(){
				
				uni.navigateTo({
					
					url:'../Search/Search',
					
				})
				
			},
			
			TrunUserWeb:function(){
				
				uni.navigateTo({
					
					url:'../UserHome/UserHome',
					
				})
				
			}
			
		}
	}
</script>

<style lang="scss">
	
	@import "../../commons/css/MyCSS.scss";
	
	.top-bar{

		background: rgba(138,198,209,0.96);
		
		.top-bar-right{
			
			image{
				
				width: 52rpx;
				height: 52rpx;
				padding: 18rpx 0 0 18rpx;
				
			}
			
		}
		
	}
	
	.top-bar-right{
		
		.search{
			
			width: 85rpx;
			height: 88rpx;
			display: inline-block;
			
		}
		
		border-bottom: 1px solid $uni-border-color;
		
	}
	
	.main{
		
		padding-top: 104rpx;
		
	}
	
	.chats-list{
		
		font-size: $uni-font-size-base;
		color: $uni-text-color-grey;
		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;
		
		&:active{
			
			background-color: $uni-bg-color-hover;
			
		}
		
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
				top: -8rpx;
				left: 68rpx;
				min-width: 20rpx;
				height: 36rpx;
				line-height: 36rpx;
				text-align: center;
				padding: 0 8rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				background: $uni-color-warning;
				border-radius: 18rpx;
				z-index: 1;
				
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
	}
</style>
