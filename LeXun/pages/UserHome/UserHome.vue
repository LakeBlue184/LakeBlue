<template>
	<view>
		
		<view class="top-bar">
			
			<view class="top-bar-left" @tap="BackWeb">
					
				<image src="../../static/images/common/back.png" class="back"></image>
						
			</view>
			
			<view class="top-bar-right">
				
				<view class="button" @tap="BackWeb">取
				
				消</view>
					
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

</style>
