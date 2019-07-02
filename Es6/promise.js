const promise = new Promise((resolve, reject)=>{

    if(0){
        resolve('success');
    }else{
        reject('faild');
    }
});

promise.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
});

// async function nn(value){
//     return value;
// }
//
// async function mm(){
//     var m = await nn('jofajoejoi');//调用async函数需要在async重中调用  直接调用返回promise对象
//     return m;
// }
//
// mm().then(function (value) {
//     console.log(value);
// });
