<template>
  <div class="customNavigation">
    <span>企业车辆运营平台</span>
    <span class="server">
      客服电话：400-85-0510
      <img src="../image/timeMonitor/day.png">
      <img src="../image/timeMonitor/ideas.png">
      <img src="../image/timeMonitor/news.png">
      <img src="../image/timeMonitor/customService.png">
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.customNavigation {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #1b1e24;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
}
.customNavigation span {
  margin-left: 15px;
}
.server img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  padding-bottom: 3px;
  padding-right: 15px;
}
img:nth-child(1) {
  margin-left: 25px;
}
</style>
