//主线程直接执行
console.log('1');
//丢到宏事件队列中
setTimeout(function() {
    console.log('5');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('6');
        resolve();
    }).then(function() {
        console.log('8')
    })
})
//微事件1
process.nextTick(function() {
    console.log('3');
})
//主线程直接执行
new Promise(function(resolve) {
    console.log('2');
    resolve();
}).then(function() {
    //微事件2
    console.log('4')
})
//丢到宏事件队列中
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('11');
    })
    new Promise(function(resolve) {
        console.log('10');
        resolve();
    }).then(function() {
        console.log('12')
    })
})