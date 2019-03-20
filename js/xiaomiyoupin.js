//头部
$(function(){
	$("#topBar li:eq(3)").hover(function(){
		$("#topBar li:eq(3) ul").css("box-shadow","0 5px 10px  #ccc");
		$("#topBar li:eq(3) ul").slideDown(300);
	},function(){
		$("#topBar li:eq(3) ul").slideUp(10);		
	})
});

//搜索栏
$(function(){
	$("#searchBar>div>div>input").focus(function(){
		$("#searchBar>div>div").css("border-bottom","1px solid #000");
	})
	$("#searchBar>div>div>input").blur(function(){
		$("#searchBar>div>div").css("border-bottom","1px solid #e7e7e7");
	})
});

//banner轮播图部分//导航li  hover的时候出现相应的块
$(function(){
//	var span=0;
	$("#banner div>.list>ul>li").hover(function(){
//		console.log($(this).index());
		$("#banner div>.list>ul>li>.li-list").eq($(this).index()).css({
			"display":"block",
			"z-index":100
		});
	},function(){
		$("#banner div>.list>ul>li>.li-list").eq($(this).index()).css("display","none");
	})
});

//轮播图
$(function(){
//	var no=0;
//	var dis=0;
//	var banner=document.querySelector(".banner-box");
//	var div=document.querySelectorAll(".banner-box>div")[0];
//	var spans=document.querySelectorAll(".banner-box>p>span");
//	function imgPlay(){
//		no=setInterval(function(){
//			div.style.marginLeft=dis+"px";
//			var index=Math.ceil(dis/-859);
//			if(index>4){
//				index=0;
//			}
//			changeStyle(index);
//			if(dis%859==0){
//				clearInterval(no);
//				no=setTimeout(imgPlay,1000);
//			}
////			console.log(dis);
//			dis-=1;
//			if(dis<=-4295){
//				dis=0;
//			}
//		},1)
//	}
//	imgPlay();
//	function changeStyle(index){
//		for(var i=0;i<spans.length;i++){
//			spans[i].className="";
//		}
//		spans[index].className="active";
//	}
//	
//	for(var i=0;i<spans.length;i++){
//		spans[i].suoyin=i;
//		spans[i].onmouseover=function(){
//			clearInterval(no);
//			changeStyle(this.suoyin);
//			dis=(-859)*(this.suoyin);
//			div.style.marginLeft=dis+"px";
//		}
//		spans[i].onmouseout=function(){
//			imgPlay();
//		}
//	}
	var moveWidth = $(".banner-box>.bannerContainer>a>img").width();/*每次移动的距离*/
	var no = null;
	var index = 0;
	no = setInterval(bannerPlay,2000);
	
	function bannerPlay(){
		if(index==4){
			changeStyle(0);
		}
		if(index==5){
			index = 0;
			$(".banner-box>.bannerContainer").css("margin-left","0px");
		}
		$(".banner-box>.bannerContainer").animate({
		marginLeft:"-="+moveWidth+"px",
	},1000);
		index++;
		changeStyle(index);
		
	}
	function changeStyle(index){
		$(".banner-box>p>span").eq(index).siblings().removeClass("active");
		$(".banner-box>p>span").eq(index).addClass("active");
	}
	
	$(".banner-box>p>span").bind("click",function(){
		clearInterval(no)
		index = $(this).index();
		changeStyle(index);
		$(".banner-box>.bannerContainer").animate({
		marginLeft:-index*moveWidth+"px",
		},1000)
		no = setInterval(bannerPlay,2000);
	})
	$("#banner .leftBtn,#banner .rightBtn").hover(function(){
		clearInterval(no)
	},function(){
		no = setInterval(bannerPlay,2000);
	})
	$("#banner .leftBtn").bind("click",function(){	
		index--;
		if(index==-1){
			index = 4;
		}
		changeStyle(index);
		$(".banner-box>.bannerContainer").animate({
		marginLeft:-index*moveWidth+"px",
		},1000)	
	});
	$("#banner .rightBtn").bind("click",function(){
		index++;
		if(index==5){
			index = 0;
		}
		changeStyle(index);
		$(".banner-box>.bannerContainer").animate({
		marginLeft:-index*moveWidth+"px",
		},1000)
	})
});


