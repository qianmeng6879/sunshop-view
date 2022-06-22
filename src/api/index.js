import { ElMessage } from 'element-plus'
import axios from 'axios'


axios.interceptors.request.use(config => {
    config.headers['Authtication'] = localStorage.getItem('accessToken') || ""
    return config
})

axios.interceptors.response.use(success => success,
    error => {

        let response = error.response

        console.log(response)
        switch(response.status){
            case 400:
                ElMessage.error(response.data.message)
                break
            default:
                ElMessage.error('请求错误')
        }

        return Promise.reject(error.response.data)
    }
)

const local_host = '/api'


export function getUserTokenAPI(username, password) {
    return axios.post(local_host + "/users/token/create", { username, password })
}


export function getCategoryListAPI() {
    return axios.get(local_host + '/categories/list')
}