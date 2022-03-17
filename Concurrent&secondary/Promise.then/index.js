
const p1 = Promise.resolve(42)
// then中返回Promise对象
// 新建promise的resolve传出的值将作为then方法返回的promise的resolve的值传递出
p1
.then((value)=>{
    return new Promise((resolve, reject)=>{
        resolve(value+1)
    })
})
.then((value)=>{
    console.log(value);
})

//then中返回值
// return的值将作为then方法返回的promise的resolve的值传递出
p1
.then((value)=>{
    return value+1
})
.then((value)=>{
    console.log(value);
})

//then中 新建promise
// 虽然新建了promise，但对于then方法来说，没有向它返回的promise传递返回值，console将打印出undifined
p1
.then((value)=>{
   const p2 = new Promise((resolve, reject)=>{
        resolve(value+1)
    })
})
.then((value)=>{
    console.log(value);
})

// 同上一种情况
p1
.then((value)=>{
   const p2 = new Promise((resolve, reject)=>{
        return value+1
    })
})
.then((value)=>{
    console.log(value);
})

// then中无返回
// then方法没有返回值，then方法的promise的resolve的值将传递出undifined。
p1
.then((value)=>{
 
})
.then((value)=>{
    console.log(value);
})
