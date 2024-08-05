import { createSSRApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.ts";

export function createApp() {
  // 如果使用服务端渲染需要将createApp替换为createSSRApp方法
  const app = createSSRApp(App);
  app.use(router);
  // 将根实例以及路由暴露给调用者
  return { app, router };
}
