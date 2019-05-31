'use strict';

var m = 'i am modul';

function M1(){
    console.log('I AM M1');
}
function M2(){
    console.log('I AM M2');
}

// 方法一：
// module.exports = {
//     M1:M1,
//     M2:M2
// }
// 方法二：
// module.exports.M1 = M1;
// module.exports.M2 = M2;
// 方法三：
// exports.M1 = M1;
// exports.M2 = M2;
//错误❌示例  返回{}
// exports = {
//     M1:M1,
//     M2:M2
// }
// 如果要输出一个函数或数组，必须直接对module.exports对象赋值。
// module.exports = M1;
//错误❌示例  返回{}
// exports = M1;
