<?php
    require("../init.php");
    	$imid=$_REQUEST["imid"];
    	$check=$_REQUEST["check"];
    	if($imid!=null&&$check!=null){
    		$sql="update shop_cartitem set is_checked=$check where imid=$imid";
    		mysqli_query($conn,$sql);
    	}