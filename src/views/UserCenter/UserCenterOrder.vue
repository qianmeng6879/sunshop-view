<template>
  <div>
    <h2>订单列表</h2>
    <hr />
    <el-table :data="orderListData" style="width: 100%">
      <el-table-column prop="id" label="订单编号" />
      <el-table-column prop="product.title" label="商品名称" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="quantity" label="商品数量" width="100" />
      <el-table-column prop="price" label="商品总价" />
      <el-table-column prop="state" label="订单状态" />
      <el-table-column label="操作">
        <template #default="scoped">
          <el-button type="primary" @click="onShowDetail(scoped.row.id)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getOrderListAPI } from '@/api'
export default {
  setup() {
    let orderListData = ref([])
    return {
      orderListData
    }
  },
  mounted() {
    getOrderListAPI().then(response => {
      this.orderListData = response.data
    })
  },
  methods: {
    onShowDetail(id) {
      this.$router.push('/order/detail/' + id)
    }
  }
}
</script>

<style>
</style>