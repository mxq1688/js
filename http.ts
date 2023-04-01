import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  Method,
  AxiosRequestConfig
} from 'axios'
import useStore from '@/store/index'
import md5 from 'js-md5'
let Store: any = useStore

const isPrd = process.env.NODE_ENV === 'prd'
const baseURL = '/'

// 储存请求标识
const pending: any[] = []
const pendingRequest = new Map()
const { CancelToken } = axios
const clientConfig = {
  timeout: 60000,
  withCredentials: true,
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
}

interface Result<T = any> {
  code: number
  message: string
  data: T
}
interface IRequest {
  method?: Method
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
export class Http {
  $axiosInstances!: AxiosInstance
  defaultConfig: AxiosRequestConfig = {}
  constructor(defaultConfig: AxiosRequestConfig = {}) {
    this.defaultConfig = defaultConfig || {}
    this.init()
    this.interceptors()
  }
  init(): void {
    this.$axiosInstances = axios.create({ ...this.defaultConfig })
  }
  interceptors(): void {
    this.$axiosInstances.interceptors.request.use(
      (config: any) => {
        // config.headers.Authorization = '0d8700856aedff483586ad81577bd418'
        config.headers.Authorization = Store.state.userInfo.token
        // config.headers['Tico-Language'] = Store.state.language
        // config.headers['Tico-Sources-No'] = Store.state.epType.id
        // this.removePending(config)
        // config.cancelToken = new CancelToken((cancel) => {
        //   const tag = this.hashTag(config)
        //   pending.push({
        //     tag,
        //     fn: cancel,
        //   })
        // })

        this.removePendingRequest(config)
        this.addPendingRequest(config)
        return config
      },
      (error: any) => {
        this.clearPending()
        console.log('request_use_error', error)
        return Promise.reject(error)
      }
    )
    this.$axiosInstances.interceptors.response.use(
      (response: AxiosResponse) => {
        // this.removePending(response.config) //请求结束删除对应的
        this.removePendingRequest(response.config)
        const code = response?.data?.code // 根据errorCode，对业务做异常处理(和后端约定)
        // if(code === 40100 && window.location.pathname !== '/'){
        if (code === 401) {
          //登录失效 跳转登录页面
          Store.dispatch('userInfo/Logout')
          Store.commit('userInfo/setOpenLoginPanel', true)
          window.location.reload()
        }
        // console.log('response', response, response.data)
        return Promise.resolve(response)
      },
      (error: any) => {
        // 处理status非200
        console.log(
          'response_use_error',
          error,
          error.response,
          axios.isCancel(error)
        )
        let message = error.message
        if (axios.isCancel(error)) return false

        if (error.code == 'ERR_NETWORK') {
          message = '网络错误'
        } else if (error.code == 'ETIMEDOUT') {
          message = '请求超时'
        } else if (error.response) {
          message = '网络异常'
        }
        ElMessage({
          type: 'error',
          showClose: true,
          duration: 5000,
          message: message
        })
        return Promise.reject(error.message)
      }
    )
  }
  /**
   * @desc  根据请求的url和method生成hash标识
   * @param {String} url
   * @param {String} method
   */
  hashTag(config: AxiosRequestConfig): string {
    return md5(`${config.url}${config.method}`)
  }
  // 在路由跳转时调用
  generateReqKey(config: AxiosRequestConfig) {
    const { method, url, params, data } = config
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
  }
  /**
   * @desc  取消未响应的重复请求, 并从记录中移除对应的hash标识
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const currentTag = this.hashTag(config)

    pending.forEach((item, index) => {
      const { tag, fn } = item

      if (currentTag === tag) {
        fn && fn()
        pending.splice(index, 1)
      }
    })
  }
  addPendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config)
    config.cancelToken =
      config.cancelToken ||
      new CancelToken((cancel) => {
        if (!pendingRequest.has(requestKey)) {
          pendingRequest.set(requestKey, cancel)
        }
      })
  }
  removePendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config)
    if (pendingRequest.has(requestKey)) {
      const cancelToken = pendingRequest.get(requestKey)
      cancelToken(requestKey)
      pendingRequest.delete(requestKey)
    }
  }
  clearPending() {
    for (const [requestKey, cancelToken] of pendingRequest) {
      cancelToken(requestKey)
    }
    pendingRequest.clear()
  }
  async request(query: IRequest) {
    const {
      method,
      url,
      params = {},
      config = {},
      returnAll = false,
      errorMessageAlert = true
    } = query
    const paramsObj = ['get'].includes(method as string)
      ? { params }
      : { data: params }
    // eslint-disable-next-line no-async-promise-executor
    const promise = new Promise(async (resolve, reject) => {
      try {
        const res = await this.$axiosInstances({
          method,
          url,
          ...paramsObj,
          ...config
        })
        if (res) {
          if (res.data.code != 200) {
            if (returnAll) {
              return resolve(res.data)
            }
            errorMessageAlert &&
              ElMessage({
                type: 'warning',
                showClose: true,
                duration: 5000,
                message: res.data.message
              })
            reject(res)
          } else {
            if (returnAll) {
              resolve(res.data)
            } else {
              resolve(res.data.data)
            }
          }
        }
      } catch (error) {
        console.log('request_error', error)
        reject(error)
      }
    })
    return promise
  }
  get(query: IRequest) {
    return this.request({ ...query, method: 'GET' })
  }
  post(query: IRequest) {
    return this.request({ ...query, method: 'POST' })
  }
  put(query: IRequest) {
    return this.request({ ...query, method: 'PUT' })
  }
  delete(query: IRequest) {
    return this.request({ ...query, method: 'DELETE' })
  }
  patch(query: IRequest) {
    return this.request({ ...query, method: 'PATCH' })
  }
  upload(query: IRequest, progressCallback?: Function) {
    let start = new Date()
    return this.request({
      ...query,
      config: {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 0,
        onUploadProgress: (progressEvent: any) => {
          if (!progressCallback) return
          const loaded = progressEvent.loaded
          const total = progressEvent.total
          // 计算上传速度和预计时间
          const seconds = (new Date().getTime() - start.getTime()) / 1000
          const curUpMb = progressEvent.bytes / 1024 / 1024
          const speed: any = (curUpMb / seconds).toFixed(2)
          start = new Date()
          progressCallback({
            speed: parseFloat(speed), //速度 Mb/S
            progress: progressEvent.progress, //上传进度 0-1
            timeRemaining:
              speed &&
              parseFloat(((total - loaded) / 1024 / 1024 / speed).toFixed(2)) //剩余时间 S
          })
        }
      },
      method: 'POST'
    })
  }
}
export default new Http(clientConfig)
