<template>
  <el-table :data="tableData">
    <el-table-column type="selection" width="60"></el-table-column>
    <el-table-column prop="task" label="任务" width="1100"></el-table-column>
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column label="操作" width="100">
      <el-button type="text" size="small">查看</el-button>
      <el-button type="text" size="small">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data:()=> {
    return{
      tableData: [],
    }
    
  },
  created: function(){
    axios.get('https://localhost:5001/helloworld').then(response=>{
          var test1 = response.data;
          this.tableData = [test1];
          console.log(this.tableData);
    })
  }
}

</script>


<style>
.el-header {
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>