<template>
  <div class="outBox">
    <div style="width: 100%;margin-top: 1%;margin-left: 1%;">
      <span @click="returnBack" style="font-size: 20px;color: #C0C0C0;cursor: pointer;">
        {{turnBack}}
      </span>
    </div>
    <div style="width: 100%;">
      <el-row style="margin-top: 50px;">
        <el-col :span="11" style="display: flex;justify-content: flex-end;" >
          <div style="width: 50%;">
            <el-image :src="dataForm.competitionImage"></el-image>
          </div>
        </el-col>
        <el-col :span="11">
          <el-card style="margin-left:1%;display: flex;flex-wrap: wrap;">
            <div class="introduce">竞赛名称：{{dataForm.competitionName}}</div>
            <div class="introduce">主办单位：{{dataForm.organizer}}</div>
            <div class="introduce">阶段：{{statusCodeValue}}  </div>
            <div class="introduce">开赛时间：{{dataForm.startTime}}</div>
            <div class="introduce">级别：{{levelCodeValue}}</div>
            <div class="introduce">难易程度：{{difficultCodeValue}}</div>
            <div class="turnToForum" @click="turnToTrainList(dataForm.competitionName)">点击查看相关培训</div>
            <a  class="turnToCompetition" :href="dataForm.competitionURL">点击跳转官网报名</a>
          </el-card>
        </el-col>
        <el-col :span="1"><div></div></el-col>
      </el-row>
    </div>
    <div style="width: 100%;margin-top: 2%;display: flex;justify-content: center;">
      <el-card style="width: 80%;">
        <div>我校历史成绩简报：</div>
        <div style="width: 100%;display: flex;justify-content: center;">
          <el-row style="width: 100%;">
            <el-col :span="12">
              <div id="joinNumEcharts">
                <div style="height: 300px;width: 100%;display: flex;justify-content: center;" ref="joinNumE"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div id="winnerAndLoserEcharts">
                <div style="height: 300px;width: 100%;display: flex;justify-content: center;" ref="winnerAndLoserE"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-row style="width: 100%;">
          <div id="winnerPointEcharts" style="width: 100%;">
            <div style="height: 300px;width: 100%;display: flex;justify-content: center;" ref="winnerPointE"></div>
          </div>
        </el-row>
      </el-card>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;margin-top: 2%;">
      <el-card style="width: 80%;font-size: 20px;">
        <el-row class="introduceText">
          <el-col>竞赛简介：</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>{{dataForm.competitionIntroduce}}</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>考察知识点：</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>{{dataForm.knowledge}}</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>推荐书籍：</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>{{dataForm.recommendBook}}</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>注意事项：</el-col>
        </el-row>
        <el-row class="introduceText">
          <el-col>{{dataForm.attention}}</el-col>
        </el-row>
      </el-card>
    </div>

  </div>
</template>

