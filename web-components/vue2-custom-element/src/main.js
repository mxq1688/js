import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// plugins
import AtUI from 'at-ui'

import 'at-ui-style/css/at.css'
import './assets/css/main.scss'


// 借助document-register-element就可以随心所欲的创建我们的html标签，再也不用div的深层嵌套，
// 不是一个合法的自定义元素继承自HTMLKnowElement.prototype 这是html的规定
// 标准的自定义元素继承自HTMLElement.prototype
import 'document-register-element/build/document-register-element'


// vue-custom-element by karol-f
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.use(AtUI)
Vue.config.productionTip = false

// new Vue is not needed anymore, as you're initializing the app through vue-custom-element
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// use vue-custom-element
App.store = store
App.router = router
Vue.customElement('vue-widget', App)
