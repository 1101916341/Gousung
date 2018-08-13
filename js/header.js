$(function(){
    var link=document.createElement("link");
    link.rel="stylesheet";
    link.href="css/header.css";
    document.head.appendChild(link);

    var link2 = document.createElement("link");
    link2.rel="stylesheet";
    link2.href="font/css/font-awesome.css";
    document.head.appendChild(link2);

    //请求到header.html页面里的内容
    $("#header").load("public/header.html",function(html){
        //模糊搜索查询功能
        var searh = $("[data-log=searh]"),
            btnan =$(".btn-an");
        btnan.click(function(e){
            e.preventDefault();
            var kw = searh.val();
            //console.log(kw);
            if(kw.trim()!==""){
                var url = "products.html?kw="+kw;
             //   console.log(url);
                location.href =url;
            }
        });
        //键盘事件
        searh.keyup(function(e){
            if(e.keyCode==13){
                btnan.click();
            }
        });
        //加载过程中
        if(location.search!==""){
            kw = decodeURI(location.search.split("=")[1]);
        }

        //session缓存功能
        var index_zhuxiao = $(".index_zhuxiao"),
            index_denglu = $(".index_denglu");
        //后台判断一下
        $.ajax({
            type:"get",
            url:"data/users/start_session.php",
            success:function(data){
                //console.log(data);
                var {ok,user} = data;
                if(ok==0){
                index_denglu.show().next().hide();
                }else{
                index_zhuxiao.show().next().hide();
                    $(".unamert").html(user.uname);
                }
            }
        });
        $(".deng").click(function(e){
            e.preventDefault();
            location.href="login.html?back="+location.href;
        });

        // 注销功能
        index_zhuxiao.on("click",".xiao",function(e){
            e.preventDefault();
            $.ajax({
                type:"get",
                url:"data/users/lianjie.php",
                success:function(){
                    location.reload(true);
                }
            })
        });

            //header功能购物车显示隐藏 已登录的
           $(".cartt").mouseenter(function(){
               $(".cart").stop().slideDown(300);
               $(".cartt>a").addClass("btn");
           }).mouseleave(function(){
               $(".cart").stop().slideUp(300);
               $(".cartt>a").removeClass("btn");
           });
            //功能购物车显示隐藏 已登录的结束

            //未登录的导航列表功能
        $(".cartt2").mouseenter(function(){
            $(".cart2").stop().slideDown(250);
            $(".cartt2>a").addClass("btn");
        }).mouseleave(function(){
            $(".cart2").stop().slideUp(250);
            $(".cartt2>a").removeClass("btn");
        });
        //未登录的导航列表功能结束

           //关闭广告
           $(".nav_img>a").click(function(e){
               e.preventDefault();
               $(".nav_img").stop().fadeOut(500);
           })


           //消息通知
           $(".tong").click(function(e){
               e.preventDefault();
               $("#des").stop().fadeIn(500);
           })
           //当鼠标经过文本时显示和离开隐藏
           $("#des").mouseenter(function(){
               $(".cil").stop().slideDown(100);;
           }).mouseleave(function(){
               $(".cil").stop().slideUp(100);;
           });
           //点击说明提示关闭
           $(".cil").click(function(){
               $("#des").fadeOut(500);
           });

       //二级菜单动态添加
               var item_nav = $(".item_nav");
               //console.log(item_nav);
               var hml ="";
               for(var i=0;i<4;i++){
                   hml+=`<li>
                              <a href="">核桃</a>
                              <a href="">花椒</a>
                              <a href="">柿子</a>
                              <a href="">紫薯</a>
                          </li>`;
               }
               item_nav.html(hml);
               //二级菜单动态添加结束
    });
});

//购物车功能开始
function loadCart(){
    $.ajax({
        type:"get",
        url:"data/users/start_session.php",
        success:function(data){
            //console.log(data);
            if(data.ok =="1"){
                $.ajax({
                    type:"get",
                    url:"data/carts/carts.php",
                    success:function (data) {
                        // console.log(data);
                        var html ="",carts = $(".carts"),total=0,num=0;
                        for(var item of data){
                            var {sm,jieshao,price,counts,imid} = item;
                            html+=`<div class="cart_pic">
                                <img src="${sm}" alt=""><!--左-->
                              <!--中-->
                                <em>${jieshao}</em>
                              <!--右-->
                                <p class="jia_jian" data-iid="${imid}">
                                <input type="button" class="reduces" value="-">
                                <em>${Number(counts)}</em>
                                <input type="button" class="adds" value="+">
                                </p>
                                <b class="header_js">${(price*counts).toFixed(2)} 元</b>
                                </div>`;
                            total += price*counts;
                            num += Number(counts);
                        }
                        $(".cart_ji b").html(num);
                        $(".shuliangs").html("("+num+")");
                        $(".cart_ji span").html(total.toFixed(2)+"<b>元</b>");
                        carts.html(html);

                        /*购物车中添加或删除商品*/
                        $(".cart .jia_jian").on("click",".adds,.reduces",function(){
                            var  span =$(this);
                            var imid = span.parent().attr("data-iid");
                            // console.log(imid);
                            var count =parseInt(span.siblings("em").html());
                            if(span.is(".adds")){
                                span.siblings("em").html(count++);
                                loadCart();
                                console.log(count);
                            }else if(span.is(".reduces")){
                                span.siblings("em").html(count--);
                                loadCart();
                                console.log(count);
                            }
                            $.ajax({
                                type:"get",
                                url: "data/carts/update.php",
                                data:{imid,count},
                                success:function(){
                                    loadCart();
                                }
                            })
                        });
                        /*购物车中添加或删除商品结束*/
                    }
                })
            }
        }
    })
}
loadCart();
