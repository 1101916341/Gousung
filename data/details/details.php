<?php
    require("../init.php");
    $output=[
        "prot"=>[], //商品的详细文字数据
        "specs" =>[], //整合需要的图片
        "pics" =>[]     //商品的一些数据
    ];
    @$lid =$_REQUEST["lid"];
    if($lid!=null){
        $sql = "select * from shop_productslist where lid =$lid";
        $rent = mysqli_query($conn,$sql);
        $output["prot"]=mysqli_fetch_all($rent,1)[0];

        $sql = "select * from shop_detailsimg where guanlian=$lid";
        $rent = mysqli_query($conn,$sql);
        $output["pics"]=mysqli_fetch_all($rent,1);

        $guanggao_img = $output["prot"]["guanggao_img"];

        //对查询到的数据进行整合
        $sql ="select lid,leixing from shop_productslist where guanggao_img = $guanggao_img";
        $rent = mysqli_query($conn,$sql);
        $output["specs"] = mysqli_fetch_all($rent,1);
    }
        echo json_encode($output);
















