import delPath from "../utils/delpath";
import { vue3UiPath, componentPath } from "../utils/paths";
import run from "../utils/run";
import { series, parallel, src, dest } from "gulp";
import less from 'gulp-less'
// import autoprefixer from 'gulp-autoprefixer'

//删除dist
export const removeDist = () => {
    return delPath(`${vue3UiPath}/dist`);
};


//打包样式
export const buildStyle = () => {
    return src(`${componentPath}/src/**/style/**.less`)
        .pipe(less())
        //   .pipe(autoprefixer())
        .pipe(dest(`${vue3UiPath}/dist/lib/src`))
        .pipe(dest(`${vue3UiPath}/dist/es/src`));
};

//打包组件
export const buildComponent = async () => {
    run("pnpm run build", componentPath);
};
export default series(
    async () => removeDist(),
    parallel(
        async () => buildStyle(),
        async () => buildComponent()
    )
);
