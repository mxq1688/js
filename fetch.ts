// import { getToken, getMessageByCode } from './utils'
interface Result<T = any> {
  code: number
  message: string
  data: T
}
interface IRequest {
  method?: any
  url: string
  params?: any
  config?: any
  returnAll?: boolean
  /**
   * 当请求数据非正常code返回,是否需要默认message提示错误信息,默认提示
   */
  errorMessageAlert?: boolean
  errMsg?: string | boolean
}

const defaultConfig = {
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  /**
   * include:
   * 默认不论是不是跨域的请求
   * 总是发送请求资源域在本地的 cookies、HTTP Basic authentication 等验证信息
   * omit: 从不发送cookies
   * same-origin: 同源发送cookies
   */
  credentials: 'include',
  timeout: 60 * 5 //默认超时时间5分钟
}

export class Fetch {
  defaultConfig: any = {}
  constructor(defaultConfig: any = {}) {
    this.defaultConfig = defaultConfig || {}
    this.initInterceptors()
  }
  initInterceptors() {
    // 添加请求拦截器
    this.interceptors.request.use((config: any) => {
      config.headers.Authorization = getToken()
      const configDefault = Object.assign(this.defaultConfig, config)
      return configDefault
    })
    // 添加响应拦截器
    this.interceptors.response.use(async (response: any) => {
      //Todo 和后端约定做一些拦截
      /*
        response.clone() response.json等智能用一次 通过clone()方法可以多次解析
        response.status
        response.headers.get('Content-Type')
      */
      return response
    })
  }
  interceptorsReq: any[] = []
  interceptorsReqError: any[] = []
  interceptorsRes: any[] = []
  interceptorsResError: any[] = []
  interceptors: any = {
    request: {
      use: (callback: Function, errorCallback: Function) => {
        this.interceptorsReq.push(callback)
        errorCallback && this.interceptorsReqError.push(errorCallback)
      }
    },
    response: {
      use: (callback: Function, errorCallback: Function) => {
        this.interceptorsRes.push(callback)
        errorCallback && this.interceptorsResError.push(errorCallback)
      }
    }
  }
  cfetch(url: any, options: any) {
    // interceptorsReq是拦截请求的拦截处理函数集合
    this.interceptorsReq.forEach((fun) => {
      options = fun(options)
    })
    if (options.timeout == 0) {
      return new Promise((resolve, reject) => {
        // 发起fetch请求，fetch请求的形参是接收上层函数的形参
        fetch(url, options)
          .then((res) => {
            // interceptorsRes是拦截响应结果的拦截处理函数集合
            this.interceptorsRes.forEach((item) => {
              // 拦截器对响应结果做处理，把处理后的结果返回给响应结果。
              res = item(res)
            })
            // 将拦截器处理后的响应结果resolve出去
            resolve(res)
          })
          .catch((err) => {
            this.interceptorsResError.forEach((item) => {
              err = item(err)
            })
            reject(err)
          })
      })
    }
    // 利用 Promise.race 实现超时拦截
    return Promise.race([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('request timeout'))
        }, options.timeout)
      }),
      new Promise((resolve, reject) => {
        // 发起fetch请求，fetch请求的形参是接收上层函数的形参
        fetch(url, options)
          .then((res) => {
            // interceptorsRes是拦截响应结果的拦截处理函数集合
            this.interceptorsRes.forEach((item) => {
              // 拦截器对响应结果做处理，把处理后的结果返回给响应结果。
              res = item(res)
            })
            // 将拦截器处理后的响应结果resolve出去
            resolve(res)
          })
          .catch((err) => {
            this.interceptorsResError.forEach((item) => {
              err = item(err)
            })
            reject(err)
          })
      })
    ])
  }
  async resultReduction(response: any) {
    let res = ''
    switch (this.defaultConfig.responseType) {
      case 'json':
        res = await response.json()
        break
      case 'text':
        res = await response.text()
        break
      case 'blob':
        res = await response.blob()
        break
      default:
        res = await response.json()
        break
    }
    return res
  }
  request(url: any, options: any) {
    return this.cfetch(url, options).then((response) => {
      this.resultReduction(response)
    })
  }
  requestStream(url: any, options: any, cb: any) {
    return this.cfetch(url, options).then((response: any) => {
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let allValue = ''
      //方式1
      // while (true) {
      //   const { value, done } = await reader.read();
      //   const curText = decoder.decode(value, { stream: true })
      //   allValue += curText
      //   cb(curText, allValue, done)
      //   if (done) {
      //      cb('', allValue, done)
      //      break
      //   };
      // }
      //方式2
      reader.read().then(async function processText({ done, value }: any) {
        if (done) {
          cb('', allValue, done)
          return
        }
        try {
          const curText = decoder.decode(value, { stream: true })
          allValue += curText
          cb(curText, allValue, done)
        } catch (e) {}
        return reader.read().then(processText)
      })
    })
  }
}

export default new Http(defaultConfig)


// 示例
export const httpFetch = (url: string, options: any) => {
  const http = new Fetch()
  const controller = new AbortController() //手动取消请求
  const signal = controller.signal
  options.signal = signal
  http.request(url, options)
}
