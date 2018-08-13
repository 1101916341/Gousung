$(function(){
var lid = location.search.split("=")[1];
$.get("data/details/details.php",{lid},function(data){
//    console.log(data);
//解构需要的数据
var {prot,specs,pics} = data;
// console.log(specs);
//基本信息数据
var {title,youhui,chengnuo,price,pingjia,xiaoliang} = prot;
$("#title_h2").html(title);
$("#youhui").html(youhui);
$("#chengnuo").html(chengnuo);
$("#jiage").html(parseFloat(price).toFixed(2)+"元");
$("#yue").html(xiaoliang);
$("#leiji").html(xiaoliang);
$("#pingjia").html(pingjia);

//循环拼接跳转查询功能
var html ="";
html+=` <span id="baozhuang">包装</span>`;
for(spec of specs){
    var {lid,leixing} =spec;
    html+=`<a href="details.html?lid=${lid}" class="${lid==prot.lid?'ement2':''}">${leixing}</a>`;
}
    $(".details_baozhuang").html(html);

//宝贝详情数据
var {leixing,yuanliao,chandi,peisong,guige,dates,chanpin,bianhao,cucun,shiyong} = prot;
$(".details_img_wenzi").html(`<h3>产品参数:<i class="fa fa-th-list"></i></h3>
        <ul class="details_img_list">
            <li>产品类型: ${leixing}</li>
            <li>原料产地: ${yuanliao}</li>
            <li>产地: ${chandi}</li>
            <li>配料表: ${peisong}</li>
            <li>产品规格: ${guige}</li>
            <li>保质期: ${dates}</li>
            <li>产品标准号: ${chanpin}</li>
            <li>生产许可证编号： ${bianhao}</li>
            <li>储存方法： ${cucun}</li>
            <li>食用方法： ${shiyong}</li>
        </ul>`);

//左侧商品广告功能
var html = "";
for(var pic of pics){
    var {md} = pic;
    var {price,jieshao} = prot;
    html +=`<li>
            <img src="${md}" alt="">
            <a href="">${jieshao}</a>
            <b>${parseFloat(price).toFixed(2)+"元"}</b>
        </li>`;
}
$(".details_img_ul").html(html);
//左侧商品广告功能结束

//放大镜功能开始

var html ="";
for(var pic of pics){
    // console.log(pic);
    //小图片循环 显示
  var {sm,md,lg} = pic;
  html+=`<img src="${sm}" data-md="${md}" data-lg="${lg}" alt="">`;
}
var sm_img =$(".details_cont_list");
sm_img.html(html); //小图片循环 显示

//中图片
// var md_img = $("#md_img");
var md_img = document.querySelector("#md_img");
// console.log(md_img);
md_img.src = pics[0].md;
//大图片
// var lg_img =$("#lg_img");
var lg_img = document.querySelector("#lg_img");
lg_img.style.backgroundImage="url("+pics[0].lg+")";

//鼠标移动功能
$(".details_cont_list>img").mouseover(function(){
    var img = $(this)[0];
   if(img.nodeName=="IMG"){
    md_img.src =img.getAttribute("data-md");
    lg_img.style.backgroundImage="url("+img.getAttribute('data-lg')+")";
   }
});

var mask = $("#mask"), box_md=$(".box_md"), box_lg=$(".box_lg"),mask2 = document.querySelector("#mask");
 // //当鼠标移入
box_md.mouseover(function(){
    mask.show();
    box_lg.show();
});
// //当鼠标移出
box_md.mouseout(function(){
    mask.hide();
    box_lg.hide();
});
//当鼠标移动时
    var msi =150 ,siz=350,max = siz-msi;
    box_md.mousemove(function(e){
        var left=e.offsetX-msi/2;
        var top=e.offsetY-msi/2;
        if(left<0) left=0; else if(left>max) left=max;
        if(top<0) top=0; else if(top>max) top=max;
        lg_img.style.backgroundPosition=-16/7 * left + "px "+ -16/7 * top + "px ";
        mask2.style.left=left+"px";
        mask2.style.top=top+"px";
    })

//当鼠标移动时结束


//放大镜功能结束
},
"json");

//省级联动开始
var one=['北京市', '上海市', '浙江省'];
var two=[
['东城区', '西城区', '海淀区'],
['闵行区', '浦东区', '金山区'],
['杭州市', '宁波市', '绍兴市', '嘉兴市']
];
var htt = "<option>"+one.join("</option><option>")+"</option>";
//console.log(htt);
var ones=$("#select-province"),
selCts=$("#select-city");
ones.html(ones.html()+htt).change(function(){
var i = ones.prop("selectedIndex");
//alert(i);
selCts.children(":gt(0)").remove();
if(i>0){
    var cst = two[i-1];
    var htt="<option>"+cst.join("</option><option>")+"</option>";
}
selCts.html(selCts.html()+htt);
});
//省级联动结束
//  优惠券功能
$(".ul_1>span").click(function(){
$(".right_li").toggle();
});
//优惠券功能结束
//选择的功能
$(".details_pinzhong").on("click","em",function(){
$(this).addClass("ement").siblings().removeClass("ement");
});
$(".details_baozhuang").on("click","a",function(){
$(this).addClass("ement2").siblings().removeClass("ement2");
});
//选择的功能结束

 //详情页加减功能
    $("#btne").on("click",".li_jian,.li_jia",function(){
        var  span =$(this);
        // console.log(span);
        var count = parseInt(span.siblings("i").html());
        if(span.is(".li_jia")){
            span.siblings("i").html(++count);
            // console.log(count);
        }else if(span.is(".li_jian")){
            if(count>1){
                span.siblings("i").html(--count);
                //   console.log(count);
            }
        }
    });
//详情页加减功能结束

    //
    var lid = location.search.split("=")[1];
    $.get("data/details/details.php",{lid},function(data) {
        var {prot,specs,pics} = data;
        var html = "";
        var {lid} =prot;
        html+=` <a href="carts.html" class="li_goumai">立即购买</a>
                 <a class="li_cart" data-lid="${lid}">加入购物车</a>`;
        $("#bttten").html(html);
      //  console.log(lid);
//点击加入购物车功能
    $("#bttten").on("click",".li_cart",function(e){
        e.preventDefault();
        var $a = $(this);
        $.ajax({
            type: "get",
            url: "data/users/start_session.php",
            success:function(data){
                // console.log(data);
                if(data.ok==1){
                    var lid = $a.data("lid");
                    //console.log(lid);
                    var count = $(".li_zhi").html();
                    alert("添加成功");
                    loadCart();
                    $.ajax({
                        type:"get",
                        url:"data/carts/insert_cart.php",
                        data:{lid,count},
                        success:function(){
                            loadCart();
                            count = $(".li_zhi").html(1);
                        }
                    })
                }else{
                    alert("请先登录!");
                    location.href="login.html?back="+location.href;
                }
            }
        })
    });
});
//点击加入购物车功能结束

});
