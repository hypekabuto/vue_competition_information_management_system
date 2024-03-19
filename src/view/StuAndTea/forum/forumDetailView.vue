<template>
  <div class="outBox">
    <div style="width: 100%;margin-top: 1%;margin-left: 1%;">
      <span @click="returnBack" style="font-size: 20px;color: #C0C0C0;cursor: pointer;">
        {{turnBack}}
      </span>
    </div>
    <div v-if="formData.forumImage.length !== 0" style="width: 100%;display: flex;justify-content: center;">
    </div>
    <div style="margin-top:2%;width: 100%;display: flex;justify-content: center;">
      <el-card style="width: 80%;">
        <div style="width: 100%;display: flex;justify-content: center;">
          <div style="width: 90%;">
          <el-row>
            <el-col :span="4" style="text-align: center;">
              <el-image style="border-radius: 50%;" :src="formData.userImage"></el-image>
              <div>{{formData.name}}</div>
            </el-col>
            <el-col :span="20">
              <div style="width: 100%;">
                <div style="margin-left: 3%;font-size: 20px;">{{formData.forumText}}</div>
              </div>
              <div style="margin-top:2%;margin-bottom:2%;width: 100%;display: flex;justify-content: center;">
                <div style="width: 40%;height: auto;">
                  <div class="imageCard" style="width: 100%;height: auto;">
                    <div v-for="(item, index) in formData.forumImage" :key="index">
                      <el-image :src="item.address" @click="handleImageClick(index)"></el-image>
                    </div>
                    <el-image-viewer
                        v-if="isViewerVisible"
                        :on-close="handleViewerClose"
                        :url-list="getImgList(currentImageIndex)"
                        :initial-index="currentImageIndex"
                    ></el-image-viewer>
                  </div>
                </div>
              </div>
              <el-col :span="24">
                <div style="width: 100%;display: flex;justify-content: space-between;margin-bottom: 2%;">
                  <i :style="{color: formData.goodStatus === '1' ? '#409EFF' : '#C0C0C0'}" style="font-size: 18px;"
                     class="el-icon-thumb" @click="getForumGood" >{{formData.goodNum}}人点赞</i>
                  <i style="color: #C0C0C0;font-size: 18px;" @click="changeInputDisable(formData.forumId,formData.name)" class="el-icon-chat-dot-round">回复</i>
                  <i style="color: #C0C0C0;font-size: 18px;"  class="el-icon-time">发布时间：{{formData.time}}</i>
                </div>
              </el-col>
            </el-col>
          </el-row>
          </div>
        </div>
        <div style="width: 100%;margin-top:0;display: flex;justify-content: center;">
          <el-card style="width: 90%;">
            <el-row>
              <div v-for="(item,index) in replyData" :key="index">
                <el-col :span="2">
                  <el-image style="border-radius: 50%;" :src="item.userImage"></el-image>
                  <div style="width: 100%;text-align: center;">{{item.replyName}}</div>
                </el-col>
                <el-col :span="22" style="position:relative;height: 17vh;margin-bottom: 3%;">
                  <div style="margin-left: 2%; font-size: 18px;position:absolute;top:0;">
                    <div>评论：{{item.repliedName}}</div>
                    <div>{{item.replyText}}</div>
                  </div>
                  <div style="width:95%;position:absolute;bottom:0;margin-left: 2%; font-size: 18px;">
                    <div style="width: 100%;display: flex;justify-content: space-between;color: #C0C0C0;">
                      <i :style="{color: item.goodStatus === '1' ? '#409EFF' : '#C0C0C0'}"
                         class="el-icon-thumb" @click="getGoods(item.replyId,index)">{{item.goodsNum}}人点赞</i>
                      <i @click="changeInputDisable(item.replyId,item.replyName)"  class="el-icon-chat-dot-round">{{item.replyNum}}回复</i>
                      <i  class="el-icon-time">评论时间：{{item.time}}</i>
                    </div>
                  </div>
                </el-col>
              </div>
            </el-row>
          </el-card>
        </div>
      </el-card>
    </div>
    <div v-if="disableInput" style="position: fixed;z-index: 2; bottom: 0; left: 0; right: 0; padding: 10px;width: 100%;height:80px;display: flex;justify-content: space-between;">
      <div style="width:87%;height:80px;">
        <el-input v-model="replyText" style="height: 100%;font-size: 18px;" :placeholder="`回复：${replyName}`"></el-input>
      </div>
      <div style="width: 10%;height:80px;">
        <el-button type="primary" style="width: 100%;height: 100%;font-size:18px;">确认发布</el-button>
      </div>
      <div style="width: 10%;height:80px;">
        <el-button @click="closeInput" type="danger" style="width: 100%;height: 100%;font-size:18px; ">取消发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import index from "vuex";
  export default {
    name:"forumDetail",
    computed: {
      index() {
        return index
      }
    },
    components: {
      'el-image-viewer': ElImageViewer
    },
    data(){
      return {
        disableInput:false,
        isViewerVisible: false,
        currentImageIndex: -1,
        turnBack:"<返回",
        replyName:"",
        replyText:"",
        formData:{
          forumId:"",
          name:"疾旋鼬",
          forumImage:[
            {forumImageId:"123",address:require('@/assets/images/userImage/userImage01.jpg')},
            {forumImageId:"124",address:require('@/assets/images/userImage/userImage02.jpg')},
            {forumImageId:"125",address:require('@/assets/images/userImage/userImage03.jpg')},
            {forumImageId:"126",address:require('@/assets/images/userImage/userImage04.jpg')},
            {forumImageId:"127",address:require('@/assets/images/userImage/userImage05.jpg')},
            {forumImageId:"128",address:require('@/assets/images/userImage/userImage06.jpg')},
            {forumImageId:"129",address:require('@/assets/images/userImage/userImage07.jpg')},
            {forumImageId:"130",address:require('@/assets/images/userImage/userImage08.jpg')}
          ],
          goodStatus:"0",
          goodNum:"2",
          time:"2024-03-01",
          userImage:require('@/assets/images/userImage/userImage02.jpg'),
          forumText:"关于本人毕业设计加功能的事情,加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个加一个加一个又加一个",
        },
        replyData:[
          {
            replyId:"1",
            replyName:"绵悠悠",
            repliedName:"疾旋鼬",
            userImage:require('@/assets/images/userImage/userImage05.jpg'),
            replyText:"捞的一捞的一捞的一捞的一捞的一捞的一捞的一捞的一",
            goodsNum:"12",
            replyNum:"13",
            time:"2024-03-01 13:00",
            goodStatus:"0",
          },
          {
            replyId:"2",
            replyName:"企丸丸",
            repliedName:"绵悠悠",
            userImage:require('@/assets/images/userImage/userImage03.jpg'),
            replyText:"你说nm呐",
            goodsNum:"12",
            replyNum:"13",
            time:"2024-03-02 13:00",
            goodStatus:"0",
          }
        ]
      }
    },
    methods:{
      returnBack(){
        this.$router.back();
      },
      getImgList() {
        const arr = [];
        const length = this.formData.forumImage.length;
        console.log(length);
        for (let i = 0; i < length; i++) {
          arr.push(this.formData.forumImage[i].address);
          console.log(this.formData.forumImage[i].address);
        }
        return arr;
      },
      handleImageClick(index) {
        this.currentImageIndex = index;
        this.isViewerVisible = true;
      },
      handleViewerClose() {
        this.isViewerVisible = false;
      },
      getGoods(replyId,index){
        console.log(replyId,index);
        if(this.replyData[index].goodStatus === "0"){
          this.replyData[index].goodStatus = "1";
        }else{
          this.replyData[index].goodStatus = "0";
        }
      },
      getForumGood(){
        if(this.formData.goodStatus === "0"){
          this.formData.goodStatus = "1";
        }else{
          this.formData.goodStatus = "0";
        }
      },
      changeInputDisable(id,name){
        console.log(id,name);
        if(this.disableInput===false){
          this.disableInput = true;
        }else {
          this.replyName=name;
        }
        this.replyName=name;
      },
      closeInput(){
        this.disableInput = false;
      }
    },
    mounted() {
      this.formData.forumId = this.$route.query.forumId;
      console.log(this.$route.query.forumId);
    }
  }
</script>

<style scoped>
  .outBox{
    padding: 0;
    position: relative;
  }
  .imageCard{
    margin-bottom: 1vh;
    margin-top: 1vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:3%;
  }
  .el-icon-thumb{
    cursor: pointer;
  }
  .el-icon-chat-dot-round{
    cursor: pointer;
  }
  /deep/.el-input__inner{
    height: 100%;
  }
</style>