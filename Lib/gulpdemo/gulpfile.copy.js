const { src, dest } = require("gulp");

const copy = () => {
  return src("src/*/*").pipe(dest("dist/"));
    // src目录里有多级目录，src/*/*
};

exports.default = copy;