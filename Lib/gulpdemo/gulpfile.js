// const { series, parallel } = require("gulp");
// // 串行(series)和并行(parallel)
// const task1 = () => {
//   console.log("task1");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   });
// };
// const task2 = () => {
//   console.log("task2");
//   return Promise.resolve();
// };

// // exports.default = series(task1, task2);
// exports.default = parallel(task1, task2);


// 复制
// const { src, dest } = require("gulp");
// // src()和dest()这两个函数在我们实际项目中经常会用到。
// // src()表示创建一个读取文件系统的流，dest()是创建一个写入到文件系统的流。我们直接写一个copy 的示例

// const copy = () => {
//   return src("src/*").pipe(dest("dist/"));
// };

// exports.default = copy;


// 处理less
// const { src, dest } = require("gulp");
// const less = require("gulp-less");
// const autoprefixer = require("gulp-autoprefixer");
// const lessTask = () => {
//   return src("src/style/*.less")
//     .pipe(less())
//     .pipe(
//       autoprefixer({
//         overrideBrowserslist: ["> 1%", "last 2 versions"],
//         cascade: false, //  是否美化属性值
//       })
//     )
//     .pipe(dest("dist/style"));
// };

// exports.default = lessTask;


// 创建静态web服务
const { src, dest } = require("gulp");
const { watch } = require("browser-sync");
const browserSync = require("browser-sync");
const { series } = require("gulp");
const less = require("gulp-less");
// const autoprefixer = require("gulp-autoprefixer");
const lessTask = () => {
    return src("src/style/*.less")
        .pipe(less())
        // .pipe(
        //     autoprefixer({
        //         overrideBrowserslist: ["> 1%", "last 2 versions"],
        //         cascade: false, //  是否美化属性值
        //     })
        // )
        .pipe(dest("dist/style"));
};
//页面刷新
const reloadTask = () => {
    browserSync.reload();
};

const browserTask = () => {
    browserSync.init({
        server: {
            baseDir: "./",
        },
    });
    watch("./*.html", series(reloadTask));
    //监听样式更新触发两个任务
    watch("src/style/*", series(lessTask, reloadTask));
};

exports.default = browserTask;





