const testPlugin = require('./my-plugin.js'); //自定义插件

module.exports = {
  entryPoints: ['src/index.js'],
  outfile: 'lib/index.js',
  sourcemap: true,
  bundle: true,
  minify: true, // 压缩代码
  // splitting: true, //配合outdir
  format: "esm",
  target: ["esnext"],
  write: false, //用于开发调试
  // watch: {
  //   onRebuild(error, result) {
  //     if (error) console.error('watch build failed:', error)
  //     else {
  //       // 这里来自动打开浏览器并且更新浏览器
  //       console.log('\x1B[36m%s\x1B[39m', 'watch build succeeded')
  //     }
  //   },
  // },
  plugins: [testPlugin],
};