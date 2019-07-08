<template>
  <div class="horizontalAll">
    <div class="car-status">
      <p>
        <span>全部车辆</span>
        <span style="#006BFF">20</span>

        <span>行驶车辆</span>
        <span style="color:#22AC38">17</span>

        <span>停车车辆</span>
        <span style="color:#00B7EE">1</span>

        <span>离线车辆</span>
        <span style="color:#808080">2</span>

        <span>台塑车辆</span>
        <span style="color:#FF9000">0</span>
      </p>
    </div>
    <div class="select-menu">
      <el-dropdown  style="padding:3px 6px">
        <span class="el-dropdown-link">
          <i class="el-icon-s-cooperation"></i>
          工具箱
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="fullScreen">
      <img src="../../image/timeMonitor/fullScreen.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
span:nth-child(even) {
  padding-right: 6px;
}
span:nth-child(odd) {
  padding: 0 4px;
}
.horizontalAll {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 20px;
  height: auto;
  margin-top: 25px;
}
.horizontalAll .select-menu {
  margin: 0px 5px;
}
.car-status p {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  /* background-color: black */
}
.fullScreen img{
    width: 26px;
    height: 26px;
}
</style>
