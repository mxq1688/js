import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.scss'
import './styles/common.scss'
import api from '@/api/index.js'
import configs from './config.js'
const app = createApp(App)

// console.log('env', process.env.TICO_ENV, process.env.NODE_ENV)

app.config.globalProperties.$api = api
app.config.globalProperties.$configs = configs

app.use(store).use(router).mount('#app')
