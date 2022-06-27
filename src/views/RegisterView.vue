<template>
    <TopHeader />
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>register</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="register">
        <h3 class="title">用户注册</h3>
        <el-form label-position="top">
            <el-form-item label="用户名">
                <el-input v-model="userinfo.username" class="form_input" placeholder="username" />
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="userinfo.nickname" class="form_input" placeholder="nickname" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="userinfo.password" class="form_input" placeholder="password" />
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" v-model="userinfo.confirmPassword" class="form_input"
                    placeholder="confirmPassword" />
            </el-form-item>
            <el-button @click="onRegister" class="register_button">注册</el-button>
        </el-form>
    </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import TopHeader from '@/components/TopHeader'
import { userRegisterAPI } from '@/api'
export default {
    components: { TopHeader },
    setup() {
        let userinfo = reactive({
            username: '',
            nickname: '',
            password: '',
            confirmPassword: ''
        });
        return {
            userinfo,
        };
    },
    methods: {
        onRegister() {

            if (this.userinfo.password !== this.userinfo.confirmPassword) {
                return this.$message.error("两次密码不一致")
            }

            userRegisterAPI(this.userinfo).then(
                () => {
                    this.$message.success('注册成功')
                    setTimeout(() => {
                        this.$router.push("/login")
                    }, 500);
                }
            )
        }
    }
};
</script>

<style lang="less" scoped>
.register {
    width: 400px;
    margin: auto;

    .title {
        font-size: 40px;
        font-weight: 600;
        color: #3D464D;
        text-align: center;
    }

    .register_button {
        background-color: #FFD333;
        border-color: #FFD333;
        color: #3D464D;
        height: 50px;
        width: 100%;
        font-size: 1.25rem;
    }

    .register_button:hover {
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