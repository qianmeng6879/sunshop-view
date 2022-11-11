<template>
    <TopHeader></TopHeader>
    <div class="content">
        <div class="images">
            <img class="product_image" :src="product.mainPicture" />
            <div class="sub_image_list">
                <img class="sub_image_item" v-for="subImage in product.subPictures" :key="subImage" :src="subImage"
                    alt="">
            </div>
        </div>
        <div class="detail">
            <h4 class="title">{{ product.title }}</h4>
            <p class="desc">{{ product.introduction }}</p>
            <p class="des_price">
                <span class="to_price">{{ product.toPrice }} 元</span>
            </p>
            <el-divider />
            <div>
                <h4 class="choice_title">选择版本</h4>

                <ul class="choice">
                    <el-radio-group v-model="storeVersion">
                        <el-radio-button v-for="store in storeVersion" :key="store.id">
                            <a class="chice_item" href="#">
                                <input :id="`store_version_${store.id}`" type="radio" name="version" />
                                <label style="width: 100%;height:100px" :for="`store_version_${store.id}`">{{
                                store.name
                                }}</label>
                            </a>
                        </el-radio-button>
                    </el-radio-group>
                </ul>
                <h4 class="choice_title">选择颜色</h4>
                <ul class="choice">
                    <li v-for="color in colorVersion" :key="color.id">
                        <a class="chice_item" href="#">
                            <input :id="`color_version_${color.id}`" type="radio" name="color" />
                            <label style="width: 100%;height:100px" :for="`color_version_${color.id}`">{{ color.name
                            }}</label>
                        </a>
                    </li>
                </ul>
            </div>
            <el-divider style="margin-bottom: 10px;" />
            <div class="footer">
                <div class="count">总计：{{ product.toPrice }}元</div>
                <div class="operator">
                    <a @click.prevent="onBuy" href="#" id="now_buy">立即购买</a>
                    <a href="#" id="add_cart">加入购物车</a>
                    <a href="#" id="add_favorite">加入收藏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import TopHeader from '@/components/TopHeader.vue'
export default {
    name: 'product-detail',
    components: { TopHeader },
    setup() {
        let product = reactive({
            id: 1,
            code: null,
            title: "Redmi K50 Pro",
            introduction: "天玑9000｜120W秒充｜5000mAh电池｜三星2K直屏｜VC液冷散热｜OIS光学防抖｜1亿像素",
            categoryId: null,
            category: { "id": 2, "name": "Mac", "parentId": null, "hot": false, "subs": null },
            mainPicture: "/static/images/main.jpg.avif",
            subPictures: ["/static/images/sub1.jpg.avif", "/static/images/sub2.jpg.avif"],
            toPrice: 2999,
            costPrice: 499.0,
            unit: "pcs",
            stock: 100,
            hot: false,
            createTime: "2022-05-07 03:59:05",
            updateTime: "2022-05-19 11:13:28"
        })
        let chice = ref('New York')
        let storeVersion = ref([
            {
                id: 1,
                name: '8GB+128GB'
            },
            {
                id: 2,
                name: '8GB+256GB'
            },
            {
                id: 3,
                name: '12GB+256GB'
            },
            {
                id: 4,
                name: '12GB+512GB'
            },
        ])
        let colorVersion = ref([
            {
                id: 1,
                name: '墨羽'
            },
            {
                id: 2,
                name: '幽芒'
            },
            {
                id: 3,
                name: '银迹'
            },
            {
                id: 4,
                name: '幻镜'
            },
        ])
        return {
            product,
            chice,
            storeVersion,
            colorVersion
        }
    },
    mounted() {
        console.log(this.$route.params.id)
    },
    methods: {
        onBuy() {
            this.$router.push('/order/create/' + this.product.id)
        }
    }
}
</script>

<style scoped lang="less">
.content {
    width: 1230px;
    height: 520px;
    margin: 0 auto;
    padding: 0;
    background: white;
    display: flex;

    .images {
        .product_image {
            width: 400px;
            height: 400px;
            display: block;
            border: 1px solid #eee;
        }

        .sub_image_list {
            height: 100px;
            width: 400px;
            display: flex;

            .sub_image_item {
                margin-top: 20px;
                margin-right: 10px;
                width: 60px;
                height: 60px;
            }
        }
    }

    .detail {
        padding: 20px 0;
        width: 760px;
        margin-left: 30px;
        height: 400px;

        .title {
            font-size: 24px;
            font-weight: 400;
            color: #212121;
        }

        .desc {
            color: #b0b0b0;
            padding-top: 8px;
            line-height: 1.5;
            font-size: 14px;
        }

        .des_price {
            font-size: 12px;
            color: #555555;
        }

        .to_price {
            color: #FFD333;
            font-size: 18px;
        }

        .choice_title {
            font-size: 18px;
            font-weight: 400
        }

        .choice {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .chice_item {
                margin-right: 10px;
                margin-top: 10px;
                display: block;
                width: 295px;
                height: 42px;
                line-height: 42px;
                border: 1px solid #eee;
                font-size: 16px;
                text-align: center;
                color: #757575;
            }

            .chice_item:hover {
                border-color: #FFD333;
            }
        }

        .footer {
            display: flex;

            .count {
                color: #FFD333;
                font-size: 24px;
                width: 200px;
                height: 50px;
                line-height: 50px;
            }

            .operator {
                display: block;
                margin-right: 80px;
                margin-left: auto;
                display: flex;

                a {
                    display: block;
                    width: 150px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                }

                #now_buy {
                    border: 1px solid #FFD333;
                    color: #FFD333;
                }

                #now_buy:hover {
                    background: #FFD333;
                    color: white;
                }
            }
        }
    }
}
</style>