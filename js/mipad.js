$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis)
		if(dis>100){
			$("#header-nav-1").slideDown(1000)
		}else{
			
			$("#header-nav-1").slideUp(1000)
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>200){
			$("#configuration>.sec").addClass("trans");
		}else{
			
		}
	})
})


$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>400){
			$("#cpu>.snapdragon").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>400){
			$("#cpu>.snapdragon-1").addClass("trans-1");
		}else{
			
		}
	})
})
//$(function(){
//	$(window).bind("scroll",function(){
//		var dis = $(this).scrollTop();
//		console.log(dis);
//		if(dis>400){
//			$("#cpu>.snapdragon-2").addClass("trans-2");
//		}else{
//			
//		}
//	})
//})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>400){
			$("#cpu>.snapdragon-2>span").addClass("trans-2");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>1389){
			$("#hife>.aside>h1").addClass("trans-1");
		}else{
			
		}
	})
})


$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>1389){
			$("#hife>.aside>span").addClass("trans-2");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>1389){
			$("#hife>.aside>.hife-1").addClass("trans-3");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2120){
			$("#network>h1").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2120){
			$("#network>.wifi").addClass("trans");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2120){
			$("#network>.mobile-LTE").addClass("trans-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2120){
			$("#network>.mobile").addClass("trans-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2300){
			$("#follow>h1").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2300){
			$("#follow>span").addClass("trans-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2920){
			$("#program").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>3214){
			$("#split>.pad").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>3214){
			$("#split>h1").addClass("trans-1");
		}else{
			
		}
	})
})


$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>3600){
			$("#miniTv>h1").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>3600){
			$("#miniTv>span").addClass("trans-1");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4180){
			$("#satelliteTV>h1").addClass("trans");
		}else{
			
		}
	})
})


$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6000){
			$("#photo>h1").addClass("trans");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6000){
			$("#photo>span").addClass("trans-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6600){
			$("#assistant>h1").addClass("trans");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6600){
			$("#assistant>span").addClass("trans-1");
		}else{
			
		}
	})
})
$(function(){
	$("#imgs>.pad4>.pink").click(function(){
		$("#imgs>.pad4>img").css("background","")
		$("#imgs>.pad4>.img-12").css("display","none")
	})
})
