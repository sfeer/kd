import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000,
})

service.interceptors.request.use((req) => {
  // TOKEN
  return req
})

service.interceptors.response.use((res) => {
  return res.data
})

export default service
