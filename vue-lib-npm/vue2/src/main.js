import Vue from 'vue'
import App from './App.vue'

import toast from './lib/index.js';
Vue.use(toast);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
