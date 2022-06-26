<template>
  <div>
    <TopHeader />
    <hr>
    <div class="home">
      <div style="display:flex; width:1230px; height:460px">
        <div class="block text-center">

        </div>
        <div>
          <el-carousel trigger="click" style="width:900px; height:460px;">
            <el-carousel-item v-for="item in bannerImages" :key="item" style="width:900px; height:460px;">
              <img :src="item" alt="" style="width:900px; height:460px;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <hr>
    <ProductList />
  </div>
</template>

<script>
import { ref } from 'vue'
import TopHeader from "@/components/TopHeader"
import ProductList from '@/components/ProductList'
export default {
  components: { TopHeader, ProductList },
  setup() {
    const bannerImages = ref([
      './images/blogpost2.jpg',
      './images/blogpost3.jpg',
      './images/blogpost4.jpg'
    ])
    return { bannerImages }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: auto;
}
</style>
