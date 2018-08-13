<?php
    require("../init.php");
    session_start();
    @$uid = $_SESSION["uid"];
    @$check = $_REQUEST["check"];
    if($uid!=null && $check!=null){
        $sql = "update shop_cartitem set is_checked = $check where user_id = $uid";
        mysqli_query($conn,$sql);
    }