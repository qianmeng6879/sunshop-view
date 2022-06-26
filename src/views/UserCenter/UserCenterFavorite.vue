<template>
    <div>
        <h2>收藏列表</h2>
        <hr />
        <el-table :data="favoriteListData" style="width: 100%">
            <el-table-column label="商品名称" width="180">
                <template #default="scoped">
                    <el-link>
                        {{ scoped.row.product.title }}
                    </el-link>
                </template>
            </el-table-column>
            <el-table-column label="商品价格" width="180">
                <template #default="scoped">
                    $ {{ scoped.row.product.toPrice }}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button type="primary" @click="onAddCart(scope.row.id)">加入购物车</el-button>
                </template>
            </el-table-column>
            <el-table-column label="删除" width="180">
                <template #default="scope">
                    <el-button type="danger" @click="onRemove(scope.row.id)">移除收藏</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getFavoriteListAPI } from "@/api"
export default {
    setup() {
        let favoriteListData = ref([])
        return {
            favoriteListData
        }
    },
    mounted() {
        getFavoriteListAPI().then(
            response => {
                this.favoriteListData = response.data
            }
        )
    },
    methods: {
        onAddCart(id) {
            this.$message.success("加入购物车 " + id)
        },
        onRemove(id) {
            this.$message.success("移除收藏 " + id)
        }
    }
}
</script>

<style>
</style>