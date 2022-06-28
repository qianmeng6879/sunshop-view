<template>

    <div class="product_list">
        <h2 class="title">{{ title }}</h2>
        <div style="display: flex;flex-wrap: wrap">
            <router-link :to="`/product/${product.id}`" v-for="product in products" :key="product.id" href="#"
                class="product_item">
                <img class="image" :src="product.image" alt="">
                <h4 class="title">
                    <span v-if="product.title.length > 25">
                        {{ product.title.substring(0, 25) }}...
                    </span>
                    <span v-else>
                        {{ product.title }}
                    </span>
                </h4>
                <p class="desc">
                    <span v-if="product.desc.length > 16">
                        {{ product.desc.substring(0, 16) }}...
                    </span>
                    <span v-else>
                        {{ product.desc }}
                    </span>
                </p>
                <p class="price">{{ product.price }}元起</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-list',
    props: ['title', 'products'],
    setup(props) {
        return {
            props
        }

    }
}
</script>

<style lang="less" scoped>
.product_list {
    width: 1230px;
    margin: auto;

    .title {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
    }

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
            color: #FFD333;
            margin: 0 10px 14px;
        }
    }
}
</style>