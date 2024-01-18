import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite"; //用于设置组件名
export default defineConfig({
    build: {
        //压缩
        //minify: false,
        lib: {
            entry: "./index.ts",
        },
        rollupOptions: {
            ////忽略打包vue和.less文件
            external: ["vue", /\.less/],
            input: ["index.ts"],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../../dist/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../../dist/lib",
                },
            ],
        },
    },
    plugins: [
        vue(),
        dts({
            entryRoot: "./src",
            outputDir: ["../../dist/es/src", "../../dist/lib/src"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: "../../tsconfig.json",
        }),
        DefineOptions(),//注意这个要写在dts后面,源码中可能有误
        {
     
            /*
                由于 vite 打包忽略了 less 文件打包,所以打包后的文件遇到.less 文件的引入会自动跳过,所以引入代码没变
                但是我们已经将 less 文件打包成 css 文件了,所以我们需要将代码中的.less换成.css
            */
            /*
                自定义vite插件
                可以使用 Vite 和 rollup 提供的钩子
                插件可以做很多事情，通过 Vite 和 rollup提供的钩子对代码解析、编译、打包、输出的整体流程进行自定义处理。
                Vite 独有钩子
                    config - 在解析 Vite 配置前调用，它可以返回一个将被深度合并到现有配置中的部分配置对象，或者直接改变配置
                    configResolved - 在解析 Vite 配置后调用，使用这个钩子读取和存储最终解析的配置
                    configureServer - 是用于配置开发服务器的钩子
                    transformIndexHtml - 转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文
                    handleHotUpdate - 执行自定义 HMR 更新处理。
                rollup 钩子
                    rollup 钩子非常多，一共分两个阶段
                    编译阶段：
                    输出阶段：
                        transform - 用于转换已加载的模块内容
                        generateBundle - 已经编译过的代码块生成阶段
            */
            name: "style",
            generateBundle(config, bundle) {
                //这里可以获取打包后的文件目录以及代码code
                const keys = Object.keys(bundle);
        
                for (const key of keys) {
                const bundler: any = bundle[key as any];
                //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
        
                this.emitFile({
                    type: "asset",
                    fileName: key, //文件名名不变
                    source: bundler.code.replace(/\.less/g, ".css"),
                });
                }
            },
        }
    ],
});
