$(function(){
    $(".uname").on("blur",function(){
        var uname = $(".uname").val();
        var names = document.querySelector(".names");
        var reg = /^[0-9a-zA-Z_]{6,15}$/;
        if(!reg.test(uname)){
            //console.log(uname);
            $(".names").html("用户名个格式有误");
            names.style.background="red";
            return ;
        }
        $.ajax({
            type:"GET",
            url:"data/login/panduan.php",
            data:{uname},
            success:function(data){
                if(data.code ==-1){
                   $(".names").html(data.msg);
                    names.style.background="red";
                    return;
                }else{
                    $(".names").html(data.msg);
                    names.style.background="green";
                    return ;
                }
            }
        });
    });
    //验证密码
    $(".upwd").on("blur",function(){
        var upwd = $(".upwd").val();
        var uppw = document.querySelector(".uppw");
        var reg = /^[0-9a-zA-Z_]{6,15}$/;
        if(!reg.test(upwd)){
            $(".uppw").html("密码长度不正确");
            uppw.style.background="red";
            return;
        }else{
            $(".uppw").html("OK");
            uppw.style.background="green";
            return;
        }
    });

    $(".email").on("blur",function(){
        var email = $(".email").val();
        var emaill = document.querySelector(".emaill");
        var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if(!reg.test(email)){
            $(".email").html("邮箱格式不正确");
            emaill.style.background="red";
            return;
        }else{
            $(".email").html("OK");
            emaill.style.background="green";
            return;
        }
    });

    $(".phone").on("blur",function(){
        var phone = $(".phone").val();
        var phon = document.querySelector(".phon");
        var  reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        if(!reg.test(phone)){
            $(".phone").html("手机号格式不正确");
            phon.style.background="red";
            return;
        }else {
            $(".phone").html("OK");
            phon.style.background="green";
            return;
        }
    });
    $("#btn").click(function(){
        var uname = $(".uname").val();
        var upwd = $(".upwd").val();
        var email = $(".email").val();
        var phone = $(".phone").val();
        var yzm2 = $("#yanzheng").val();
        $.ajax({
            type:'POST',
            url:'data/login/register.php',
            data:{uname,upwd,email,phone,yzm2},
            success:function(data){
                console.log(data);
                if(data.code>0){
                    alert(data.msg);
                    location.replace("login.html");
                }else{
                    alert(data.msg);
                }
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