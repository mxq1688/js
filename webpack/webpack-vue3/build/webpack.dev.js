const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.base.conf");
const path = require("path");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const devWebpackConfig = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [],
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 针对构建的额外代码依赖的数组对象。webpack 将使用这些项和所有依赖项的哈希值来使文件系统缓存失效。
    },
    cacheDirectory: resolve('temp_cache'),
    name: 'scf-cache', // 路径temp_cache/scf-cache
    compression: 'gzip',
  },
  output: {
    path: resolve("dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[hash].js",
    publicPath: "/",
  },
  // 日志打印只打印错误和警告
  stats: "errors-warnings",
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/g,
          to: "/index.html",
        },
      ],
    },
    allowedHosts: "all",
    port: 8088, // 端口号
    open: false, // 自动打开
    hot: true, // 热更新
    client: {
      progress: true, // 将运行进度输出到控制台。
      overlay: { warnings: false, errors: true }, // 全屏显示错误信息
    },
    compress: true, // 为所有服务启用gzip 压缩
    proxy: {
      "/api": {
        target: "...",
        changeOrigin: true, // 是否是跨域请求
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": "'development'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});
devWebpackConfig.plugins.push(
  // 进度条
  new ProgressBarPlugin({
    format: ` :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    clear: true,
  }),
  // 错误提示
  new FriendlyErrorsWebpackPlugin({
    // 成功的时候输出
    compilationSuccessInfo: {
      messages: [
        `Your application is running here: http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`,
      ],
    },
    // 是否每次都清空控制台
    clearConsole: true,
  })
)

module.exports = devWebpackConfig;