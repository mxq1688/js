原理都是使用puptter
https://github.com/wensiyuanseven/prerender-spa

prerender:
    先打包好文件
    node启一个web服务
    使用puptter用浏览器访问获取页面数据回填到打包好的文件中

    vue3需要 document.dispatchEvent(new Event('custom-render-trigger'))

    注：webpack不能压缩资源或者 压缩后需要保留原始文件

spider:
    node起个服务利用puppter去访问内部的项目端口
    nginx把爬虫代理到node服务
