import { createApp } from 'vue'
import App from './App.vue'
import introduceElement from '@/utils/element-plus'
import './styles/elementPlus.scss'
const app = createApp(App)
// 按需引入element ui组件
introduceElement(app)

app.mount('#app')
