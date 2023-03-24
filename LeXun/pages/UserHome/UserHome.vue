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
			
			<view class="bg-white" :animation="animationData4"></view>
			
			<image src="../../static/images/img/head3.jpeg" class="bg-img" mode="aspectFill"></image>
			
		</view>
		
		<view class="main">
			
			<view class="UserHead">
				
				<view class="sex" :style="{background:SexBg}" :animation="animationData3">
					
					<image src="../../static/images/UserHome/female.png"></image>
					
				</view>
				
				<image src="../../static/images/img/head3.jpeg" mode="aspectFill" class="UserHead-img" :animation="animationData2"></image>
				
			</view>
			
			<view class="User-intro">
				
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称：{{user.nick}}</view>
				<view class="intro">{{user.intro}}</view>
				
			</view>
			
		</view>
		
		<view class="Bottom-bar">
			
			<view class="Bottom-btn" @tap="AddFriendAnimat">加为好友</view>
			
		</view>
		
		<view class="Add-Misg" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation="animationData">
			
			<view class="name">{{user.name}}</view>
			
			<textarea :value="MyName+'请求加为好友'" maxlength="120" class="Add-Main"></textarea>
			
		</view>
		
		<view class="Add-btn" :animation="animationData1">
			
			<view class="cancel" @tap="AddFriendAnimat">取消</view>
			<view class="send">发送</view>
			
		</view>
		
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				
				addHeight:'',
				
				headMove:'',
				
				headPosition:'',
				
				headBottom:'',
								
				headWidth:'',
				
				headHeight:'',
				
				animationData:{},
				
				animationData1:{},
				
				animationData2:{},
				
				animationData3:{},
				
				animationData4:{},
				
				isAdd:false,
								
				SexBg:'rgba(215,245,241,1)',
				
				MyName:'张Star',
				
				user:{
					
					name:'开发-李小K',
					nick:'一截春风炒香菇',
					intro:'5年前端开发工程师，专注前后端交互设计~混迹于CSDN的90后单身小女子兼自媒体运营一枚呀~自媒体商务合作请联系QQ：123456，XV：ABCD1234',
				},
				
			};
		},
		
		//获取界面尺寸
		onReady: function(){
		
			this.getElementStyle();
			this.getheadMove();
			this.getheadSize();
			this.getheadPodition();
			
		},
		
		methods:{
			
			//返回登陆界面
			BackWeb: function(){
				
				uni.navigateBack({
					delta: 1
				});
				
			},
			
			//获取界面高度，以便输入框自适应高度
			getElementStyle: function(){
				
				const query = uni.createSelectorQuery().in(this);
				query.select('.bg').boundingClientRect(data => {
				  JSON.stringify(data);
				  data.top;
				  this.addHeight = data.height-186;
				}).exec();
								
			},
			
			//
			getheadMove: function(){
				
				const query = uni.createSelectorQuery().in(this);
				query.select('.Add-Misg').boundingClientRect(data => {
				  JSON.stringify(data);
				  data.height;
				  this.headMove = data.height;
				}).exec();
								
			},
			
			getheadSize: function(){
				
				const query = uni.createSelectorQuery().in(this);
				query.select('.UserHead-img').boundingClientRect(data => {
				  JSON.stringify(data);
				  data.width;
				  data.height;
				  this.headWidth = data.width;
				  this.headHeight = data.height;
				}).exec();
								
			},
			
			getheadPodition: function(){
				
				const query = uni.createSelectorQuery().in(this);
				query.select('.UserHead').boundingClientRect(data => {
				  JSON.stringify(data);
				  data.position;
				  data.bottom;
				  this.headPosition = data.position;
				  this.headBottom = data.bottom;
				}).exec();
								
			},
			
			AddFriendAnimat:function(){//申请好友界面动画设置
				
				this.isAdd = !this.isAdd;
				
				var animation = uni.createAnimation({//好友申请框动画持续时间
					
					duration: 750,
					timingFunction: 'ease',
					
				})
				
				var animation1 = uni.createAnimation({//界面底部按钮动画持续时间
					
					duration: 750,
					timingFunction: 'ease',
					
				})
				
				var animation2 = uni.createAnimation({//用户头像缩放动画持续时间
					
					duration: 750,
					timingFunction: 'ease',
					
				})
				
				var animation3 = uni.createAnimation({//性别图标动画持续时间
					
					duration: 750,
					timingFunction: 'ease',
					
				})
				
				var animation4 = uni.createAnimation({//性别图标动画持续时间
					
					duration: 750,
					timingFunction: 'ease',
					
				})
				
				
				if(this.isAdd){
					
					animation.bottom(0).step()//输入框弹出
					animation1.bottom(0).step()//底部按钮弹出
					animation2.width(120).height(120).top(this.headMove-(this.headMove-50)).step()//头像缩小
					animation3.opacity(0).step()//性别图标渐隐
					animation4.backgroundColor('rgba(138,198,209,0.6)').step()
					
				}else{
					
					animation.bottom(-this.addHeight).step()//输入框回缩
					animation1.bottom(-100).step()//底部按钮回缩
					animation2.width(this.headWidth-6).height(this.headHeight-6).bottom(this.headBottom - this.headBottom).top(this.headPosition).step()//头像放大
					animation3.opacity(1).step()//性别图标渐显
					animation4.backgroundColor('rgba(138,198,209,0)').step()
					
				}

				this.animationData = animation.export()
				this.animationData1 = animation1.export()
				this.animationData2 = animation2.export()
				this.animationData3 = animation3.export()
				this.animationData4 = animation4.export()
				
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
			left:0rpx;
			bottom: 105rpx;
			margin: 0 auto;
			width: 412rpx;
			height: 412rpx;
			
			.sex{
				
				position: absolute;
				bottom: 20rpx;
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
				top:0;
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(225, 225, 225, 1);
				box-shadow: 0rpx 36rpx 40rpx 0rpx rgba(39,40,50,0.1);
				
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
		width: 100%;
		box-sizing: border-box;
		padding: 0 56rpx;
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
			box-sizing: border-box;
			width: 100%;
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
		bottom: -104rpx;
		width: 100%;
		height: 104rpx;
		box-sizing: border-box;
		padding:12rpx $uni-spacing-col-base;
		display: flex;
		z-index: 100;
		
		.cancel{
			
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
