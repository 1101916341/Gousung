<?php
        require("../init.php");
      @$uname= $_REQUEST["uname"];
      @$upwd = $_REQUEST["upwd"];
      @$email = $_REQUEST["email"];
      @$phone = $_REQUEST["phone"];
      @$yzm = strtolower($_REQUEST["yzm2"]);

        //用户
      $res = '/^[a-zA-Z0-9_]{5,15}$/';
      $re = preg_match($res,$uname);
         if(!$re){
            die('{"code":-1,"msg":"用户名格式错误"}');
         }

      $re = preg_match($res,$upwd);
         if(!$re){
            die('{"code":-1,"msg":"密码格式错误"}');
         }

      //邮箱正则
      $em = '/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/';
       $re = preg_match($em,$email);
         if(!$re){
            die('{"code":-1,"msg":"邮箱格式错误"}');
         }

      //手机号正则
      $ph = '/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/';
        $re = preg_match($ph,$phone);
        if(!$re){
            die('{"code":-1,"msg":"手机号格式错误"}');
        }
              //验证码
                session_start();
                $code = $_SESSION["code"];
                if($yzm != $code){
                    die('{"code":-1,"msg":"验证码有误"}');
               }
       //查询数据库是否存在
       $sql2 ="SELECT uname FROM shop_users WHERE uname='$uname'";
       $ent = mysqli_query($conn,$sql2);
       $rows = mysqli_fetch_all($ent);
        if($rows!=null){
       echo '{"code":-1,"msg":"注册失败"}';
       exit;
        }

      $sql = "INSERT INTO shop_users VALUES(NULL,'$uname','$upwd','$email','$phone',NULL,1)";

      $rent = mysqli_query($conn,$sql);
      if(mysqli_error($conn)){
        echo mysqli_error($conn);
      }

      $row = mysqli_affected_rows($conn);
      if($row<0){
        echo '{"code":-1,"msg":"注册失败"}';
      }else{
        echo '{"code":1,"msg":"注册成功"}';
      }