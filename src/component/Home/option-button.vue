<template>
<div class="optionButton">
    <div class="option">
        <i class="el-icon-s-comment"></i>
        <el-button type="text" size="small">发消息</el-button>
    </div>
    <div class="option">
        <i class="el-icon-camera-solid optoinIcon"></i>
         <el-button type="text" size="small" class="infoButton">拍照片</el-button>
    </div>
    <div class="option">
        <i class="el-icon-video-camera optoinIcon"></i>
        <el-button type="text" size="small" class="infoButton">看视频</el-button>
    </div>
        <div class="option">
        <i class="el-icon-pie-chart optoinIcon_chart"></i>

        
        <el-button type="text" size="small" >实时数据</el-button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.optionButton {
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    background-color: #F5F5F5;
}
.optionButton .option {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    align-items: center;
}
.option .el-button {
    color: #333333;
}

</style>
