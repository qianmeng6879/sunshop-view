import { ElMessage } from 'element-plus'
import axios from 'axios'
import router from '@/router'


axios.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem('accessToken') || ""
    return config
})

axios.interceptors.response.use(success => success,
    error => {

        let response = error.response
        switch (response.status) {
            case 400:
                ElMessage.error(response.data.message)
                break
            case 401:
                ElMessage.error("未登录")
                router.push('/login')
                break
            case 403:
                ElMessage.error("无权限")
                break
            default:
                ElMessage.error('请求错误')
        }

        return Promise.reject(error.response.data)
    }
)


const local_host = '/api'


// 用户登录，获取token
export function getUserTokenAPI(username, password) {
    return axios.post(local_host + "/users/token/create", { username, password })
}

// 商品分类列表
export function getCategoryListAPI() {
    return axios.get(local_host + '/categories/list')
}

// 收获地址列表
export function getAddressListAPI() {
    return axios.get(local_host + '/address/list')
}

// 订单列表
export function getOrderListAPI() {
    return axios.get(local_host + '/orders/list')
}

// 收藏列表
export function getFavoriteListAPI() {
    return axios.get(local_host + '/favorites/list')
}

// 充值记录
export function getRechargeListAPI() {
    return axios.get(local_host + '/recharges/list')
}