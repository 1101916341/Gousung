<?php
  require("../init.php");
    $fid = $_REQUEST["fid"];
  $sql = "select * from shop_index_img  WHERE fid=$fid ORDER BY iid LIMIT 7";
  $rent = mysqli_query($conn,$sql);
  echo json_encode(mysqli_fetch_all($rent,1));