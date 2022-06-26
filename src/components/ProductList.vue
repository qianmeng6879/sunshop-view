<template>
    <div class="product_list">
        <a v-for="item in 10" :key="item" href="#" class="product_item"></a>
    </div>
</template>

<script>
export default {
    name: 'product-list'
}
</script>

<style lang="less" scoped>
.product_list {
    width: 1230px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    .product_item {
        width: 234px;
        height: 280px;
        padding: 20px 0;
        background: white;
        margin: 10px;
    }
}
</style>