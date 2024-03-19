<template>
  <div class="outBox">
    <div class="pictureRegion">
      <el-carousel style="width: 92%;" :interval="4000" type="card">
        <el-carousel-item v-for="item in pictureList" :key="item">
          <el-image style="width: 100%;height: 100%" fit="fill" :src="item.url"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="display: flex;justify-content: space-around;">
      <el-card class="adviceRegion">
        <el-row style="border-bottom: solid 1px #d3dce6;height: 8%">
          <el-col :span="19" style="margin-bottom: 5px">
            <span class="adviceTitle">公告栏</span>
          </el-col>
          <el-col :span="5" style="margin-bottom: 5px">
            <span class="readMore" style="cursor: pointer;" >查看更多+</span>
          </el-col>
        </el-row>
        <div class="adviceText">
          <div v-for="item in adviceText" :key="item.id">
            <div class="mainText">{{item.value}}</div>
          </div>
        </div>
      </el-card>
      <el-card style="width: 1px;border-left: solid 1px #CACACA;"></el-card>
      <el-card class="adviceRegion">
        <el-row style="border-bottom: solid 1px #d3dce6;">
          <el-col :span="19" style="margin-bottom: 5px">
            <span class="adviceTitle" style="color: red">喜报</span>
          </el-col>
          <el-col :span="5" style="margin-bottom: 5px;cursor: pointer;">
            <span class="readMore">查看更多+</span>
          </el-col>
        </el-row>
        <div class="adviceText">
          <div v-for="item in goodAdviceText" :key="item.id">
            <div class="mainText">{{item.value}}</div>
          </div>
        </div>
      </el-card>
    </div>
    <div style="margin-top: 4%;display: flex;justify-content: space-around;">
      <el-row>
        <el-col :span="12" style="height: 100%;">
          <el-image style="width: 100%;height: 99%" fit="fill" :src="homeViewPhotoList[0].url"></el-image>
        </el-col>
        <el-col :span="12"  style="height: 100%;">
          <el-card class="showCard">
            <div style="font-size: 40px;font-family: Arial, sans-serif;">本校教师培训</div>
            <div style="font-size: 20px;margin-top: 3%;display: flex;justify-content: center;">
              <span>赛前指导</span>
              <span style="font-size: 20px;padding-right: 15px;padding-left: 15px;">OR</span>
              <span>赛后总结</span>
            </div>
            <div @click="turnToCompetitionList" class="turnTo" style="text-align: center;margin-top: 3%;cursor: pointer;">点击进入></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="display: flex;justify-content: space-around;">
      <el-row>
        <el-col :span="12"  style="height: 100%;">
          <el-card class="showCard">
            <div style="font-size: 40px;font-family: Arial, sans-serif;">论坛交流系统</div>
            <div style="font-size: 20px;margin-top: 3%;display: flex;justify-content: center;">
              <span>发帖吐槽</span>
              <span style="font-size: 20px;padding-right: 15px;padding-left: 15px;">OR</span>
              <span>询问大佬</span>
            </div>
            <div @click="turnToForumList" class="turnTo" style="text-align: center;margin-top: 3%;cursor: pointer;">点击进入></div>
          </el-card>
        </el-col>
        <el-col :span="12" style="height: 100%;">
          <el-image style="width: 100%;height: 99%" fit="fill" :src="homeViewPhotoList[1].url"></el-image>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name:"homeView",
    data(){
      return {
        pictureList:[
          {url:require('@/assets/images/homeView/lanQiaoBei.png')},
          {url:require('@/assets/images/homeView/huLianWang.png')},
          {url:require('@/assets/images/homeView/acmCompetition.png')}
        ],
        adviceText:[
          {id:"1001",value:"第999届互联网+创新创业大赛现已开始报名！"},
          {id:"1002",value:"第999届ACM竞赛现已开始报名！"},
          {id:"1003",value:"第999届疾旋鼬手办制作大赛现已开始报名！"},
          {id:"1004",value:"第999届企鹅手办制作大赛现已开始报名！"},
          {id:"1005",value:"第999届瞅什魔手办制作大赛现已开始报名！"},
          {id:"1006",value:"第999届绵悠悠手办制作大赛现已开始报名！"},
          {id:"1007",value:"第999届天宇龙手办制作大赛现已开始报名！"},
          {id:"1008",value:"第999届唐龙手办制作大赛现已开始报名！"},
          {id:"1009",value:"第999届阿努比斯手办制作大赛现已开始报名！"},
          {id:"1010",value:"第1届互联网+创新创业大赛现已开始报名！"},
        ],
        goodAdviceText:[
          {id:"1001",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1002",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1003",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1004",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1005",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1006",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1007",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1008",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1009",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"},
          {id:"1010",value:"唐龙吃掉了浆果！唐龙正在偷懒！唐龙开始睡觉！"}
        ],
        homeViewPhotoList:[
          {url:require('@/assets/images/homeView/homeViewPhoto01.jpg')},
          {url:require('@/assets/images/homeView/homeViewPhoto02.jpg')},
        ]
      }
    },
    methods:{
      turnToCompetitionList(){
        this.$router.push({path:'/competitionList'});
      },
      turnToForumList(){
        this.$router.push({path:'/forumList'});
      }
    }
  }
</script>


<style scoped>
  .outBox{
    padding: 0;
  }
  .pictureRegion{
    margin-top: 10px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .adviceRegion{
    margin-top: 10px;
    width: 30%;
    height: 45vh;
    font-weight: bolder;
  }
  .adviceTitle{
    height: 25px;
  }
  .adviceText{
    height: 86%;
    width: 100%;
    margin-top: 9px;
  }
  .mainText{
    margin-bottom: 2.5%;
    font-weight: normal;
    cursor: pointer;
  }

  .showCard{
    border: solid 1px #d3dce6;
    height: 99%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainText:hover{
    background-color: #CACACA;
  }
  .readMore:hover{
    color: darkblue;
  }
  .turnTo:hover{
    color: #CACACA;
  }
</style>