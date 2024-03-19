<template>
  <div class="outBox">
    <div style="width: 100%;display: flex;justify-content: center;flex-wrap: wrap;">
      <div class="topListBox">
        <el-card class="topListCard">
          <div style="width: 100%;text-align: center;font-size: 24px;color: #FD5531;">
            <span>热度榜</span>
          </div>
          <div style="font-size: 14px;">
            <div  class="topText" style="margin-top: 5px;" v-for="item in hotList" @click="turnToDetail(item.forumId)" :key="item.index">
              <div>{{item.value}}</div>
            </div>
          </div>
        </el-card>
        <el-card class="topListCard">
          <div style="width: 100%;text-align: center;font-size: 24px;color: #FD5531;">
            <span>点赞榜</span>
          </div>
          <div style="font-size: 14px;">
            <div class="topText" style="margin-top: 5px;" @click="turnToDetail(item.forumId)" v-for="item in goodsList" :key="item.index">
              <div>{{item.value}}</div>
            </div>
          </div>
        </el-card>
        <el-card class="topListCard">
          <div style="width: 100%;text-align: center;font-size: 24px;color: #FD5531;">
            <span>收藏榜</span>
          </div>
          <div style="font-size: 14px;">
            <div class="topText" style="margin-top: 5px;" @click="turnToDetail(item.forumId)" v-for="item in collectList" :key="item.index">
              <div>{{item.value}}</div>
            </div>
          </div>
        </el-card>
      </div>
      <div class="searchBox">
        <div>
          <el-input style="width: 20%;"></el-input>
          <el-button type="primary" style="margin-left: 1%;">搜索</el-button>
        </div>
      </div>
      <div class="mainRegion">
        <el-card style="width: 70%;">
          <div class="mainText" v-for="item in forumList" :key="item.forumId" @click="turnToDetail(item.forumId)">
            <div>{{item.titleName}}</div>
            <div>
              <div style="font-size: 12px;color: #C0C0C0;margin-right: 5px;">
                <div style="text-align: center;">
                  <i style="margin-right: 5px;display: inline-block" class="el-icon-thumb">{{item.goodsNum}}</i>
                  <i style="margin-right: 5px;display: inline-block" class="el-icon-star-off">{{item.collectNum}}</i>
                  <i style="margin-right: 5px;display: inline-block" class="el-icon-chat-dot-round">{{item.replyNum}}</i>
                </div>
                <div>{{item.forumName}}发布于 2023-11-27</div>
              </div>
            </div>
          </div>
          <div style="width: 100%;text-align: center;">
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
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"forumView",
  data(){
    return {
      hotList:[
        {key:"",value:"互联网+创新创业大赛开始报名啦",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"}
      ],
      goodsList:[
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"互联网+创新创业大赛开始报名啦",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"}
      ],
      collectList:[
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"},
        {key:"",value:"关于今天刷了一百道题目这件事儿",forumId:"1"}
      ],
      forumList:[
        {forumId:"1",titleName:"互联网+创新创业大赛开始报名啦",forumName:"疾旋鼬",goodsNum:"55",collectNum:"31",replyNum:"15",time:"2023-11-27"},
        {forumId:"1",titleName:"关于今天刷了一百零一道题目这件事儿",forumName:"疾旋鼬",goodsNum:"25",collectNum:"20",replyNum:"16",time:"2024-01-22"},
        {forumId:"1",titleName:"关于今天刷了一百零二道题目这件事儿",forumName:"疾旋鼬",goodsNum:"20",collectNum:"15",replyNum:"5",time:"2023-10-15"},
        {forumId:"1",titleName:"关于今天刷了一百零三道题目这件事儿",forumName:"疾旋鼬",goodsNum:"10",collectNum:"37",replyNum:"35",time:"2023-09-21"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
        {forumId:"1",titleName:"关于今天刷了一百零四道题目这件事儿",forumName:"疾旋鼬",goodsNum:"80",collectNum:"21",replyNum:"75",time:"2023-05-08"},
      ]
    }
  },
  methods:{
    turnToDetail(value){
      this.$router.push({path:'/forumDetail',query:{forumId:value}});
    }
  }
}
</script>


<style scoped>
  .outBox{
    padding: 0;
    margin-bottom: 70px;
  }
  .topListBox{
    width: 78vh;
    max-height: 45vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:5%;
    margin-top: 1%;
  }
  .searchBox{
    width: 70%;
    margin-top: 2%;
  }
  .mainRegion{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1%;
  }
  .mainText{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #C0C0C0;
    height: 5vh;
    font-size: 16px;
    cursor: pointer;
  }
  .mainText:hover{
    color: #FD5531;
  }
  .topText{
    cursor: pointer;
  }
  .topText:hover{
    color: #FD5531;
  }
</style>