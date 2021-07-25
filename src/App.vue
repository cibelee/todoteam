<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span style="width=50px;margin-right:1000px">sdfsf</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button>王小虎</el-button>  
        </el-header>

      <el-container style="background-color:#C0C4CC">
            <el-aside
              width="200px"
              style="background-color: rgb(64,158,255)"
            >
              <el-menu :default-openeds="['1', '3']" style="height:100%;background-color: rgb(64,158,255)">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-message" style="color:#FFFFFF"></i>
                    <span style="color:#FFFFFF">导航一</span>
                  </template>
                  <el-menu-item-group style="background-color: rgb(64,158,255)">
                    <el-menu-item index="1-1" style="color:#ffffff">选项1</el-menu-item>
                    <el-menu-item index="1-2" style="color:#ffffff">选项2</el-menu-item>
                    <el-menu-item index="1-3" style="color:#ffffff">选项3</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"
                    ><i class="el-icon-menu" style="color:#FFFFFF"></i>导航二</template
                  >
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"
                    ><i class="el-icon-setting" style="color:#FFFFFF"></i>导航三</template
                  >
                </el-submenu>
              </el-menu>
            </el-aside>

            <el-main>
              <el-table :data="tableData">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column
                  prop="task"
                  label="任务"
                  width="1100"
                ></el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                ></el-table-column>
                <el-table-column label="操作" width="100">
                  <el-button v-on:click="helloworld" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>
      </el-container>
    </el-container>
  </div>
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
  methods:{
    helloworld :()=>{
      axios.get('https://localhost:5001/helloworld').then(function(response){
        console.log(typeof(response));
        console.log(response);
      })
    }
  },
  created: function(){
    axios.get('https://localhost:5001/helloworld').then(response=>{
          var test1 = response.data;
          this.tableData = [test1];
          console.log(this.tableData);
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
