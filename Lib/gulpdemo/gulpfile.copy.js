const { src, dest } = require("gulp");
// src()和dest()这两个函数在我们实际项目中经常会用到。
// src()表示创建一个读取文件系统的流，dest()是创建一个写入到文件系统的流

const copy = () => {
  return src("src/*/*")
        .pipe(dest("dist/"));
    // src目录里有多级目录，src/*/*
};

exports.default = copy;