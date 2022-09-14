import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

export default function () {
    const app = createSSRApp(App)

    const router = createRouter(createMemoryHistory('loutube')) // 上文说到的 history 来源
    const store = createStore()
  
    app.use(router).use(store)
  
    return {
      app,
      router,
      store
    }
}