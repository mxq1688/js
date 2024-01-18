// const { src, dest } = require("gulp");
// const lessTask = () => {
//   return src("src/style/*.less")
//         .pipe(less())
//         .pipe(dest("dist/style"));
// };
// exports.default = lessTask;


const { src, dest } = require("gulp");
const less = require("gulp-less");

const autoprefixer = require("gulp-autoprefixer");
const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};


exports.default = lessTask;

