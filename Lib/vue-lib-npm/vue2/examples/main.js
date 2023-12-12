import Vue from 'vue'
import App from './App.vue'

/* main.js */
// 导入组件库
import ComColorButton from './../packages/index'
console.log(ComColorButton, 123);
// 注册组件库
Vue.use(ComColorButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')