'use strict';

var str = 'i am str';

function M1(){
    console.log('I AM M1');
}
function M2(){
    console.log('I AM M2');
}

var method = {
    title: 'title',
    add(par1, par2){
        return par1+par2;
    },
    delete(){

    }
}

// 方法一：
    module.exports = {
        str,M1,M2,method
    }
    // 等同于
    //     module.exports = {
    //         str:str,
    //         M1:M1,
    //         M2:M2,
    //         method:method,
    //     }
// 方法二：
//     module.exports.str = str;
//     module.exports.M1 = M1;
//     module.exports.M2 = M2;
//     module.exports.method = method;

// 方法三：
//     exports.str = str;
//     exports.M1 = M1;
//     exports.M2 = M2;
//     exports.method = method;




//错误❌示例
    // exports = {
    //     M1:M1,
    //     M2:M2
    // }

    // exports = M1;
