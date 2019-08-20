import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types'
import { spy, observe, observable, action, isArrayLike, computed, autorun, when, reaction, runInAction} from 'mobx'

import {observer, PropTypes as observablePropTypes} from 'mobx-react'



/*
// decoraotr 修饰符
function log(target) {//target就是类
    const desc = Object.getOwnPropertyDescriptors(target.prototype)
    for(const key of Object.keys(desc)){
        if(key === 'constructor'){
            continue
        }
        const func = desc[key].value
        if('function' === typeof func){
            Object.defineProperty(target.prototype, key, {
                value(...args){
                    console.log('before '+ key)
                    const ret = func.apply(this, args)
                    console.log(ret);
                    return ret;
                    console.log('after '+ key)
                }
            })
        }
    }
}
function readonly(target, key, descriptor) {
    descriptor.writable = false;
    // console.log(target);
    // console.log(key);
    // console.log(descriptor);
}
function validate(target, key, descriptor) {
    const func = descriptor.value
    descriptor.value = function (...args) {
        for(let num of args){
            if('number' !== typeof num){
                // throw new Error(`"${num}" is not a number`)
                console.error(`"${num}" is not a number`)
            }
        }
        return func.apply(this, args)
    }
}
@log
class Numberic {
    @readonly PI = 3.141592654;
    @validate
    add(...nums){
        return nums.reduce((p,n)=>(p+n),0);
    }
}
new Numberic().add(1,2,'fjj');
// new Numberic().PI = 111;
*/

// const arr = observable([1,2,3,4]);
// const obj = observable({name: 'mxq', title: 'fjeowj'});
// const map = observable(new Map());

//number string bool必须用 observable.box
// const num = observable.box(20);
// const str = observable.box('jfaweio');
// const bool = observable.box(true);
// num.set(50);
// console.log(num.get());

/*
class Test{
    @observable arr = [];
    @observable obj = {};
    @observable map = new Map();
    @observable num = 20;
    @observable str = 'hello';
    @observable bol = false;
    // 方法二：直接用修饰器语法使用，通过这个方法，只能得到最终的计算值，不能获取observe的方法了
    @computed get mixed(){
        return te.str+'--'+te.num
    }
    @action bar() {
        this.str = 'm';
        this.num = 168;
    }
}

const te = new Test();
//computed
// 方法一：
var foo = computed(()=> te.str+'/'+te.num)//拼接被观察的两个数据
foo.observe((change)=>{
     // 数据改变时调用此方法
     console.log( change);
});
te.str = 'word';
console.log(foo.get());
console.log(te.mixed);//方法2的打印


//autorun
// 初始化会自动运行，修改autorun中任意可观察数据可触发aoturun
autorun(()=>{
    console.log(te.mixed);
});


//when
// when 接收两个函数，第一个为布尔值，当只有第一个为true的时候，才会执行第二个函数，并且保证最多只被执行一次。
// TUDU: 第一个参数为布尔值，必须是一个可观察数据，不能根据普通变量
// TUDO: 如果一开始就返回真，那么第二个函数会同步立即执行
when(() => te.bol, () => console.log("it's true"));
te.bol = true; // "it's true"


//reaction
// 当引入的可观察数据发生变化时，触发第二个函数
// reaction(()=>[te.str, te.num, te.bol], (arr)=>{
//     console.log(arr);
// })

//runInAction
// 使用runInAction方法，同样只会触发一次
// runInAction(() => {
//     te.str = 'm';
//     te.num = 168;
// })
// te.str = 'word';
// te.num = 50;
// te.bar()

*/

class Store {

    @observable cache = {queue: []}
    @action.bound refresh(){
        this.cache.queue.push(1)
    }
}
const store = new Store();

@observer //修饰类本身
class Bar extends Component{
    static propTypes = {
        queue: observablePropTypes.observableArray  //PropTypes.array
    }
    render(){
        const queue = this.props.queue;
        return (
            <Fragment>
                <span>{queue.length}</span>
                <button onClick={this.props.refresh}>refresh</button>
            </Fragment>
        )
    }
}

class Foo extends Component{
    static propTypes = {
        cache: observablePropTypes.observableObject  //PropTypes.object
    }
    render(){
        const cache = this.props.cache;
        return (
            <Fragment>
                <Bar queue={cache.queue} refresh={this.props.refresh}/>
            </Fragment>
        )
    }
}

class TodoList extends Component{

    render(){
        return (
            <Foo cache={store.cache} refresh={store.refresh}/>
        )
    }
}

export default TodoList;

