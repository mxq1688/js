#### ssr
```
Client Bundle，给浏览器用。和纯Vue前端项目Bundle类似
Server Bundle，供服务端SSR使用，一个json文件， 用于渲染首屏
```
#### vue中注意
```
ssr不支持keep-alive
SSR 也不支持指令
```
#### 问题
1、ssr中document使用问题

#### vue/server-renderer和vite-plugin-ssr
```
vue/server-renderer 
    是 Vue.js 官方提供的用于服务器端渲染的工具包。它允许你将 Vue 组件转换为服务器可以理解的字符串，从而可以在服务器上渲染出完整的 HTML 内容。这个工具包提供了两个主要的方法：renderToString 和 renderToNodeStream，前者返回一个包含组件 HTML 的字符串，后者返回一个 Node.js 可读流，适用于需要流式输出的场景。

    使用 vue/server-renderer 通常需要你自己来配置 SSR 的整个流程，包括构建、服务器设置、路由处理、状态管理等。这意味着你需要手动设置 Webpack 或其他构建工具来处理 SSR 特定的构建需求，如将客户端和服务器代码分别打包。

vite-plugin-ssr 
    是一个 Vite 插件，旨在为任何使用 Vite 构建的项目提供 SSR 支持。这个插件不仅仅是一个渲染器，它还负责整个 SSR 架构的设置，包括构建时的代码分割、动态导入、热更新等功能。vite-plugin-ssr 可以与多种前端框架和库一起工作，如 Vue、React、Solid 等，提供了一个更加灵活和统一的 SSR 解决方案。

    使用 vite-plugin-ssr，你不需要从头开始配置 SSR 的所有细节，因为许多常见的 SSR 设置已经被封装在插件中。这使得开发者能够更专注于应用逻辑而不是 SSR 的技术细节。
```
#### 当前目录下项目介绍
>vite-ssr
```
vue版本3
已有vite spa项目使用ssr

插件 vike（原vite-plugin-ssr）

```
>vite-ssr-project
```
vite-plugin-ssr原生项目

npm init vite-plugin-ssr@latest
```
>vite-server-render
```
vue版本3

插件：@vue/server-renderer  
    vue3自带的（vue/server-renderer）也可以
```
>vue-cli2-ssr
```
client:


server-render:
    vue版本2

    插件：vue-server-renderer版本需要和vue版本一致

```
>vue-cli3-ssr
```
vue版本2

插件：vue-server-renderer版本需要和vue版本一致
```
>vue3-ssr
```
vue版本3

插件：@vue/server-renderer  
    vue3自带的（vue/server-renderer）也可以
```