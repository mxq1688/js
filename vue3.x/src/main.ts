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

// import { registerMicroApps, start } from 'qiankun';
// registerMicroApps([
//   {
//     name: 'yuan365', // app name registered
//     entry: '//localhost:8080/',
//     container: '#yourContainer',
//     activeRule: '/yourActiveRule',
//   },
//   {
//     name: 'vue app',
//     entry: { scripts: ['//localhost:7100/main.js'] },
//     container: '#yourContainer2',
//     activeRule: '/yourActiveRule2',
//   },
// ]);
// start();

import "./qiankun/index.js"

createApp(App).use(store).use(router).mount('#app')
