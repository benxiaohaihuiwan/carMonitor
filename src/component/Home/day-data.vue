<template>
  <div class="dayDataAll">
    <div class="dayData">
      <span>今日数据统计</span>
      <img src="../../image/timeMonitor/colseWhite.png">
    </div>
    <div class="tipImage">
      <img src="../../image/timeMonitor/carStatus.png">
      <span>车况</span>
    </div>
    <div class="detail-content-all">
      <div class="detail-content">
        <span>20</span>
        <span class="monitor-span-desc">车辆总数</span>
      </div>
      <div class="detail-content">
        <span>17</span>
        <span class="monitor-span-desc">运行车辆</span>
      </div>
      <div class="detail-content">
        <span>1000km</span>
        <span class="monitor-span-desc">总里程数</span>
      </div>
      <div class="detail-content">
        <span>0.8h</span>
        <span class="monitor-span-desc">总运行时间</span>
      </div>
    </div>
    <hr>
    <div class="tipImage">
      <img src="../../image/timeMonitor/safe.png">
      <span>安全</span>
    </div>
    <div class="detail-content-all">
      <div class="detail-content">
        <span>10</span>
        <span class="monitor-span-desc">超速次数</span>
      </div>
      <div class="detail-content">
        <span>3</span>
        <span class="monitor-span-desc">疲劳驾驶</span>
      </div>
    </div>
    <hr>
    <div class="tipImage">
      <img src="../../image/timeMonitor/enery.png">
      <span>能耗</span>
    </div>

    <div class="detail-content-all">
      <div class="detail-content">
        <span>1l</span>
        <span class="monitor-span-desc">总油耗数</span>
      </div>
      <div class="detail-content">
        <span>0.01l</span>
        <span class="monitor-span-desc">每公里油耗数</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style>
.dayDataAll {
  margin-top: 25px;
  margin-left: 5px;
  width:100%;
  background-color:white
}
.dayData {
  background-color: #006bff;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  line-height: 50px;
  justify-content: space-between;
}
.dayData span {
  color: white;
  vertical-align: center;
  margin-left: 10px;
}
.dayData img {
  margin-right: 10px;
  width: 15px;
  height: 15px;
  margin-top: 17px;
}
.tipImage {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
}
.tipImage span {
  margin-left: 10px;
}
hr {
  height: 10px;
  border: none;
  border-top: 6px solid #f5f7fa;
  margin: 0px;
}
.detail-content-all {
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
}
.detail-content {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 10px 0px;
}

.monitor-span-desc {
  color: grey;

  font-size: 16px;
}
</style>
