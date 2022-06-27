<template>
    <div style="background: #333;">
        <div class="header">
            <el-row>
                <router-link to="/">
                    <span class="header_item">太阳商城</span>
                </router-link>
                <a href="#">
                    <span class="header_item">关于我们</span>
                </a>
                <a href="#">
                    <span class="header_item">社区交流</span>
                </a>
            </el-row>

            <el-dropdown v-if="username" style="margin-left: auto;">
                <span class="header_item">
                    {{ username }}
                    <el-icon>
                        <ArrowDownBold />
                    </el-icon>
                </span>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="$router.push('/user/center')">个人中心</el-dropdown-item>
                        <el-dropdown-item style="color: #be4646" @click="onLogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div v-else style="margin-left: auto;">
                <el-row>
                    <router-link to="/login">
                        <span class="header_item">登录</span>
                    </router-link>
                    <router-link to="/register">
                        <span class="header_item">注册</span>
                    </router-link>
                </el-row>
            </div>
        </div>
    </div>
    <div style="background: white">
        <div class="logo_section">
            <span class="sun">SUN</span>
            <span class="shop">SHOP</span>
            <div style="margin-left:auto">
                <h4 style="font-size: 16px; color: #6C757D;font-weight: 400;">Customer Service </h4>
                <h5 style="font-size: 20px; color: #3D464D;font-weight: 500;    font-family: 'Roboto';">+012
                    345 6789</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        let username = ref('')
        return {
            username
        }
    },
    mounted() {
        let username = sessionStorage.getItem("username") || ''
        if (username !== '') {
            this.username = username
        }
    },
    methods: {
        onLogout() {
            localStorage.clear()
            sessionStorage.clear()
            this.$message.success('退出成功')
            // 刷新当前页面
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 1230px;
    display: flex;
    margin: auto;
    font-size: 18px;
    color: rgb(124, 122, 119);

    .header_item {
        color: #b0b0b0;
        line-height: 40px;
        font-size: 12px;
        padding: 0 10px;
    }

    .header_item:hover {
        color: white
    }

    .el-link {
        margin-right: 8px;
    }

    .el-link .el-icon--right.el-icon {
        vertical-align: text-bottom;
    }
}

.logo_section {
    width: 1230px;
    height: 50px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 0;
    background: white;

    .sun {
        color: #FFD333;
        background: #3D464D;
        font-weight: 700;
        font-size: 2.5rem;
        padding: 0 0.5rem
    }

    .shop {
        color: #3D464D;
        background: #FFD333;
        font-weight: 700;
        font-size: 2.5rem;
        padding: 0 0.5rem
    }
}
</style>