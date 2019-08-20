// const promise = new Promise((resolve, reject)=>{
//
//     if(1){
//         resolve('success');
//     }else{
//         reject('faild');
//     }
// });
//
// promise.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// });

 function nn(){
    return new Promise((resolve, reject)=>{
        if(0){
            resolve('success');
        }
    });
}

async function mm(){
    var m = await nn();//调用async函数需要在async重中调用  直接调用返回promise对象
    return m;
}
//
mm().then(function (value) {
    console.log(value);
});
