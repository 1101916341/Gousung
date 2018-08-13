//登陆功能开始
$(function(){
    $("#btn").click(function(){
        var uname = $(".uname").val();
        var upwd  =$(".upwd").val();
        var yzm = $("#yanzheng").val();
        // console.log(uname+"__"+upwd+"___"+yzm);
        $.ajax({
            type:"get",
            url:"data/login/login.php",
            data:{uname,upwd,yzm},
            success:function (data){
                if(data.code==1) {
                    alert(data.msg);
                    if(location.search!==""){
                        var back = location.search.slice(6);
                        location.href = back;
                    }else{
                        location.href="index.html";
                    }
                }else{
                   alert(data.msg);
                }
                },
            error:function() {
                alert("网络故障，请检查");
            }
        })
    });
    //功能二 点击验证码要切换到下一张图片
    var ym = document.querySelector("#Yzm");
    $(".fa-repeat").click(function(){
        //重新加载php文件
        ym.src="data/login/00_code.php?t"+ new Date().getTime()
    })
});