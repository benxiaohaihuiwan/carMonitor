<template>
  <el-aside  id='all'>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <img  src="../../image/timeMonitor/menu.png" alt="功能菜单" />
          <span slot="title">功能菜单</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">行驶报表</span>
          <el-menu-item index="1-4-1">时间点位置报表</el-menu-item>
        </el-submenu>
      </el-submenu>

<el-submenu index="2">
        <template slot="title">
          <img  src="../../image/timeMonitor/allMonitor.png" alt="实时监控" />
          <span slot="title">实时监控</span>
        </template>
       <el-submenu index="1-4">
          <span slot="title">行驶报表</span>
          <el-menu-item index="1-4-1">时间点位置报表</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <img  src="../../image/timeMonitor/carsFllower.png" alt="多车跟踪" />
          <span slot="title">多车跟踪</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<el-submenu index="4">
        <template slot="title">
          <img  src="../../image/timeMonitor/alarm.png" alt="报警处理" />
          <span slot="title">报警处理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <img  src="../../image/timeMonitor/analysis.png" alt="统计分析" />
          <span slot="title">统计分析</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <div @click="collapseStatus" style="float:right">
        <img :src="flagArrow?leftArrow:rightArrow" />
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      flagArrow: true,
      leftArrow:require('../../image/timeMonitor/leftArrow.png'),
      rightArrow:require('../../image/timeMonitor/rightArrow.png'),
    };
  },
  mounted() {
      
document.getElementById('all').style.width = "60px";
      
      
      
  },
  methods: {
    collapseStatus() {
      this.isCollapse = !this.isCollapse;
      this.flagArrow =  !this.flagArrow;
      if(this.flagArrow){
document.getElementById('all').style.width = "60px";
      }else{
document.getElementById('all').style.width = "180px";
        
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: auto;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-submenu__title,
.el-submenu .el-menu-item,
.el-menu-item-group__title {
    color: white;
}
.el-submenu__title img {
    margin-right: 5px;
}
.el-menu {
    color: white;
    background-color: #1B1E24;
    height: 100%;
    overflow: auto;
}
.el-submenu__title:hover,
.el-submenu .el-menu-item:hover,
.el-menu-item-group__title:hover{
    background-color: #006BFF;
}
.el-aside {
  height: 100%;
}
</style>
