const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // productionSourceMap: false,
  // micro-app setup语法下micro-app无法使用解决
  chainWebpack: config => {
    config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options => {
      options.compilerOptions = {
        ...(options.compilerOptions || {}),
        isCustomElement: (tag) => /^micro-app/.test(tag),
      };
      return options
    })
  },
  devServer: {
    open: true,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // headers: {			// 重点1: 允许跨域访问子应用页面
    //   'Access-Control-Allow-Origin': '*',
    // },
    proxy: {
      '/admin-api': {
        // target: ' http://avatar-gateway/', //预生产环境
        // target: ' http://10.1.202.169:8888', // 开发环境本地
        target: ' http://10.1.196.2:8888/', // 测试环境
        ws: true,
        changOrigin: true
      },
      '/web-api': {
        // target: ' http://avatar-gateway/', //预生产环境
        target: 'http://117.50.60.12/', // 预生产环境
        // target: ' http://10.1.225.142:8888/', // 测试环境
        // target: 'http://10.1.196.2:8888/', // 测试环境
        ws: true,
        changOrigin: true
      },
      '/mem': {
        // target: ' http://avatar-gateway/', //预生产环境
        target: 'http://117.50.60.12/', // 预生产环境
        // target: ' http://10.1.225.142:8888/', // 测试环境
        // target: 'http://10.1.196.2:8888/', // 测试环境
        ws: true,
        changOrigin: true
      },
    },
    before: (app) => {}
  },

}
