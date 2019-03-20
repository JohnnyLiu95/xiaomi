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
    $.get("../json/index.json", function (data) {
        // 搜索栏的导航栏
        var searchBarNav = data.searchBar.searchBarNav;
        $("#searchBar .container>.box>ul").html("");
        for (var searchBarNavItem of searchBarNav) {
            var li = $("<li></li>");
            li.append(`<div class="figure"><a href="${searchBarNavItem['href']}"><img src="../${searchBarNavItem['imageSrc']}" alt=""></a></div>
                            <div class="title"><a href="${searchBarNavItem['href']}">${searchBarNavItem['title']}</a></div>
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
            li.html(`  <a href="${proListItem['href']}">
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


});