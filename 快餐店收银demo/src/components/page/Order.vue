<template>
    <div>
        <el-table :data="tableData" border show-summary style="width: 100%">
            <el-table-column label="商品" prop="goodsName" width="150"></el-table-column>
            <el-table-column label="数量" prop="count" width="50"></el-table-column>
            <el-table-column label="价格" prop="price" width="70"></el-table-column>
            <el-table-column label="操作"  fixed="right">
                <template>
                    <el-button size="mini" @click="addOrderList(goods)">增加</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="warning" >挂单</el-button>
        <el-button type="danger" >删除</el-button>
        <el-button type="success" >结账</el-button>
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          goodsName: '藤椒劲脆香辣鸡腿堡',
          count: '100',
          price: '1800'
        }, {
          goodsName: '一二三四',
          count: '1',
          price: '18'
        }, {
          goodsName: '一二三四',
          count: '1',
          price: '18'
        }, {
          goodsName: '一二三四',
          count: '1',
          price: '18'
        }]
      }
    },
    methods:{
      //用vuex解决goodid传值问题
      //添加订单列表的方法
      addOrderList(goods){
            this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });
      }
  }
  }
</script>