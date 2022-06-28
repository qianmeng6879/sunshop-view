<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header" style="padding: 0;">
        管理站点
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'sunshop-admin',
}
</script>

<style scoped land="less">
.header {
  background: #ccc;
}
</style>
