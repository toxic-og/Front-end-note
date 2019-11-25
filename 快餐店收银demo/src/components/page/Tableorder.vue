<template>
    <el-tabs>
        <el-tab-pane label="点餐">
            <Order></Order>
        </el-tab-pane>
        
      <el-tab-pane label="挂单">
      挂单
      </el-tab-pane>
      <el-tab-pane label="外卖">
      外卖
     </el-tab-pane>
    </el-tabs>
  
</template>

<script>
import Order from '@/components/page/Order'
  export default {
    components: {
        "Order": Order
    }
  }
</script>