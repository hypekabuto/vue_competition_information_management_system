<template>
  <div class="outBox">
    <el-row type="flex" justify="center" align="middle" style="height: 50vh;width: 50vh;">
      <el-col :span="24" style="height: 100%">
        <el-card class="center-card">
          <el-form :model="form" class="center-form">
            <el-form-item prop="account">
              <div class="label-container">
                <span class="alertText">账号</span>
                <el-input class="inputAero" size="medium" v-model="form.stuId" placeholder="请输入学号"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="password">
              <div class="label-container">
                <span class="alertText">密码</span>
                <el-input class="inputAero"  v-model="form.password" placeholder="请输入密码"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="code">
              <div class="label-container">
                <span class="alertText">验证码</span>
                <el-input class="inputAero" v-model="form.code" placeholder="请输入验证码"></el-input>
              </div>
              <div style="margin-top: 20px;max-height: 50px;">
                <img class="codeImage" :src="imagePath"/>
                <span class="changeCodeImage">看不清？换一张</span>
              </div>
            </el-form-item>
            <el-button  type="primary" class="button" @click="logIn">Log In</el-button>
            <div style="font-size: 12px;color: #460088">
              <div style="cursor: pointer;display: inline-block;width: 20%">找回密码</div>
              <div style="cursor: pointer;display: inline-block;width: 20%">注册</div>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {login} from "../api/logIn";
  export default {
    name:"logIn",
      data(){
        return{
          form:{
            stuId:'',
            password:'',
            code:''
          },
          imagePath:""
        }
      },
    methods:{
      logIn(){
        login(this.form).then((res)=>{
          console.log(res);
        });
      }
    },
    mounted() {
      this.imagePath=require('@/assets/images/login/code.jpg')
    }
  }
</script>

<style scoped>
  .outBox {
    background-image: url("@/assets/images/login/logInBackground.png");
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .center-card {
    width: 100%;
    height: 100%;
    background-color: rgba(224, 220, 220, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center-form {
    width: 100%;
    text-align: center;
  }

  .label-container {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .label-container span {
    width: 60px;
  }
  .label-container el-input {
    flex-grow: 1;
    min-width: 0;
  }
  .codeImage{
    width: 35%;
    height: 35%;
  }
  .alertText{
    color: black;
    font-size: 17px;
  }
  ::v-deep .el-input__inner {
    border: none;
    border-radius: 23px;
    width: 100%;
    height: 40px;
  }
  .changeCodeImage{
    color: #460088FF;
    position: absolute;
    margin-top: 2.9%;
    white-space: nowrap;
    font-size: 10px;
    cursor: pointer
  }
  .inputAero{
    width: auto;
  }
  .button{
    width: 40%;
    height: 35px;
    font-weight: 900;
    border-radius: 75px;
    color: white;
    border:none;
    margin-top: 15px;
    padding: 0;
    text-align: center;
    margin-bottom: 15px;
    background-color: #CE8136;
  }

</style>