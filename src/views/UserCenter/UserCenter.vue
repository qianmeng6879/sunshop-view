<template>
    <TopHeader />
    <div class="common-layout">
        <el-container class="container">
            <el-aside class="aside" width="270px">
                <el-menu router="true" active-text-color="#ffd04b" text-color="#fff" background-color="#545c64"
                    default-active="/user/center">
                    <el-menu-item route="/user/center" index="/user/center">User Center</el-menu-item>
                    <el-menu-item route="/user/address" index="/user/address">My Address</el-menu-item>
                    <el-menu-item route="/user/favorite" index="/user/favorite">My Favorites</el-menu-item>
                    <el-menu-item route="/user/order" index="/user/order">My Order</el-menu-item>
                    <el-menu-item route="/user/recharge" index="/user/recharge">My Recharge</el-menu-item>
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