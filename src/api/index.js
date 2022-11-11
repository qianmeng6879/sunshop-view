import { ElMessage } from 'element-plus'
import axios from 'axios'
import router from '@/router'
import jsonBig from 'json-bigint'

axios.defaults.transformResponse = [
    function (data) {
        try {
            return jsonBig.parse(data)
        } catch (err) {
            console.log(err);
            return {}
        }
    }
]


axios.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem('accessToken') || ""
    return config
})

axios.interceptors.response.use(success => success,
    error => {

        let response = error.response
        switch (response.status) {
            case 400:
                ElMessage.error(response.data.error)
                break
            case 401:
                ElMessage.error("请先登录~")
                router.push('/login')
                break
            case 403:
                ElMessage.error("无权限")
                break
            default:
                ElMessage.error('服务异常')
        }

        return Promise.reject(error.response.data)
    }
)


// const local_host = '/api'

const local_host = 'http://localhost:8080'


// 用户登录，获取token
export function getUserTokenAPI(username, password) {
    return axios.post(local_host + "/login", { username, password })
}

// 获取当前登录用户信息
export function getCurrentUserInfoAPI() {
    return axios.get(local_host + '/users/current')
}

// 用户注册
export function userRegisterAPI(userinfo) {
    return axios.post(local_host + '/users/create', { ...userinfo })
}

// 商品分类列表
export function getCategoryListAPI() {
    return axios.get(local_host + '/categories/list')
}

// 收货地址列表
export function getAddressListAPI() {
    return axios.get(local_host + '/address/list')
}

// 新增收货地址
export function addAddressAPI(addressObj) {
    return axios.post(local_host + '/address/create', { ...addressObj })
}

// 删除收货地址
export function removeAddressAPI(addressId) {
    return axios.delete(local_host + '/address/remove/' + addressId)
}

// 编辑收货地址信息
export function editAddresssAPI(addressId, addressObj) {
    return axios.put(local_host + '/address/edit/' + addressId, { ...addressObj })
}

// 订单列表
export function getOrderListAPI() {
    return axios.get(local_host + '/orders/list')
}

// 获取订单详情信息
export function getOrderDetailAPI(orderId) {
    return axios.get(local_host + '/orders/' + orderId)
}

// 创建订单
export function createOrderAPI(orderObj) {
    return axios.post(local_host + '/orders/create', { ...orderObj })
}

// 收藏列表
export function getFavoriteListAPI() {
    return axios.get(local_host + '/favorites/list')
}

// 新增收藏
export function createFovoriteAPI(productId) {
    return axios.post(local_host + '/favorites/create/' + productId)
}

// 取消收藏
export function cancelFovoriteAPI(productId) {
    return axios.delete(local_host + '/favorites/remove/' + productId)
}

// 收藏接口
export function createFavoteAPI(productId){
    return axios.post(local_host + '/favorites/create/' + productId)
}

// 充值记录
export function getRechargeListAPI() {
    return axios.get(local_host + '/recharges/list')
}

// 充值接口
export function createExchargeAPI(amount) {
    return axios.post(local_host + '/recharges/create', { amount })
}