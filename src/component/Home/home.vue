<template>
  <el-container class="containerAll">
    <el-header>
      <gps-title></gps-title>
    </el-header>
    <el-container>
        <left-navigation></left-navigation>
      <el-main>
        <el-container class="containerContent">
          <el-header>
            <top-navigation></top-navigation>
          </el-header>
          <el-container style="height:100%">
              <car-info-option></car-info-option>
            <el-main>
              <div class="mainContent">
                <div>
                  <day-data></day-data>
                </div>
               <div>
                 <!-- <horizontal-info></horizontal-info> -->
                 <!-- <alarm-table></alarm-table> -->
               </div>
              </div>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AlarmTable from "./alarm-table.vue";
import CarInfoOption from "./car-info-option";
import OptionButton from "./option-button";
import GpsTitle from "@/component/gps-title";
import LeftNavigation from "./left-navigation";
import HorizontalInfo from "./horizontal-info"
import TopNavigation from "./top-navigation"
import DayData from './day-data'
export default {
  components: {
    AlarmTable,
    CarInfoOption,
    OptionButton,
    GpsTitle,
    LeftNavigation,
    HorizontalInfo,
    TopNavigation,
    DayData,
  }
};
</script>

<style>
.containerAll {
  width: 100%;
  height: 100%;
}
.containerAll .el-header {
  padding: 0px;
  height: 30px !important;
}
.el-main {
  padding: 0px;
}
.containerContent {
  height: 100%;
  /* width: 100%; */
}
</style>