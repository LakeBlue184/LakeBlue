export default{
	
	//聊天界面时间转换
	dateTime(d){
		
		let OldTime = new Date(d);
		let NowTime = new Date();
		
		//获取OldTime的具体时间
		let time = OldTime.getTime();
		let hour = OldTime.getHours();
		let minute = OldTime.getMinutes();
		let year = OldTime.getFullYear();
		let Month = OldTime.getMonth();
		let D = OldTime.getDate();
		
		//获取NowTime的具体时间aw
		let NT = NowTime.getTime();
		let NHour = NowTime.getHours();
		let NMinute = NowTime.getMinutes();
		let NYear = NowTime.getFullYear();
		let NMonth = NowTime.getMonth();
		let ND = NowTime.getDate();
		
		//转换当前时间
		if(D === ND && Month === NMonth && year === NYear){
			
			if(hour < 10){
				
				hour = '0' + hour;
				
			}
			if(minute < 10){
				
				minute = '0' + minute;
				
			}
			
			return hour +  ':' + minute; 
			
		}
		
		//转换昨天时间
		if(D+1 === ND && Month === NMonth && year === NYear){
			
			if(hour < 10){
				
				hour = '0' + hour;
				
			}
			if(minute < 10){
				
				minute = '0' + minute;
				
			}
			
			return '昨天' + hour +  ':' + minute; 
			
		}else{
			
			//转换大于两天的时间
			return year + '/' + Month + '/' + D;
			
		}
		
	}
	
}