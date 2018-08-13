<?php
    require("../init.php");
    $qqid = $_REQUEST["qqid"];
    $sql = "select lid,jieshao,price,xiaoliang,(select md from shop_detailsimg where xid = lid)AS md from shop_productslist WHERE guanggao_img='$qqid'";
    $rent = mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($rent,1));