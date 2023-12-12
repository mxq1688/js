/* eslint-disable */

import axios, { AxiosRequestHeaders, AxiosResponse, AxiosError, Method, AxiosRequestConfig, } from "axios"
let baseURL = '/'

// 定义接口
export interface PendingType {
  url?: string;
  method?: Method;
  params: any;
  data: any;
  cancel: ()=>void;
}

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel();
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};
//取消请求
const pending: Array<PendingType> = []
const CancelToken = axios.CancelToken
const clientConfig = {
  timeout: 60000,
  // withCredentials: true,
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
}

const http = axios.create(clientConfig)

http.interceptors.request.use(
  (request: any) => {
    request.cancelToken = new CancelToken((c) => {
      pending.push({
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c,
      });
    });
    return request;
  },
  (error: any) => {
    return Promise.reject(error)
  }
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    removePending(response.config);
    const code = response?.data?.code;// 根据errorCode，对业务做异常处理(和后端约定)
    // if(code === 40100 && window.location.pathname !== '/'){
    if(code === 40100 ){
        //登录失效 跳转登录页面
    }
    return Promise.resolve(response.data);
  },
  (error: AxiosError) => {
    console.log('response_use_error',error, error.response);
    // 根据返回的http状态码做不同的处理
    if (error.response) {
    } else {
    }
    return Promise.reject(error.message);
  }
);

export default http;
