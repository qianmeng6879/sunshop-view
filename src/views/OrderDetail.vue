<template>
    <TopHeader />
    <div class="main">
        <h2 style="font-weight: 700;font-size: 1.75rem; color:#3D464D">订单详情</h2>
        <el-divider />
        <div class="content">
            <div class="info">
                <h3>商品信息</h3>
                <el-table :data="orderInfo" style="width: 100%">
                    <el-table-column prop="product.title" label="商品标题" />
                    <el-table-column prop="product.toPrice" label="商品单价" />
                    <el-table-column prop="quantity" label="购买数量" />
                    <el-table-column prop="price" label="总计"/>
                </el-table>
            </div>
            <div class="operat">
                <h3>订单汇总</h3>
                订单操作
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import { getOrderDetailAPI } from '@/api'
import TopHeader from '@/components/TopHeader'
export default {
    name: 'order-detail',
    components: { TopHeader },
    setup() {
        let orderInfo = ref([])

        return { orderInfo }
    },
    mounted() {
        let orderId = this.$route.params.id
        getOrderDetailAPI(orderId).then(
            response => {
                this.orderInfo.push(response.data)
                console.log(this.orderInfo)
            }
        )
    }
}
</script>

<style scoped lang="less">
.main {
    width: 1450px;
    margin: auto;
}

.content {
    width: 1450px;
    display: flex;


    .info {
        width: 980px;

        .product_table {
            width: 980px;

        }

        .product_table th {
            color: #fff;
            width: 320px;
            height: 50px;
            background-color: #343a40;
            border-color: #454d55;
            text-align: center;
            border: 1px solid #dee2e6;
        }
    }

    .info>h3 {
        font-weight: 500;
        font-size: 1.25rem;
        font-family: "Roboto", sans-serif;
    }

    .operat>h3 {
        font-weight: 500;
        font-size: 1.25rem;
        font-family: "Roboto", sans-serif;
    }


    .operat {
        margin-left: 20px;
        width: 450px;
        color: #3D464D;
    }



}
</style>