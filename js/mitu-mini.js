$(function(){
	var index = 1;
	function imgPlay(){
		$("#mitu-mini-13>img").eq(index).siblings("img").fadeOut(1000);
		$("#mitu-mini-13>img").eq(index).fadeIn(1000);
		index++;
		if(index>$("#mitu-mini-13>img").length-1){
			index=0;
		}
	}
	var no = setInterval(imgPlay,3000);
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis)
		if(dis>100){
			$("#hide").slideDown(1000)
		}else{
			
			$("#hide").slideUp(1000)
		}
	})
})
