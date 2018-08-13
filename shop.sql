#设置客户端连接服务器使用UTF8编码
SET NAMES UTF8;
#如果有shop数据库的话丢弃
DROP DATABASE IF EXISTS shop;
#创建数据库shop ，使用UTF8编码
CREATE DATABASE shop CHARSET=UTF8;
#进入数据库
USE shop;
#创建轮播表 
CREATE TABLE shop_index_carousel(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(32),
    title VARCHAR(16),
    href VARCHAR(32)
);
#插入图片数据
INSERT INTO shop_index_carousel VALUES(NULL,'img/lunbo/ad1.jpg','轮播商品广告1','details.html?lid=5');
INSERT INTO shop_index_carousel VALUES(NULL,'img/lunbo/ad2.jpg','轮播商品广告2','details.html?lid=9');
INSERT INTO shop_index_carousel VALUES(NULL,'img/lunbo/ad3.jpg','轮播商品广告3','products.html?lid=2');
INSERT INTO shop_index_carousel VALUES(NULL,'img/lunbo/ad4.jpg','轮播商品广告4','details.html?lid=8');

#创建限时秒杀表
CREATE TABLE shop_index_miaosha(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(32),
    title VARCHAR(16),
    jieshao VARCHAR(32),
    price INT,
    href VARCHAR(32)
);
#创建限时秒杀数据
INSERT INTO shop_index_miaosha VALUES(NULL,"img/xianshi/sal1.png","ZEK 干果特产","干果特产",9.90,"details.html?lid=5"),
(NULL,"img/xianshi/sal2.png","清风纸抽-原木纯品","清风纸抽-原木纯品",9.90,"details.html?lid=7"),
(NULL,"img/xianshi/sal3.png","海飞丝限量版","海飞丝限量版",9.90,"details.html?lid=11"),
(NULL,"img/xianshi/sal4.png","美味果拼","美味果拼",9.90,"details.html?lid=12");

#创建楼层导航数据表
CREATE TABLE shop_index_product(
	did INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(16),
	jieshao VARCHAR(32),
	li1 VARCHAR(8),
	li2 VARCHAR(8),
	li3 VARCHAR(8),
	li4 VARCHAR(8),
	li5 VARCHAR(8),
	li6 VARCHAR(8),
    href VARCHAR(32)
);
#创建楼层导航数据
INSERT INTO shop_index_product VALUES(NULL,"1F 水果","每一种水果都有一个故事","桂圆","黑加仑葡萄","樱桃","鸭梨","猕猴桃","更多美味","details.html?lid=12");
INSERT INTO shop_index_product VALUES(NULL,"2F 甜点","每一个甜点都有一份爱情","猴菇饼干","泡芙","牛奶炖蛋","双皮奶","五月树布丁","更多美味","details.html?lid=12");
INSERT INTO shop_index_product VALUES(NULL,"3F 酒水","每一杯酒都有不一样情怀","白兰地","威士忌","荷兰金酒","伏特加","朗姆酒","更多美味","details.html?lid=12");
INSERT INTO shop_index_product VALUES(NULL,"4F 海鲜","每一只海鲜都有不一样的机遇","生蚝","扇贝","海胆刺身龙虾","鱿鱼","三文鱼","更多美味","details.html?lid=12");

#创建楼层内容图片数据表
CREATE TABLE shop_index_img(
	  iid INT PRIMARY KEY AUTO_INCREMENT,
	  fid INT,
	  h2 VARCHAR(16),
	  span VARCHAR(16),
	  prices INT,
	  imgs VARCHAR(32),
	  hrefs VARCHAR(32)
);
#创建楼层内容图片数据
INSERT INTO shop_index_img VALUES(NULL,1,"烟台红富士苹果","烟台红富士苹果 12个 2.6kg",68.00,"img/louceng/F1/shuiguo1.png","details.html?lid=11"),
(NULL,1,"越南进口红心火龙果","越南进口红心火龙果 4个装 单果约350~420g",32.00,"img/louceng/F1/shuiguo5.png","details.html?lid=12"),
(NULL,1,"水蜜桃","水蜜桃 3.5kg12个 单果250-300g",23.20,"img/louceng/F1/shuiguo3.png","details.html?lid=9"),
(NULL,1,"小台农芒果","小台农芒果 1kg装 单果50g以上",42.30,"img/louceng/F1/shuiguo4.png","details.html?lid=8"),
(NULL,1,"新疆库尔勒香梨","1kg装 单果50g以上 新鲜水果",48.30,"img/louceng/F1/shuiguo2.png","details.html?lid=2"),
(NULL,1,"夏黑无籽葡萄","新疆库尔勒香梨 精选特级大果",32.30,"img/louceng/F1/shuiguo6.png","details.html?lid=1"),
(NULL,1,"四川安岳黄柠檬8颗","一级大果 单果约100-120g",22.30,"img/louceng/F1/shuiguo7.png","details.html?lid=5");

