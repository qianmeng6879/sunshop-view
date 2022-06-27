<template>
    <div class="product_list">
        <div style="display: flex;flex-wrap: wrap">
            <a v-for="product in productList" :key="product.id" href="#" class="product_item">
                <img class="image" :src="product.image" alt="">
                <h4 class="title">{{ product.title }}</h4>
                <p class="desc">
                    <span v-if="product.desc.length > 16">
                        {{ product.desc.substring(0, 16) }}...
                    </span>
                    <span v-else>
                        {{ product.desc }}
                    </span>
                </p>
                <p class="price">{{ product.price }}元起</p>
            </a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'product-list',
    setup() {
        let productList = ref([
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
                id: 5,
                title: 'Redmi 10A',
                desc: '大电量、大音量、大屏幕',
                image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d764150a470174741d8b0b04515f7a78.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                price: '699',
            },
            {
                id: 6,
                title: 'Redmi K50 Pro',
                desc: '2K直屏的狠旗舰',
                image: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18d2099cb0b05bbd23cb1915dfc9d0d6.jpg?thumb=1&w=200&h=200&f=webp&q=90',
                price: '2999',
            },
        ])

        return { productList }
    }
}
</script>

<style lang="less" scoped>
.product_list {
    width: 1230px;
    margin: auto;

    .product_item {
        width: 230px;
        height: 280px;
        padding: 20px 0;
        background: white;
        margin: 16px 16px 0 0;

        .image {
            width: 160px;
            height: 160px;
            display: block;
            margin: auto;
        }

        .title {
            font-size: 14px;
            font-weight: 400;
            color: #333;
            text-align: center;
            margin: 0 10px 2px;
        }


        .desc {
            margin: 0 10px 10px;
            height: 18px;
            font-size: 12px;
            color: #b0b0b0;
            text-align: center;
        }

        .price {
            text-align: center;
            color: #ff6700;
            margin: 0 10px 14px;
        }
    }
}
</style>