import { createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

const app = createSSRApp(App)

const router = createRouter(createWebHistory('loutube')) // 上文说到的 history 来源
const store = createStore()


app.use(router).use(store)

router.isReady().then(() => {
    app.mount('#app')
})