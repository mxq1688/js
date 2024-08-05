/*
 * @Title:
 * @Author: Liy
 * @Date: 2022-03-15 17:53:00
 * @Description:
 */
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";
let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => {
      return import("./views/index.vue");
    },
    meta: {
      title: "首页",
      isSsr: true
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("./views/user.vue"),
    meta: {
      title: "用户",
      isSsr: true
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];
console.log(111, import.meta.env.SSR);

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes
});
export default router;
