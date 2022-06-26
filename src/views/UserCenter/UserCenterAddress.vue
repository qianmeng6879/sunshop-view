<template>
  <div>
    <h2>收获地址列表</h2>
    <hr />
    <el-table :data="addressData" style="width: 100%">
      <el-table-column prop="province" label="省份" width="180" />
      <el-table-column prop="city" label="城市" width="180" />
      <el-table-column prop="area" label="地区" width="180" />
      <el-table-column prop="detail" label="详细地址" width="180" />
      <el-table-column prop="name" label="联系人姓名" width="180" />
      <el-table-column prop="phone" label="联系电话" />
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getAddressListAPI } from '@/api'
export default {
  mounted() {
    getAddressListAPI().then(
      response => {
        this.addressData = response.data
        console.log(this.addressData)
      }
    )
  },
  setup() {
    let addressData = ref([])

    return {
      addressData
    }
  }
};
</script>

<style>
</style>