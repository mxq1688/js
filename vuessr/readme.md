#### ssr
```
Client Bundle，给浏览器用。和纯Vue前端项目Bundle类似
Server Bundle，供服务端SSR使用，一个json文件， 用于渲染首屏
```
#### vue-server-renderer插件
>服务端渲染解析虚拟 DOM成html之后，页面的事件都没法触发，需要客户端再渲染一次（同构）

>vue-server-renderer 版本要与Vue版本一样

#### vue中注意
```
ssr不支持keep-alive
SSR 也不支持指令
```
#### 问题
1、ssr中document使用问题