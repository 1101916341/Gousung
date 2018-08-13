<?php
    require("../init.php");
    @$imid = $_REQUEST["imid"];
    @$count = $_REQUEST["count"];
    if($imid!=null && $count!=null){
        if($count!=0){
         $sql ="update shop_cartitem set counts=$count where imid = $imid";
        }else{
           $sql ="delete from shop_cartitem where imid =$imid";
        }
         mysqli_query($conn,$sql);
    }