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