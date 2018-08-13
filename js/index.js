//轮播设置
$(function () {
    var ont = $("#ont"),
        ul = $("#ul"),
        yuan = $("#yuan"),
        left = $(".left"),
        right = $(".right"),
        width = 980,
        moved = 0,
        timer,
        wait = 2400,
        inter = 600;
    $.ajax({
        type: "get",
        url: "data/index/index_lunbo.php",
        dataType: "json",
        success: function (data) {
            //console.log(data);
            var html = "";
            for (var p of data) {
                // console.log(p);
                var {href, img, title} = p;
                //循环遍历出图片数据
                html += `<a href="${href}" title="${title}"><img src="${img}"></a>`;
            }
            //添加一张附属图
            var {href, img, title} = data[0];
            html += `<a href="${href}" title="${title}"><img src="${img}"></a>`;
            ul.html(html).css("width", width * (data.length + 1));
            //小圆点拼接显示
            yuan.html("<li></li>".repeat(data.length)).children(":first").addClass("active");
            //点击小圆点改变图片
            yuan.stop(true).on("click", "li", function () {
                var $li = $(this);
                var i = $li.index();
                moved = i;
                ul.animate({left: -moved * width}, inter, function () {
                    $li.addClass("active").siblings().removeClass("active");
                })
            })

            //小圆点函数创建
            function dian() {
                yuan.children("li:eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            }

            //轮播图片自动运行
            function start() {
                timer = setInterval(function () {
                    moved++;
                    move();
                }, wait);
            }

            //让图片从右向左偏移
            function move() {
                ul.animate({left: -moved * width}, inter, function () {
                    if (moved == 4) {
                        moved = 0;
                        ul.css("left", 0);
                    }
                    dian();//调用函数
                })
            }

            start();
            //停止播放和开始
            ont.hover(function () {
                clearInterval(timer);
                timer = null;
            }, function () {
                start();
            })
            //点击左侧按钮
            left.click(function () {
                if (!ul.is(":animated")) {
                    if (moved == 0) {
                        moved = 4;
                        ul.css("left", -moved * width);
                    }
                    moved--;
                    move();
                }
            })
            //点击右侧按钮
            right.click(function () {
                if (!ul.is(":animated")) {
                    if (moved == 4) {
                        moved = 0;
                        ul.css("left", -moved * width);
                    }
                    moved++;
                    move();
                }
            })
        },
        error: function () {
            alert("网络故障，请检查");
        }
    });
})
//轮播设置结束

//限时抢购功能
$(function () {
    var shi = document.querySelector("[data-log=shi]");
    var fen = document.querySelector("[data-log=fen]");
    var miao = document.querySelector("[data-log=miao]");
    var entg = document.querySelector(".entg");
    var timer;
    //显示抢购拼接
    $.ajax({
        type: "get",
        url: "data/index/index_miaosha.php",
        dataType: "json",
        success: function (data) {
            var html = "";
            for (var itme of data) {
                var {img, title, jieshao, href, price} = itme;
                html += `<li>
            <i data-og="tu">
                <a href="${href}">
                    <img src="${img}" alt="" title="${jieshao}">
                </a>
            </i>
            <i data-og="tit">
                <a href="${href}">${title}</a>
            </i>
            <i data-og="price">
                <div class="price_btn">
                    <span>${price}元</span>
                    <a href="javascript:;">秒杀</a>
                </div>
            </i>
        </li>`
            }
            $(".shop").html(html);
            //console.log(data);
        },
        error: function () {
            alert("网络故障，请检测");
        }
    })

    //抢购拼接结束
    function check(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const time = parseInt(2 * 3600);
    var lefttime = time;

    function showtime() {
        lefttime--;
        var h = parseInt(lefttime % (24 * 3600) / 3600);
        //分钟的时间
        var m = parseInt(lefttime % 3600 / 60);
        //秒的时间
        var s = parseInt(lefttime % 60);
        m = check(m);
        s = check(s);
        shi.innerHTML = h;
        fen.innerHTML = m;
        miao.innerHTML = s;

        //当倒计时结束时
        if (lefttime <= 0) {
            lefttime = time;
        }
    }

    showtime();
    timer = setInterval(showtime, 1000);
// 限时抢购结束


    //楼层拼接
    //楼层的导航拼接
    let nav = $("[data-log=nav1]");
    $.ajax({
        type: "get",
        url: "data/index/index_loucengnav.php",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            let html = "";
            var {title, jieshao, li1, li2, li3, li4, li5, li6, href} = data[0];
            html += `<div class="nav_cl">
                <h2>${title}</h2>
                <em class="caret"></em>
                <span>${jieshao}</span>
            </div>
             <ul class="nav_ul">
                <li><a href="${href}">${li1}</a></li>
                <li><a href="${href}">${li2}</a></li>
                <li><a href="${href}">${li3}</a></li>
                <li><a href="${href}">${li4}</a></li>
                <li><a href="${href}">${li5}</a></li>
             </ul>
                <a href="${href}">${li6}</a>
            </div>`;
            nav.html(html);

            let nav2 = $("[data-log=nav2]");
            var {title, jieshao, li1, li2, li3, li4, li5, li6, href} = data[1];
            htt = "";
            htt += `<div class="nav_cl">
                <h2>${title}</h2>
                <em class="caret"></em>
                <span>${jieshao}</span>
            </div>
             <ul class="nav_ul">
                <li><a href="${href}">${li1}</a></li>
                <li><a href="${href}">${li2}</a></li>
                <li><a href="${href}">${li3}</a></li>
                <li><a href="${href}">${li4}</a></li>
                <li><a href="${href}">${li5}</a></li>
             </ul>
                <a href="${href}">${li6}</a>
            </div>`;
            nav2.html(htt);

            let nav3 = $("[data-log=nav3]");
            var {title, jieshao, li1, li2, li3, li4, li5, li6, href} = data[2];
            htt = "";
            htt += `<div class="nav_cl">
                <h2>${title}</h2>
                <em class="caret"></em>
                <span>${jieshao}</span>
            </div>
             <ul class="nav_ul">
                <li><a href="${href}">${li1}</a></li>
                <li><a href="${href}">${li2}</a></li>
                <li><a href="${href}">${li3}</a></li>
                <li><a href="${href}">${li4}</a></li>
                <li><a href="${href}">${li5}</a></li>
             </ul>
                <a href="${href}">${li6}</a>
            </div>`;
            nav3.html(htt);

            let nav4 = $("[data-log=nav4]");
            var {title, jieshao, li1, li2, li3, li4, li5, li6, href} = data[3];
            htt = "";
            htt += `<div class="nav_cl">
                <h2>${title}</h2>
                <em class="caret"></em>
                <span>${jieshao}</span>
            </div>
             <ul class="nav_ul">
                <li><a href="${href}">${li1}</a></li>
                <li><a href="${href}">${li2}</a></li>
                <li><a href="${href}">${li3}</a></li>
                <li><a href="${href}">${li4}</a></li>
                <li><a href="${href}">${li5}</a></li>
             </ul>
                <a href="${href}">${li6}</a>
            </div>`;
            nav4.html(htt);
        },
        error: function () {
            alert("网络故障，请检查");
        }
    });
    //循环遍历楼层导航结束

    //遍历循环楼层
for (let i = 1; i <= 4; i++) {
  $(function () {
            var j = i;
            var da_1 = $(".da_" + j);
            //console.log(da_1);
            $.ajax({
                type: "get",
                url: "data/index/index_louceng.php",
                data: {fid: j},
                dataType: "json",
                success: function (data) {
                    let html = "";
                    var num = 1;
                    for (var fid of data) {
                        var {iid, h2, span, prices, imgs, hrefs} = fid;
                        if(num == 1) {
                            html += `<ul class="da_ul">
                <li class="da_img da2">
                    <h2>${h2}</h2>
                    <p>${span}</p>
                    <span>￥${prices}</span>
                    <a href="${hrefs}"><img src="${imgs}" alt="酒图片"></a>
                    <div class="sanjiao san2"></div>
                </li>`;
                 }else if(num ==2) {
               //第二列-->
                 html += `<ul class="xiao1">
                <li>
                    <p>${span}</p>
                    <i>￥${parseFloat(prices).toFixed(2)}</i>
                    <a href="${hrefs}">
                    <img src="${imgs}" alt="">
                    </a>
                </li>`;
                  }else if (num ==3) {
                   //下半个小图-->
                   html += `<li>
                    <p>${span}</p>
                    <i>￥${parseFloat(prices).toFixed(2)}</i>
                   <a href="${hrefs}">
                    <img src="${imgs}" alt="">
                    </a>
                </li>
                </ul>`;
                    }else if(num ==4) {
                   //第三列-->
                    html += `<li class="even">
                    <h2>${h2}</h2>
                    <p>${span}</p>
                    <i>￥${prices}</i>
                    <a href="${hrefs}">
                    <img src="${imgs}" alt="">
                    </a>
                </li>`;
                   }else if(num == 5) {
                  //第四列-->
                   html += `<ul class="xiao3">
                <li>
                    <p>${span}</p>
                    <i>￥${parseFloat(prices).toFixed(2)}</i>
                   <a href="${hrefs}">
                    <img src="${imgs}" alt="">
                    </a>
                    </li>`;
                        }else if(num == 6) {
                           //下半个小图-->
                            html += `<li>
                        <p>${span}</p>
                        <i>￥${parseFloat(prices).toFixed(2)}</i>
                        <a href="${hrefs}">
                        <img src="${imgs}" alt="">
                   </a>
                </li>
              </ul>`;
             }else if (num == 7) {
                 //第五列
                  html += `<li  class="even">
                    <h2>${h2}</h2>
                    <p>${span}</p>
                    <i>￥${parseFloat(prices).toFixed(2)}</i>
                    <a href="${hrefs}">
                    <img src="${imgs}" alt="">
                    </a>
                </li>
                </ul>`;
                        }
                        num++;
                    }
                    da_1.html(html);
                },
                error: function () {
                    alert("网络故障，请检测");
                }
            });
  })
}

//   楼层拼接结束
// 楼层滚动开始
    var $ul = $("#header_nav");
    var $lou = $(".louceng");
    $(window).scroll(function () {
        //获取页面body的高度或整个屏幕的高度
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //console.log(scrollTop);
        //获取楼层 1F的高度
        var offsetTop = $("#item1").offset().top;
        //console.log(offsetTop);
        //console.log(scrollTop+innerHeight/2);
        //当 1F 高度 大于 Body的高度 除以 2 时
        if (offsetTop > scrollTop + innerHeight / 3) {
            $ul.hide();
        } else {
            $ul.show();
        }
        //遍历出楼层的个数
        $lou.each(function (i) {
            //获取当前的值
            var r = $(this);
            //获取所有楼层的 top 距离顶部的高度
            var offsetTop = r.offset().top;
            //console.log(offsetTop);
            if (offsetTop < scrollTop + innerHeight / 3) {
                $ul.children("li:eq(" + i + ")").addClass("lift_item_on").siblings().removeClass("lift_item_on");
            }
        })
    })
    //点击触发事件
    $ul.on("click", "li.lift_item", function (e) {
        e.preventDefault();
        var $li = $(this).index();
        // console.log($li);
        var $f = $($lou[$li]);
        // console.log($f);
        $("html,body").stop(true).animate({
            scrollTop: $f.offset().top
        }, 500)
    });
    //点击锚点返回顶部
    $ul.on("click", ".top", function (e) {
        e.preventDefault();
        $("html,body").animate({scrollTop: $("#top").offset().top}, 1000);
    })
    // 楼层滚动结束


})

