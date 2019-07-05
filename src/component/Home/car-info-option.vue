<template>
  <el-aside style="height:100%;" id="carInfo" >
    <div class="showRightButton" id="showArrow" v-show="!optionButtonArrow" @click="handelCarsSeclect">
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
        <img src="../../image/timeMonitor/carLeftArrow.png" />
        </div>
      </div>
      <div class="optionBottom" >
        <option-button></option-button>
      </div>
    </div>
  </el-aside>
</template>

<script>
import OptionButton from "./option-button";
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
  mounted(){
// document.getElementById("carInfo").style.width="60px";

  },
  methods: {
    handelCarsSeclect() {
      this.optionButtonArrow = !this.optionButtonArrow;
      
        document.getElementById("carInfo").style.width="300px";
        console.log(document.getElementById("carInfo").style.width);
     
    },
    handelLeftCarsSeclect() {
      debugger;
      this.optionButtonArrow = !this.optionButtonArrow;
      document.getElementById("carInfo").style.width="60px";
      document.getElementById("showArrow").style.width="60px";
      
      console.log('444444');
    },
    renderContent(h, { node, data, store }) {
      if (node.data.name.indexOf("泓源建设") == -1) {
        return (
          <span class="custom-tree-node">
            <span style="margin-right:10px">{node.label}</span>
            <i class="el-icon-s-comment" />
            <i class="el-icon-camera-solid optoinIcon" />
            <i class="el-icon-video-camera optoinIcon" />
            <i class="el-icon-pie-chart optoinIcon_chart" />
          </span>
        );
      } else {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
          </span>
        );
      }
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
      if (node.level === 0) {
        return resolve([{ name: "无锡泓源建设集团有限公司" }]);
      }
      if (node.level > 2) return resolve([]);

      var hasChild;
      if (node.data.name.indexOf("泓源建设") != -1) {
        hasChild = true;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          if (node.data.name === "无锡泓源建设集团有限公司") {
            data = [
              {
                name: "泓源建设"
              }
            ];
          }
          if (node.data.name === "泓源建设") {
            data = [
              {
                name: "苏B56555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B65555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B55655（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B56555（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B55655（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B55655（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              },
              {
                name: "苏B55655（离开）",
                leaf: true
              },
              {
                name: "苏B54355（离开）",
                leaf: true
              }
            ];
          }
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
};
</script>

<style scoped>
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
.showLeftArrowButton img{
  display: flex;
  flex-direction: row-reverse;
  float: right;
}
</style>
