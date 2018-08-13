<?php
    require("../init.php");
        @$uname = $_REQUEST["uname"];

        if($uname!=null){
        $sql = "SELECT uname FROM shop_users WHERE uname='$uname'";
        }
        $rent = mysqli_query($conn,$sql);
        $rows = mysqli_fetch_row($rent);
       // var_dump($rows);
        if($rows == true){
            echo '{"code":-1,"msg":"用户名已注册"}';
        }else{
            echo '{"code":1,"msg":"OK"}';
        }