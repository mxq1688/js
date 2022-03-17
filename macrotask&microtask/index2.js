// 主线程宏任务- 微任务1
async function async1() {
    console.log('async1 start') //微任务1的同步代码先执行
    await async2() //await阻塞后面的代码执行，因此跳出async函数执行下一个微任务

    // 主线程宏任务- 微任务1执行
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}

// 主线程宏任务同步代码先执行
console.log('script start')

// 宏任务2
setTimeout(function() {
    // 宏任务2的同步代码执行
    console.log('setTimeout')
}, 0)
async1(); 

// // 主线程宏任务- 微任务2
new Promise( function( resolve ) {
    // 微任务2的同步代码先执行
    console.log('promise1')
resolve();
} ).then( function() {
    // 主线程宏任务- 微任务2执行
    console.log('promise2')
} )

// 微任务2的同步代码先执行
console.log('script end')

