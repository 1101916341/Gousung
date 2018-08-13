<?php
  require("../init.php");
   @$kw = $_REQUEST["kw"];
   @$pno = $_REQUEST["pno"];
   @$type = $_REQUEST["type"];
    $output = [
        "count" =>0,
        "pageSize" => 9,
        "pageCount" =>0,
        "pno" =>1,
        "products" =>[]
    ];
    if($kw!=null&&$pno!=null){
        $output["pno"] = $pno;
        $kws = explode(" ",$kw);
        for($i=0;$i<count($kws);$i++)
        //将当前元素变为title like '%当前元素%'
        $kws[$i] = "jieshao like '%".$kws[$i]."%'";
        //用and连接每个元素
        $where ="where ".implode(" and ",$kws);
       // echo $where;

       //进行模糊查询，所有数据
       $sql = "select count(*) from shop_productslist $where";
        $rent = mysqli_query($conn,$sql);
        $output["count"] = mysqli_fetch_row($rent)[0];
       //var_dump($output["count"]);
       //exit;
        $output["pageCount"] =ceil($output["count"]/$output["pageSize"]);
        /*echo $output["pno"];
        echo $output["pageSize"];*/
        $start = ($output["pno"]-1)*$output["pageSize"];

        //用当前页减 1 乘 当前页商品个数
        $sql = "select *,(select md from shop_detailsimg where guanlian=lid limit 1) as md from shop_productslist $where ";
        	if($type){
        	    if($type == 'product_xlpx'){
        	        $sql .= ' ORDER BY xiaoliang DESC';
        	    }elseif($type == 'product_jgpx'){
        	        $sql .= ' ORDER BY price DESC';
        	    }elseif($type == 'product_pjpx'){
        	        $sql .= ' ORDER BY pingjia DESC';
        	    }
        	}
        	$sql .= " LIMIT $start,".$output["pageSize"];
        	$res = mysqli_query($conn,$sql);
        	//抓取数据
        	$all = mysqli_fetch_all($res,MYSQLI_ASSOC);
        	$output["products"] = $all;
    }
    echo json_encode($output);