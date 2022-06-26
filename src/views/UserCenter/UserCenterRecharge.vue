<template>
    <div>
        <h2>充值记录</h2>
        <hr />
        <el-table :data="rechargeListData">
            <el-table-column prop="id" label="编号" />
            <el-table-column prop="amount" label="充值金额" />
            <el-table-column prop="newBalance" label="当前余额" />
            <el-table-column prop="oldBalance" label="之前余额" />
            <el-table-column prop="createTime" label="充值时间" />
        </el-table>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getRechargeListAPI } from '@/api'

export default {
    setup() {
        let rechargeListData = ref([])
        return {
            rechargeListData
        }
    },
    mounted() {
        getRechargeListAPI().then(
            response => {
                this.rechargeListData = response.data
            }
        )
    }
}
</script>

<style>
</style>