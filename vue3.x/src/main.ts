import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import EelmentPlus from 'element-plus'
import IViewPlus from 'iview-plus'

createApp(App).use(store).use(router).mount('#app')
