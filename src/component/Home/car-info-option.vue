<template>
  <el-aside style="height:100%;" id="carInfo">
    <div
      class="showRightButton"
      id="showArrow"
      v-show="!optionButtonArrow"
      @click="handelCarsSeclect"
    >
      <img src="../../image/timeMonitor/carArrow.png">
    </div>
    <div class="optionContentShow" v-show="optionButtonArrow">
      <div style="margin: 15px 0px;">
        <el-input placeholder="请输入车牌号查询" v-model="input3" style="background-color:#DCDFE6;">
          <el-button slot="append" icon="el-icon-search" style="background-color:white"></el-button>
        </el-input>
      </div>
      <div style="height:100%;overflow:auto">
        <el-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange"
          :render-content="renderContent"
        ></el-tree>
        <div class="showLeftArrowButton" id="carInfoArrow" @click="handelLeftCarsSeclect">
          <img src="../../image/timeMonitor/carLeftArrow.png">
        </div>
      </div>
      <div class="optionBottom">
        <option-button></option-button>
      </div>
    </div>
  </el-aside>
</template>

<script>
import OptionButton from "./option-button";
import cars from "../../datas/cars.json";

export default {
  data() {
    return {
      optionButtonArrow: false,
      dialogVisible: true,
      imgUrl: require("../../image/timeMonitor/many.png"),
      input3: "",
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      },
      count: 1
    };
  },
  components: {
    OptionButton
  },
  mounted() {
    // document.getElementById("carInfo").style.width="60px";
  },
  methods: {
    handelCarsSeclect() {
      this.optionButtonArrow = !this.optionButtonArrow;
      document.getElementById("carInfo").style.width = "300px";
      console.log(document.getElementById("carInfo").style.width);
    },
    handelLeftCarsSeclect() {
      this.optionButtonArrow = !this.optionButtonArrow;
      document.getElementById("carInfo").style.width = "60px";
      document.getElementById("showArrow").style.width = "60px";
    },
    renderContent(h, { node, data, store }) {
      var hasChild;
      let organizationIds = cars.data.organizationInfos;
      let vehicleInfos = cars.data.vehicleInfos;
      
      for (let j = 0; j < vehicleInfos.length; j++) {
        if (node.data.name == vehicleInfos[j].licensePlate) {
          return (
            <span class="custom-tree-node carImage">
              <span style="margin-right:10px">{node.label}</span>
              <i class="el-icon-s-comment optoinIcon" style="margin-right:10px"></i>
              <i class="el-icon-camera-solid optoinIcon" style="margin-right:10px"></i>
              <i class="el-icon-video-camera optoinIcon" style="margin-right:10px"></i>
              <i class="el-icon-pie-chart optoinIcon_chart" style="margin-right:10px"></i>
            </span>
          );
        }
      }
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
        </span>
      );
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      var organizationIds = cars.data.organizationInfos;
      var vehicleInfos = cars.data.vehicleInfos;
      console.log(this.globalData.vehicleFlag);
      if (node.level === 0) {
        for (let i = 0; i < organizationIds.length; i++) {
          if (organizationIds[i].organizationId == "123") {
            return resolve([{ name: organizationIds[i].name }]);
          }
        }
      }
      // if (node.level > 2) return resolve([]);

      // var hasChild;

      setTimeout(() => {
        var data = [];
        let template = {};
        if (node.data.name === "无锡远迈有限公司1") {
          for (let j = 0; j < organizationIds.length; j++) {
            if (organizationIds[j].parentId == "123") {
              template.name = organizationIds[j].name;
              data.push(template);
            }
            template = {};
          }
          console.dir(this.globalData.vehicleFlag);
          console.log("=================");
          // 循环车辆
          for (let d = 0; d < organizationIds.length; d++) {
            let vehicleTemplate = {};
            if (node.data.name === organizationIds[d].name) {
              for (let e = 0; e < vehicleInfos.length; e++) {
                if (
                  organizationIds[d].organizationId ==
                  vehicleInfos[e].organizationId
                ) {
                  vehicleTemplate.name = vehicleInfos[e].licensePlate;
                  vehicleTemplate.leaf = true;
                  this.globalData.vehicleFlag = true;
                  data.push(vehicleTemplate);
                }
                vehicleTemplate = {};
              }
            }
          }
          console.dir(this.globalData.vehicleFlag);
        } else {
          for (let a = 0; a < organizationIds.length; a++) {
            let secTemplate = {};
            console.dir(node);
            if (node.data.name === organizationIds[a].name) {
              for (let k = 0; k < organizationIds.length; k++) {
                if (
                  organizationIds[k].parentId != "null" &&
                  organizationIds[k].parentId != "123" &&
                  organizationIds[k].parentId ==
                    organizationIds[a].organizationId
                ) {
                  secTemplate.name = organizationIds[k].name;
                  data.push(secTemplate);
                }
                secTemplate = {};
              }
            }
          }
          // 循环车辆
          for (let b = 0; b < organizationIds.length; b++) {
            let vehicleTemplate = {};
            if (node.data.name === organizationIds[b].name) {
              for (let c = 0; c < vehicleInfos.length; c++) {
                if (
                  organizationIds[b].organizationId ==
                  vehicleInfos[c].organizationId
                ) {
                  vehicleTemplate.name = vehicleInfos[c].licensePlate;
                  vehicleTemplate.leaf = true;
                  data.push(vehicleTemplate);
                }
                vehicleTemplate = {};
              }
            }
          }
        }

        resolve(data);
      }, 500);
    }
  }
};
</script>

<style scoped>
.optoinIcon{
  margin-right:10px
}
.optionContentShow {
  display: flex;
  flex-direction: column;
}
.optionContentShow .optionBottom {
  position: fixed;
  top: 90%;
}
.el-dialog__body {
  padding-top: 15px;
}
.el-input__inner {
  background-color: #dcdfe6;
}
.iconFlag {
  margin: 0px 5px;
}
.el-aside {
  /* width: 27% !important; */
  margin-top: 10px;
  /* width: 0px; */
}
.showRightButton {
  position: fixed;
  top: 50%;
}
.showLeftArrowButton img {
  display: flex;
  flex-direction: row-reverse;
  float: right;
}
</style>
