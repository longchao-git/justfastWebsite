import {objToFormData} from '../utils/utils'
import config1 from '../config/index'
// 初始化请求插件
export default ({redirect, $axios}) => {
  // 请求拦截器
  $axios.interceptors.request.use(config => {
    // 如果当前配置的客客请求
    config.baseURL = config1.BASE_URL

    /* 如果是上传，则设置超时为 1小时， 请求超时10分钟 */
    config.timeout = 1000 * 60

    // 不同请求方式不同处理
    config.data.CLIENT_OS = 'IOS'
    config.data.CLIENT_API = 'CUSTOM'
    config.data.TOKEN =  localStorage.getItem('token') || '';
    config.data.LNG =  localStorage.getItem('LNG') || -3.7160397;
    config.data.LAT =  localStorage.getItem('LAT') || 40.4202472;
    config.data.data = JSON.stringify(config.data.data)
    config.data = objToFormData(config.data)
    config.headers['Access-Control-Allow-Origin'] =  '*';
    config.headers['content-type'] =  'application/x-www-form-urlencoded';
    return config
  }, error => {
    return Promise.reject(error)
  })

  // 返回结果拦截器
  $axios.interceptors.response.use(response => {
    console.log(response)
    if (response.status === 200) {
      // 判断登陆是否过期
      // if (response.data.code === 1007 || response.data.code === 500) {
      //     // 清空token
      //     localStorage.clear();
      //     location.reload();
      //     return Promise.reject(response.data);
      // }
      // 操作成功
      if (response.data.code === 1001) {
        return Promise.resolve(response.data.body);
      } else {
        // token 错误，重新登录
        if (response.data.code === 1010) {
          errorManage(data)
        }
        return Promise.reject(response.data);
      }
    } else {
      return Promise.reject(response.data);
    }
  }, error => {
    // 请求错误时，抛出异常提示
    return Promise.reject(error)
  })

  /**
   * @description: 错误处理
   * @date 2019/5/7  1:20
   */
  function errorManage(result) {
    // 错误码 需要后退到登录页 1001：未登录，1002：别处登录
    if ([1001, 1002].indexOf(result.errorCode) !== -1) {
      sessionStorage.clear()
      redirect('/login')
    }
  }

  $axios.defaults.withCredentials = true
}
