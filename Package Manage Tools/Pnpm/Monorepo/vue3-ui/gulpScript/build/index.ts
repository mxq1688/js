/*
    我们需要使用 ts 以及新的 es6 语法，而 gulp 是不支持的，所以我们需要安装一些依赖使得 gulp 支持这些,
    其中 sucrase 让我们执行 gulp 可以使用最新语法并且支持 ts
    pnpm i gulp @types/gulp sucrase -D -w
*/

import delPath from '../utils/delpath';
import { vue3UiPath, componentPath } from '../utils/paths';
import run from '../utils/run';
import { series, parallel, src, dest } from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';

//删除dist
export const removeDist = () => {
  return delPath(`${vue3UiPath}/dist`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${vue3UiPath}/dist/lib/src`))
    .pipe(dest(`${vue3UiPath}/dist/es/src`));
};

//打包组件
export const buildComponent = async () => {
  // run("pnpm run build", componentPath);
  run('pnpm run build', vue3UiPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
