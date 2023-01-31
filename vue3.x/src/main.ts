import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import EelmentPlus from 'element-plus'
const app = createApp(App)

/* microApp start*/
import microApp from '@micro-zoe/micro-app'
microApp.start()
// microApp.preFetch([
//     { name: 'app1', url: 'http://localhost:8080/' }
//   ])  
/* microApp end*/

/* 乾坤 start */
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
      name: 'yuan365', // app name registered
      // entry: '//localhost:8080/',
      entry: '//localhost:8080/',
      container: '#yuan365',
      activeRule: '#/qiankun/yuan365',
      props: {
        baseApp: 'wetaman365',
        baseRouter: '#/qiankun/yuan365'
      }
    },
  ]);
  
start({
  prefetch: 'all',
  singular: false
});

/* 乾坤 end */

/* wujie start*/
// import { bus, setupApp, preloadApp, startApp, destroyApp } from "wujie";
// // setupApp({ name: "yuan365", url: "http://localhost:8080", exec: true, el: "#app", sync: true })

// // preloadApp({ name: "唯一id"});
// startApp({ name: "yuan365", url: "http://localhost:8080", el: "#app", sync: true  })

import WujieVue from "wujie-vue3";

const { setupApp, preloadApp, bus } = WujieVue;
app.use(WujieVue)

// setupApp({
//   name: "yuan365",
//   url: "http://localhost:8080/",
//   exec: true,
// });
/* wujie end*/





app.use(store).use(router).mount('#app')
