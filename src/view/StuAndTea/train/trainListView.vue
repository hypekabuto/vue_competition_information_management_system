<template>
  <div class="outBox">
    <div class="chooseElement">
      <div style="width:95%;margin-top: 2vh;">
        <el-form :inline="true" ref="chooseElementForm" :model="chooseElementForm" label-width="70px">
          <el-col :span="4.2">
            <el-form-item label="培训名称">
              <el-input clearable style="width: 17vh" size="small" v-model="chooseElementForm.trainName"></el-input>
            </el-form-item>
          </el-col>
<!--          <el-col :span="4.2">-->
<!--            <el-form-item label="竞赛名称">-->
<!--              <el-input clearable style="width: 17vh" size="small" v-model="chooseElementForm.competitionName"></el-input>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
          <el-col :span="4.2">
            <el-form-item label="开设学院">
              <el-select clearable style="width: 20vh" size="small" v-model="chooseElementForm.collegeId" placeholder="请选择负责学院">
                <el-option
                    v-for="item in collegeList"
                    :key="item.collegeId"
                    :label="item.collegeName"
                    :value="item.collegeId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2.1">
            <el-form-item label="培训时间">
              <el-date-picker clearable size="mini" type="date" placeholder="选择日期" v-model="chooseElementForm.dataTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="3.1">
            <el-form-item label="当前状态">
              <el-select clearable style="width: 17vh" size="small" v-model="chooseElementForm.stage" placeholder="状态选择">
                <el-option
                    v-for="item in stageList"
                    :key="item.codeValue"
                    :label="item.codeMeaning"
                    :value="item.codeValue">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6.4">
            <el-form-item>
              <el-button size="small" style="display: inline-block;" type="primary">查询</el-button>
              <el-button size="small" style="display: inline-block;">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </div>

    </div>
    <div class="competitionList">
      <div class="showList">
        <div v-for="item in trainList" :key="item.index" style="border: solid 1px #C0C0C0;margin: 1%;" @click="turnToDetail(item.trainId)">
          <el-image style="max-height: 82%;width: auto;margin: 4% 4% 0% 4%;border-radius: 10%;" fit="fill" :src="item.competitionImage"></el-image>
          <div style="margin-left: 8%;margin-bottom: 5px;">
            <el-tag v-if="item.tagType==='4001'" type="success" size="mini">报名阶段</el-tag>
            <el-tag v-if="item.tagType==='4002'" size="mini">正在进行</el-tag>
            <el-tag v-if="item.tagType==='4003'" type="danger" size="mini">已结束</el-tag>
          </div>
          <div style="text-align: center;font-size: 16px;font-family: '微软雅黑 Light'">
            <div>{{item.trainName}}</div>
            <div style="font-size: 12px;color: #C0C0C0;margin: 5px;">发布时间 {{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="pageHelper">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10,20,40,80]"
            :page-size="2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="7">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {getCollegeList} from "@/api";
import {selectDictionaryList} from "@/api/competition";

export default {
  name:"trainListView",
  data(){
    return {
      chooseElementForm:{
        trainId:"",
        trainName:"",
        collegeId:"",
        dataTime:"",
        stage:"",
      },
      trainList:[
        {trainId:"001",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届疾旋鼬手办制作大赛",tagType:"4001",time:"2023-11-27"},
        {trainId:"002",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届瞅什魔手办制作大赛",tagType:"4002",time:"2023-01-24"},
        {trainId:"003",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届绵悠悠手办制作大赛",tagType:"4002",time:"2024-01-06"},
        {trainId:"004",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届唐龙手办制作大赛",tagType:"4003",time:"2024-11-27"},
        {trainId:"005",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届阿努比斯手办制作大赛",tagType:"4003",time:"2024-02-24"},
        {trainId:"006",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届企鹅手办制作大赛",tagType:"4002",time:"2024-08-14"},
        {trainId:"007",competitionImage:require('@/assets/images/trainImage/image01.jpg'),trainName:"第999届喵天帝手办制作大赛",tagType:"4003",time:"2023-09-19"}
      ],
      collegeList:[],
      stageList:[]
    }
  },
  mounted() {
    this.chooseElementForm.trainName = "";
    this.chooseElementForm.trainName = this.$route.query.trainName;
    getCollegeList().then((res) => {
      this.collegeList=res.data.data
    });
    selectDictionaryList("stage").then((res) => {
      this.stageList = res.data.data;
    });
  },
  methods:{
    turnToDetail(value){
      this.$router.push({path:'/trainDetail',query:{trainId:value}});
    }
  },
  computed:{

  }
}
</script>


<style>
.outBox{
  padding: 0;
  margin-bottom: 70px;
}
.chooseElement{
  height: 10vh;
  display: flex;
  justify-content: center;
}
.competitionList{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.showList{
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap:5%;
  width: 80%;
}
.pageHelper{
  width: 100%;
  text-align: center;
}
</style>