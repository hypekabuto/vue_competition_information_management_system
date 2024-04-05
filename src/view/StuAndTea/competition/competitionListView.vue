<template>
  <div class="outBox">
    <div class="chooseElement">
      <div style="width:95%;margin-top: 2vh;">
        <el-form :inline="true" ref="chooseElementForm" :model="chooseElementForm" label-width="70px">
          <el-col :span="4.2">
            <el-form-item label="竞赛名称">
              <el-input style="width: 20vh" size="small" v-model="chooseElementForm.competitionName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4.2">
            <el-form-item label="所属学院">
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
          <el-col :span="3.1">
            <el-form-item label="难易程度">
              <el-select clearable style="width: 14vh" size="small" v-model="chooseElementForm.difficulty" placeholder="难度选择">
                <el-option
                    v-for="item in difficulty"
                    :key="item.codeValue"
                    :label="item.codeMeaning"
                    :value="item.codeValue">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3.1">
            <el-form-item label="赛事级别">
              <el-select clearable style="width: 14vh" size="small" v-model="chooseElementForm.level" placeholder="难度选择">
                <el-option
                    v-for="item in levelList"
                    :key="item.codeValue"
                    :label="item.codeMeaning"
                    :value="item.codeValue">
                </el-option>
              </el-select>
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
              <el-button @click="submitChange" size="small" style="display: inline-block;" type="primary">查询</el-button>
              <el-button size="small" style="display: inline-block;">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </div>

    </div>
    <div class="competitionList">
      <div class="showList">
        <div v-for="item in competitionList" :key="item.index" style="border: solid 1px #C0C0C0;margin: 1%;" @click="turnToDetail(item.competitionId)">
          <el-image style="max-height: 82%;width: auto;margin: 4% 4% 0 4%;border-radius: 10%;" fit="fill"
                    :src="getImageUrl(item.competitionImage)"></el-image>
          <div style="margin-left: 8%;margin-bottom: 5px;">
            <el-tag v-if="item.stage==='4001'" type="success" size="mini">报名阶段</el-tag>
            <el-tag v-if="item.stage==='4002'" size="mini">正在进行</el-tag>
            <el-tag v-if="item.stage==='4003'" type="danger" size="mini">已结束</el-tag>
          </div>
          <div style="text-align: center;font-size: 16px;font-family: '微软雅黑 Light',serif">
            <div>{{item.competitionName}}</div>
            <div style="font-size: 12px;color: #C0C0C0;margin: 5px;">开赛时间 {{item.competitionTime}}</div>
          </div>
        </div>
      </div>
      <div class="pageHelper">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum.currentPage"
            :page-sizes="[10,20,40,80]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageNum.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {getCollegeList} from "@/api";
import {selectCompetitionList,selectDictionaryList} from "@/api/competition";

export default {
    name:"competitionListView",
    data(){
      return {
        chooseElementForm:{
          competitionName:"",
          collegeId:"",
          difficulty:"",
          level:"",
          stage:""
        },
        collegeList:[],
        difficulty:[],
        levelList:[],
        stageList:[],
        competitionList:[],
        pageNum: {
          currentPage:1,
          pageSize:10,
          total:0
        },


      }
    },
    methods:{
      turnToDetail(value){
        console.log("点击的竞赛Id是：" + value);
        this.$router.push({path:'/competitionDetail',query:{competitionId:value}});
      },
      getImageUrl(imagePath) {
        return require(`@/assets/images/competitionImage/${imagePath}`);
      },
      submitChange(){
        this.pageNum.currentPage = 1;
        this.pageNum.pageSize = 10;
        selectCompetitionList(this.chooseElementForm,this.pageNum).then((res) => {
          this.competitionList = res.data.data.competitions;
          this.pageNum.total = res.data.data.total;
        });
      },
      handleSizeChange(value){
        this.pageNum.pageSize = value;
        selectCompetitionList(this.chooseElementForm,this.pageNum).then((res) => {
          this.competitionList = res.data.data.competitions;
          this.pageNum.total = res.data.data.total;
        });
      },
      handleCurrentChange(value) {
        this.pageNum.currentPage = value;
        selectCompetitionList(this.chooseElementForm,this.pageNum).then((res) => {
          this.competitionList = res.data.data.competitions;
          this.pageNum.total = res.data.data.total;
        });
      }
    },
    mounted() {
      getCollegeList().then((res) => {
        this.collegeList=res.data.data
      });
      selectCompetitionList(this.chooseElementForm,this.pageNum).then((res) => {
        this.competitionList = res.data.data.competitions;
        this.pageNum.total = res.data.data.total;
      });
      selectDictionaryList("difficulty").then((res) => {
        this.difficulty = res.data.data;
      });
      selectDictionaryList("level").then((res) => {
        this.levelList = res.data.data;
      });
      selectDictionaryList("stage").then((res) => {
        this.stageList = res.data.data;
      });
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