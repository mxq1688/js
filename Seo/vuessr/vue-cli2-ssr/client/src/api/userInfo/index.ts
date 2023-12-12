import { request } from '@/services/request'

// 获取验证码
export const xxx = (params: any) => {
  return request({
    url: 'http://localhost:8088/html',
    params,
    method: 'get'
  })
}

