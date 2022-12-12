import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import EelmentPlus from 'element-plus'

// microApp.preFetch([
//     { name: 'app1', url: 'http://localhost:8080/' }
//   ])  

import microApp from '@micro-zoe/micro-app'
microApp.start()

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
      name: 'yuan365', // app name registered
      entry: '//localhost:8080/',
      container: '#yuan365',
      activeRule: '#/qiankun/yuan365',
      props: {
        baseApp: 'wetaman365',
        baseRouter: '#/qiankun/yuan365'
      }
    },
  ]);
  
start();

const app = createApp(App)
app.use(store).use(router).mount('#app')
