const { series, parallel } = require("gulp");

const task1 = () => {
  console.log("task1");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};
const task2 = () => {
  console.log("task2");
  return Promise.resolve();
};

// 并行任务
exports.default = parallel(task1, task2);

