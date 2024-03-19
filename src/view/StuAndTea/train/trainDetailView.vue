<template>
  <div class="outBox">
    <div style="width: 100%;margin-top: 1%;margin-left: 1%;">
      <span @click="returnBack" style="font-size: 20px;color: #C0C0C0;cursor: pointer;">
        {{turnBack}}
      </span>
    </div>
    <div style="width: 100%;height:30vh;display: flex;justify-content: center;">
      <div>
        <el-image style="height: 100%;width: auto;" :src="dataForm.trainImage"></el-image>
      </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;">
      <el-card style="width:40%;margin-top: 2%;font-size: 20px;">
        <div class="introduceText">培训名称：{{dataForm.trainName}}</div>
        <div class="introduceText">涉及竞赛：{{dataForm.competitionName}}</div>
        <div class="introduceText">培训日期：{{dataForm.dataTime}}</div>
        <div class="introduceText">开始时间：{{dataForm.startTime}}</div>
        <div class="introduceText">结束时间：{{dataForm.endTime}}</div>
        <div class="introduceText">培训地点：{{dataForm.place}}</div>
      </el-card>
      <div style="width: 4%;"></div>
      <el-card style="width:40%;margin-top: 2%;font-size: 20px;">
        <div class="introduceText">负责老师：{{dataForm.teacherName}}</div>
        <div class="introduceText">联系电话：{{dataForm.phone}}</div>
        <div class="introduceText">微信号：{{dataForm.wechatId}}</div>
        <div class="introduceText">注意事项：</div>
        <div class="introduceText">{{dataForm.attention}}</div>
      </el-card>
    </div>
    <div style="width: 100%;margin-top:2%;display: flex;justify-content: center;">
      <el-button :disabled="this.dataForm.status === '1'"  type="danger" style="width: 42%;" @click="signUpSuccess">点击报名</el-button>
      <el-button :disabled="this.dataForm.status === '0'"  type="primary" style="width: 42%;" @click="cancelSignUpSuccess">取消报名</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:"trainDetail",
    data(){
      return {
        turnBack:"<返回",
        dataForm:{
          trainId:"",
          trainName: "关于第十三届蓝桥杯省赛的培训活动",
          competitionName:"第十三届蓝桥杯省赛",
          trainImage:require('@/assets/images/homeView/lanQiaoBei.png'),
          dataTime:"2024-05-05",
          startTime:"13:00",
          endTime:"14:30",
          place:"一号楼报告厅",
          teacherName:"疾旋鼬",
          phone:"12312312332",
          wechatId:"wx12312312332",
          attention:"首先歪币巴卜",
          status:"0"
        }
      }
    },
    methods:{
      returnBack(){
        this.$router.back();
      },
      signUpSuccess(){
        this.$message({
          message: '恭喜你，报名成功！',
          type: 'success'
        });
        this.dataForm.status = "1";
      },
      cancelSignUpSuccess(){
        this.$message({
          message: '取消报名成功！',
          type: 'success'
        });
        this.dataForm.status = "0";
      }
    },
    mounted() {
      this.dataForm.trainId = this.$route.query.trainId;
    }
  }
</script>

<style scoped>
  .outBox{
    padding: 0;
  }
  .introduceText{
    margin-bottom: 2%;
  }
</style>
<script setup>
</script>