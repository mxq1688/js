import { name } from "../package.json";
import routes from "./routes";
// 导出模块定义对象
export default {
  name,
  install(
    /**
     * @type {import('vue-module-loader/src/interfaces').Context}
     */
    context
  ) {
    console.log(context, 123);
    routes.forEach(item => {
      context.app.config.globalProperties.$router.addRoute(item);
    });
  },
};
