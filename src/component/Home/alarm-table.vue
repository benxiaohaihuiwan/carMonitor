<template>
  <div>
    <p style="background-color:#006bff;width:95%">
      <i class="el-icon-caret-right" style="color:white;font-size:18px"></i>
      <span style="margin-left:15px;font-size:20px;color:white">最新报警</span>
    </p>
    <div style="width:100%">
      <div
        ref="abc"
        style="width:15%;background-color:black;display:inline;float:left;text-align:center"
      >
        <img src="../../image/code.png" class="image">
      </div>
      <div style="width:80%;display:inline">
        <el-table :data="tableData" border style="width: 80%">
          <el-table-column prop="date" label="车牌" width="100px"></el-table-column>
          <el-table-column prop="name" label="内容" width="120px"></el-table-column>
          <el-table-column prop="address" label="时间" ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
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
.image {
  width: 50px;
  height: 50px;
  margin: 0 auto; /*水平居中*/
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
}
</style>
