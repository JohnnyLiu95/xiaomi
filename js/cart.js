$(function(){
    $.get("../json/cart.json",function(data){
        var data = data['product'];
        $(".recProduct").html("");
        for(var item of data){
            $(".recProduct").append(` <li>
            <a href="${item['href']}"><img src=${item['proImgSrc']} alt=""></a>
            <p class="title"><a href="${item['href']}">${item['title']}</a></p>
            <p class="price">${item['price']}元</p>
            <p class="comment">${item['comment']}人好评</p>
            <div class="pushCart">加入购物车</div>
        </li>`)
        }
    })
})