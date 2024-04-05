<template>
  <div class="outBox">
    <el-row style="margin-top: 2%;">
      <el-col :span="10" style="display: flex;justify-content: flex-end">
        <div class="headPicture">
          <el-card class="userImageCard">
            <div style="width: 100%">
              <el-upload
                  :action="''"
                  class="avatar-uploader"
                  :http-request="uploadAvatar"
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload">
                <img style="border-radius:100%;width: 50%;height: auto" v-if="userImage" :src="userImage" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="changeUserImage">点击头像更换</div>
            <div class="userCardText1">欢迎回来</div>
            <div class="userCardText">{{userForm.nickName}}</div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="contextRegion">
          <el-card style="width: 85%;height: 75vh;">
            <el-col :span="12">
              <div class="contextTitle">姓名：{{userForm.userName}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">昵称：{{userForm.nickName}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">学号：{{userForm.stuId}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">年龄：{{userForm.age}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">性别：{{ userForm.sex === 0 ? '男' : '女' }}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">生日：{{userForm.birthday}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">邮箱：{{userForm.email}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">班级：{{userForm.classes}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">爱好：{{userForm.hobby}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTitle">常住地址：{{userForm.address}}</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTurnTo">我的培训</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTurnTo">我的竞赛</div>
            </el-col>
            <el-col :span="12">
              <div class="contextTurnTo">我的发帖</div>
            </el-col>
            <div style="width: 100%;height:25vh;display: flex;justify-content: space-between;">
              <el-button style="margin-top: 2vh;width:50%;height: 20%;" type="info" @click="dialogFormVisible = true">编辑</el-button>
              <el-dialog title="请输入" :visible.sync="dialogFormVisible">
                <el-form class="changeFormList" :model="changeForm" label-width="70px">
                  <el-form-item class="form-item" label="昵称">
                    <el-input style="width: 100%;" v-model="changeForm.nickName"></el-input>
                  </el-form-item>
                  <el-form-item class="form-item" label="年龄">
                    <el-input style="width: 100%;" v-model="changeForm.age"></el-input>
                  </el-form-item>
                  <el-form-item  class="form-item" label="学院">
                    <el-select  v-model="changeForm.college" placeholder="请选择">
                      <el-option
                          v-for="item in collegeList"
                          :key="item.collegeId"
                          :label="item.collegeName"
                          :value="item.collegeId">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item  class="form-item" label="专业">
                    <el-select  v-model="changeForm.profession" filterable  placeholder="请选择">
                      <el-option
                          v-for="item in professionList"
                          :key="item.collegeId"
                          :label="item.professionName"
                          :value="item.collegeId">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item  class="form-item" label="性别">
                    <el-select  v-model="changeForm.sex" placeholder="请选择">
                      <el-option
                          v-for="item in sexList"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="form-item" label="生日">
                    <el-date-picker
                        v-model="changeForm.birthday"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item class="form-item" label="邮箱">
                    <el-input style="width: 100%;" v-model="changeForm.email"></el-input>
                  </el-form-item>
                  <el-form-item class="form-item" label="班级">
                    <el-input style="width: 100%;" v-model="changeForm.classes"></el-input>
                  </el-form-item>
                  <el-form-item class="form-item" label="爱好">
                    <el-input style="width: 100%;" v-model="changeForm.hobby"></el-input>
                  </el-form-item>
                  <el-form-item class="form-item" label="常住地址">
                    <el-input style="width: 100%;" v-model="changeForm.address"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button @click="submitUserChange" type="primary" >确 定</el-button>
                </div>
              </el-dialog>
              <el-button @click="logout" style="margin-top: 2vh;width:50%;height: 20%;" type="danger">退出登录</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getUserDetail,uploadAvatar,updateUserMessage} from "@/api/userCenter";
import {logout} from "@/api/logIn";
import {getCollegeList,getProfessionList} from "@/api/index";
import router from "@/router";
export default {
  name:"userCenterView",
  data(){
    return {
      userImage:"",
      userForm:{},
      dialogTableVisible: false,
      dialogFormVisible: false,
      changeForm: {
        nickName:"",
        age:"",
        sex:"",
        birthday:"",
        email:"",
        classes:"",
        hobby:"",
        address:"",
        college:"",
        profession:""
      },
      sexList:[
        {value:0,label:"男"},
        {value:1,label:"女"},
      ],
      professionList:[],
      collegeList:[]
    }
  },
  methods:{
    logout(){
      logout().then(() => {
        localStorage.clear("Authorization");
        router.push("/logIn");
      });
    },
    uploadAvatar(options){
      const formData = new FormData();
      formData.append('file', options.file);
      uploadAvatar(formData).then(() => {
        this.$message({
          message: '更新成功!',
          type: 'success'
        });
      });
      getUserDetail().then((res) => {
        this.userForm = res.data.data;
        this.userImage = require('@/assets/images/userImage/'+res.data.data.avatar);
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitUserChange(){
      this.dialogFormVisible = false;
      const changeList = this.changeForm;
      updateUserMessage(changeList).then((res) => {
        console.log(res);
      });
    }
  },
  mounted() {
    getUserDetail().then((res) => {
      this.userForm = res.data.data;
      this.userImage = require('@/assets/images/userAvatar/'+res.data.data.avatar);
    });
    getCollegeList().then((res) => {
      this.collegeList=res.data.data
    });
    getProfessionList().then((res) => {
      console.log(res.data.data);
      this.professionList = res.data.data;
    });
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
    width: 100%;
    min-height: 30px;
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
  .changeFormList{
    display: flex;
    flex-wrap: wrap;
  }
  .form-item {
    margin-right: 10px; /* 可选：添加一些右边距 */
  }
  /deep/.el-input__inner{
    width: 210px;
  }
</style>