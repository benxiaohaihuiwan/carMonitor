<template>
  <el-container class="alarmTable">
    <el-header style="width:100%">
      <div style="background-color:#006bff;width:100%">
        <i class="el-icon-caret-right" style="color:white;font-size:18px"></i>
        <span style="margin-left:15px;font-size:20px;color:white">最新报警</span>
      </div>
    </el-header>
    <el-container style="height:100%">
        <div ref="abc" class="leftAlarmImage">
          <img src="../../image/code.png" class="image">
        </div>
        <div style="width:100%">
          <div style="display:inline">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="车牌" width="100px"></el-table-column>
              <el-table-column prop="name" label="内容" width="120px"></el-table-column>
              <el-table-column prop="address" label="时间" ></el-table-column>
            </el-table>
          </div>
        </div>
     
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "苏BX6917",
          name: "疲劳驾驶",
          address: "2019-02-32 12:93:23"
        },
        {
          date: "苏BX6917",
          name: "疲劳驾驶",
          address: "2019-02-32 12:93:23"
        },
        {
          date: "苏BX6917",
          name: "疲劳驾驶",
          address: "2019-02-32 12:93:23"
        },
        {
          date: "苏BX6917",
          name: "疲劳驾驶",
          address: "2019-02-32 12:93:23"
        }
      ]
    };
  },
  mounted() {
    this.$refs.abc.style.height = (this.tableData.length + 1) * 48 + "px";
  }
};
</script>

<style>
.alarmTable {
  display: flex;
  position: absolute;
  /* align-items: flex-end; */
  /* height: 90%; */
  float: right;
  right: 0;
  width:32%;
  bottom: 0;
}
.leftAlarmImage {
  display: flex;
  background-color: black;
  width: 80px;
  height: 240px;
  align-items: center;
}
.leftAlarmImage .image{
  width: 60px;
  height: 60px;
}
</style>
