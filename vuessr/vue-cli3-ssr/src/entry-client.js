import { createApp } from "./main"; 
// 创建vue、router实例
const { app, router } = createApp();
// 路由就绪，执⾏挂载
router.onReady(() => { app.$mount("#app"); });