//小轮播
$(".main2 .leftBtn").bind("click",function(){
	var moveWidth = $(this).siblings(".container").children().width()+5;
	$(this).siblings(".rightBtn").css({
		cursor:"pointer"
	})
	if($(this).siblings(".container").css("margin-left")=="0px"){
		$(this).css({
			cursor:"default"
		})
		return;
	}
	$(this).siblings(".container").animate({
		marginLeft:"+="+moveWidth+"px"
	})
})
$(".main2 .rightBtn").bind("click",function(){
	var moveWidth = $(this).siblings(".container").children().width()+5;
	var maxMove = ($(this).siblings(".container").children("div").length-4) * moveWidth;
	$(this).siblings(".leftBtn").css({
		cursor:"pointer"
	})
	if($(this).siblings(".container").css("margin-left")==-maxMove+"px"){
		$(this).css({
			cursor:"default"
		})
		return;
	}
	$(this).siblings(".container").animate({
		marginLeft:"-="+moveWidth+"px"
	})
})

//右边侧边栏固定部分


//返回顶部
$(function(){
	$("#aside>.div5").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	})
})

//每日新品
$.get("../json/xiaomiyoupin.json",function(data){
	$("#dailyNew>div").html("");
	var dailyNewArr=data.dailyNew;
	for(var item of dailyNewArr){
		$("#dailyNew>div").append(`<dl>
			<dt><a href=""><img src="`+item["imgSrc"]+`" /></a></dt>
					<dd><a href="">`+item["title"]+`</a></dd></dl>	
		`);
	}
})

//有品推荐
$.get("../json/xiaomiyoupin.json",function(data){
	$("#recommend>div>div").html("");
	var recommendArr=data.recommend;
	for(var item of recommendArr){
		$("#recommend>div>div").append(`<dl>
						<dt><a href="">`+item["title"]+`</a></dt>
						<dd><a href="">`+item["des"]+`</a></dd>
						<dd><a href=""><img src="`+item["imgSrc"]+`" /></a></dd>
					</dl>	
		`);
	}
})

//小米众筹
//$.get("../json/xiaomiyoupin.json",function(data){
//	$("#zhongchou>div>div.sec2").html("");
//	var zhongchouArr=data.zhongchou;
//	for(var i=0;i<10;i++){
//		if(zhongchouArr[i.toString()]){
//			for(var j=0;j<zhongchouArr[i.toString()].length;j++){
//				var item=zhongchouArr[i.toString()][j];
//				$("#zhongchou>div>div.sec2").append(`<div class="div1">
//						<img src="`+item["imgSrc"]+`" />
//						<div class="padTop">
//							<p class="p1">`+item["title"]+`</p>
//							<p class="p2">`+item["des"]+`</p>
//							<p class="p3">`+item["price"]+`</p>
//						</div>
//					</div>
//					<div class="div2">
//						<img src="../image/service&youpin&wireless/jianbian2.png" />
//						<p><span>`+item["numSupport"]+`</span>人支持</p><span>`+item["hot"]+`</span><em>`+item["percentage"]+`</em>
//					</div>
//		`);
//			}
//		}
//	}
//})

//限时购
$.get("../json/xiaomiyoupin.json",function(data){
	$("#buy>div>div.main2").html("");
	var buyArr=data.buy;
	for(var item of buyArr){
		$("#buy>div>div.main2").append(`
			<div class="main2_1">
						<div>
							<img src="`+item["imgSrc"]+`" /><span>`+item["discount"]+`</span>
						</div>
						<p class="p1">`+item["title"]+`</p>
						<p class="p2">`+item["price"]+`<span>`+item["original-price"]+`</span></p>						
					</div>
		`);
	}
})

//每日新品day
$.get("../json/xiaomiyoupin.json",function(data){
	$("#day>div>div.main2>div.container").html("");
	var dayArr=data.day;
	for(var item of dayArr){
		var div=$("<div></div>");
		$(div).append(`
			<div>
				<img src="`+item["imgSrc"]+`" />
			</div>
			<p class="p1">`+item["title"]+`</p>
			<p class="p2">`+item["des"]+`</p>
			<p class="p3">`+item["price"]+`</p>
		`);
		
		if (item['choice']) {
            div.append(`<p class="p4">`+item["choice"]+`</p>`)
        }
		
		$("#day>div>div.main2>div.container").append(div);        
	}
})

