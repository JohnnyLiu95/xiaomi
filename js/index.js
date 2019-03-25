;
$(document).ready(function () {

    // 公共header&footer开始
    // 顶部购物车效果
    $(".topBarCar").parent().hover(function () {
        $(this).css("background", "#ff6700");
        $(".topBarCar").css("color", "#fff");
        $(".toBarShopCart").slideDown();
    }, function () {
        $(this).css("background", "#424242");
        $(".topBarCar").css("color", "#b0b0b0");
        $(".toBarShopCart").slideUp();
    })


    // 搜索栏特效
    // 搜索栏数据加载
    $.get("json/index.json", function (data) {
        // 搜索栏的导航栏
        var searchBarNav = data.searchBar.searchBarNav;
        $("#searchBar .container>.box>ul").html("");
        for (var searchBarNavItem of searchBarNav) {
            var li = $("<li></li>");
            li.append(`<div class="figure"><a href="html/${searchBarNavItem['href']}"><img src="${searchBarNavItem['imageSrc']}" alt=""></a></div>
                            <div class="title"><a href="html/${searchBarNavItem['href']}">${searchBarNavItem['title']}</a></div>
                                <div class="price">${searchBarNavItem['price']}元起</div>`);
            if (searchBarNavItem['hot']) {
                li.append(`<div class="hot">${searchBarNavItem['hot']}</div>`);
            }
            $("#searchBar>.container>.box>ul").append(li);
        }
        // 搜寻表单查询项
        var proList = data.searchBar.proList;
        $("#searchBar>.box>form>.proList").html("");
        for (var proListItem of proList) {
            var li = $("<li></li>");
            li.html(`  <a href="html/${proListItem['href']}">
                <span class="protitle">${proListItem['proTitle']}</span>
                <span class="proNum">约有${proListItem['proNum']}件</span>
                </a>`);
            $("#searchBar>.box>form>.proList").append(li);
        }
    })

    // 搜索栏的导航栏鼠标悬停特效
    $("#searchBar>.box>ul>li:lt(8)>a").bind("mouseenter", function () {
        $("#searchBar .container").slideDown();
    })
    $("#searchBar>.box>ul>li:gt(7)>a").bind("mouseenter", function () {
        $("#searchBar .container").slideUp();
    })
    $("#searchBar>.box>span").bind("mouseenter", function () {
        $("#searchBar .container").slideUp();
    })
    $("#searchBar>.box>form").bind("mouseenter", function () {
        $("#searchBar .container").slideUp();
    })
    $("#searchBar").bind("mouseleave", function () {
        $("#searchBar .container").slideUp();
    })
    $("#searchBar>.box>ul>li>a[ind]").bind("mouseover", function () {
        var dis = $(this).attr("ind") * -1224 + "px";
        $("#searchBar>.container>.box>ul").animate({
            marginLeft: dis
        }, "fast")
    })

    // 搜索栏Form表单获得失去焦点特效
    $("#searchBar>.box>form>input:first-of-type").focusin(function () {
        $(this).css("border", "1px solid #ff6700");
        $("#searchBar>.box>form>input:last-of-type").css({
            border: "1px solid #ff6700",
            borderLeft: "0"
        });
        $("#searchBar>.box>form>a").fadeOut();
        $("#searchBar>.box>form>.proList").css("border", "1px solid #ff6700");
        $("#searchBar>.box>form>.proList").css("border-top", "0");
        $("#searchBar>.box>form>.proList").slideDown();

    })
    $("#searchBar>.box>form>input:first-of-type").focusout(function () {
        $(this).css("border", "1px solid #f0f0f0");
        $("#searchBar>.box>form>input:last-of-type").css({
            border: "1px solid #f0f0f0",
            borderLeft: "0"
        });
        $("#searchBar>.box>form>a").fadeIn();
        $("#searchBar>.box>form>.proList").css("border", "1px solid #f0f0f0");
        $("#searchBar>.box>form>.proList").css("border-top", "0");
        $("#searchBar>.box>form>.proList").slideUp();
    })
    // 公共header&footer结束


    // banner二级菜单
    $.get("json/index.json", function (data) {
        var banner = data.banner;
        $(".banner>ul>li>div>ul").html("");
        for (var i = 0; i < 10; i++) {
            if (banner[i.toString()]) {
                for (var j = 0; j < banner[i.toString()].length; j++) {
                    var item = banner[i.toString()][j];
                    $(".banner>ul>li>div>ul").eq(i).append(`   <li><a href="${item['href']}"><img src="${item['imageSrc']}" alt=""><span>${item['title']}</span></a></li>`)
                }
            }
        }
    });
    // banner轮播图
    var bannerIndex = 0;
    var bannerNo = setInterval(changeBanner, 3000);
    $(".myBanner>a").eq(0).siblings("a").css("display", "none");

    function changeBanner() {
        bannerIndex++;
        if (bannerIndex > 4) {
            bannerIndex = 0;
        }
        $(".myBanner>a").eq(bannerIndex).fadeIn();
        $(".myBanner>a").eq(bannerIndex).siblings("a").fadeOut();
        changeBannerStyle(bannerIndex);

    }

    function changeBannerStyle(index) {
        $(".myBanner>p>span").removeClass("active");
        $(".myBanner>p>span").eq(index).addClass("active");
    }
    $(".myBanner>p>span").click(function () {
        clearInterval(bannerNo);
        bannerIndex = $(this).index();
        $(".myBanner>a").eq(bannerIndex).fadeIn();
        $(".myBanner>a").eq(bannerIndex).siblings("a").fadeOut();
        bannerNo = setInterval(changeBanner, 2000);
        changeBannerStyle(bannerIndex);
    })
    $(".myBanner>a").bind("mouseenter", function () {
        clearInterval(bannerNo);
    })
    $(".myBanner>a").bind("mouseleave", function () {
        bannerNo = setInterval(changeBanner, 3000);
    })
    $(".myBanner>span.bannerLeft").click(function () {
        clearInterval(bannerNo);
        bannerIndex--;
        if (bannerIndex < 0) {
            bannerIndex = 4;
        }
        $(".myBanner>a").eq(bannerIndex).fadeIn();
        $(".myBanner>a").eq(bannerIndex).siblings("a").fadeOut();
        changeBannerStyle(bannerIndex);

        bannerNo = setInterval(changeBanner, 2000);
    });
    $(".myBanner>span.bannerRight").click(function () {
        clearInterval(bannerNo);
        bannerIndex++;
        if (bannerIndex > 4) {
            bannerIndex = 0;
        }
        $(".myBanner>a").eq(bannerIndex).fadeIn();
        $(".myBanner>a").eq(bannerIndex).siblings("a").fadeOut();
        bannerNo = setInterval(changeBanner, 2000);
        changeBannerStyle(bannerIndex);
    });

    // 手机
    $.get("json/index.json", function (data) {
        var phoneArr = data.phone;
        $(".main #phone .container>.rightShow").html("");
        for (var item of phoneArr) {
            var li = $(" <li class='rightShowMiddle boxShadow'></li>")
            $(li).append(` <div class="figure">
            <a href="${item['href']}">
                <img src="${item['imgSrc']}" alt="">
            </a>
        </div>
        <p class="title"><a href="${item['href']}">${item['title']}</a></p>
        <p class="des">${item['des']}</p>`)
            if (item['delPrice']) {
                li.append(`<p class='price'>${item['price']} <del>${item['delPrice']}</del></p>`)
            } else {
                li.append(`<p class='price'>${item['price']}</p>`)
            }
            if (item['hot']) {
                li.append(`<p class="hot">${item['hot']}</p>`)
            }
            if (item['new']) {
                li.append(`<p class="new">${item['new']}</p>`)
            }
            $(".main #phone .container>.rightShow").append(li);
        }
    })

    // 家电、智能、搭配、配件、周边的二级卡片式菜单效果
    $(".moreList>li").mouseover(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().parent().find(".rightShow").eq($(this).index()).siblings(".rightShow").hide();
        $(this).parent().parent().parent().find(".rightShow").eq($(this).index()).show();
    })

    // 家电
    $.get("json/index.json", function (data) {
        var homeElec = data.homeElec;
        for (var i = 0; i < $(".main #homeElec .title>.moreList>li").length; i++) {
            var arr = homeElec[(i + 1).toString()];
            $(".main #homeElec .container>.rightShow").eq(i).html("");
            for (var j = 0; j < arr.length - 1; j++) {
                var li = $(`<li class="rightShowMiddle boxShadow"></li>`);
                li.append(`<div class="figure">
                <a href="${arr[j]['href']}">
                    <img src="${arr[j]['imgSrc']}" alt="">
                </a>
            </div>
            <p class="title"><a href="${arr[j]['href']}">${arr[j]['title']}</a></p>`)
                if (arr[j]['des']) {
                    li.append(`<p class="des">${arr[j]['des']}</p>`);
                }
                if (arr[j]['delPrice']) {
                    li.append(`<p class='price'>${arr[j]['price']} <del>${arr[j]['delPrice']}</del></p>`)
                } else {
                    li.append(`<p class='price'>${arr[j]['price']}</p>`)
                }
                if (arr[j]['review']) {
                    li.append(`<a class="comment">
                <div class="review">${arr[j]['review']}</div>
                <div class="author">来自于 ${arr[j]['author']} 的评价 </div>
            </a>`)
                }
                if (arr[j]['hot']) {
                    li.append(`<p class="hot">${arr[j]['hot']}</p>`)
                }
                if (arr[j]['new']) {
                    li.append(`<p class="new">${arr[j]['new']}</p>`)
                }
                $(".main #homeElec .container>.rightShow").eq(i).append(li)
            }
            $(".main #homeElec .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow">
                        <div class="figure">
                            <a href="${arr[j]['href']}">
                                <img src="${arr[j]['imgSrc']}" alt="">
                            </a>
                        </div>
                        <p class="title">${arr[j]['title']}</p>
                        <p class="price">${arr[j]['price']}</p>
                    </li>`)
            $(".main #homeElec .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow readMore">
            <div class="readFigure">
                <a href="">
                    <img src="image/index/mainReadMore.png" alt="">
                </a>
            </div>
            <p class="readTitle"><a href="">浏览更多</a></p>
            <p class="readhot"><a href="">更多</a></p>
        </li>`)
        }

        // 智能
        var smart = data.smart;
        for (var i = 0; i < $(".main #smart .title>.moreList>li").length; i++) {
            var arr = smart[(i + 1).toString()];
            $(".main #smart .container>.rightShow").eq(i).html("");
            for (var j = 0; j < arr.length - 1; j++) {
                var li = $(`<li class="rightShowMiddle boxShadow"></li>`);
                li.append(`<div class="figure">
                <a href="${arr[j]['href']}">
                    <img src="${arr[j]['imgSrc']}" alt="">
                </a>
            </div>
            <p class="title"><a href="${arr[j]['href']}">${arr[j]['title']}</a></p>`)
                if (arr[j]['des']) {
                    li.append(`<p class="des">${arr[j]['des']}</p>`);
                }
                if (arr[j]['delPrice']) {
                    li.append(`<p class='price'>${arr[j]['price']} <del>${arr[j]['delPrice']}</del></p>`)
                } else {
                    li.append(`<p class='price'>${arr[j]['price']}</p>`)
                }
                if (arr[j]['review']) {
                    li.append(`<a class="comment">
                <div class="review">${arr[j]['review']}</div>
                <div class="author">来自于 ${arr[j]['author']} 的评价 </div>
            </a>`)
                }
                if (arr[j]['hot']) {
                    li.append(`<p class="hot">${arr[j]['hot']}</p>`)
                }
                if (arr[j]['new']) {
                    li.append(`<p class="new">${arr[j]['new']}</p>`)
                }
                $(".main #smart .container>.rightShow").eq(i).append(li)
            }
            $(".main #smart .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow">
                        <div class="figure">
                            <a href="${arr[j]['href']}">
                                <img src="${arr[j]['imgSrc']}" alt="">
                            </a>
                        </div>
                        <p class="title">${arr[j]['title']}</p>
                        <p class="price">${arr[j]['price']}</p>
                    </li>`)
            $(".main #smart .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow readMore">
            <div class="readFigure">
                <a href="">
                    <img src="image/index/mainReadMore.png" alt="">
                </a>
            </div>
            <p class="readTitle"><a href="">浏览更多</a></p>
            <p class="readhot"><a href="">更多</a></p>
        </li>`)
        }

        // 搭配
        var match = data.match;
        for (var i = 0; i < $(".main #match .title>.moreList>li").length; i++) {
            var arr = match[(i + 1).toString()];
            $(".main #match .container>.rightShow").eq(i).html("");
            for (var j = 0; j < arr.length - 1; j++) {
                var li = $(`<li class="rightShowMiddle boxShadow"></li>`);
                li.append(`<div class="figure">
                <a href="${arr[j]['href']}">
                    <img src="${arr[j]['imgSrc']}" alt="">
                </a>
            </div>
            <p class="title"><a href="${arr[j]['href']}">${arr[j]['title']}</a></p>`)

                if (arr[j]['delPrice']) {
                    li.append(`<p class='price'>${arr[j]['price']} <del>${arr[j]['delPrice']}</del></p>`)
                } else {
                    li.append(`<p class='price'>${arr[j]['price']}</p>`)
                }
                if (arr[j]['des']) {
                    li.append(`<p class="des">${arr[j]['des']}</p>`);
                }
                if (arr[j]['review']) {
                    li.append(`<a class="comment">
                <div class="review">${arr[j]['review']}</div>
                <div class="author">来自于 ${arr[j]['author']} 的评价 </div>
            </a>`)
                }
                if (arr[j]['hot']) {
                    li.append(`<p class="hot">${arr[j]['hot']}</p>`)
                }
                if (arr[j]['new']) {
                    li.append(`<p class="new">${arr[j]['new']}</p>`)
                }
                $(".main #match .container>.rightShow").eq(i).append(li)
            }
            $(".main #match .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow">
                        <div class="figure">
                            <a href="${arr[j]['href']}">
                                <img src="${arr[j]['imgSrc']}" alt="">
                            </a>
                        </div>
                        <p class="title">${arr[j]['title']}</p>
                        <p class="price">${arr[j]['price']}</p>
                    </li>`)
            $(".main #match .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow readMore">
            <div class="readFigure">
                <a href="">
                    <img src="image/index/mainReadMore.png" alt="">
                </a>
            </div>
            <p class="readTitle"><a href="">浏览更多</a></p>
            <p class="readhot"><a href="">更多</a></p>
        </li>`)
        }
        // 配件
        var accessories = data.accessories;
        for (var i = 0; i < $(".main #accessories .title>.moreList>li").length; i++) {
            var arr = accessories[(i + 1).toString()];
            $(".main #accessories .container>.rightShow").eq(i).html("");
            for (var j = 0; j < arr.length - 1; j++) {
                var li = $(`<li class="rightShowMiddle boxShadow"></li>`);
                li.append(`<div class="figure">
             <a href="${arr[j]['href']}">
                 <img src="${arr[j]['imgSrc']}" alt="">
             </a>
         </div>
         <p class="title"><a href="${arr[j]['href']}">${arr[j]['title']}</a></p>`)

                if (arr[j]['delPrice']) {
                    li.append(`<p class='price'>${arr[j]['price']} <del>${arr[j]['delPrice']}</del></p>`)
                } else {
                    li.append(`<p class='price'>${arr[j]['price']}</p>`)
                }
                if (arr[j]['des']) {
                    li.append(`<p class="des">${arr[j]['des']}</p>`);
                }
                if (arr[j]['review']) {
                    li.append(`<a class="comment">
             <div class="review">${arr[j]['review']}</div>
             <div class="author">来自于 ${arr[j]['author']} 的评价 </div>
         </a>`)
                }
                if (arr[j]['hot']) {
                    li.append(`<p class="hot">${arr[j]['hot']}</p>`)
                }
                if (arr[j]['new']) {
                    li.append(`<p class="new">${arr[j]['new']}</p>`)
                }
                $(".main #accessories .container>.rightShow").eq(i).append(li)
            }
            $(".main #accessories .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow">
                     <div class="figure">
                         <a href="${arr[j]['href']}">
                             <img src="${arr[j]['imgSrc']}" alt="">
                         </a>
                     </div>
                     <p class="title">${arr[j]['title']}</p>
                     <p class="price">${arr[j]['price']}</p>
                 </li>`)
            $(".main #accessories .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow readMore">
         <div class="readFigure">
             <a href="">
                 <img src="image/index/mainReadMore.png" alt="">
             </a>
         </div>
         <p class="readTitle"><a href="">浏览更多</a></p>
         <p class="readhot"><a href="">更多</a></p>
     </li>`)
        }

        // 配件
        var around = data.around;
        for (var i = 0; i < $(".main #around .title>.moreList>li").length; i++) {
            var arr = around[(i + 1).toString()];
            $(".main #around .container>.rightShow").eq(i).html("");
            for (var j = 0; j < arr.length - 1; j++) {
                var li = $(`<li class="rightShowMiddle boxShadow"></li>`);
                li.append(`<div class="figure">
                       <a href="${arr[j]['href']}">
                           <img src="${arr[j]['imgSrc']}" alt="">
                       </a>
                   </div>
                   <p class="title"><a href="${arr[j]['href']}">${arr[j]['title']}</a></p>`)

                if (arr[j]['delPrice']) {
                    li.append(`<p class='price'>${arr[j]['price']} <del>${arr[j]['delPrice']}</del></p>`)
                } else {
                    li.append(`<p class='price'>${arr[j]['price']}</p>`)
                }
                if (arr[j]['des']) {
                    li.append(`<p class="des">${arr[j]['des']}</p>`);
                }
                if (arr[j]['review']) {
                    li.append(`<a class="comment">
                       <div class="review">${arr[j]['review']}</div>
                       <div class="author">来自于 ${arr[j]['author']} 的评价 </div>
                   </a>`)
                }
                if (arr[j]['hot']) {
                    li.append(`<p class="hot">${arr[j]['hot']}</p>`)
                }
                if (arr[j]['new']) {
                    li.append(`<p class="new">${arr[j]['new']}</p>`)
                }
                $(".main #around .container>.rightShow").eq(i).append(li)
            }
            $(".main #around .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow">
                               <div class="figure">
                                   <a href="${arr[j]['href']}">
                                       <img src="${arr[j]['imgSrc']}" alt="">
                                   </a>
                               </div>
                               <p class="title">${arr[j]['title']}</p>
                               <p class="price">${arr[j]['price']}</p>
                           </li>`)
            $(".main #around .container>.rightShow").eq(i).append(` <li class="rightShowSmall boxShadow readMore">
                   <div class="readFigure">
                       <a href="">
                           <img src="image/index/mainReadMore.png" alt="">
                       </a>
                   </div>
                   <p class="readTitle"><a href="">浏览更多</a></p>
                   <p class="readhot"><a href="">更多</a></p>
               </li>`)
        }
    })


    // 为你推荐
    $.get("json/index.json", function (data) {
        var recommendArr = data.recommend;
        $(".main>#recommend>.recContainer>ul").html("");
        for (var item of recommendArr) {
            $(".main>#recommend>.recContainer>ul").append(` <li class="rightShowMiddle boxShadow">
            <div class="figure">
                <a href="${item['href']}">
                    <img src="${item['imgSrc']}" alt="">
                </a>
            </div>
            <p class="title"><a href="">${item['title']}</a></p>
            <p class="price">${item['price']}元</p>
            <p class="rec">${item['rec']}人好评</p>
        </li>`)
        }

        $(".main>#recommend>.title>.move>.rightBtn").click(function () {
            if (parseInt($(".main>#recommend>.recContainer>ul").css("margin-left")) < -2494) {
                return;
            }
            $(".main>#recommend>.recContainer>ul").animate({
                marginLeft: "-=1240px"
            })
            if (parseInt($(".main>#recommend>.recContainer>ul").css("margin-left")) == -2494) {
                $(this).css("opacity", "0.1");
            }
            $(".main>#recommend>.title>.move>.leftBtn").css("opacity", "1");
        })
        $(".main>#recommend>.title>.move>.leftBtn").click(function () {
            if (parseInt($(".main>#recommend>.recContainer>ul").css("margin-left")) == -14) {
                return;
            }
            $(".main>#recommend>.recContainer>ul").animate({
                marginLeft: "+=1240px"
            })
            if (parseInt($(".main>#recommend>.recContainer>ul").css("margin-left")) == -1254) {
                $(this).css("opacity", "0.1");
            }
            $(".main>#recommend>.title>.move>.rightBtn").css("opacity", "1");
        })

    });

    // 产品热评
    $.get("json/index.json", function (data) {
        $(".main>#hotComment>ul").html("");
        var hotCommentArr = data.hotComment;
        for (var item of hotCommentArr) {
            $(".main>#hotComment>ul").append(`<li class="boxShadow">
            <div class="figure">
            <a href="${item['href']}"><img src="${item['imgSrc']}" alt=""></a>
            </div>
        <div class="des">
            <a href="${item['href']}">${item['des']}</a>
        </div>
        <div class="author">来自于${item['author']}的评价</div>
        <div class="product">
            <a href="${item['href']}" class="title">${item['title']}</a>
            <span class="price">${item['price']}元</span>
        </div></li>`)
        }
    });

    // 内容轮播图
    var contentIndex1 = 0;
    var contentIndex2 = 0;
    var contentIndex3 = 0;
    var contentIndex4 = 0;
    $("#content .box1 .rightBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) < -591) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "-=296px"
        });
        contentIndex1++;
        changeContentStyle(contentIndex1, $(this).siblings(".dot"));

    })
    $("#content .box1 .leftBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) > -1) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "+=296px"
        });
        contentIndex1--;
        changeContentStyle(contentIndex1, $(this).siblings(".dot"));
    })


    $("#content .box2 .rightBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) < -591) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "-=296px"

        });
        contentIndex2++;
        changeContentStyle(contentIndex2, $(this).siblings(".dot"));

    })
    $("#content .box2 .leftBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) > -1) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "+=296px"
        });
        contentIndex2--;
        changeContentStyle(contentIndex2, $(this).siblings(".dot"));
    })


    $("#content .box3 .rightBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) < -591) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "-=296px"

        });
        contentIndex3++;
        changeContentStyle(contentIndex3, $(this).siblings(".dot"));

    })
    $("#content .box3 .leftBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) > -1) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "+=296px"
        });
        contentIndex3--;
        changeContentStyle(contentIndex3, $(this).siblings(".dot"));
    })


    $("#content .box4 .rightBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) < -591) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "-=296px"

        });
        contentIndex4++;
        changeContentStyle(contentIndex4, $(this).siblings(".dot"));

    })
    $("#content .box4 .leftBtn").click(function () {
        if (parseInt($(this).siblings(".container").children("ul").css("margin-left")) > -1) {
            return;
        }
        $(this).siblings(".container").children("ul").animate({
            marginLeft: "+=296px"
        });
        contentIndex4--;
        changeContentStyle(contentIndex4, $(this).siblings(".dot"));
    })



    $("#content .dot li").bind("click", function () {
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings(".container").children("ul").animate({
            marginLeft: $(this).index() * -296 + "px"
        })
        switch($(this).parent().parent().index()){
            case 0 :contentIndex1 = $(this).index();break;
            case 1 :contentIndex2 = $(this).index();break;
            case 2 :contentIndex3 = $(this).index();break;
            case 3 :contentIndex4 = $(this).index();break;
        }
        
    })

    function changeContentStyle(index, objDot) {
        objDot.children().removeClass("active");
        objDot.children().eq(index).addClass("active");
    }



    $("#video>ul>li").bind("click",function(){
        $(".video").show();
    })
    $(".closeBtn").bind("click",function(){
        $(this).parent().hide();
    })
});