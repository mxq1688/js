const path = require('path')

//seo
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const JSDOMRenderer = PrerenderSPAPlugin.PuppeteerRenderer
// const JSDOMRenderer = require('@prerenderer/renderer-jsdom');
const JSDOMRenderer = require("@prerenderer/renderer-puppeteer")

const SitemapPlugin = require('sitemap-webpack-plugin').default;
const sitemap = require('sitemap');
const fs = require('fs');
const routes = [ '/', '/login', '/help', '/member']
const siteMapUrls = [];

function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  configureWebpack: (config) => {
    const plugins = [
    ]
    if (isProduction) {
      plugins.push(
        new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 下面这句话非常重要！！！
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname, 'dist'),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: routes,    
          // postProcessHtml: function (context) {
          //   var titles = {
          //     '/': '元创岛3D虚拟直播助手',
          //     '/help': '元创岛使用教程',
          //     '/login': '元创岛登录中心',
          //     '/member': '元创岛会员权益',
          //   }
          //   return context.html.replace(
          //     /<title>[^<]*<\/title>/i,
          //     '<title>' + (titles[context.route] || '') + '</title>'
          //   )
          // },
          // postProcess (context) {
          //   //content 参数
          //   const {originalRoute, route, html} = context;
          //   //全局获取href内容正则
          //   const reg = /(?<=<a\s*.*href=")[^"]*(?=")/g;
          //   //过滤不包含http或https开头的url
          //   const urlList = html.match(reg).filter(url => url.startsWith('http'));
          //   //将路由添加到全局sitemap容器
          //   siteMapUrls.push(originalRoute);
          //   console.log(111, originalRoute);
          //   //将html中的外链添加到全局sitemap容器
          //   if (urlList.length) {
          //     urlList.forEach(url => siteMapUrls.push(url));
          //   }
          //   //当当前路由为最后一个生成路由时  
          //   if (route === routes[routes.length - 1]) {
          //     //去除重复的链接
          //     let currentSiteMapUrls = Array.from(new Set(siteMapUrls));
          //     //过滤掉链接中的锚点后内容
          //     currentSiteMapUrls = currentSiteMapUrls.map(url => {
          //       const isMao = url.indexOf('#') > -1;
          //       //生成sitemap所需数据，具体参数参详sitemap.js官网
          //       return {url: isMao ? url.split('#')[0] : url, changefreq: 'weekly', priority: 0.5, lastmod: new Date().toLocaleDateString()}
          //     });
          //     //生成siteMap文件
          //     const siteMap = sitemap.createSitemap({
          //       //路由前缀地址，全地址自动不会添加hostname（https://www.baidu.com不会添加hostname）
          //       hostname: 'https://www.yuan365.com',
          //       cacheTime: 600000,  //600 sec (10 min) cache purge period
          //       urls: currentSiteMapUrls
          //     });
          //     //将sitemap文件添加搭配打包文件夹dist中
          //     fs.writeFileSync(resolve('dist/sitemap.xml'), siteMap.toString());
          //   }
          //   //返回当前contet对象
          //   return context
          // },

          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new JSDOMRenderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event',
            renderAfterTime: 20,
            renderAfterTime: 10000, //超时时间
            timeout: 0,
            maxConcurrentRoutes: 20, //打包页面的最大数
            navigationParams: {
              timeout: 0
            }
          })
        }),
      )
      plugins.push(
        // new SitemapPlugin('https://www.yuan365.com', routes, {
        //   fileName: 'sitemap.xml',
        // })
        new SitemapPlugin({ base:'https://www.yuan365.com', paths:routes, options: {
          filename: 'map.xml'
        } })
      )
    }
    return { plugins }
  },
}
