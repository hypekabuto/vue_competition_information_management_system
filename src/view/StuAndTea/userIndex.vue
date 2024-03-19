<template>
    <el-container class="userHome-container">
      <el-header>
        <user-header></user-header>
      </el-header>
      <el-main style="flex-grow: 1;overflow: hidden;">
        <router-view></router-view>
      </el-main>
      <el-footer style="height: 70px;">
        <user-footer></user-footer>
      </el-footer>
    </el-container>

</template>

<script>
import userHeader from "@/components/userHeader.vue";
import userFooter from "@/components/userFooter.vue";
export default {
  name:"userIndex",
  data(){
    return{}
  },
  components:{
    userHeader,
    userFooter,
  }
}
</script>

<style>
.userHome-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0;
}
.el-footer{
  padding: 0;
}
</style>