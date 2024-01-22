import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite'; //用于设置组件名
import less2css from './plugins/less2css';
export default defineConfig({
  build: {
    //压缩
    //minify: false,
    lib: {
      entry: './index.ts'
    },
    rollupOptions: {
      ////忽略打包vue和.less文件
      external: ['vue', /\.less/],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../../dist/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../../dist/lib'
        }
      ]
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../../dist/es/src', '../../dist/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    DefineOptions(), //注意这个要写在dts后面,源码中可能有误
    less2css()
  ]
});
