$(function(){
    //点击选中功能
    $(".filler_pinpai").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".filler_zhonglei").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".filler_xuangou").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
    });
    var left_ul =document.querySelectorAll(".left_ul"),
         right_ul =document.querySelector(".right_ul");
    var html = "";
    //console.log(right_ul);
    //销量排序
    $(".product_xlpx").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("actives").parent().siblings().children().removeClass("actives");
        loadPind(1,'product_xlpx');
    });
    //价格优先
    $(".product_jgpx").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("actives").parent().siblings().children().removeClass("actives");
        loadPind(1,'product_jgpx');
    });
    //评价为主
    $(".product_pjpx").on("click","a",function(e){
        e.preventDefault();
        $(this).addClass("actives").parent().siblings().children().removeClass("actives");
        loadPind(1,'product_pjpx');
    });

    //综合推荐
    $(".product_zonghe").on("click","a",function (e) {
        e.preventDefault();
        $(this).addClass("actives").parent().siblings().children().removeClass("actives");
        loadPind();
    });

    //session 是否登录进行判断
    $(".dateil_div").on("click",".product_btn",function(e){
        e.preventDefault();
        var $a = $(this);
        //console.log($a);
        $.ajax({
            type:"get",
            url:"data/users/start_session.php",
            success:function(data){
                // console.log(data);
            if(data.ok==1){
                var lid = $a.data("lid");
                var count = $a.siblings(".jia_jian").children(".cart_sl").html();
             //   console.log(lid);
               // console.log(count);
                alert("添加成功");
                loadCart();
                $.ajax({
                    type:"get",
                    url:"data/carts/insert_cart.php",
                    data:{lid,count},
                    success:function(){
                        loadCart();
                    }
                })
            }else{
                alert("请先登录!");
                location.href="login.html?back="+location.href;
            }
            }
        })
    });
    //主体内容拼接
    var left_ul = $(".left_ul");
    function loadPind(pno=1,type='') {
       // console.log(pno,type);
        var kw = location.search.split("=")[1];
        $.ajax({
            type: "get",
            url: "data/products/products_list.php",
            data: {kw, pno, type},
            success: function (data){
                //console.log(data.pno);
                //结构一下拿过来的数据
            var {products,pageCount} = data;
            let html = "";
            for(var p of products){
                var {lid,md,title,price,jieshao,xiaoliang} = p;
                //  console.log(p.lid)
                  html+=`<li><a href="details.html?lid=${lid}" alt="${title}">
                    <img src="${md}" alt="">
                    <p class="product_jieshao">${jieshao}</p>
                   </a>
                    <div class="product_niu">
                    <p class="jia_jian">
                    <input type="button" class="reduce" value="-">
                    <em class="cart_sl">1</em>
                    <input type="button" class="add" value="+">
                    </p>
                    <a href="" class="product_btn" data-lid="${lid}">加入购物车</a>
                    </div>
                    <p class="ding_dan">
                    <b>￥ ${parseFloat(price).toFixed(2)}</b>
                    <span>销量${xiaoliang}</span>
                    </p>
                    </li>`;
                }
                left_ul.html(html);

                var  htmls="";
                //底部导航拼接
                var pno=parseInt(data.pno);
                //console.log(pno);
                var pageC = parseInt(data.pageCount);
                //console.log(pageC);
                if(pno-1>0){
                    htmls+=`<li><a href="${pno-1}">上一页</a></li>`;
                }else{
                    htmls+=``;
                }
                if(pno-2>0){            //上两页
                    htmls+=`<li><a href="${pno-2}">${pno-2}</a></li>`;
                }
                if(pno-1>0){                //上一页
                    htmls+=`<li><a href="${pno-1}">${pno-1}</a></li>`;
                }
               htmls+=`<li><a href="${pno}" class="actt">${pno}</a></li>`;     //当前页
                if(pno+1<=pageC){               //下一页
                    htmls+=`<li><a href="${pno+1}">${pno+1}</a></li>`;
                }
                if(pno+2<=pageC){            //下下一页
                    htmls+=`<li><a href="${pno+2}">${pno+2}</a></li>`;
                }
                if(pno+1<=pageC){
                    htmls+=`<li><a href="${pno+1}">下一页</a></li>`;
                }else{
                    htmls+=``;
                }
                $(".page").html(htmls);

                //加减按钮功能
                $(".jia_jian").on("click",".add,.reduce",function(){
                    var  span =$(this);
                    // console.log(span);
                    var count = parseInt(span.siblings("em").html());
                    if(span.is(".add")){
                        span.siblings("em").html(++count);
                       // console.log(count);
                    }else if(span.is(".reduce")){
                        if(count>1){
                            span.siblings("em").html(--count);
                           // console.log(count);
                        }
                    }
                });
                //当前页加减功能结束
            }
        });
        }
        loadPind();


    //底部导航拼接(分页按钮)
    $(".page").on("click","li a",function(e){
        e.preventDefault();
        //console.log(1);
        var pno = parseInt($(this).attr("href"));
        var type = $('.filler_left a.actives').parent().attr('class');
        loadPind(pno,type);
    })
    //右侧广告内容拼接
 var right_ul = $(".right_ul");
    $.ajax({
        type:"get",
        url:"data/products/products_list_you.php",
        data:{qqid:2},
        dataType:"json",
        success:function (data) {
         //  console.log(data);
        let html ="";
        for(var j of data){
        var {md,jieshao,price,xiaoliang} = j;
        html+=`<li><a href="">
                <img src="${md}" alt="">
                <p class="product_jieshao">${jieshao}</p>
               </a>
                <div class="product_niu">
                <p class="jia_jian">
                <input type="button" class="reducea" value="-">
                <em>1</em>
                <input type="button" class="adda" value="+">
                </p>
                <a href="" class="product_btn">加入购物车</a>
                </div>
                <p class="ding_dan">
                <b>￥ ${parseFloat(price).toFixed(2)}</b>
                <span>销量${xiaoliang}</span>
                </p>
                </li>`;
        }
            right_ul.html(html);
            $(".jia_jian").on("click",".adda,.reducea",function(){
                var  span =$(this);
                // console.log(span);
                var count = parseInt(span.siblings("em").html());
                if(span.is(".adda")){
                    span.siblings("em").html(++count);
                }else if(span.is(".reducea")){
                    if(count>1){
                        span.siblings("em").html(--count);
                    }
                }
            })
        },
        error:function () {
            alert("网络故障，请检查");
        }
    })
    // 循环拼接猜你喜欢
    var cai_ul = $(".cai_ul");
    $.ajax({
        type:"get",
        url:"data/products/products_lunboimg.php",
        dataType:"json",
        success:function(data){
           // console.log(data);
            let html ="";
            for(var j of data){
                var {img,jieshao2,hreff,price,xiaoliang} = j;
                html+=`<li>
                        <a href="${hreff}">
                            <img src="${img}" alt="">
                            <p>${jieshao2}</p>
                        </a>
                        <div class="product_niu">
                        <p class="jia_jian">
                        <input type="button" class="reduces" value="-">
                        <em>1</em>
                        <input type="button" class="adds" value="+">
                        </p>
                        <a href="" class="product_btn">加入购物车</a>
                        </div>
                        <p class="ding_dan">
                        <b>￥ ${parseFloat(price).toFixed(2)}</b>
                        <span>销量${xiaoliang}</span>
                        </p>
                        </li>`;
            }
            cai_ul.html(html);
            $(".jia_jian").on("click",".adds,.reduces",function(){
                var  span =$(this);
                // console.log(span);
                var count = parseInt(span.siblings("em").html());
                if(span.is(".adds")){
                    span.siblings("em").html(++count);
                }else if(span.is(".reduces")){
                    if(count>1){
                        span.siblings("em").html(--count);
                    }
                }
            })
        }
    });
});
