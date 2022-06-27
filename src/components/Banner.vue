<template>
    <div class="content">
        <div style="display:flex">
            <Category />
            <div class="banner">
                <el-carousel trigger="click" style="height:460px; width:984px;">
                    <el-carousel-item style="height:460px; width:984px;" v-for="bannerImage in bannerImageList"
                        :key="bannerImage">
                        <img :src="bannerImage" alt="" style="height:460px; width:984px;">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

import Category from '@/components/Category'

export default {
    name: 'sunshop-banner',
    components: { Category },
    setup() {
        let bannerImageList = ref([
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7872075a72ffc83108c2efcbfc92e5.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fecdd392ada6618dc3e40e98f9f7be4f.png?thumb=1&w=1226&h=460&f=webp&q=90',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b549726ae51e189b4c3eb0f672cba36.jpg?w=2452&h=920',
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06c044611f215ddef570d3a6a9a60725.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
        ])

        return {
            bannerImageList
        }
    }
}
</script>

<style scoped lang="less">
.content {
    width: 1230px;
    height: 460px;
    margin: auto;

    .banner {
        background: #333;
    }
}
</style>