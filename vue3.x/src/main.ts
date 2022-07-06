import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import EelmentPlus from 'element-plus'

import microApp from '@micro-zoe/micro-app'
microApp.start()

createApp(App).use(store).use(router).mount('#app')
