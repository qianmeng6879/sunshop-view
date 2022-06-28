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
    <ProductList title="手机" :products="phoneProductList" />
  </div>
  <div>
    <ProductList title="笔记本 | 平板" :products="loptopProductList" />
  </div>
  <div>
    <ProductList title="智能穿戴" :products="smartWithProductList" />
  </div>

</template>

<script>
import { ref } from 'vue'

import TopHeader from "@/components/TopHeader"
import ProductList from '@/components/ProductList'
import Banner from '@/components/Banner'
export default {
  components: { TopHeader, ProductList, Banner },
  setup() {
    let phoneProductList = ref([
      {
        id: 1,
        title: 'Redmi Note 11T Pro+',
        desc: '天玑8100｜真旗舰芯',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=200&h=200&f=webp&q=90',
        price: '2099',
      },
      {
        id: 2,
        title: 'Redmi Note 11T Pro',
        desc: '天玑8100｜真旗舰芯',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5713971c4bb6512743dfd06023080268.png?thumb=1&w=200&h=200&f=webp&q=90',
        price: '1799',
      },
      {
        id: 3,
        title: 'Redmi Note 11SE',
        desc: '双卡双5G｜疾速登陆',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7fccce9e65aff2d7c913e40f4bee1b0b.png?thumb=1&w=200&h=200&f=webp&q=90',
        price: '999',
      },
      {
        id: 4,
        title: 'Xiaomi Civi 1S',
        desc: '原生美肌人像｜奇迹阳光动人新色｜骁龙778G Plus',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bcd64f412dfb5e15695fa96d21ecb23.png?thumb=1&w=200&h=200&f=webp&q=90',
        price: '2299',
      },
      {
        id: 6,
        title: 'Redmi K50 Pro',
        desc: '2K直屏的狠旗舰',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18d2099cb0b05bbd23cb1915dfc9d0d6.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '2999',
      },
    ])
    let loptopProductList = ref([
      {
        id: 11,
        title: 'Redmi Book Pro 15 2022',
        desc: '全新12代英特尔处理器',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '5599',
      },
      {
        id: 12,
        title: 'Redmi G 2021 R7/RTX3050Ti/16G/51',
        desc: '有光追，才是高性能游戏本',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/68637deb3ab9cecdc7805c7154e79683.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '5799',
      },
      {
        id: 13,
        title: 'RedmiBook Pro 15 R5/16G/512G 灰',
        desc: '3.2K 超清视网膜全面屏 | 微米级一体精雕工艺',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b60f8c50789c123c11e060e7b283a315.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '4699',
      },
      {
        id: 14,
        title: 'Redmi Book Pro 14 2022',
        desc: '全新12代英特尔处理器，2.5K 120Hz高清屏，可选MX550独立显卡,CNC一体精雕工艺',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e3c300330221ad788569e4fb1e6f932f.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '5399',
      },
      {
        id: 15,
        title: '小米平板5 Pro',
        desc: '骁龙870芯片 | 2.5K超高清｜120HZ高刷新率',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '2499',
      },
    ])
    let smartWithProductList = ref([
      {
        id: 21,
        title: 'Xiaomi Watch S1',
        desc: '蓝宝石玻璃镜面 | 不锈钢中框 | 1.43”AMOLED大屏幕',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8259e8fb355acf168c66f75d375c6af.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '1049',
      },
      {
        id: 22,
        title: 'Xiaomi真无线降噪耳机3',
        desc: '40dB宽频主动降噪 | HiFi高保真音质 | HRTF专业调音',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b271a074e087848357aa61ae665b214.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '349',
      },
      {
        id: 23,
        title: 'Redmi 手表 2',
        desc: '1.6"AMOLED大屏 | 117种运动模式 | 24小时心率监测',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f84503dbf5adbdf17111c61d4a7cf893.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '399',
      },
      {
        id: 24,
        title: '小米手环6 NFC版',
        desc: '1.56" 跑道全面彩屏 | 30种运动模式 | 24小时心率监测',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b28153b80cb2c67564608e56d5c2f3f3.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '239',
      },
      {
        id: 25,
        title: 'Redmi Buds 3 青春版',
        desc: '轻巧真无线 | 猫耳状稳固设计 | 18小时长续航',
        image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=200&h=200&f=webp&q=90',
        price: '99',
      },
    ])
    return { phoneProductList, loptopProductList, smartWithProductList }
  },
}
</script>

<style lang="less" scoped>
</style>
