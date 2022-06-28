<template>
    <ul class="category">
        <li v-for="category in categortList" :key="category.category" class="category_item">
            <a href="#">{{ category.category }}
                <el-icon class="a_icon">
                    <ArrowRightBold />
                </el-icon>
                <ul class="wrap">
                    <li v-for="image in category.images" :key="image" class="hot_item">
                        <a href="#">
                            <img style="width: 40px; height: 40px;" :src="'/static/images/' + image.image" alt="">
                            <span class="name">{{ image.name }}</span></a>
                    </li>
                </ul>
            </a>
        </li>
    </ul>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "sunshop-category",
    setup() {
        let categortList = ref(
            [
                {
                    "category": "健康 儿童",
                    "images": [
                        {
                            "image": "mi/健康 儿童/体脂秤.jpg",
                            "name": "体脂秤"
                        },
                        {
                            "image": "mi/健康 儿童/体重秤.png",
                            "name": "体重秤"
                        },
                        {
                            "image": "mi/健康 儿童/修剪器.jpg",
                            "name": "修剪器"
                        },
                        {
                            "image": "mi/健康 儿童/儿童手表.jpg",
                            "name": "儿童手表"
                        },
                        {
                            "image": "mi/健康 儿童/儿童滑板车.jpg",
                            "name": "儿童滑板车"
                        },
                        {
                            "image": "mi/健康 儿童/剃须刀.jpg",
                            "name": "剃须刀"
                        },
                        {
                            "image": "mi/健康 儿童/吹风机.jpg",
                            "name": "吹风机"
                        },
                        {
                            "image": "mi/健康 儿童/婴儿推车.jpg",
                            "name": "婴儿推车"
                        },
                        {
                            "image": "mi/健康 儿童/早教启智.jpg",
                            "name": "早教启智"
                        },
                        {
                            "image": "mi/健康 儿童/智能遥控车.png",
                            "name": "智能遥控车"
                        },
                        {
                            "image": "mi/健康 儿童/洗手机.jpg",
                            "name": "洗手机"
                        },
                        {
                            "image": "mi/健康 儿童/牙刷.jpg",
                            "name": "牙刷"
                        },
                        {
                            "image": "mi/健康 儿童/理发器.jpeg",
                            "name": "理发器"
                        },
                        {
                            "image": "mi/健康 儿童/益智积木.png",
                            "name": "益智积木"
                        },
                        {
                            "image": "mi/健康 儿童/米家跑步机.png",
                            "name": "米家跑步机"
                        },
                        {
                            "image": "mi/健康 儿童/走步机.jpg",
                            "name": "走步机"
                        }
                    ]
                },
                {
                    "category": "出行 穿戴",
                    "images": [
                        {
                            "image": "mi/出行 穿戴/Redmi 手表 2.png",
                            "name": "Redmi 手表 2"
                        },
                        {
                            "image": "mi/出行 穿戴/Xiaomi Watch Color 2.jpg",
                            "name": "Xiaomi Watch Color 2"
                        },
                        {
                            "image": "mi/出行 穿戴/Xiaomi Watch S1.png",
                            "name": "Xiaomi Watch S1"
                        },
                        {
                            "image": "mi/出行 穿戴/充气宝.png",
                            "name": "充气宝"
                        },
                        {
                            "image": "mi/出行 穿戴/小米手环6 NFC版.png",
                            "name": "小米手环6 NFC版"
                        },
                        {
                            "image": "mi/出行 穿戴/小米手环6 标准版.png",
                            "name": "小米手环6 标准版"
                        },
                        {
                            "image": "mi/出行 穿戴/小米手环7 NFC版.png",
                            "name": "小米手环7 NFC版"
                        },
                        {
                            "image": "mi/出行 穿戴/小米手环7.png",
                            "name": "小米手环7"
                        },
                        {
                            "image": "mi/出行 穿戴/平衡车.jpg",
                            "name": "平衡车"
                        },
                        {
                            "image": "mi/出行 穿戴/智能记录仪.jpg",
                            "name": "智能记录仪"
                        },
                        {
                            "image": "mi/出行 穿戴/滑板车.jpg",
                            "name": "滑板车"
                        },
                        {
                            "image": "mi/出行 穿戴/石英表.jpg",
                            "name": "石英表"
                        },
                        {
                            "image": "mi/出行 穿戴/自行车.png",
                            "name": "自行车"
                        },
                        {
                            "image": "mi/出行 穿戴/车载充电器.jpg",
                            "name": "车载充电器"
                        }
                    ]
                },
                {
                    "category": "家电",
                    "images": [
                        {
                            "image": "mi/家电/冰箱.png",
                            "name": "冰箱"
                        },
                        {
                            "image": "mi/家电/净水器.jpg",
                            "name": "净水器"
                        },
                        {
                            "image": "mi/家电/吸尘器.jpg",
                            "name": "吸尘器"
                        },
                        {
                            "image": "mi/家电/壁挂空调.png",
                            "name": "壁挂空调"
                        },
                        {
                            "image": "mi/家电/微波炉.jpg",
                            "name": "微波炉"
                        },
                        {
                            "image": "mi/家电/扫地机器人.jpg",
                            "name": "扫地机器人"
                        },
                        {
                            "image": "mi/家电/投影仪.png",
                            "name": "投影仪"
                        },
                        {
                            "image": "mi/家电/插线板.jpg",
                            "name": "插线板"
                        },
                        {
                            "image": "mi/家电/料理机.jpg",
                            "name": "料理机"
                        },
                        {
                            "image": "mi/家电/新风机.jpg",
                            "name": "新风机"
                        },
                        {
                            "image": "mi/家电/波轮洗衣机.png",
                            "name": "波轮洗衣机"
                        },
                        {
                            "image": "mi/家电/滚筒洗衣机.png",
                            "name": "滚筒洗衣机"
                        },
                        {
                            "image": "mi/家电/滤水壶.jpg",
                            "name": "滤水壶"
                        },
                        {
                            "image": "mi/家电/灯具.jpg",
                            "name": "灯具"
                        },
                        {
                            "image": "mi/家电/电压力锅.jpg",
                            "name": "电压力锅"
                        },
                        {
                            "image": "mi/家电/电暖器.jpg",
                            "name": "电暖器"
                        },
                        {
                            "image": "mi/家电/电水壶.jpg",
                            "name": "电水壶"
                        },
                        {
                            "image": "mi/家电/电烤箱.jpg",
                            "name": "电烤箱"
                        },
                        {
                            "image": "mi/家电/电煮壶.jpg",
                            "name": "电煮壶"
                        },
                        {
                            "image": "mi/家电/电磁炉.jpg",
                            "name": "电磁炉"
                        },
                        {
                            "image": "mi/家电/电饭煲.jpg",
                            "name": "电饭煲"
                        },
                        {
                            "image": "mi/家电/空气净化器.jpg",
                            "name": "空气净化器"
                        },
                        {
                            "image": "mi/家电/立式空调.png",
                            "name": "立式空调"
                        },
                        {
                            "image": "mi/家电/落地风扇.png",
                            "name": "落地风扇"
                        }
                    ]
                },
                {
                    "category": "手机",
                    "images": [
                        {
                            "image": "mi/手机/Note 11 4G.png",
                            "name": "Note 11 4G"
                        },
                        {
                            "image": "mi/手机/Note 11 5G.png",
                            "name": "Note 11 5G"
                        },
                        {
                            "image": "mi/手机/Note 11 Pro 系列.png",
                            "name": "Note 11 Pro 系列"
                        },
                        {
                            "image": "mi/手机/Note 11SE.png",
                            "name": "Note 11SE"
                        },
                        {
                            "image": "mi/手机/Note 11T Pro+.png",
                            "name": "Note 11T Pro+"
                        },
                        {
                            "image": "mi/手机/Note 11T Pro.png",
                            "name": "Note 11T Pro"
                        },
                        {
                            "image": "mi/手机/Redmi 10A.png",
                            "name": "Redmi 10A"
                        },
                        {
                            "image": "mi/手机/Redmi K40.png",
                            "name": "Redmi K40"
                        },
                        {
                            "image": "mi/手机/Redmi K40S.png",
                            "name": "Redmi K40S"
                        },
                        {
                            "image": "mi/手机/Redmi K50 Pro.png",
                            "name": "Redmi K50 Pro"
                        },
                        {
                            "image": "mi/手机/Redmi K50 电竞版.png",
                            "name": "Redmi K50 电竞版"
                        },
                        {
                            "image": "mi/手机/Redmi K50.png",
                            "name": "Redmi K50"
                        },
                        {
                            "image": "mi/手机/Xiaomi 11 Ultra.png",
                            "name": "Xiaomi 11 Ultra"
                        },
                        {
                            "image": "mi/手机/Xiaomi 11 青春活力版.png",
                            "name": "Xiaomi 11 青春活力版"
                        },
                        {
                            "image": "mi/手机/Xiaomi 11.png",
                            "name": "Xiaomi 11"
                        },
                        {
                            "image": "mi/手机/Xiaomi 12 Pro.png",
                            "name": "Xiaomi 12 Pro"
                        },
                        {
                            "image": "mi/手机/Xiaomi 12.png",
                            "name": "Xiaomi 12"
                        },
                        {
                            "image": "mi/手机/Xiaomi 12X.png",
                            "name": "Xiaomi 12X"
                        },
                        {
                            "image": "mi/手机/Xiaomi Civi 1S.png",
                            "name": "Xiaomi Civi 1S"
                        },
                        {
                            "image": "mi/手机/Xiaomi Civi.png",
                            "name": "Xiaomi Civi"
                        },
                        {
                            "image": "mi/手机/Xiaomi MIX 4.png",
                            "name": "Xiaomi MIX 4"
                        },
                        {
                            "image": "mi/手机/Xiaomi MIX FOLD.png",
                            "name": "Xiaomi MIX FOLD"
                        },
                        {
                            "image": "mi/手机/黑鲨5 Pro.png",
                            "name": "黑鲨5 Pro"
                        },
                        {
                            "image": "mi/手机/黑鲨5.png",
                            "name": "黑鲨5"
                        }
                    ]
                },
                {
                    "category": "智能 路由器",
                    "images": [
                        {
                            "image": "mi/智能 路由器/CyberDog.png",
                            "name": "CyberDog"
                        },
                        {
                            "image": "mi/智能 路由器/MIJIA K歌麦克风.png",
                            "name": "MIJIA K歌麦克风"
                        },
                        {
                            "image": "mi/智能 路由器/Redmi路由器.png",
                            "name": "Redmi路由器"
                        },
                        {
                            "image": "mi/智能 路由器/喷墨打印机.png",
                            "name": "喷墨打印机"
                        },
                        {
                            "image": "mi/智能 路由器/喷墨打印机墨水.png",
                            "name": "喷墨打印机墨水"
                        },
                        {
                            "image": "mi/智能 路由器/对讲机.jpg",
                            "name": "对讲机"
                        },
                        {
                            "image": "mi/智能 路由器/小爱老师.png",
                            "name": "小爱老师"
                        },
                        {
                            "image": "mi/智能 路由器/小爱音箱.png",
                            "name": "小爱音箱"
                        },
                        {
                            "image": "mi/智能 路由器/小米路由器.png",
                            "name": "小米路由器"
                        },
                        {
                            "image": "mi/智能 路由器/打印机.jpg",
                            "name": "打印机"
                        },
                        {
                            "image": "mi/智能 路由器/摄像机.jpg",
                            "name": "摄像机"
                        },
                        {
                            "image": "mi/智能 路由器/智能家庭.jpg",
                            "name": "智能家庭"
                        },
                        {
                            "image": "mi/智能 路由器/智能门锁.jpg",
                            "name": "智能门锁"
                        },
                        {
                            "image": "mi/智能 路由器/视频门铃.jpg",
                            "name": "视频门铃"
                        }
                    ]
                },
                {
                    "category": "生活 箱包",
                    "images": [
                        {
                            "image": "mi/生活 箱包/伞.jpg",
                            "name": "伞"
                        },
                        {
                            "image": "mi/生活 箱包/保温杯.jpg",
                            "name": "保温杯"
                        },
                        {
                            "image": "mi/生活 箱包/双肩包.jpg",
                            "name": "双肩包"
                        },
                        {
                            "image": "mi/生活 箱包/小背包.jpg",
                            "name": "小背包"
                        },
                        {
                            "image": "mi/生活 箱包/床垫.jpg",
                            "name": "床垫"
                        },
                        {
                            "image": "mi/生活 箱包/旅行箱.jpg",
                            "name": "旅行箱"
                        },
                        {
                            "image": "mi/生活 箱包/枕头.png",
                            "name": "枕头"
                        },
                        {
                            "image": "mi/生活 箱包/毛巾 浴巾.jpg",
                            "name": "毛巾 浴巾"
                        },
                        {
                            "image": "mi/生活 箱包/眼镜.jpg",
                            "name": "眼镜"
                        },
                        {
                            "image": "mi/生活 箱包/笔.jpg",
                            "name": "笔"
                        },
                        {
                            "image": "mi/生活 箱包/米兔.png",
                            "name": "米兔"
                        },
                        {
                            "image": "mi/生活 箱包/胸包.jpg",
                            "name": "胸包"
                        },
                        {
                            "image": "mi/生活 箱包/螺丝刀.jpg",
                            "name": "螺丝刀"
                        },
                        {
                            "image": "mi/生活 箱包/运动鞋.jpg",
                            "name": "运动鞋"
                        },
                        {
                            "image": "mi/生活 箱包/驱蚊器.jpg",
                            "name": "驱蚊器"
                        }
                    ]
                },
                {
                    "category": "电源 配件",
                    "images": [
                        {
                            "image": "mi/电源 配件/充电器.png",
                            "name": "充电器"
                        },
                        {
                            "image": "mi/电源 配件/其他配件.jpg",
                            "name": "其他配件"
                        },
                        {
                            "image": "mi/电源 配件/平板配件.jpg",
                            "name": "平板配件"
                        },
                        {
                            "image": "mi/电源 配件/手机壳.jpg",
                            "name": "手机壳"
                        },
                        {
                            "image": "mi/电源 配件/手机贴膜.jpg",
                            "name": "手机贴膜"
                        },
                        {
                            "image": "mi/电源 配件/数据线.jpg",
                            "name": "数据线"
                        },
                        {
                            "image": "mi/电源 配件/无线充电器.png",
                            "name": "无线充电器"
                        },
                        {
                            "image": "mi/电源 配件/电池.jpg",
                            "name": "电池"
                        },
                        {
                            "image": "mi/电源 配件/移动电源.png",
                            "name": "移动电源"
                        },
                        {
                            "image": "mi/电源 配件/自拍杆.jpg",
                            "name": "自拍杆"
                        },
                        {
                            "image": "mi/电源 配件/黑鲨配件.jpg",
                            "name": "黑鲨配件"
                        }
                    ]
                },
                {
                    "category": "电视",
                    "images": [
                        {
                            "image": "mi/电视/Redmi X55 2022款.png",
                            "name": "Redmi X55 2022款"
                        },
                        {
                            "image": "mi/电视/Redmi X65 2022款.png",
                            "name": "Redmi X65 2022款"
                        },
                        {
                            "image": "mi/电视/Redmi 智能电视 MAX 98.jpg",
                            "name": "Redmi 智能电视 MAX 98"
                        },
                        {
                            "image": "mi/电视/Redmi 智能电视 X55.png",
                            "name": "Redmi 智能电视 X55"
                        },
                        {
                            "image": "mi/电视/大师电视 65英寸 OLED.png",
                            "name": "大师电视 65英寸 OLED"
                        },
                        {
                            "image": "mi/电视/小米全面屏电视.jpg",
                            "name": "小米全面屏电视"
                        },
                        {
                            "image": "mi/电视/小米拍拍4K高清投屏器.png",
                            "name": "小米拍拍4K高清投屏器"
                        },
                        {
                            "image": "mi/电视/小米电视 ES43 2022款.png",
                            "name": "小米电视 ES43 2022款"
                        },
                        {
                            "image": "mi/电视/小米电视 ES55 2022款.png",
                            "name": "小米电视 ES55 2022款"
                        },
                        {
                            "image": "mi/电视/小米电视 ES65 2022款.png",
                            "name": "小米电视 ES65 2022款"
                        },
                        {
                            "image": "mi/电视/小米电视 ES75 2022款.png",
                            "name": "小米电视 ES75 2022款"
                        },
                        {
                            "image": "mi/电视/小米电视 大师  77”  OLED.png",
                            "name": "小米电视 大师  77”  OLED"
                        },
                        {
                            "image": "mi/电视/小米电视4A 60英寸.png",
                            "name": "小米电视4A 60英寸"
                        },
                        {
                            "image": "mi/电视/小米电视4A 70英寸.png",
                            "name": "小米电视4A 70英寸"
                        },
                        {
                            "image": "mi/电视/小米电视4S 75英寸.png",
                            "name": "小米电视4S 75英寸"
                        },
                        {
                            "image": "mi/电视/小米电视5 75英寸.png",
                            "name": "小米电视5 75英寸"
                        },
                        {
                            "image": "mi/电视/小米电视6 55”  OLED.png",
                            "name": "小米电视6 55”  OLED"
                        },
                        {
                            "image": "mi/电视/小米电视6 65”  OLED.png",
                            "name": "小米电视6 65”  OLED"
                        },
                        {
                            "image": "mi/电视/小米电视6 至尊版 55英寸.png",
                            "name": "小米电视6 至尊版 55英寸"
                        },
                        {
                            "image": "mi/电视/小米电视6 至尊版 65英寸.png",
                            "name": "小米电视6 至尊版 65英寸"
                        },
                        {
                            "image": "mi/电视/小米电视6 至尊版 75英寸.png",
                            "name": "小米电视6 至尊版 75英寸"
                        },
                        {
                            "image": "mi/电视/激光投影电视.png",
                            "name": "激光投影电视"
                        },
                        {
                            "image": "mi/电视/米家激光投影仪.png",
                            "name": "米家激光投影仪"
                        },
                        {
                            "image": "mi/电视/金属全面屏电视.png",
                            "name": "金属全面屏电视"
                        }
                    ]
                },
                {
                    "category": "笔记本 平板",
                    "images": [
                        {
                            "image": "mi/笔记本 平板/Redmi G 2021 AMD版.png",
                            "name": "Redmi G 2021 AMD版"
                        },
                        {
                            "image": "mi/笔记本 平板/Redmi G 2021 Intel版.png",
                            "name": "Redmi G 2021 Intel版"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Air 13.png",
                            "name": "RedmiBook Air 13"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro 14 增强版.png",
                            "name": "RedmiBook Pro 14 增强版"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro 14 锐龙版.png",
                            "name": "RedmiBook Pro 14 锐龙版"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro 15 增强版.png",
                            "name": "RedmiBook Pro 15 增强版"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro 15 锐龙版.png",
                            "name": "RedmiBook Pro 15 锐龙版"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro14 2022.png",
                            "name": "RedmiBook Pro14 2022"
                        },
                        {
                            "image": "mi/笔记本 平板/RedmiBook Pro15 2022.png",
                            "name": "RedmiBook Pro15 2022"
                        },
                        {
                            "image": "mi/笔记本 平板/小米平板5 Pro 5G.png",
                            "name": "小米平板5 Pro 5G"
                        },
                        {
                            "image": "mi/笔记本 平板/小米平板5 Pro.png",
                            "name": "小米平板5 Pro"
                        },
                        {
                            "image": "mi/笔记本 平板/小米平板5.png",
                            "name": "小米平板5"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro 14 增强版.jpg",
                            "name": "小米笔记本 Pro 14 增强版"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro 14 锐龙版.png",
                            "name": "小米笔记本 Pro 14 锐龙版"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro 15 增强版.png",
                            "name": "小米笔记本 Pro 15 增强版"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro 15 锐龙版.png",
                            "name": "小米笔记本 Pro 15 锐龙版"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro X 14.png",
                            "name": "小米笔记本 Pro X 14"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本 Pro X 15.png",
                            "name": "小米笔记本 Pro X 15"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本Pro 14.jpg",
                            "name": "小米笔记本Pro 14"
                        },
                        {
                            "image": "mi/笔记本 平板/小米笔记本Pro 15.png",
                            "name": "小米笔记本Pro 15"
                        },
                        {
                            "image": "mi/笔记本 平板/键鼠套装.png",
                            "name": "键鼠套装"
                        },
                        {
                            "image": "mi/笔记本 平板/鼠标.png",
                            "name": "鼠标"
                        }
                    ]
                },
                {
                    "category": "耳机 音箱",
                    "images": [
                        {
                            "image": "mi/耳机 音箱/k歌耳机.jpg",
                            "name": "k歌耳机"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi Buds 3 青春版.png",
                            "name": "Redmi Buds 3 青春版"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi Buds 3.jpg",
                            "name": "Redmi Buds 3"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi Buds 4 Pro.png",
                            "name": "Redmi Buds 4 Pro"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi Buds 4.png",
                            "name": "Redmi Buds 4"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi小爱触屏音箱 8.png",
                            "name": "Redmi小爱触屏音箱 8"
                        },
                        {
                            "image": "mi/耳机 音箱/Redmi音箱.png",
                            "name": "Redmi音箱"
                        },
                        {
                            "image": "mi/耳机 音箱/Xiaomi Sound.png",
                            "name": "Xiaomi Sound"
                        },
                        {
                            "image": "mi/耳机 音箱/Xiaomi 真无线降噪耳机 3.png",
                            "name": "Xiaomi 真无线降噪耳机 3"
                        },
                        {
                            "image": "mi/耳机 音箱/品牌耳机.jpg",
                            "name": "品牌耳机"
                        },
                        {
                            "image": "mi/耳机 音箱/头戴耳机.jpg",
                            "name": "头戴耳机"
                        },
                        {
                            "image": "mi/耳机 音箱/小爱触屏音箱Pro 8.png",
                            "name": "小爱触屏音箱Pro 8"
                        },
                        {
                            "image": "mi/耳机 音箱/小爱音箱 Pro.png",
                            "name": "小爱音箱 Pro"
                        },
                        {
                            "image": "mi/耳机 音箱/小米AI音箱.jpg",
                            "name": "小米AI音箱"
                        },
                        {
                            "image": "mi/耳机 音箱/小米小爱触屏音箱.jpg",
                            "name": "小米小爱触屏音箱"
                        },
                        {
                            "image": "mi/耳机 音箱/小米小爱音箱 Play.jpg",
                            "name": "小米小爱音箱 Play"
                        },
                        {
                            "image": "mi/耳机 音箱/小米小爱音箱.png",
                            "name": "小米小爱音箱"
                        },
                        {
                            "image": "mi/耳机 音箱/小米小爱音箱HD.jpg",
                            "name": "小米小爱音箱HD"
                        },
                        {
                            "image": "mi/耳机 音箱/线控耳机.jpg",
                            "name": "线控耳机"
                        },
                        {
                            "image": "mi/耳机 音箱/蓝牙耳机.png",
                            "name": "蓝牙耳机"
                        },
                        {
                            "image": "mi/耳机 音箱/蓝牙音箱.png",
                            "name": "蓝牙音箱"
                        }
                    ]
                }
            ]
        )

        return { categortList }
    }

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
                float: left;
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
            display: block;
            // flex-wrap: wrap;

            a {
                color: #000;
            }
        }
    }
}
</style>