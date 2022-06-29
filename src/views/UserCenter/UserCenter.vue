<template>
    <TopHeader />
    <div class="common-layout">
        <el-container class="container">
            <el-aside class="aside" width="200px">
                <el-menu :router="true" active-text-color="#ffd04b" text-color="#fff" background-color="#545c64"
                    default-active="/user/center">
                    <el-menu-item route="/user/center" index="/user/center">个人中心</el-menu-item>
                    <el-menu-item route="/user/address" index="/user/address">收货地址</el-menu-item>
                    <el-menu-item route="/user/favorite" index="/user/favorite">收藏商品</el-menu-item>
                    <el-menu-item route="/user/order" index="/user/order">我的订单</el-menu-item>
                    <el-menu-item route="/user/recharge" index="/user/recharge">充值记录</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>

import TopHeader from '@/components/TopHeader.vue'

export default {
    name: 'user-center',
    components: { TopHeader }
}
</script>

<style lang="less" scoped>
.container {
    width: 90%;
    margin: auto;

    .aside {
        background: white;
    }
}
</style>