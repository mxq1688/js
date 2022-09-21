const path = require("path");
const vueLoader = require('vue-loader')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

const HtmlWebpackPlugin = require("html-webpack-plugin");

let babelLoaderConf = {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['ie>=8', 'chrome>=62'],
              node: '8.9.0',
            }, // 转换目标
            debug: false, // 是否打印prese-env对当前配置用了哪些插件，以及我们所支持的浏览器集合的数据
            useBuiltIns: 'usage', // 按需引入
            corejs: '3.0', // corejs版本
          },
        ],
        [
          '@babel/preset-typescript',
          {
            allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 3,
          },
        ],
      ],
    },
  };

module.exports = {
  entry: {
    app: resolve("src/index.ts"),
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".ts", ".tsx", ".mjs"],
    alias: {
      "@": resolve("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
        include: /(src)/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // postcss-preset-env 内部集成了 autoprefixer 添加css第三方前缀
                plugins: ['postcss-preset-env'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // additionalData: `	
              //   @use "@/styles/variables.scss" as *;  // 全局导入sass变量
              //   @use "@/styles/mixin.scss" as *; // 全局导入sass混入
              // `,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[base]',
        },
        exclude: [resolve('src/assets/svg')],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'files/[base]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[base]',
        },
      },
      {
        test: /\.(ts|js)x?$/,
        use: [babelLoaderConf],
        exclude: /node_modules/,
      },
      // element-plus
      {
        test: /\.mjs$/,
        include: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    // vue-loader插件
    new vueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("public/index.html"),
      favicon: resolve("public/favicon.ico"),
      inject: true,
    }),
    // element-plus 按需引入
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: false, // 不引入style文件，便于后面做主题化
        }),
      ],
    }),
  ],
};