<?php
    require("../init.php");
    session_start();
    @$uid =$_SESSION["uid"];
    @$lid =$_REQUEST["lid"];
    @$count=$_REQUEST["count"];
    if($lid!=null&&$count!=null){
    $sql="select * from shop_cartitem where user_id=$uid and p_lid=$lid";
    	$rent = mysqli_query($conn,$sql);
    	$row = mysqli_fetch_row($rent);
    	if($row==null){
            $sql="insert into shop_cartitem values(null,$uid,$lid,$count,1)";
    	}else{
            $sql="update shop_cartitem set counts=counts+$count where imid =".$row[0];
    	}
  		mysqli_query($conn,$sql);
    }
