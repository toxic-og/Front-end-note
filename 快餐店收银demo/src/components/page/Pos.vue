<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="8" class="pos-order" id="order-list">
          <Tableorder name="Tableorder"></Tableorder>
        </el-col>
        <el-col :span="16" >
          <Goodstable name="Goodtable"></Goodstable>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Tableorder from '@/components/page/Tableorder'
import Goodstable from '@/components/page/Goodstable'
export default {
  name: 'Pos',
  components: {
    "Tableorder": Tableorder,
    "Goodstable": Goodstable
  },
  mounted: function(){
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height = orderHeight + 'px'
  }
}
</script>


<style scoped>
 .pos-order{
   background-color: #f9fafc;
   border-right: 1px solid #c0ccda;
 }
</style>