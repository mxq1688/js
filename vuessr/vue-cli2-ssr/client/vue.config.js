const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { HashedModuleIdsPlugin } = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    // const AutoImport = require('unplugin-auto-import/webpack')
    // const Components = require('unplugin-vue-components/webpack')
    // const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    lintOnSave: false,
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // publicPath: './', // 和后端资源请求路径有关
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
            // ============压缩图片 start============
            // config.module
            //   .rule('images')
            //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            //   .use('image-webpack-loader')
            //   .loader('image-webpack-loader')
            //   .options({ bypassOnDebug: true })
            //   .end()
        config.module
            .rule('images')
            .exclude.add(resolve('src/assets/icons'))
            .end()
            .use('url-loader')
            .tap((options) => ({
                limit: 10240,
                fallback: {
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'static/img/[name].[hash:8].[ext]',
                        esModule: false //低版本默认为false，高版本默认为true 这里为6.2.0为高本版本所以要手动设置为false
                    }
                }
            }))
            // .end()
            // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            // .use('image-webpack-loader')
            // .loader('image-webpack-loader')
            // .options({ bypassOnDebug: true })
            // .end()
        config.optimization.delete('splitChunks')

        // .use('image-webpack-loader')
        // .loader('image-webpack-loader')
        // .options({
        //     // bypassOnDebug: true
        //     mozjpeg: { progressive: true, quality: 50 }, // 压缩JPEG图像
        //     optipng: { enabled: true }, // 压缩PNG图像
        //     pngquant: { quality: [0.5, 0.65], speed: 4 }, // 压缩PNG图像
        //     gifsicle: { interlaced: false } // 压缩GIF图像
        // })
        // .end()
        // .enforce('post') // 表示先执行配置在下面那个loader，即image-webpack-loader
    },
    configureWebpack: (config) => {
        const plugins = [
            // AutoImport({
            //     resolvers: [ElementPlusResolver()],
            // }),
            // Components({
            //     resolvers: [ElementPlusResolver()],
            // })
        ]
        if (isProduction) {
            plugins.push(
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            output: {
                                comments: false // 去掉注释
                            },
                            warnings: false,
                            compress: {
                                drop_console: false,
                                drop_debugger: false,
                                pure_funcs: ['console.log'] //移除console
                            }
                        }
                    })
                )
                // 服务器也要相应开启gzip
            plugins.push(
                    new CompressionWebpackPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css)$/, // 匹配文件名
                        threshold: 10000, // 对超过10k的数据压缩
                        deleteOriginalAssets: true, // 不删除源文件
                        minRatio: 0.8 // 压缩比
                    })
                )
                // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
            plugins.push(new HashedModuleIdsPlugin())
                // 开启分离js
            config.optimization = {
                    runtimeChunk: 'single',
                    splitChunks: {
                        chunks: 'all',
                        maxInitialRequests: Infinity,
                        minSize: 1000 * 60,
                        cacheGroups: {
                            vendor: {
                                test: /[\\/]node_modules[\\/]/,
                                name(module) {
                                    // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
                                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                    return `npm.${packageName.replace('@', '')}`
                                }
                            }
                        }
                    }
                }
                // 取消webpack警告的性能提示
            config.performance = {
                    hints: 'warning',
                    //入口起点的最大体积
                    maxEntrypointSize: 1000 * 500,
                    //生成文件的最大体积
                    maxAssetSize: 1000 * 1000,
                    //只给出 js 文件的性能提示
                    assetFilter: function(assetFilename) {
                        return assetFilename.endsWith('.js')
                    }
                }
                // 打包时npm包转CDN
                // config.externals = externals;
        }
        return { plugins }
    },
    css: {}
}