//热门
$.get("../json/xiaomiyoupin.json",function(data){
	$("#hot>div>div.main2>div.container").html("");
	var dayArr=data.hot;
	for(var item of dayArr){
		var div=$("<div></div>");
		$(div).append(`
			<div>
				<img src="`+item["imgSrc"]+`" />
			</div>
			<p class="p1">`+item["title"]+`</p>
			<p class="p2">`+item["des"]+`</p>
			<p class="p3">`+item["price"]+`</p>
		`);
		
		if (item['choice']) {
            div.append(`<p class="p4">`+item["choice"]+`</p>`)
        }
		
		$("#hot>div>div.main2>div.container").append(div);        
	}
})

//居家
$.get("../json/xiaomiyoupin.json",function(data){
	$(".home:eq(0)>div>div.main2").html("");
	var homeArr=data.home;
	for(var item of homeArr){
		$(".home:eq(0)>div>div.main2").append(`
			<div>
						<div>
							<img src="`+item["imgSrc"]+`" />
							<p>`+item["des"]+`</p>
						</div>
						<div>
							<span>`+item["discount"]+`</span>
							<p>`+item["title"]+`</p>
							<em>`+item["price"]+`<span>起</span></em>
						</div>
					</div>
		`);
	}
	$(".home:eq(0)>div>div.main2>div:eq(3)").addClass("main2_4");
})

//家电
$.get("../json/xiaomiyoupin.json",function(data){
	$(".home:eq(1)>div>div.main2").html("");
	var appliancesArr=data.appliances;
	for(var item of appliancesArr){
		$(".home:eq(1)>div>div.main2").append(`
			<div>
						<div>
							<img src="`+item["imgSrc"]+`" />
							<p>`+item["des"]+`</p>
						</div>
						<div>
							<span>`+item["discount"]+`</span>
							<p>`+item["title"]+`</p>
							<em>`+item["price"]+`<span>起</span></em>
						</div>
					</div>
		`);
	}
	$(".home:eq(1)>div>div.main2>div:eq(3)").addClass("main2_4");
})

//手机
$.get("../json/xiaomiyoupin.json",function(data){
	$("#home:eq(2)>div>div.main2").html("");
	var appliancesArr=data.appliances;
	for(var item of appliancesArr){
		$("#home:eq(2)>div>div.main2").append(`
			<div>
						<div>
							<img src="`+item["imgSrc"]+`" />
							<p>`+item["des"]+`</p>
						</div>
						<div>
							<span>`+item["discount"]+`</span>
							<p>`+item["title"]+`</p>
							<em>`+item["price"]+`<span>起</span></em>
						</div>
					</div>
		`);
	}
	$("#home:eq(2)>div>div.main2>div:eq(3)").addClass("main2_4");
})



clock();
//倒计时
function clock(){
	var today=new Date();//当前时间
	var stopTime = new Date(2019,5,2)
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    stopH=stopTime.getHours(),
    stopM=stopTime.getMinutes(),
    stopS=stopTime.getSeconds();
  	var shenyu=stopTime.getTime()-today.getTime(),//倒计时毫秒数
    shengyuD=parseInt(shenyu/(60*60*24*1000)),//转换为天
    D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000),//除去天的毫秒数
    shengyuH=parseInt(D/(60*60*1000)),//除去天的毫秒数转换成小时
    H=D-shengyuH*60*60*1000,//除去天、小时的毫秒数
    shengyuM=parseInt(H/(60*1000)),//除去天的毫秒数转换成分钟
    M=H-shengyuM*60*1000;//除去天、小时、分的毫秒数
    S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)//除去天、小时、分的毫秒数转化为秒
    $("#hours").html(getZero(shengyuH));
    $("#minutes").html(getZero(shengyuM));
    $("#seconds").html(getZero(S));
    console.log(shengyuD+"天"+shengyuH+"小时"+shengyuM+"分"+S+"秒"+"");
    // setTimeout("clock()",500);
    setTimeout(clock,500);
}
function getZero(num){
	return num>9?num:"0"+num;
}








































