import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

//创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials:没错,
  //当跨域请求时发送cookie
  
  timeout: 5000 // 请求超时
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    //在请求发送之前做某事
    if (store.getters.token) {
      //让每个请求携带token 
      // ['X-Token']是自定义头密钥
      //请根据实际情况修改
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    //请求错误
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果您想获得http信息，如头信息或状态
   * 请返回响应=>响应 
  */

  /**
   * 通过自定义代码确定请求状态
   * 这里只是一个例子
   * 您也可以通过HTTP状态码判断状态
   */
  response => {
    const res = response.data

    //如果定制码不是20000，则判定为错误。
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法token;  50012:其他客户已登录;  50014:令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('您已注销，您可以取消以留在本页，或再次登录', '确认注销', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
