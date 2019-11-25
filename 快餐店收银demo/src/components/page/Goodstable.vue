<template>

    <div class="often-goods">
        <div class="title">常用商品</div>
        <div class="often-goods-list">
            <ul>
                <li v-for="goods in oftenGoods" :key="goods.goodsId">
                    <span>{{goods.goodsName}}</span>
                    <span class="o-price">￥{{goods.price}}元</span>
                </li>
    
            </ul>
        </div>
        <div class="goods-type">
            <el-tabs>
                <el-tab-pane label="汉堡">
                    <ul class='cookList'>
                        <li v-for="goods in typeGoods" :key="goods.goodsId">
                            <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                            <span class="foodName">{{goods.goodsName}}</span>
                            <span class="foodPrice">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="小食"></el-tab-pane>
                <el-tab-pane label="饮料"></el-tab-pane>
                <el-tab-pane label="套餐"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            oftenGoods:[
            {
                goodsId:1,
                goodsName:'香辣鸡腿堡',
                price:18
            }, {
                goodsId:2,
                goodsName:'田园鸡腿堡',
                price:15
            }, {
                goodsId:3,
                goodsName:'和风汉堡',
                price:15
            }, {
                goodsId:4,
                goodsName:'快乐全家桶',
                price:80
            }, {
                goodsId:5,
                goodsName:'脆皮炸鸡腿',
                price:10
            }, {
                goodsId:6,
                goodsName:'魔法鸡块',
                price:20
            }, {
                goodsId:7,
                goodsName:'可乐大杯',
                price:10
            }, {
                goodsId:8,
                goodsName:'雪顶咖啡',
                price:18
            }, {
                goodsId:9,
                goodsName:'大块鸡米花',
                price:15
            }, {
                goodsId:20,
                goodsName:'香脆鸡柳',
                price:17
          }
        ],
        typeGoods:[
            {
                goodsId:1,
                goodsImg:"@/assets/1.jpg",
                goodsName:'香辣鸡腿堡',
                price:18
            }, {
                goodsId:2,
                goodsImg:"@/assets/1.jpg",
                goodsName:'田园鸡腿堡',
                price:15
            }, {
                goodsId:3,
                goodsImg:"@/assets/1.jpg",
                goodsName:'和风汉堡',
                price:15
            }, {
                goodsId:4,
                goodsImg:"@/assets/1.jpg",
                goodsName:'快乐全家桶',
                price:80
            }, {
                goodsId:5,
                goodsImg:"@/assets/1.jpg",
                goodsName:'脆皮炸鸡腿',
                price:10
            }, {
                goodsId:6,
                goodsImg:"@/assets/1.jpg",
                goodsName:'魔法鸡块',
                price:20
            }, {
                goodsId:7,
                goodsImg:"@/assets/1.jpg",
                goodsName:'可乐大杯',
                price:10
            }, {
                goodsId:8,
                goodsImg:"@/assets/1.jpg",
                goodsName:'雪顶咖啡',
                price:18
            }, {
                goodsId:9,
                goodsImg:"@/assets/1.jpg",
                goodsName:'大块鸡米花',
                price:15
            }, {
                goodsId:20,
                goodsImg:"@/assets/1.jpg",
                goodsName:'香脆鸡柳',
                price:17
            } 
        ]
        }
    }
    
}
</script>

<style scoped>
.title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
   }
.often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:5px;
    margin:5px;
    background-color:#fff;
    }
.o-price{
    color:#58B7FF; 
    }
.goods-type {
    clear: both;
    padding:5px;
    margin:5px;
}
.cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
   }
.cookList li span{
    display: block;
    float:left;
    }
.foodImg{
    width: 40%;
    }
.foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;
    }
.foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
    }
</style>