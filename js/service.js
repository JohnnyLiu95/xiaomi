//轮播图部分
var no=0;
var dis=0;
var banner=document.querySelector("#banner .common");
var div=document.querySelector("#banner .common>div");
var spans=document.querySelectorAll("span");
function imgPlay(){
	no=setInterval(function(){
		div.style.marginLeft=dis+"px";
		var index=Math.ceil(dis/-1226);
		if(index>2){
			index=0;
		}
		changeStyle(index);
		if(dis%1226==0){
			clearInterval(no);
			no=setTimeout(imgPlay,1000);
		}
		console.log(dis);
		dis-=2;
		if(dis<=-3678){
			dis=0;
		}
	},1)
}
imgPlay();
function changeStyle(index){
	for(var i=0;i<spans.length;i++){
		spans[i].className="";
	}
	spans[index].className="active";
}

for(var i=0;i<spans.length;i++){
	spans[i].suoyin=i;
	spans[i].onmouseover=function(){
		clearInterval(no);
		changeStyle(this.suoyin);
		dis=-1226*(this.suoyin);
		div.style.marginLeft=dis+"px";
	}
	spans[i].onmouseout=function(){
		imgPlay();
	}
}

//tab切换
$(function(){
	$("#tab div ul li").bind("click",function(){
        var ind = $(this).index();
        $("#tab div ul li").removeClass("active");
        $(this).addClass("active");
        
        $(".textContent>div>ul").css("display","none");
        $(".textContent>div>ul").eq(ind).css("display","block");
    });
});

//联系客服改变图标那里微信hover的时候改变成二维码
//$(function(){
//	$("#tel>div>.tel1>a:eq(2)").mouseover(function(){
//		$("#tel>div>.tel1>a:eq(2)>img").css({
//			"src":"//i1.mifile.cn/f/i/2018/service/contact_weixin.png",
//			"width":400px,
//			"height":276px
//			});
//	})
//})











