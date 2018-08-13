<?php
    require("../init.php");
    @$imid = $_REQUEST["imid"];
    if($imid != null){
        $sql = "delete from shop_cartitem where imid = $imid";
        mysqli_query($conn,$sql);
    }