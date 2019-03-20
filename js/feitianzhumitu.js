//tab切换
$(function(){
	$("#main>div>div.main1>ul>li").bind("click",function(){
		var suoyin=$(this).index()+1
		$("#main>div>div.main1>ul>li").removeClass("active");
		$("#main>div>div.main1>ul>li").eq($(this).index()).addClass("active");

		$("#main>div>div.main2>img").attr({
			"src":"../image/service&youpin&wireless/rabbit"+suoyin+".jpg"
		})
	})
});

//卷起来的特效
$(function(){
	$(window).bind("scroll",function(){
		var dis=$(this).scrollTop();
		if(dis>$("#tab>.padTop").offset().top){
			$("#scroll").show();
		}else{
			$("#scroll").hide();
		}
	})
//	点击哪个li  哪个个响应的部分网上滚动
//	$("#scroll>div>ul>li").click(function(){
//		$()
//	})
})

//tab切换（点击固定的概述、评价晒单、商品提问）
$(function(){
	$("#tab>div>ul>li").click(function(){
		
	})
})

//选择地址
$(function(){
	$("#main>div>div.main3>.div2>div>i").click(function(){
		$("#main>div>div.main3>.div2>.total").show();
	});
	
	$("#main>div>div.main3>.div2>.total>div>img").click(function(){
		$("#main>div>div.main3>.div2>.total").hide();
	})
	$("#main>div>div.main3>.div2>.total>div>p>input").focus(function(){
		$("#main>div>div.main3>.div2>.total>div>span,#main>div>div.main3>.div2>.total>div>em").hide();
		$("#main>div>div.main3>.div2>.total>div").css("height","145px");
	})
	$("#main>div>div.main3>.div3>button:eq(0)").hover(function(){
		$("#main>div>div.main3>.div3>button:eq(0)").css("background","#f25807");
	},function(){
		$("#main>div>div.main3>.div3>button:eq(0)").css("background","#ff6700");
	})
})

//热门评价
$(function(){
	
})

//跳转
$(".myProShow").bind("click",function(){
	$("#list").show();
	$("body,html").animate({
		scrollTop:$("#list").offset().top-61
	},2000)
	return false;
})
$(".myComment").bind("click",function(){
	$("#list").hide();
	$("body,html").animate({
		scrollTop:$("#evaluate").offset().top-61
	},2000)
	return false;
})
$(".myAsk").bind("click",function(){
	$("body,html").animate({
		scrollTop:$("#problem").offset().top-61
	},2000)
	return false;
})
$("li>.myProShow,li>.myComment,li>.myAsk").bind("click",function(){
	$(this).addClass("active");
	$(this).parent().siblings().children("a").removeClass("active")
})
console.log($("#list").offset().top)
console.log($("#evaluate").offset().top)
console.log($("#problem").offset().top)

//最底下轮播图部分
$(function(){
	$("#buyAgain>div>dl").hover(function(){
		$("#buyAgain>div>dl>dd:eq(2)>a").html("加入购物车");
//		$("#buyAgain>div>dl").css("background","#fff");
	})
	
	$.get("../json/feitianzhumitu.json",function(data){
	$("#buyAgain>div").html("");
	var buyAgainArr=data.buyAgain;
	for(var item of buyAgainArr){
		$("#buyAgain>div").append(`<dl>
					<dt><img src="`+item["imgSrc"]+`" /></dt>
					<dd><a href="">`+item["title"]+`</a></dd>
					<dd>`+item["price"]+`</dd>
					<dd><a href="">`+item["supportNum"]+`</a></dd>
				</dl>
		`);
	}
})
})



