INSERT INTO shop_index_img VALUES(NULL,2,"椰丝球面包","早餐糕点点心 零食甜点小吃300g  12个 2.6kg",68.00,"img/louceng/F2/tian1.png","details.html?lid=9"),
(NULL,2,"蔓越莓曲奇饼干","牛奶蔓越莓味 软心曲奇",33.00,"img/louceng/F2/tian5.png","details.html?lid=9"),
(NULL,2,"夹克咪","早餐蛋糕点心零食甜点小吃200g",41.20,"img/louceng/F2/tian3.png","details.html?lid=9"),
(NULL,2,"下午茶点心","零食甜点糕点西点茶歇小蛋糕 小切块",47.30,"img/louceng/F2/tian4.png","details.html?lid=9"),
(NULL,2,"葡萄味夹层饼干","葡萄味夹层饼干 实惠分享装360g",38.30,"img/louceng/F2/tian2.png","details.html?lid=9"),
(NULL,2,"椰丝球210g/袋","零食小吃糕点甜点休闲点心",55.30,"img/louceng/F2/tian6.png","details.html?lid=9"),
(NULL,2,"法式小面包700g","香奶味早餐软面包早点软面包甜点整箱批发",72.30,"img/louceng/F2/tian7.png","details.html?lid=9");

INSERT INTO shop_index_img VALUES(NULL,3,"Budweiser","百威啤酒500ml*18听",368.00,"img/louceng/F3/jiu1.png","details.html?lid=9"),
(NULL,3,"天虫38度","内蒙古雄养生酒露酒蚕蛾养身白酒500ml礼盒装",132.00,"img/louceng/F3/jiu5.png","details.html?lid=9"),
(NULL,3,"女儿红","绍兴黄酒 五年陈 精品黄酒 半干型 1.5L",423.20,"img/louceng/F3/jiu3.png","details.html?lid=9"),
(NULL,3,"雪花啤酒","雪花啤酒 冰酷 330ml*24听 整箱装 【爆款】",421.30,"img/louceng/F3/jiu4.png","details.html?lid=9"),
(NULL,3,"百威（Budweiser）","啤酒 大瓶装 460ml*12瓶 ",428.30,"img/louceng/F3/jiu2.png","details.html?lid=9"),
(NULL,3,"德国进口（Eichbaum）","爱士堡小麦啤酒 500ml*24 听 ",332.30,"img/louceng/F3/jiu6.png","details.html?lid=9"),
(NULL,3,"墨西哥进口","科罗娜（Corona）啤酒 330ml*24瓶 整箱",212.30,"img/louceng/F3/jiu7.png","details.html?lid=9");

INSERT INTO shop_index_img VALUES(NULL,4,"海参","海参有壮阳、益气、通肠润燥、止血消炎等功效",88.00,"img/louceng/F4/hai1.png","details.html?lid=9"),
(NULL,4,"鳗鱼","鳗鱼能补虚壮阳、除风湿、强筋骨、调节血糖",132.00,"img/louceng/F4/hai5.png","details.html?lid=9"),
(NULL,4,"海蛇","海蛇能补肾壮阳，治肾虚阳痿，并有祛风通络、活血养肤之功效",213.20,"img/louceng/F4/hai3.png","details.html?lid=9"),
(NULL,4,"澳洲大龙虾","虾有补肾壮阳的功能，尤以淡水活虾的壮阳益精作用最强",432.30,"img/louceng/F4/hai4.png","details.html?lid=9"),
(NULL,4,"带鱼","带鱼有壮阳益精、补益五脏之功效，对气血不足",428.30,"img/louceng/F4/hai2.png","details.html?lid=9"),
(NULL,4,"瑶柱","瑶柱（鲜贝）营养成分很高，含蛋白质",232.30,"img/louceng/F4/hai6.png","details.html?lid=9"),
(NULL,4,"金枪鱼","金枪鱼含有大量肌红蛋白和细胞色素等色素蛋白",122.30,"img/louceng/F4/hai1.png","details.html?lid=9");

