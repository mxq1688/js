import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
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

// 导出Vue实例⼯⼚函数，为每次请求创建独⽴实例 
// 上下⽂⽤于给vue实例传递参数
export function createApp(context) {
  const router = createRouter();
  const app = new Vue({ router,store, context, render: h => h(App) });
  return { app, router };
}
