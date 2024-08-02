原理都是使用puptter
https://github.com/wensiyuanseven/prerender-spa

#### prerender:
```
    先打包好文件
    node启一个web服务
    使用puptter用浏览器访问获取页面数据回填到打包好的文件中

    renderAfterDocumentEvent 
        配主要用于控制何时开始预渲染过程。在预渲染单页应用（SPA）时，有时需要等待某些事件发生之后再开始渲染静态 HTML 文件，以确保预渲染的内容是最新的或是包含了某些动态生成的数据。
        vue3需要 document.dispatchEvent(new Event('custom-render-trigger'))

```
#### spider:
```
    node起个服务利用puppter去访问内部的项目端口
    nginx把爬虫代理到node服务
```
#### spa配置ssr 
```

```
#### ssr框架
> vue对应的nuxtjs
> react对应的nextjs