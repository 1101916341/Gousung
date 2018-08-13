<?php
    require("../init.php");
    session_start();
    @$uid = $_SESSION["uid"];
   if($uid != null){
     $sql = "SELECT *,(SELECT sm FROM shop_detailsimg where xid=lid limit 1) as sm FROM shop_cartitem inner join shop_productslist on p_lid = lid where user_id=$uid order by lid desc";
    $rent = mysqli_query($conn,$sql);
   echo json_encode(mysqli_fetch_all($rent,1));
    }