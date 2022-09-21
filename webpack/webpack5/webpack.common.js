// webpack/webpack.common.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackEnv) => {
    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    return {
      mode: webpackEnv, //mode：模式，通过选择：development，production，none这三个参数来告诉webpack使用相应模式的内置优化。
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'asset/[name].[contenthash:8][ext][query]', 
      },
      module: {
        //loader（加载器），webpack本身只支持处理js，json文件，要想能够处理其它类型的文件，如：css，jsx，ts，vue等，则需要相应的loader将这些文件转换成有效的模块。
          rules: [
            {
                //处理css文件
                // css-loader只负责解析css文件，解析完成后会返回一个包含了css样式的js对象
                // 我们需要css样式生效，则需要将css样式插入到dom中，那么又需要安装自动插入样式的loader：style-loader
                // 这里需要注意，loader的执行顺序是倒序执行（从右向左或者说从下向上），我们需要先使用css-loader解析css生成js对象后，将css对象交给style-loader，style-loader会创建style标签，将css样式抽取出来放在style标签中，然后插入到head中
                // 在不同浏览器上css的支持是不一样的，所以我们需要使用postcss-loader来做css的兼容：
                test: /.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        // css兼容性处理
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                'postcss-preset-env',
                                {
                                  autoprefixer: {
                                    flexbox: 'no-2009',
                                  },
                                  stage: 3,
                                },
                              ],
                            ],
                          },
                        }
                    },
                ],
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  importLoaders: 1,
                  localIdentName: '[local]_[hash:base64:5]', 
                },
              },
            },
            {
              test: /\.(scss|sass)$/,
              use: [
                  'sass-loader'
              ],
            },
            {
                // 加载图片
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset', 
                    // asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
                    // asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
                    // asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
                    // asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。
                generator: {
                    // generator属性自定义文件名与文件存放位置 或者在output中设置assetModuleFilename: 'asset/[name].[contenthash:8][ext][query]', 
                  filename: 'image/[name].[contenthash:8][ext][query]'
                }
            },
            {
                exclude: /\.(js|mjs|ejs|jsx|ts|tsx|css|scss|sass|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', 
            },
            {
                // 将es6语法转换为es5 babel-loader
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                    /* 这么使用会污染全局对象
                      presets: [
                        [
                            "@babel/preset-env", //@babel/preset-env，它是转译插件的集合
                            {
                                "useBuiltIns": "usage", //useBuiltIns则是告诉babel怎么引入polyfill。
                                    // 当选择entry时，babel不会引入polyfill，需要我们手动全量引入：
                                    //     import "core-js"; 
                                    //     var a = new Promise();
                                    // 当选择usage时，babel会根据当前的代码自动引入需要的polyfill：
                                "corejs": 3,
                            }
                        ]
                      ],
                    */
                      presets: [
                        "@babel/preset-env",
                      ],
                      plugins: [
                        [
                          '@babel/plugin-transform-runtime',
                          {
                            "helpers": true, 
                            "corejs": 3,
                            "regenerator": true,
                          }
                        ]
                      ],
                    }
                  },
                ],
            },
            // {
            //   loader: 'babel-loader',
            //   options: {
            //     presets: [
            //       "@babel/preset-env",
            //       [
            //         "@babel/preset-react",
            //         {
            //           runtime: 'automatic',
            //         }
            //       ],
            //       "@babel/preset-typescript",
            //     ],
            //   }
            // },
          ] 
      },
      plugins: [
        //插件，loader用于处理不支持的类型的文件，而plugin则可以用于执行范围更广的任务，如：压缩代码(new TerserWebpackPlugin())，资源管理(new HtmlWebPackPlugin())，注入环境变量（new webpack.DefinePlugin({...}))等
        new HtmlWebpackPlugin({
            // html-webpack-plugin还可以添加一个模板文件，让html-webpack-plugin根据模板文件生成html文件。
            template: path.resolve(__dirname, './public/index.ejs')
        }),
      ],
    };
};