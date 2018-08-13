<?php
    require("../init.php");
    $sql="select * from shop_indeximg";
    $rent = mysqli_query($conn,$sql);
    echo json_encode(mysqli_fetch_all($rent,1));