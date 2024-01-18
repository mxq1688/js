const { watch } = require("browser-sync");
const browserSync = require("browser-sync");
const { series } = require("gulp");

const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*", series(reloadTask));
};

exports.default = browserTask;

