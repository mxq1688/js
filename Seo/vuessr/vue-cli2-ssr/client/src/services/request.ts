import http from './axios'
import qs from 'qs'

import { AxiosRequestHeaders, AxiosResponse, AxiosError, Method, AxiosRequestConfig } from 'axios'
interface ResponseBody<T = any> {
  code: number
  message: string
  data: T
}

export const post = <Param, Data>(url: string, param: Param, config?: any) => {
  return http.post<Param, AxiosResponse<ResponseBody<Data>>>(url, param, config).then((res) => {
    return res.data
  })
}

export const get = <Param, Data>(url: string, param: Param) => {
  return http.get<Param, AxiosResponse<ResponseBody<Data>>>(url + '?' + qs.stringify(param)).then((res) => {
    if (res?.data?.code !== 1) {
      // message.error((res && res.data.message) || '网络错误');
    }
    return res.data
  })
}
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    http
      .request<any, AxiosResponse<ResponseBody>>(config)
      .then((res: AxiosResponse<ResponseBody>) => {
        const resu = res as unknown
        resolve(resu as Promise<T>)
      })
      .catch((e: Error) => {
        reject(e)
      })
  })
}
