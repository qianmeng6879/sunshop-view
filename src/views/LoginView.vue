<template>
  <TopHeader />
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>login</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="login">
    <h3 class="title">用户登录</h3>
    <el-form label-position="top">
      <el-form-item label="用户名">
        <el-input v-model="userinfo.username" class="form_input" placeholder="username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userinfo.password" class="form_input" placeholder="password" />
      </el-form-item>
      <el-button @click="onLogin" class="login_button">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import TopHeader from "@/components/TopHeader";
import { getUserTokenAPI } from "@/api";
export default {
  components: { TopHeader },
  setup() {
    let userinfo = reactive({ username: "", password: "" });
    let loginState = ref(false);
    return {
      userinfo,
      loginState,
    };
  },
  methods: {
    onLogin() {
      if (this.loginState) {
        this.$message.error("请不要重复点击登录");
      } else {
        this.loginState = true
        getUserTokenAPI(this.userinfo.username, this.userinfo.password).then(
          (response) => {
            this.loginState = false
            localStorage.setItem("accessToken", response.data.token);
            this.$router.replace("/");
          }
        ).catch(() => {
          this.loginState = false
        })
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 400px;
  margin: auto;

  .title {
    font-size: 40px;
    font-weight: 600;
    color: #3d464d;
    text-align: center;
  }

  .login_button {
    background-color: #ffd333;
    border-color: #ffd333;
    color: #3d464d;
    height: 50px;
    width: 100%;
    font-size: 1.25rem;
  }

  .login_button:hover {
    background-color: #ffcb0d;
    border-color: #ffc800;
  }

  .form_input {
    height: 40px;
    width: 100%;
    border: #ffefb3;
  }
}
</style>