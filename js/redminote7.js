
$(function(){
	var index = 1;
	function imgPlay(){
		$("#cfe>img").eq(index).siblings("img").fadeOut(1000);
		$("#cfe>img").eq(index).fadeIn(1000);
		index++;
		if(index>$("#cfe>img").length-1){
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

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>205){
			$("#specs>ul,#specs>.active-note").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>520){
			$("#container>.photo>h1,#container>.photo>h2").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>760){
			$("#visible>h2").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>760){
			$("#visible>p").addClass("animation-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>1540){
			$("#proload>p").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2310){
			$("#con>h1,#con>h2").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>2310){
			$("#con>p,#con>span").addClass("animation-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>3800){
			$("#section>.txt>h1,#section>.txt>h2,#section>.txt>h3").addClass("animation-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4050){
			$("#cpu>h1").addClass("animation");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4050){
			$("#cpu>span,#cpu>.antu,#cpu>.points,#cpu>.kirin,#cpu>.lower,#cpu>p").addClass("animation-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4050){
			$("#ele>h1,#ele>h2").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4050){
			$("#ele>span").addClass("animation-1");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>4050){
			$("#ele>.data").addClass("animation-2");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>5636){
			$("#dow>h1,#dow>h2,#dow>h3").addClass("animation");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>5836){
			$("#screen>h1,#screen>h2,#screen>span").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6460){
			$("#color>h1,#color>h2").addClass("animation");
		}else{
			
		}
	})
})
$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>6460){
			$("#color>span").addClass("animation-1");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>7000){
			$("#joint>h1").addClass("animation");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>8100){
			$("#fall>h1").addClass("animation");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>8100){
			$("#fall>p").addClass("animation-1");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>9000){
			$("#usb>h1").addClass("animation");
		}else{
			
		}
	})
})

$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>9000){
			$("#usb>p").addClass("animation-1");
		}else{
			
		}
	})
})


$(function(){
	$(window).bind("scroll",function(){
		var dis = $(this).scrollTop();
		console.log(dis);
		if(dis>10000){
			$("#Independent>h1").addClass("animation");
		}else{
			
		}
	})
})


$(function(){
	$("#proload>span").click(function(){
		$("#proload>.mult>.proloadbg>img").addClass("trans-1")
		$("#proload>.mult>.proloadbg>img").removeClass("trans")
	})
})
$(function(){
	$("#proload>em").click(function(){
		$("#proload>.mult>.proloadbg>img").addClass("trans")
		$("#proload>.mult>.proloadbg>img").removeClass("trans-1")
	})
})
$("#usb>ul>.list-1").click(function(){
	$(".specs-wrap-hidden>.ul-1").css("display","block");
})


$(function(){
	$("#tab div ul li").bind("click",function(){
        var ind = $(this).index();
        $(".textContent>div>ul").css("display","none");
        $(".textContent>div>ul").eq(ind).css("display","block");
    });
});