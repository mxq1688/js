// 每个gulp任务（task）都是一个异步的JavaScript函数，此函数是一个可以接收callback作为参数的函数，或者返回一个Promise等异步操作对象，比如创建一个任务可以这样写

// exports.default = (cb) => {
//     console.log("my task");
//     cb();
// };

// 或者
exports.default = () => {
    console.log("my task");
    return Promise.resolve();
};