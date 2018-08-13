$(function(){
    function loadCart(){
        $.ajax({
            type:"get",
            url:"data/users/start_session.php",
            success:function(data){
                if(data.ok==0){
                location.href="login.html?back="+location.href;
                }else{
                    $.ajax({
                        type:"get",
                        url:"data/carts/carts.php",
                        success:function(data){
                       // console.log(data);
                        var html="";
                        var imgs = $(".img_false>img");
                            imgs.attr("src","img/carts/true.png");
                           // console.log(imgs);
                            var sum = 0, total = 0;
                            for(var item of data){
                                var {is_checked,sm,title,price,counts,p_lid,imid,jieshao} =item;
                                if(is_checked==0)
                                    imgs.attr("src","img/carts/false.png");
                                //console.log(imgs);
                                if(is_checked==1){
                                sum +=parseInt(counts);
                                total+=price * counts;
                               // console.log(total);
                                //console.log(sum);
                                }
                             html+=`<ul class="carta_ul">
                                <li class="chek" data-imid="${imid}">
                                <img src="img/carts/${is_checked==0?'false':'true'}.png" alt="">
                                </li>
                                <li class="pic_tit">
                                    <a href="details.html?lid=${p_lid}"><img src="${sm}" alt="${title}"></a>
                                    <a href="details.html?lid=${p_lid}" class="a_ul">${jieshao}</a>
                                    <!--<p>规格：500g 袋装</p>-->
                                </li>
                                <li class="price">￥ ${parseFloat(price).toFixed(2)}</li>
                                <li class="count"  data-imid="${imid}">
                                    <input type="button" id="jiana" value="-">
                                    <span>${counts}</span> 
                                    <input type="button" id="addd" value="+">
                                </li>
                                <li class="prices">￥ ${parseFloat(price*counts).toFixed(2)}</li>
                                <li class="del">
                                <a href="" data-imid="${imid}">删除</a>
                                </li>
                                </ul>`;
                            }
                            $("#xuanzhong").html(sum);
                            $("#yuan").html(parseFloat(total).toFixed(2));
                            $(".carta_div").html(html);
                        }
                    })
                }
            }
        })
    }
    loadCart();
    //全选绑定事件
    $(".cart_center").on("click","#addd,#jiana,.del>a,.chek>img",function(e){
        e.preventDefault();
        // console.log(11);
    var $tar = $(this);
    if($tar.is("#addd,#jiana")){
        var imid = $tar.parent().attr("data-imid");
        var count = parseInt($tar.siblings("span").html());
        // console.log(count);
        // console.log(imid);
        if($tar.is("#addd")){
            $tar.siblings("span").html(++count);
            // console.log(count);
            loadCart();
        }else if($tar.is("#jiana")){
           $tar.siblings("span").html(--count);
            // console.log(count);
            loadCart();
        }
        $.ajax({
            type:'get',
            url:"data/carts/update.php",
            data:{imid,count},
            success:function () {
                loadCart();
            }
        });
    }else if($tar.is(".del>a")){
       var title = $tar.parent().siblings(".pic_tit").find(".a_ul").html();
       // console.log(title);
        if(confirm("真的要删除"+title+"吗?")){
            var imid = $tar.attr("data-imid");
            // console.log(imid);
            loadCart();
            $.ajax({
                type:"get",
                url:"data/carts/deletes.php",
                data:{imid},
                success:function(){
                    loadCart();
                }
            })
        }
    }else{
        var imid = $tar.parent().attr("data-imid");
        //console.log(imid);
        var check = $tar.attr("src").endsWith("false.png")?1:0;
        loadCart();
        $.ajax({
            type:"get",
            url:"data/carts/even.php",
            data:{imid,check},
            success:function(){
                loadCart();
            }
        });
    }
    })

    //全选和取消全选
    $(".img_false>img").click(function(){
       var img = $(this);
       // console.log(img);
       var check = img.attr("src").endsWith("false.png")?1:0;
        loadCart();
        $.ajax({
            type:"get",
            url:"data/carts/update_quan.php",
            data:{check},
            success:function(){
            loadCart();
            }
        })
    })
    //全选和取消全选结束
});

$(function(){
    //底部左右点击切换轮播
    var obj ={
        jing_pin:$(".jing_pin"),
        jing_ul:$(".jing_ul"),
        gou_dian:$(".gou_dian"),
        jing_lrt:$(".jing_lrt"),
        li:$(".li"),
        ri:$(".ri"),
        moved:0,
        width:170,
        lwidth:10,
        wait:5000,
        items:null
    };
    var ht ="";
    for(var o=1;o<6; o++){
        ht+=`<li class="good_item${o}"><a href="">
                    <img src="img/carts/${o}.png" alt="">
                    <p>小米电视音箱小米电视音箱</p>
                    <b>1339元</b>
                    <span><i>15456</i>人好评</span>
                </a></li>`;
    }
    for(var r=6;r<11;r++){
        ht+=`<li class="good_item${r}"><a href="">
                    <img src="img/carts/${r}.png" alt="">
                    <p>小米电视音箱小米电视音箱</p>
                    <b>1339元</b>
                    <span><i>15456</i>人好评</span>
                </a></li>`;
    }
    //设置放置图片的宽度 和 添加在页面上内容
    obj.jing_ul.html(ht).css("width",160*10);

    function movd(){
        obj.jing_ul.animate({left:-obj.width*obj.moved},150,function(){
            if(obj.moved==obj.lwidth){
                obj.moved=0;
                obj.jing_ul.css("left",0);
            }
            //左右点击的范围和样式
            obj.jing_lrt.children(`:eq(${  obj.moved/5})`).css("color"," #e0e0e0").siblings().css("color","");
        })
    }
    //执行动画效果
    function start(){
        obj.items = setInterval(()=>{
            obj.moved+=obj.lwidth/2;
            movd();
        },obj.wait);
    }
    start();

    //点击前进
    obj.ri.click(e=>{
        e.preventDefault();
        if(!obj.jing_ul.is(":animated")){
            if(obj.moved==0){
                obj.jing_ul.css('right',"100px")
            }
            obj.moved = obj.lwidth/2;
            movd();
        }
    });
    //点击后退
    obj.li.click(e=>{
        e.preventDefault();
        if(!obj.jing_ul.is(":animated")){
            if(obj.moved==0){
                obj.jing_ul.css("left","100px");
            }
            obj.moved=0;
            movd();
        }
    });
    //鼠标放上定时器停止
    obj.jing_pin.hover(function(){
        clearInterval(obj.items);
        obj.items=null;
    },function(){
        start();
    })
});