<script>

  import echarts from 'echarts'

  export default {
    name:"competitionDetail",
    data(){
      return {
        turnBack:"<返回",
        dataForm:{
          competitionId:"",
          competitionImage:require('@/assets/images/userImage/userImage02.jpg'),
          competitionName:"第十三届蓝桥杯省赛",
          competitionURL:"https://www.baidu.com",
          organizer:"中华人民共和国工业和信息化部人才交流中心",
          tagType:"4002",
          startTime:"2024-03-06",
          level:"3004",
          difficulty:"5001",
          competitionIntroduce:"asdasdads",
          knowledge:"语数英科社",
          recommendBook:"人教版语文、数学、英语、科学、社会",
          attention:"菜就多练"
        },
        statusCode:[
          {
            code:"4002",
            value:"正在进行"
          },
          {
            code:"4001",
            value:"报名阶段"
          },
          {
            code:"4003",
            value:"已结束"
          }
        ],
        difficultCode:[
          {
            code:"5001",
            value:"简单"
          },
          {
            code:"5002",
            value:"普通"
          },
          {
            code:"5003",
            value:"困难"
          },
        ],
        levelCode:[
          {
            code:"3001",
            value:"院级"
          },{
            code:"3002",
            value:"校级"
          },{
            code:"3003",
            value:"市级"
          },{
            code:"3004",
            value:"省级"
          },{
            code:"3005",
            value:"国家级"
          },
        ],
        joinNumData:[
          {years:'2020',data:'5'},
          {years:'2021',data:'6'},
          {years:'2022',data:'2'},
        ],
        winnerAndLoserData:[
          {value:'3', name:'获奖人'},
          {value:'2', name:'未获奖人'}
        ],
        winnerPointData:[
          {value:'0', name:'一等奖'},
          {value:'1', name:'二等奖'},
          {value:'2', name:'三等奖'},
        ]
      }
    },
    methods:{
      returnBack(){
        this.$router.back();
      },
      turnToTrainList(value){
        console.log(value)
        this.$router.push({path:'/trainList',query:{competitionName:value}});
      }
    },
    mounted() {
      this.dataForm.competitionId = this.$route.query.competitionId;
      console.log("点击的competitionId是：" + this.$route.query.competitionId);
      //getJoinNumE(){
        var joinNumE = echarts.init(this.$refs.joinNumE);
        let joinNum= this.joinNumData.map(item=>{return item.data});
        let joinData = this.joinNumData.map(item=>{return item.years})
        joinNumE.setOption({
          xAxis:{
            data:joinData,
          },
          yAxis:{},
          series:[
            {
              data:joinNum,
              type:'bar'
            }
          ],
          title:{
            text:'近三个年我校报名该竞赛人数',
            left:'center'
          },
          color: [
            '#ca8622',
          ],
        })
      //}
      var winnerAndLoserE = echarts.init(this.$refs.winnerAndLoserE);
      winnerAndLoserE.setOption({
        series:[
          {
            data:this.winnerAndLoserData,
            type:'pie',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        title:{
          text:'上期我校获奖人与未获奖人比例',
          left:'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        color: [
          '#c23531',
          '#c4ccd3'
        ],
      })
      var winnerPointE = echarts.init(this.$refs.winnerPointE);
      winnerPointE.setOption({
        series:[
          {
            data:this.winnerPointData,
            type:'pie',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        title:{
          text:'上期获奖人中各奖项占比',
          left:'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        color: [
          '#c23531',
          '#c4ccd3',
          '#91c7ae',
          '#749f83',
          '#ca8622',
          '#bda29a',
          '#6e7074',
          '#546570',
        ],
      })
    },
    computed: {
      statusCodeValue() {
        const statusCodeMatch = this.statusCode.find(item => item.code === this.dataForm.tagType);
        return statusCodeMatch ? statusCodeMatch.value : '未知状态';
      },
      levelCodeValue() {
        const levelCodeMatch = this.levelCode.find(item => item.code === this.dataForm.level);
        return levelCodeMatch ? levelCodeMatch.value : '未知状态';
      },
      difficultCodeValue(){
        const difficultCodeMatch = this.difficultCode.find(item => item.code === this.dataForm.difficulty);
        return difficultCodeMatch ? difficultCodeMatch.value : '未知状态';
      }
    }
  }
</script>

<style scoped>
  .outBox{
    padding: 0;
  }
  .introduce{
    margin-bottom: 4%;
    font-size: 24px;
  }
  .turnToForum{
    font-size: 24px;
    margin-bottom: 3%;
    color: #00008B;
    cursor: pointer;
  }
  .turnToForum:hover{
    color: #FD5531;
  }
  .introduceText{
    margin-top: 1%;
  }
  .turnToCompetition{
    font-size: 24px;
    color: #00008B;
    cursor: pointer;
    text-decoration: none;
  }
  .turnToCompetition:hover{
    color: #FD5531;
  }
</style>