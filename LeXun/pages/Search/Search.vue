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
					
					<image src="../../static/images/img/head1.jpeg"></image>
					
					<view class="names">
						
						<view class="name">玩仔码头</view>
						<view class="email">Playerstation@163.com</view>
						
					</view>
					
					<view class="Right-button add">加好友</view>
					
				</view>
				
				<view class="list user">
					
					<image src="../../static/images/img/head2.jpeg"></image>
					
					<view class="names">
						
						<view class="name">日敲一码</view>
						<view class="email">YiMa@163.com</view>
						
					</view>
					 
					<view class="Right-button send">发消息</view>
					
				</view>
				
			</view>	
							
		</view>
		
	</view>
</template>

<script>
	
	import datas from '../../commons/js/datas.js';
	
	export default {
		data() {
			return {
				
				userArr:[],
				
			}
		},
		
		methods:{
			
			search: function(e){
				
				this.userArr = [];
				let searchValue = e.detail.value;
				this.searchUser(searchValue);
					
			},
			
			searchUser: function(e){
				
				let arr = datas.chats();
				
				for(let i = 0; i<arr.length; i++){
					
					if(arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1 ){
						
						this.userArr.push(arr[i]);
						
					}
					
				}
				
				console.log(this.userArr);
				
			},
			
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
	
	.main{
		
		padding:88rpx $uni-spacing-col-base;
		
		.result{
			
			.title{
				
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color-grey;
				line-height: 60rpx;
				
			}
			.list{
				
				width: 100%;
				height: 80rpx;
				padding: 20rpx 0;
				
				image{
					
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
					
				}
				
			}
			
			.names{
				
				float: left;
				padding-left: $uni-spacing-col-base;				
			}
			
			.email{
				
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				line-height: 28rpx;
				
			}
			
			.name{
				
				font-size: 36rpx;
				font-weight: 400;
				color: $uni-text-color-grey;
				line-height: 50rpx;
				
			}
			
			.Right-button{
				
				float: right;
				width: 120rpx;
				height: 48rpx;
				line-height: 48rpx;
				text-align: center;
				margin-top: 16rpx;
				font-size: $uni-font-size-sm;
				border-radius: 24rpx;
				
			}
			
			.send{
				
				background-color: $uni-color-primary;
				color: #fff7f7;
				
			}
			
			.add{
				
				background-color: rgb(207, 170, 158);
				color: #fff7f7;
				
			}
			
		}
		
	}

</style>
