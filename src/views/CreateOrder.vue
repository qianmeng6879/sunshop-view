<template>
    <TopHeader />
    <el-divider />
    <div class="content">
        <h4>商品信息</h4>
        <div class="product_info">
            <div class="product_item">
                <img style="width: 80px;height:80px;display:block" src="/static/images/main.jpg.avif" alt="">
                <div style="margin-left: 20px;">
                    <h3 class="product_title">
                        Redmi K50 Pro
                        <span class="product_desc">
                            天玑9000｜120W秒充｜5000mAh电池｜三星2K直屏｜VC液冷散热｜OIS光学防抖｜1亿像素
                        </span>
                    </h3>
                    <div class="specification">
                        <span>12GB+256GB</span>
                        <span>银迹</span>
                        <div style="float: right;color: #ffd333; font-size:24px;">
                            2999 元
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <el-divider />
        <h4 style="display:flex;">
            <span>收获地址信息</span>
            <a href="#" @click.prevent="dialogVisible = true" class="add_address">新增</a>
        </h4>
        <el-dialog destroy-on-close v-model="dialogVisible" :title="isEditState ? '编辑收货地址' : '新增收货地址'" width="30%">
            <el-form label-position="top" label-width="100px">
                <el-form-item label="省份">
                    <el-input v-model="addressObj.province"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                    <el-input v-model="addressObj.city"></el-input>
                </el-form-item>
                <el-form-item label="区域">
                    <el-input v-model="addressObj.area"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="addressObj.detail"></el-input>
                </el-form-item>
                <el-form-item label="收货人姓名">
                    <el-input v-model="addressObj.name"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="addressObj.phone"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button v-if="isEditState" type="primary" @click="onEditAddressSubmit">修改</el-button>
                    <el-button v-else type="primary" @click="onCreateAddressSubmit">新增</el-button>
                </span>
            </template>
        </el-dialog>

        <div class="address_list">
            <a @click.prevent href="#" v-for="address in addressList" :key="address.id">
                <div class="address_item">
                    <p>
                        姓名：{{ address.name }}
                    </p>
                    <p>
                        电话：{{ address.phone }}
                    </p>
                    <p>
                        {{ address.province }} {{ address.city }} {{ address.area }}
                    </p>
                    <p>
                        {{ address.detail }}
                    </p>
                </div>
            </a>
        </div>
        <div class="order_footer">
            <span class="total_price">总价：2999元</span>
            <a @click.prevent="onSubmitOrder" href="#" class="submit_order">提交订单</a>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import TopHeader from '@/components/TopHeader'
import { getAddressListAPI, addAddressAPI } from '@/api'
export default {
    name: 'create-order',
    components: { TopHeader },
    setup() {
        let addressList = ref([])
        let dialogVisible = ref(false)
        let addressObj = reactive({
            id: null,
            province: '',
            city: '',
            area: '',
            detail: '',
            name: '',
            phone: ''
        })

        return { addressList, dialogVisible, addressObj }
    },
    mounted() {
        getAddressListAPI().then(
            response => {
                this.addressList = response.data
            }
        )
    },
    methods: {
        onSubmitOrder() {
            this.$message.success('创建订单成功，正在跳转订单详情页面~~')
            setTimeout(() => {
                this.$router.push('/order/detail/1')
            }, 400)
        },
        onCreateAddressSubmit() {
            addAddressAPI(this.addressObj).then(
                response => {
                    if (response.data) {
                        this.addressList.push(response.data)
                        this.$message.success('新增收货地址成功')

                    } else {
                        this.$message.warn("新增收获地址失败，请稍后重试")
                    }
                    this.dialogVisible = false
                }
            )
        },
    }
}
</script>

<style scoped lang="less">
.content {
    width: 960px;
    height: 100%;
    margin: auto;

    h4 {
        line-height: 32px;
    }

    .product_item {
        display: flex;
        background: white;

        .product_title {
            font-size: 24px;
            font-weight: 400;
            color: #212121;
        }

        .product_desc {
            color: #b0b0b0;
            padding-top: 8px;
            font-size: 14px;
        }

        .specification {
            height: 42px;
            line-height: 42px;
            color: rgba(92, 91, 91, 0.8);

            span {
                padding: 0 5px;
            }
        }
    }



    .add_address {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-left: auto;
        color: #ffd333;
        font-size: 18px;
        border: 1px solid #ffd333;
        border-radius: 5px;
    }

    .add_address:hover {
        background: #ffd333;
        color: white;
    }

    .address_list {
        display: flex;
    }

    .address_item {
        margin: 10px;
        width: 260px;
        height: 110px;
        padding: 10px;
        background: white;
        border-radius: 10px;
        border: 1px solid #eee;

        p {
            padding: 2px 0;
        }
    }

    .address_item:hover {
        border-color: #ffd333;
    }

    .order_footer {
        text-align: right;
        height: 40px;
        line-height: 40px;
        display: flex;

        .total_price {
            margin-right: 30px;
            font-size: 28px;
            color: #ffd333;
            margin-left: auto;
        }

        .submit_order {
            display: block;
            height: 40px;
            line-height: 40px;
            background: #ffd333;
            padding: 0 15px;
            border-radius: 10px;
        }
    }


}
</style>