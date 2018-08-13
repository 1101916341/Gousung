<?php
    require("../init.php");
    //查询轮播图片数据
    $sql = "select * from shop_index_carousel";
    $rent = mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($rent,1));