<template>
  <div>
    <TopHeader />
  </div>
  <br>
  <div>
    <Banner />
  </div>
  <br>
  <div>
    <ProductList />
  </div>

</template>

<script>
import TopHeader from "@/components/TopHeader"
import ProductList from '@/components/ProductList'
import Banner from '@/components/Banner'
export default {
  components: { TopHeader, ProductList, Banner },
}
</script>

<style lang="less" scoped>
</style>
