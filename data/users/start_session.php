<?php
    require_once("../init.php");
    session_start();
    @$uid=$_SESSION["uid"];
   // var_dump($uid);
    if($uid != null){
    $sql = "SELECT * FROM shop_users WHERE uid='$uid'";
    $rent = mysqli_query($conn,$sql);
    $row = mysqli_fetch_all($rent,1)[0];
    echo json_encode(["ok"=>1,"user"=>$row]);
    }else{
     echo json_encode(["ok"=>0]);
    }