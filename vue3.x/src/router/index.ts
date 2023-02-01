import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
        path: '/my-page/:page*', // vue-router@4.x path的写法为：'/my-page/:page*'
        name: 'my-page',
        component: () => import('@/views/myPage/index.vue')
      },
      {
        path: '/qiankun/yuan365/:page*',
        name: 'qiankun',
        component: () => import(/* webpackChunkName: "about" */ '../views/qiankun/index.vue')
      },
    
    ]
  },
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue')
  },
  {
    path: '/loadMicroApp/:page*',
    name: 'loadMicroApp',
    component: () => import(/* webpackChunkName: "about" */ '../views/qiankun/loadMicroApp.vue')
  },

  {
    path: '/wujie/:page*',
    name: 'wujie',
    component: () => import(/* webpackChunkName: "about" */ '../views/wujie/index.vue')
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
