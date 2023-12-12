const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.base.conf");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = function (env, argv) {
  const nodeEnv = env.dev ? "development" : env.test ? "test" : "production";
  const analyzerPlugins = env.analyzer
    ? [
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          openAnalyzer: false,
          //   generateStatsFile: true,
          reportFilename: resolve("./report/report.html"),
          statsFilename: resolve("./report/stats.json"),
        }),
      ]
    : [];

  return merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(nodeEnv),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      ...analyzerPlugins,
      new CleanWebpackPlugin(),
    ],
    output: {
      path: resolve("dist"),
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[name].[hash].js",
    },
  });
};