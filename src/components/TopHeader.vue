<template>
    <div class="header">
        <el-row>
            <el-link type="info">home</el-link>
            <el-link type="info">about</el-link>
            <el-link type="info">communicaty</el-link>
        </el-row>
        <el-dropdown style="margin-left: auto;" trigger="click">
            <el-button type="info">
                My account
                <el-icon>
                    <CaretBottom />
                </el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
    <div class="logo_section">
        <span class="sun">SUN</span>
        <span class="shop">SHOP</span>
        <div style="margin-left:auto">
            <h4 style="font-size: 16px; color: #6C757D;font-weight: 400;">Customer Service </h4>
            <h5 style="font-size: 20px; color: #3D464D;font-weight: 500;    font-family: 'Roboto';">+012
                345 6789</h5>
        </div>
    </div>
    <div class="nav-out">
        <div class="nav">
            <div class="category">
                <el-icon>
                    <Operation />
                </el-icon>
                <span>Categories</span>
            </div>
            <div class="favorite">
                <el-icon>
                    <ShoppingCart />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    width: 90%;
    padding: 5px 10px;
    margin: auto;
    font-size: 18px;
    color: rgb(124, 122, 119);

    .el-link {
        margin-right: 8px;
    }

    .el-link .el-icon--right.el-icon {
        vertical-align: text-bottom;
    }
}

.logo_section {
    width: 90%;
    height: 50px;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    padding: 15px 0;
    background: white;

    .sun {
        color: #FFD333;
        background: #3D464D;
        font-weight: 700;
        font-size: 2.5rem;
        padding: 0 0.5rem
    }

    .shop {
        color: #3D464D;
        background: #FFD333;
        font-weight: 700;
        font-size: 2.5rem;
        padding: 0 0.5rem
    }
}

.nav-out {
    height: 70px;
    background-color: #3D464D;

    .nav {
        margin: auto;
        width: 90%;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        .category {
            width: 425px;
            line-height: 60px;
            padding-left: 30px;
            height: 100%;
            background: #FFD333;
        }

        .favorite {
            margin-left: auto;
        }
    }

}
</style>