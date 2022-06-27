<template>
    <ul class="category">
        <li class="category_item">
            <a href="#">手机
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <ul class="wrap">
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                    <li class="hot_item">
                        <a href="#">
                            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8aeccb0bad7f28a44aa89b2ddb51010.png?thumb=1&w=40&h=40&f=webp&q=90"
                                alt="">
                            <span class="name">Note 11T Pro+</span></a>
                    </li>
                </ul>
            </a>
        </li>
        <li class="category_item">
            <a href="#">电视
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <div class="wrap">
                    <ul>
                        <li>
                            <a href="#">电视1</a>
                        </li>
                        <li>
                            <a href="#">电视2</a>
                        </li>
                        <li>
                            <a href="#">电视3</a>
                        </li>
                    </ul>
                </div>
            </a>
        </li>

        <li class="category_item">
            <a href="#">笔记本
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <div class="wrap">
                    <ul>
                        <li>
                            <a href="#">笔记本1</a>
                        </li>
                        <li>
                            <a href="#">笔记本2</a>
                        </li>
                        <li>
                            <a href="#">笔记本3</a>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
        <li class="category_item">
            <a href="#">穿戴
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <div class="wrap">
                    <ul>
                        <li>
                            <a href="#">穿戴1</a>
                        </li>
                        <li>
                            <a href="#">穿戴2</a>
                        </li>
                        <li>
                            <a href="#">穿戴3</a>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
        <li class="category_item">
            <a href="#">家电
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <div class="wrap">
                    <ul>
                        <li>
                            <a href="#">家电1</a>
                        </li>
                        <li>
                            <a href="#">家电2</a>
                        </li>
                        <li>
                            <a href="#">家电3</a>
                        </li>
                    </ul>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "sunshop-category"

}
</script>

<style lang="less" scoped>
.category {
    width: 235px;
    background: rgba(105, 101, 101, .6);
    padding: 20px 0;
    position: relative;

    .category_item>a {
        padding: 0 30px;
        height: 42px;
        line-height: 42px;
        display: block;
        color: #fff;
        font-size: 14px;

        .wrap {
            display: none;
            position: absolute;
            flex-direction: column;
            width: 985px;
            height: 460px;
            top: 0;
            left: 236px;
            background: white;
            z-index: 2;

            .hot_item {
                padding: 10px;
                display: block;
                margin-top: 10px;
            }

            .hot_item a {
                display: block;
                width: 225px;
                height: 50px;
                display: flex;
                flex-wrap: wrap;
            }

            .hot_item a:hover {
                color: #FFD333
            }
        }
    }

    .category_item .a_icon {
        float: right;
        margin-top: 15px;
    }

    .category_item>a:hover {
        background: #FFD333;

        .wrap {
            display: flex;
            flex-wrap: wrap;

            a {
                color: #000;
            }
        }
    }
}
</style>