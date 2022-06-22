<template>
    <TopHeader />
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Cart</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="car">
        购物车
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
export default {
    name: 'shop-cart',
    components: { TopHeader },


}
</script>

<style>
</style>