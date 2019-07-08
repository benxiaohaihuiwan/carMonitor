<template>
  <div class="background-image">
    <div style="width:50%">
      <p v-text="description" class="description-content"></p>
      <p class="description-background"></p>
      <company-desc></company-desc>
    </div>

    <div class="loginForm">
      <el-form ref="loginForm" :model="loginForm" class="login-Dialog">
        <p class="login-background"></p>
        <p
          style="font-size:25px;color:#006BFF;font-family: MicrosoftYaHei-Bold;
    font-weight: bold;    margin-top: 20px;
    margin-bottom: 20px;"
        >欢迎登陆</p>
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            prefix-icon="el-icon-s-custom"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <div class="password">
          <el-checkbox
            v-model="login_password_state"
            style="font-size:16px"
            @change="loginPasswordRemember"
          >记住密码</el-checkbox>
          <p class="forget-password">忘记密码</p>
        </div>
        <el-button type="primary" style="width:100%" @click="checkLogin">登陆</el-button>
      </el-form>
    </div>
    <div class="code">
      <img src="../../image/code.png">
      <p>真好运APP</p>
    </div>Ï
  </div>
</template>

<script>
import CompanyDesc from "../company-description.vue";
import requestUrl from "../../api/Waybill"; //接口统一处理
import request from "../../utils/request";
export default {
  name: "login",
  data() {
    return {
      description: "企业车辆运营平台",
      loginForm: {
        userName: "",
        password: ""
      },
      login_password_state:
        localStorage.getItem("loginPasswordState") === "true" ? true : false
    };
  },
  components: {
    CompanyDesc
  },
  methods: {
    // 是否记住密码
    loginPasswordRemember: function() {
      if (this.login_password_state) {
        localStorage.setItem("loginFormUserName", this.loginForm.userName);
        localStorage.setItem("loginFormPassWord", this.loginForm.password);
        localStorage.setItem("loginPasswordState", this.login_password_state);
      } else {
        localStorage.removeItem("loginFormUserName");
        localStorage.removeItem("loginFormPassWord");
        localStorage.removeItem("loginPasswordState");
      }
    },
    // 登陆状态
    checkLogin: function() {
      console.log(this.loginForm);
      let that = this;
      if (!this.loginForm.userName && !this.loginForm.password) {
        this.$message({
          message: "请输入账号和密码",
          type: "warning"
        });
        return false;
      } else if (!this.loginForm.userName) {
        this.$message({
          message: "请输入账号",
          type: "warning"
        });
      } else if (!this.loginForm.password) {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
      } else {
        const url = requestUrl.login;
        const params = {};
        params.requestBody = this.loginForm;

        this.axios.post(url, params).then(
          res => {
            request.requestResult(that, res.data, () => {
              if (res.data) {
                this.$router.push({ path: "/Home" });
              }
            });
          },
          err => {
            console.error();
          }
        );
      }
    }
  }
};
</script>

<style>
.background-image {
  background-image: url("../../image/backgroundCar.png");
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.description-background {
  background-color: #006bff;
  height: 25px;
  width: 388px;
  margin-left: 59px;
  margin-top: -25px;
}
.login-background {
  background-color: #006bff;
  height: 7px;
  width: 300px;
  margin-left: -26px;
  margin-top: -6px;
}
.description-content {
  width: auto;
  font-size: 2rem;
  padding: 70px 0px 0px 55px;
  font-size: 50px;
  color: white;
}
.loginForm {
  display: flex;
  align-items: center;
  margin-left: 150px;
}
.login-Dialog {
  width: 250px;
  height: 350px;
  margin-right: 100px;
  padding: 0px 25px;
  background-color: white;
}
.code {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 70px;
  padding-right: 30px;
}
.code img {
  width: 80px;
  height: 80px;
}
.code p {
  color: white;
  font-size: 1rem;
}
.password {
  margin-top: 20px;
  margin-bottom: 60px;
  height: 12px;
  line-height: 12px;
}
.forget-password {
  display: inline-block;
  float: right;
  color: #409eff;
}
.el-icon-lock:before {
  color: #409eff;
}
.el-icon-s-custom:before {
  color: #409eff;
}
</style>


