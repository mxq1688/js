import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/study',
    name: 'study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue')
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/my-page/:page*', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-page',
    component: () => import('@/views/myPage/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
