const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  
  // chainWebpack(config) {
  //   const svgRule = config.module.rule('svg')
  //   // 清除已有的所有 loader。
  //   // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
  //   svgRule.uses.clear()
  //   // 添加要替换的 loader
  //   svgRule
  //     .use('vue-svg-loader')
  //       .loader('vue-svg-loader')
  // },

  // chainWebpack(config) {
  //   config.module
  //     .rule('image')
  //     .exclude.add(resolve('src/icons')) // 不包含 src/asset/icon 的采用默认的 image 规则 
  //     .end()
  //   config.module
  //     .rule('svg')
  //     .test(/\.svg$/)
  //     .include.add(resolve('src/icons')) // 在 src/asset/icon 下的采用新建的规则
  //     .end()
  //     .use('@svgr/webpack')
  //     .loader(resolve('@svgr/webpack'))
  // },
}
