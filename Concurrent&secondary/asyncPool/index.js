// const asyncPool = require('tiny-async-pool')

const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
const startTime = new Date().valueOf()
asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((res)=>{
  console.log(res);
  console.log((new Date().valueOf()-startTime)/1000);
})

// Es7写法
async function asyncPool(poolLimit, array, iteratorFn) {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
      // 调用iteratorFn函数创建异步任务
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p); // 保存新的异步任务
  
      // 当poolLimit值小于或等于总任务个数时，进行并发控制
      if (poolLimit <= array.length) {
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then((res) => {
          console.log(res, executing, executing.indexOf(e));
          executing.splice(executing.indexOf(e), 1)
          return res
        });
        executing.push(e); // 保存正在执行的异步任务
        if (executing.length >= poolLimit) {
          await Promise.race(executing) // 等待较快的任务执行完成
        }
      }
    }
    return Promise.all(ret);
}
  


// Es6写法
// function asyncPool(poolLimit, array, iteratorFn) {
//     let i = 0;
//     const ret = []; // 存储所有的异步任务
//     const executing = []; // 存储正在执行的异步任务
//     const enqueue = function () {
//       if (i === array.length) {
//         return Promise.resolve();
//       }
//       const item = array[i++]; // 获取新的任务项
//       const p = Promise.resolve().then(() => iteratorFn(item, array));
//       ret.push(p);
  
//       let r = Promise.resolve();
  
//       // 当poolLimit值小于或等于总任务个数时，进行并发控制
//       if (poolLimit <= array.length) {
//         // 当任务完成后，从正在执行的任务数组中移除已完成的任务
//         const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//         executing.push(e);
//         if (executing.length >= poolLimit) {
//           r = Promise.race(executing); 
//         }
//       }
   
//       // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
//       return r.then((res) => {
//           return enqueue()
//         });
//     };
//     return enqueue().then(() => {
//         return Promise.all(ret)
//     });
// }