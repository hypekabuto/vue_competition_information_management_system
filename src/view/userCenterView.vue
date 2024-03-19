<template>
  <div class="outBox">
    <el-row style="margin-top: 2%;">
      <el-col :span="10" style="display: flex;justify-content: flex-end">
        <div class="headPicture">
          <el-card class="userImageCard">
            <div style="width: 100%">
              <el-image style="border-radius:100%;width: 50%;height: auto" fit="fill" :src="userImage[0].url"></el-image>
            </div>
            <div class="changeUserImage">点击更换</div>
            <div class="userCardText1">欢迎回来</div>
            <div class="userCardText">{{userForm.nickName}}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="contextRegion">
          <el-card style="width: 75%;height: 75vh;">
            <div class="contextTitle">姓名：{{userForm.name}}</div>
            <div class="contextTitle">昵称：{{userForm.nickName}}</div>
            <div class="contextTitle">年龄：{{userForm.age}}</div>
            <div class="contextTitle">性别：{{userForm.sex}}</div>
            <div class="contextTitle">生日：{{userForm.birthday}}</div>
            <div class="contextTitle">身份：{{userForm.identity}}</div>
            <div class="contextTitle">邮箱：{{userForm.email}}</div>
            <div class="contextTitle">班级：{{userForm.class}}</div>
            <div class="contextTitle">爱好：{{userForm.hobby}}</div>
            <div class="contextTitle">常住地址：{{userForm.address}}</div>
            <div class="contextTurnTo">我的培训</div>
            <div class="contextTurnTo">我的竞赛</div>
            <div class="contextTurnTo">我的发帖</div>
            <div style="width: 100%;height:25vh;text-align: center">
              <el-button style="margin-top: 2vh;" type="info">编辑</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"userCenterView",
  data(){
    return {
      userImage:[
        {url:require('@/assets/images/userImage/userImage02.jpg')}
      ],
      userForm:{
        nickName:"好兄弟",
        name:"疾旋鼬",
        age:"18",
        sex:"男",
        birthday:"2024年02月",
        identity:"学生",
        email:"jixuanyou@qq.com",
        class:"20计本8",
        hobby:"泡澡",
        address:"帕鲁大陆雪山"
      }
    }
  }
}
</script>


<style scoped>
  .outBox{
    padding: 0;
  }
  .changeUserImage{
    font-size: 12px;
    cursor: pointer;
  }
  .changeUserImage:hover{
    color: #FD5531;
  }
  .headPicture{
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }
  .contextRegion{
    width: 100%;
  }
  .userImageCard{
    width: 65%;
  }
  .headPicture /deep/ .el-card__body{
    text-align: center;
  }
  .userCardText1{
    margin-top: 3%;
    margin-bottom: 1%;
    margin-left: 20%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .userCardText{
    margin-left: 20%;
    width: 60%;
    border: 1px solid #000;
    height: 8vh;
    border-radius: 5vh;
    font-weight: bolder;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "微软雅黑 Light";
  }
  .contextTitle{
    width: 49%;
    display: inline-block;
    margin-bottom: 5vh;
    font-size: 18px;
  }
  .contextTurnTo{
    width: 49%;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 5vh;
    font-size: 18px;
  }
  .contextTurnTo:hover{
    color: #FD5531;
  }
</style>