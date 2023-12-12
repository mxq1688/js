
import axios from 'axios'


// 错误拦截
axios.interceptors.response.use(
  function(response) {
    if(response.config.responseType == 'arraybuffer'){
    
        return response
    }
    return response

  },
  function(error) {

    console.error('系统正忙，请稍后重试!')
    return Promise.reject(error)
  }
)

axios.interceptors.request.use(
  config => {

    return config
  },
  error => {

    return Promise.reject(error)
  }
)


export default async (
  baseURL,
  url,
  data,
  method = 'get',
  patchUrl = false, // post请求时是否把参数附加到url上
  timeout = 30000,
  config = {}
) => {
  method = method.toLowerCase()

  const ajaxConfig = {
    url,
    method,
    baseURL,
    timeout,
    ...config,
  }

  if (
    ['post', 'put', 'patch', 'delete'].includes(ajaxConfig.method) &&
    !patchUrl
  ) {
    ajaxConfig.data = data
  } else if (
    ['post', 'put', 'patch', 'delete'].includes(ajaxConfig.method) &&
    !!patchUrl
  ) {
    ajaxConfig.params = data
  } else {
    ajaxConfig.params = data
  }

  const request = config => {
    return axios(config) 
  }

  try {
    const res = (await request(ajaxConfig))
    return res
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }
}
