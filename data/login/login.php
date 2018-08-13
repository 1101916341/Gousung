<?php
        require("../init.php");
        @$uname= $_REQUEST["uname"];
        @$upwd = $_REQUEST["upwd"];
        @$yzm = strtolower($_REQUEST["yzm"]);
        //验证码
        session_start();
        $code = $_SESSION["code"];
          if($yzm != $code){
            die('{"code":-1,"msg":"验证码有误"}');
        }
        $res = '/^[a-zA-Z0-9_]{6,15}$/';
        $re = preg_match($res,$uname);
        if(!$re){
            die('{"code":-1,"msg":"用户名格式错误"}');
        }
        $re = preg_match($res,$upwd);
        if(!$re){
            die('{"code":-1,"msg":"密码格式错误"}');
        }

        if($uname!=null&&$upwd != null){
        $sql="SELECT * FROM shop_users WHERE uname='$uname' AND upwd='$upwd'";
        $rent = mysqli_query($conn,$sql);
        if(mysqli_error($conn)){
            echo mysqli_error($conn);
        }
        $row = mysqli_fetch_row($rent);
                   $_SESSION["uid"] =$row[0];
        if($row!=null){
            echo '{"code":1,"msg":"登陆成功"}';
        }else{
            echo '{"code":-1,"msg":"用户名或密码错误"}';
        }
      }