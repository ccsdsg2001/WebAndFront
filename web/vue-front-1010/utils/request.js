import axios from 'axios'
import cookie from 'js-cookie';
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 60000 // 请求超时时间
})

//interceptor
service.interceptors.request.use(
  config => {
    //debugger
    if (cookie.get('NutF4ntoken')) {
      config.headers['token'] = cookie.get('NutF4ntoken');
    }
      return config
    },
    err => {
    return Promise.reject(err);
    })

  export default service