<template>
  <div class="userFooterContainer">
    <el-row style="width: 100%;">
      <div style="margin-top: 8px;">
        <span class="buttonBox">联系我们</span>
        <span class="buttonBox">提交问题</span>
      </div>
    </el-row>
    <el-row style="width: 100%;margin-top: 10px;font-size: 12px;">
        <div>浙ICP备2024063862号</div>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"userFooter",
  data(){
    return {

    }
  }
}
</script>
<style scoped>
.userFooterContainer{
  width: 100%;
  padding: 0;
  height: 70px;
  background-color: #232121;
  text-align: center;
  color: #C0C0C0;
}
.buttonBox{
  margin-right: 1%;
  cursor: pointer;
  font-size: 18px;
}
.buttonBox:hover{
  color: #FD5531;
}
</style>