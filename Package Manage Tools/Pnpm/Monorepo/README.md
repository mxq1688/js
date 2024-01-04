现在大部分前端构建脚手架都支持 esmodule 了,而 esmodule 本身就支持按需加载,所以说组件库打包后的 es 格式它本身自带 treeShaking,而不需要额外配置按需引入。

后面我们要做的则是让样式文件也支持按需引入


没有 tree shaking 的时代实现按需引入
    babel-plugin-import antd按需加载
    babel-plugin-component element-ui按需加载

自动按需引入
    比如ElementPlus是使用unplugin-vue-components和unplugin-auto-import,这两个插件可以实现
        import { Button } from "easyest";
        //相当于
        import "easyest/es/src/button/style/index.css";
        import "easyest/es/src/button/index.mjs";

package.json
    typings
        声明文件入口
    sideEffects
        忽略 tree shaking 带来副作用的代码,比如打包后组件代码中包含了
        arduino复制代码import "./xxx.css"

        这样会使得构建工具无法知道这段代码是否有副作用(也就是会不会用到其它引入的文件中的代码),所以构建的时候就会全量打包代码从而失去 esmodule 的自动按需引入功能。因此加上 sideEffects 字段就可以告诉构建工具这段代码不会产生副作用,可以放心的 tree shaking

封装的组件库一定要发布到npm吗？能只上传到git仓库就直接使用
    可以的， 可以通过 http协议的方式 安装npm包
    比如， 你开发了一个 test-ui 库， 在github或者 gitlab上， 只要有完整的url地址， 你依旧可以使用 npm install https://xxxxxtest-ui 安装，不一定要发布到 npm仓库