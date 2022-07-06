import Vue from 'vue'
import App from './App.vue'
import createRouter from '@/router/index'
import {h} from 'snabbdom/'
Vue.config.productionTip = false;//设置为 false 以阻止 vue 在启动时生成生产提示。默认true

import store from '@/vuex/index'

import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)

import Toast from '@/components/Toast/index.js'
Vue.use(Toast)

window.console.log(h('div', h('p', h('span', [
  h('span', 111),
  h('span', 222),
  h('span', 333)
]))), 111);


// new Vue({
//     router,
//     store,//全局引入
//   render: h => h(App),//Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
//   mounted(){
//     // document.dispatchEvent(new Event('custom-render-trigger')) //使用这个的话，注释vue.config.js renderAfterDocumentEvent: 'render-event',

//     document.dispatchEvent(new Event('render-event'))
//   }
// }).$mount('#app')


// 修改后的写法
export function createApp() {
  // 创建 router 
  const router = createRouter();
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router };
}
