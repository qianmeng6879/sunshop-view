<template>
    <div>
        <h2>收藏列表</h2>
        <hr />
        <el-table :data="favoriteListData" style="width: 100%">
            <el-table-column label="商品名称">
                <template #default="scoped">
                    <router-link :to="`/product/${scoped.row.id}`">
                        <el-link>
                            {{ scoped.row.product.title }}
                        </el-link>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column label="商品价格">
                <template #default="scoped">
                    $ {{ scoped.row.product.toPrice }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="primary" @click="onAddCart(scope.row.id)">加入购物车</el-button>
                    <el-popconfirm title="确定要删除吗?" @confirm="onRemove(scope.row.id)">
                        <template #reference>
                            <el-button type="danger">取消收藏</el-button>
                        </template>
                    </el-popconfirm>

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