#创建列表页的内容图片数据表
CREATE TABLE shop_productslist(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    guanlian INT,
    guanggao_img INT,
    title VARCHAR(32),
    jieshao VARCHAR(32),
    youhui VARCHAR(32),
    chengnuo VARCHAR(32),
    kouwei VARCHAR(16),
    leixing VARCHAR(16),
    yuanliao VARCHAR(16),
    chandi VARCHAR(32),
    peisong VARCHAR(32),
    guige VARCHAR(16),
    dates VARCHAR(16),
    chanpin VARCHAR(16),
    bianhao VARCHAR(32),
    cucun VARCHAR(32),
    shiyong VARCHAR(32),
    price INT,
    pingjia INT,
    xiaoliang INT
);
#创建列表页的内容图片数据信息
INSERT INTO shop_productslist VALUES(NULL,1,1,"良品铺子 手剥松子218g 坚果炒货 巴西松子","【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,311434,31456);
INSERT INTO shop_productslist VALUES(NULL,2,1,"椰丝球面包 早餐糕点点心 零食甜点小吃300g","椰丝球面包 早餐糕点点心 零食甜点小吃123g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,31214,43546);
INSERT INTO shop_productslist VALUES(NULL,1,1,"葡萄味夹层饼干","葡萄味夹层饼干 实惠分享装1236g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",81.00,4214,35456);
INSERT INTO shop_productslist VALUES(NULL,3,2,"下午茶点心","零食甜点糕点西点茶歇小蛋糕 小切块120g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",141.00,2114,35156);
INSERT INTO shop_productslist VALUES(NULL,4,2,"天虫38度","内蒙古雄养生酒露酒蚕蛾养身白酒150ml礼盒装","购物满3件打8折，满3件6折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,4434,31456);
INSERT INTO shop_productslist VALUES(NULL,5,2,"法式小面包700g","香奶味早餐软面包早点软面包甜点整箱批发1700g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,2134,43546);
INSERT INTO shop_productslist VALUES(NULL,6,3,"蔓越莓曲奇饼干","蔓越莓曲奇饼干 牛奶蔓越莓味 软心曲奇1200g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",31.00,23114,13546);
INSERT INTO shop_productslist VALUES(NULL,7,3,"下午茶点心","零食甜点糕点西点茶歇小蛋糕 小切块132g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",141.00,2114,3156);
INSERT INTO shop_productslist VALUES(NULL,8,3,"良品铺子 手剥松子218g 坚果炒货 巴西松子","【良品铺子旗舰店】手剥松子3218g 坚果炒货零食新货巴西松","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,3434,131456);
INSERT INTO shop_productslist VALUES(NULL,9,4,"椰丝球面包 早餐糕点点心 零食甜点小吃300g","椰丝球面包 早餐糕点点心 零食甜点小吃1310g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,1214,423546);
INSERT INTO shop_productslist VALUES(NULL,10,4,"鳗鱼","鳗鱼能补虚壮阳、除风湿、强筋骨、调节血糖451g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",821.00,2314,353456);
INSERT INTO shop_productslist VALUES(NULL,11,4,"金枪鱼","金枪鱼含有大量肌红蛋白和细胞色素等色素蛋白 小切块171g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",181.00,2114,35156);
INSERT INTO shop_productslist VALUES(NULL,12,5,"葡萄味夹层饼干","葡萄味夹层饼干 实惠分享装3160g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",41.00,2314,35456);
INSERT INTO shop_productslist VALUES(NULL,13,5,"瑶柱","瑶柱（鲜贝）营养成分很高，含蛋白质 小切块100g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",241.00,2114,35156);
INSERT INTO shop_productslist VALUES(NULL,3,5,"良品铺子 手剥松子218g 坚果炒货 巴西松子","【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,31434,31456);
INSERT INTO shop_productslist VALUES(NULL,3,6,"椰丝球面包 早餐糕点点心 零食甜点小吃300g","椰丝球面包 早餐糕点点心 零食甜点小吃123g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,41214,43546);
INSERT INTO shop_productslist VALUES(NULL,6,6,"葡萄味夹层饼干","葡萄味夹层饼干 实惠分享装1236g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",81.00,34214,35456);
INSERT INTO shop_productslist VALUES(NULL,6,6,"下午茶点心","零食甜点糕点西点茶歇小蛋糕 小切块120g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",141.00,21114,35156);
INSERT INTO shop_productslist VALUES(NULL,1,7,"天虫38度","内蒙古雄养生酒露酒蚕蛾养身白酒150ml礼盒装","购物满3件打8折，满3件6折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,48658,31456);
INSERT INTO shop_productslist VALUES(NULL,1,7,"法式小面包700g","香奶味早餐软面包早点软面包甜点整箱批发700g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,1657,43546);
INSERT INTO shop_productslist VALUES(NULL,1,7,"蔓越莓曲奇饼干","蔓越莓曲奇饼干 牛奶蔓越莓味 软心曲奇200g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",31.00,23214,35456);
INSERT INTO shop_productslist VALUES(NULL,2,8,"下午茶点心","零食甜点糕点西点茶歇小蛋糕 小切块300g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",141.00,76514,35156);
INSERT INTO shop_productslist VALUES(NULL,2,8,"良品铺子 手剥松子218g 坚果炒货 巴西松子","【良品铺子旗舰店】手剥松子3218g 坚果炒货零食新货巴西松","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","原味","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋去壳即食",231.00,34341,31456);
INSERT INTO shop_productslist VALUES(NULL,2,8,"椰丝球面包 早餐糕点点心 零食甜点小吃300g","椰丝球面包 早餐糕点点心 零食甜点小吃1310g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","奶油","烘炒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",131.00,12314,43546);
INSERT INTO shop_productslist VALUES(NULL,5,9,"鳗鱼","鳗鱼能补虚壮阳、除风湿、强筋骨、调节血糖451g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",821.00,12314,35456);
INSERT INTO shop_productslist VALUES(NULL,5,9,"金枪鱼","金枪鱼含有大量肌红蛋白和细胞色素等色素蛋白 小切块171g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",181.00,21144,35156);
INSERT INTO shop_productslist VALUES(NULL,4,9,"葡萄味夹层饼干","葡萄味夹层饼干 实惠分享装3160g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","炭烧","干晒类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",41.00,2314,35456);
INSERT INTO shop_productslist VALUES(NULL,4,10,"瑶柱","瑶柱（鲜贝）营养成分很高，含蛋白质 小切块100g","购物满2件打8折，满3件7折","*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货","热蒸","热蒸类","巴基斯坦","湖北省武汉市"," 进口松子、食用盐","210g","180天","GB/T 22165","QS4201 1801 0226"," 请放置于常温、阴凉、通风、干燥处保存","开袋即食",241.00,22114,35156);
#创建列表轮播数据表
CREATE TABLE shop_indeximg(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    jieshao2 VARCHAR(32),
    img VARCHAR(32),
    price INT,
    xiaoliang INT,
    hreff VARCHAR(32)
);
#创建列表轮播数据
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess1.png",138,2432,"details.html?lid=9");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess2.png",158,1432,"details.html?lid=8");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess3.png",78,22432,"details.html?lid=7");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess4.png",188,24432,"details.html?lid=6");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess5.png",138,2432,"details.html?lid=5");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess6.png",158,1432,"details.html?lid=4");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess7.png",78,22432,"details.html?lid=3");
INSERT INTO shop_indeximg VALUES(NULL,"周黑鸭旗舰店_锁鲜】气调盒装卤鸭脖200g卤鸭锁骨240g鸭翅250g","img/product/lunbo2/guess8.png",138,24432,"details.html?lid=2");

#创建详情页表
CREATE TABLE shop_detailsimg(
    `xid` INT PRIMARY KEY AUTO_INCREMENT,
    `guanlian` INT,
    `sm`  VARCHAR(32),
    `md`  VARCHAR(32),
    `lg`  VARCHAR(32)
);
#创建详情页数据
INSERT INTO shop_detailsimg VALUES(NULL,1,"img/details/sm/01_sm.jpg","img/details/md/01_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,1,"img/details/sm/02_sm.jpg","img/details/md/02_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,1,"img/details/sm/03_sm.jpg","img/details/md/03_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,2,"img/details/sm/04_sm.jpg","img/details/md/04_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,2,"img/details/sm/05_sm.jpg","img/details/md/05_md.jpg","img/details/lg/05_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,2,"img/details/sm/06_sm.jpg","img/details/md/06_md.jpg","img/details/lg/06_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,3,"img/details/sm/07_sm.jpg","img/details/md/07_md.jpg","img/details/lg/07_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,3,"img/details/sm/08_sm.jpg","img/details/md/08_md.jpg","img/details/lg/08_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,4,"img/details/sm/09_sm.jpg","img/details/md/09_md.jpg","img/details/lg/09_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,4,"img/details/sm/10_sm.jpg","img/details/md/10_md.jpg","img/details/lg/10_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,5,"img/details/sm/11_sm.jpg","img/details/md/11_md.jpg","img/details/lg/11_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,5,"img/details/sm/12_sm.jpg","img/details/md/12_md.jpg","img/details/lg/12_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,6,"img/details/sm/13_sm.jpg","img/details/md/13_md.jpg","img/details/lg/13_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,6,"img/details/sm/14_sm.jpg","img/details/md/14_md.jpg","img/details/lg/14_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,7,"img/details/sm/15_sm.jpg","img/details/md/15_md.jpg","img/details/lg/15_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,7,"img/details/sm/16_sm.jpg","img/details/md/16_md.jpg","img/details/lg/16_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,8,"img/details/sm/17_sm.jpg","img/details/md/17_md.jpg","img/details/lg/17_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,8,"img/details/sm/18_sm.jpg","img/details/md/18_md.jpg","img/details/lg/18_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,8,"img/details/sm/19_sm.jpg","img/details/md/19_md.jpg","img/details/lg/19_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,9,"img/details/sm/20_sm.jpg","img/details/md/20_md.jpg","img/details/lg/20_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,9,"img/details/sm/21_sm.jpg","img/details/md/21_md.jpg","img/details/lg/21_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,9,"img/details/sm/22_sm.jpg","img/details/md/22_md.jpg","img/details/lg/22_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,10,"img/details/sm/23_sm.jpg","img/details/md/23_md.jpg","img/details/lg/23_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,10,"img/details/sm/24_sm.jpg","img/details/md/24_md.jpg","img/details/lg/24_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,11,"img/details/sm/25_sm.jpg","img/details/md/25_md.jpg","img/details/lg/25_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,11,"img/details/sm/26_sm.jpg","img/details/md/26_md.jpg","img/details/lg/26_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,12,"img/details/sm/27_sm.jpg","img/details/md/27_md.jpg","img/details/lg/27_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,12,"img/details/sm/28_sm.jpg","img/details/md/28_md.jpg","img/details/lg/28_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,13,"img/details/sm/29_sm.jpg","img/details/md/29_md.jpg","img/details/lg/29_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,13,"img/details/sm/21_sm.jpg","img/details/md/21_md.jpg","img/details/lg/21_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,14,"img/details/sm/01_sm.jpg","img/details/md/01_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,14,"img/details/sm/02_sm.jpg","img/details/md/02_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,15,"img/details/sm/03_sm.jpg","img/details/md/03_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,15,"img/details/sm/04_sm.jpg","img/details/md/04_md.jpg","img/details/lg/01_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,16,"img/details/sm/05_sm.jpg","img/details/md/05_md.jpg","img/details/lg/05_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,14,"img/details/sm/06_sm.jpg","img/details/md/06_md.jpg","img/details/lg/06_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,16,"img/details/sm/07_sm.jpg","img/details/md/07_md.jpg","img/details/lg/07_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,16,"img/details/sm/08_sm.jpg","img/details/md/08_md.jpg","img/details/lg/08_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,15,"img/details/sm/09_sm.jpg","img/details/md/09_md.jpg","img/details/lg/09_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,17,"img/details/sm/10_sm.jpg","img/details/md/10_md.jpg","img/details/lg/10_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,18,"img/details/sm/11_sm.jpg","img/details/md/11_md.jpg","img/details/lg/11_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,17,"img/details/sm/12_sm.jpg","img/details/md/12_md.jpg","img/details/lg/12_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,16,"img/details/sm/13_sm.jpg","img/details/md/13_md.jpg","img/details/lg/13_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,16,"img/details/sm/14_sm.jpg","img/details/md/14_md.jpg","img/details/lg/14_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,17,"img/details/sm/15_sm.jpg","img/details/md/15_md.jpg","img/details/lg/15_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,18,"img/details/sm/16_sm.jpg","img/details/md/16_md.jpg","img/details/lg/16_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,19,"img/details/sm/17_sm.jpg","img/details/md/17_md.jpg","img/details/lg/17_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,20,"img/details/sm/18_sm.jpg","img/details/md/18_md.jpg","img/details/lg/18_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,20,"img/details/sm/19_sm.jpg","img/details/md/19_md.jpg","img/details/lg/19_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,21,"img/details/sm/20_sm.jpg","img/details/md/20_md.jpg","img/details/lg/20_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,22,"img/details/sm/21_sm.jpg","img/details/md/21_md.jpg","img/details/lg/21_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,22,"img/details/sm/22_sm.jpg","img/details/md/22_md.jpg","img/details/lg/22_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,23,"img/details/sm/23_sm.jpg","img/details/md/23_md.jpg","img/details/lg/23_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,24,"img/details/sm/24_sm.jpg","img/details/md/24_md.jpg","img/details/lg/24_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,25,"img/details/sm/25_sm.jpg","img/details/md/25_md.jpg","img/details/lg/25_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,25,"img/details/sm/26_sm.jpg","img/details/md/26_md.jpg","img/details/lg/26_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,26,"img/details/sm/27_sm.jpg","img/details/md/27_md.jpg","img/details/lg/27_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,27,"img/details/sm/28_sm.jpg","img/details/md/28_md.jpg","img/details/lg/28_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,28,"img/details/sm/29_sm.jpg","img/details/md/29_md.jpg","img/details/lg/29_lg.jpg");
INSERT INTO shop_detailsimg VALUES(NULL,28,"img/details/sm/21_sm.jpg","img/details/md/21_md.jpg","img/details/lg/21_lg.jpg");
#创建用户表
CREATE TABLE shop_users(
  `uid` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int
);
INSERT INTO shop_users VALUES (null, 'dingding', '123456', 'ding@qq.com', '13511011000','丁春秋', 0);
INSERT INTO shop_users VALUES (null, 'dangdang', '123456', 'dang@qq.com', '13501234568','当当喵',1);
INSERT INTO shop_users VALUES (null, 'doudou', '123456', 'dou@qq.com', '13501234569','窦志强', 1);
INSERT INTO shop_users VALUES (null, 'yaya', '123456', 'ya@qq.com', '13501234560', '秦小雅', 0);
INSERT INTO shop_users VALUES (null, '1111', '111111', '441977193@qq.com', '18357100796', '丁春秋2', 1);
INSERT INTO shop_users VALUES (null, 'ABCD', '123456', '123@qq.com', '13538894495', '大牛股', 0);
INSERT INTO shop_users VALUES (null, 'mohk', '123456', '11@qq.com', '13512312312', '罚点啥', 0);
INSERT INTO shop_users VALUES (null, '121123', 'w13945128995', '491000888@qq.com','13538894495','蕾哈', 0);
INSERT INTO shop_users VALUES (null, '555555', '5555555', '55555555@163.com', '13511011000','和七日',1);
INSERT INTO shop_users VALUES (null, 'xuyong', '123456', '123456789@qq.com', '15525623622', '金坷垃', 0);
INSERT INTO shop_users VALUES (null, 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', '大大', 1);
INSERT INTO shop_users VALUES (null, 'siyongbo', '900427', '616188545@qq.com', '18447103998','热污染', 1);

#创建用户购物车数量表
CREATE TABLE shop_cartitem(
  `imid` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
   `user_id` INT,
   `p_lid` INT,
   `counts` INT,
   `is_checked` INT
);
#创建用户购物车数量的数据
INSERT INTO shop_cartitem  VALUES(NULL,1,1,2,1);
INSERT INTO shop_cartitem  VALUES(NULL,1,5,1,1);
INSERT INTO shop_cartitem  VALUES(NULL,1,1,2,1);
INSERT INTO shop_cartitem  VALUES(NULL,2,1,3,1);
INSERT INTO shop_cartitem  VALUES(NULL,3,2,1,1);
INSERT INTO shop_cartitem  VALUES(NULL,4,2,4,1);
INSERT INTO shop_cartitem  VALUES(NULL,5,2,1,1);
INSERT INTO shop_cartitem  VALUES(NULL,6,3,2,1);
INSERT INTO shop_cartitem  VALUES(NULL,7,1,3,1);
INSERT INTO shop_cartitem  VALUES(NULL,8,1,1,1);
INSERT INTO shop_cartitem  VALUES(NULL,9,1,4,1);
INSERT INTO shop_cartitem  VALUES(NULL,10,1,2,1);
INSERT INTO shop_cartitem  VALUES(NULL,11,1,2,1);
INSERT INTO shop_cartitem  VALUES(NULL,12,1,1,1);



