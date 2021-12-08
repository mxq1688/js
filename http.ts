import axios, {
  AxiosResponse,
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
import Router from "@/router/index";

import { ElMessage } from "element-plus";
import store from "@/store";
interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}
const axiosOption = {
  baseURL: process.env.VUE_APP_API_BASE_URL || "",
  timeout: 30 * 1000,
  withCredentials: true,
};

const errHandler = (error: AxiosError) => {
  if (error.response) {
    ElMessage({
      type: "error",
      showClose: true,
      duration: 5000,
      message: error.response.data.message,
    });
  } else {
    ElMessage({
      type: "error",
      showClose: true,
      duration: 5000,
      message: "网络错误",
    });
  }
  return Promise.reject(error.message);
};
class ariesAxios {
  private axiosInstances: AxiosInstance;
  constructor() {
    this.axiosInstances = axios.create(axiosOption);
    this.setupInterceptors();
  }
  private setupInterceptors() {
    //请求拦截
    this.axiosInstances.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        request.headers["Authorization"] = sessionStorage.getItem("asrToken");
        return request;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    //响应拦截
    this.axiosInstances.interceptors.response.use((response: AxiosResponse) => {
      if ([200, 201, 204].includes(response.status)) {
        if (response.data.code !== 200) {
          if (response.data.code == 406) {
            //鉴权失败
            store.commit("removeToken");
            Router.push("/login");
          } else {
            ElMessage({
              type: "error",
              showClose: true,
              duration: 5000,
              message: response.data.message,
            });
            return Promise.reject(response.data.message);
          }
        }
        return response.data.data;
      } else {
        ElMessage({
          type: "error",
          showClose: true,
          duration: 5000,
          message: response.data.message,
        });
        return Promise.reject(response.data.message);
      }
    }, errHandler);
  }
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }
  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PUT" });
  }
  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstances
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          const resu = res as unknown;

          resolve(resu as Promise<T>);
        })
        .catch((e: Error) => {
          reject(e);
        });
    });
  }
}
function createAxios() {
  return new ariesAxios();
}

export const http = createAxios();
