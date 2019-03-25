//邮箱手机号小米账号验证
function getEleById(id){
    return document.getElementById(id);
}
// 邮箱
var email = getEleById("login-text");
//var DivEmail = getEleById("DivEmail");
function checkEmail(){
    var reg = /^\w+@\w+\.[\w\.]{2,6}$/;
    if(!reg.test(email.value.trim())){
       alert("邮箱错误,邮箱需要@.，并且@在前.在后,手机号11位，小米账号是用户名登录");
        return false;
    }
    return true;
}

email.onblur = checkEmail;

document.getElementById("myForm").onsubmit=function(){
	if(!checkEmail()){
		return false;
	}
	return true;
}

$(function(){
	$(".login>a:eq(1)").click(function(){
		$(".login>a").removeClass("active");
		$(this).addClass("active");
		$("#addon").css("display","block");
	})
})


