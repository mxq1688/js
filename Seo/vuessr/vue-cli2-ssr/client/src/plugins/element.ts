import ElementPlus, { messageProps } from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/styles/element-custom.scss'
export default (app: any) => {
  app.use(ElementPlus, {
    locale: zhCn
  })
}

// 重写全局的message方法，重新设置默认配置项
Object.defineProperty(messageProps.customClass, 'default', {
  value: 'messagestyle',
  writable: false
})