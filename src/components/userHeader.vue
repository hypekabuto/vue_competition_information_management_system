<template>
  <div class="userHeaderContainer">
    <el-row style="height: 60px;">
      <el-col style="height: 100%;" :span="8">
        <div style="display:flex;width:auto;height: 60px;background-color: #FCFCFC;border-bottom: solid 1px #e6e6e6;">
          <img style="height: 100%;width: auto;" src="../assets/images/logo.png"/>
          <span style="line-height: 60px;margin: 0;">疾旋鼬竞赛信息平台</span>
        </div>
      </el-col>
      <el-col style="height: 100%" :span="16">
        <el-menu background-color="#FCFCFC"
                 :default-active="$route.path"
                 class="el-menu-demo" mode="horizontal"
                 @select="handleSelect" >
          <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.path">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getRole,getMenuData} from "@/api";
import router from "@/router";

export default {
  name:"userHeader",
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1',
      roleIds:[],
      menuData:[]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      if(this.$route.path !== item.path && !(this.$route.path === '/homeView' && (item.path === '/'))){
        this.$router.push(item.path)
      }
    }
  },
  computed:{
    noChildren(){
      return this.menuData.filter(item => !item.children)
    }
  },
  mounted() {
    getRole().then((res) => {
      this.roleIds = res.data.data;
      const roleLists = this.roleIds.map(roleId => ({
        "roleId": roleId
      }));
      console.log("asdas" + JSON.stringify(roleLists)); // 使用 JSON.stringify 来更好地查看对象
      getMenuData(roleLists).then((res) => {
        this.menuData = res.data.data;

      })
    });

  }
}
</script>



<style scoped>
  .userHeaderContainer{
    padding: 0;
    height: 60px;
  }
  .el-menu-demo{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>