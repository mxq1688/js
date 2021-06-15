

// 数组
    let arr: number[] = [1,2];
    let arr2: Array<number> = [3,4];

// 元组
    let arr3: [number, string];
    arr3 = [111, 'hello'];

// 枚举
    enum Color {red, blue, green}
    let co :Color = Color.blue;
    let co2:string = Color[0];
    // console.log(co, co2);

var an:any = 10;
an = 'mm';
an = [1,2,3]
var list:any[] = [1, 'fajeo', true];
var list2: Array<any> = [2, 'faejfo', false];
// console.log(list, list2);

// 函数  ?代表参数可选
    function hell(x:number, y?:string) : number{
        // console.log('hello')
        return 123;
    }
    hell(1);
// void 函数无返回值
    function hello() : void{
        // console.log('hello')
    }
    hello();
//函数默认参数
    function defa(x:string, y='def'):void {

    }
    // defa('fae')

//函数可变参数
    function cha(x:string, ...y:string[]) {
        console.log(arguments);
        return x+ '-'+ y.join('-')
    }
    // console.log(cha('11', '22', '33'));

// 说明参数意义 lambda表达式
    var myadd:(name: string, age: number)=>number = function(n:string, a:number):number{
        return a;
    }
    // myadd('m', 11)

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
// var m:undefined = undefined;
// var n:number = 10;
// n = m;
// console.log(n);


// 启用 --strictNullChecks
    let x1: number | null | undefined;//如果一个类型可能出行 null 或 undefined， 可以用 | 来支持多种类型
    x1 = 1; // 运行正确
    x1 = undefined;    // 运行正确
    x1 = null;    // 运行正确

// 断言 <类型>值  或者   值 as 类型  在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;//(someValue as string).length
    // console.log(strLength);


// 循环
    var j:any;
    var n:any = "a b c"

    for(j in n) {
        // console.log(n[j])
    }
    for(j of n) {
        // console.log(j)
    }
//函数重载
    function att(name:string):string;
    function att(age:string):string;
    function att(na:any):any {
        if(na && typeof na == 'string'){

        }
    }

//类 Class
    class Person{
        name:string;
        age:number;
        static sta:string = '22';
        constructor(name:string, age:number){
            this.name = name;
            this.age  =age;
            Person.sta = '33'
        }
        tell(){
            return this.name+'-'+this.age
        }
    }
    class Student extends Person{
        school:string;
        constructor(school:string,name:string, age:number){
            super(name, age)
            this.school = school;
        }
        tell(){
            return this.name+'-'+this.age+'-'+this.school+ '-'+ Person.sta;
        }
    }
    // console.log(new Student('安庆', 'mm', 11).tell());
//类 多态:父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
    class Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(){
            console.log('吃的方法');//具体吃什么不知道，继承它的子类去实现，每个子类表现的不一样
            // console.log(`${this.name}`);
        }
    }
    class Dog extends Animal{

        constructor(name:string){
            super(name);
        }
        eat(){
            console.log(`${this.name}`+ '吃粮食');
        }

    }
    // new Dog('dog').eat();
// 抽象类 不能实例化 子类中必须实现抽象方法
    abstract class Aa{
        abstract eat():void;
    }



//接口 interfaecs
    function printLabel(labelObj:{label:string}) {
        console.log(labelObj.label);
    }
    var myObj = {label: 'hello'}
    // printLabel(myObj)

    //接口实现
    interface LabelValue {
        label: string
    }
    function printLabel2(labelObj:LabelValue) {
        console.log(labelObj.label);
    }
    var myObj = {label: 'word'}
    // printLabel(myObj)

    //可选参数
    interface Usb {
        name?:string;
        age?:number;
    }
    function printUsb(pu:Usb) {
        console.log(pu.name);
        console.log(pu.age);
    }
    // printUsb({})

    //接口-函数类型
    interface SearchFunc {
        (source:string, subString):boolean
    }
    var mySearch:SearchFunc;
    mySearch = function (source:string, subString:string):boolean {
        return true;
    }
    mySearch('1', 'fe')

    //接口-数组类型
    interface strArr {
        [index:number]:string
    }
    var marr:strArr
    marr = ['fe']
    // console.log(marr);

    //接口-class类型  (和抽象类相似)
    interface ColockInterface {
        currentTime:Date;
        setTime(d:Date)
    }
    class Clock implements ColockInterface{
        currentTime:Date;
        setTime(d:Date){
            this.currentTime = d;
        }
        constructor(h:number, m:number){

        }
    } //类引用接口
    var o = new Clock(1,2);
    o.setTime(new Date());
    // console.log(o.currentTime);

/*
    //接口继承
    interface A {
        color:string
    }
    interface B{
        size:number
    }
    interface C extends A, B{
        who: boolean
    }
    var s = <C>{};// 使用接口
    s.color = 'red';
    console.log(s.color);
    */
    interface A{
        eat():void;
    }
    interface B extends A{
        work():void;
    }
    class Programer{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        coding(code:string){
            console.log(this.name + code);
        }
    }
    class Web extends Programer implements B{
        constructor(name:string){
            super(name)
        }
        eat():void{
            console.log(this.name + '喜欢吃馒头');
        }
        work():void{
            console.log(this.name + '喜欢写代码');
        }
    }
    // new Web('小王八').coding('喜欢打游戏')


    //接口-混合类型
    interface Counter {
        interval:number;
        reset():void;
        (start:number):string;
    }
    var c:Counter;
    // console.log(c);
    // console.log(<Counter>{});

//泛型，可以支持不特定的数据类型，要求传入的参数和返回的参数类型一致
//T 表示泛型，具体用什么类型是调用这个方法的时候决定的
// 泛型 泛型函数
    function Hell<T>(arg:T):T {
        return arg;
    }
    // console.log(Hell<number>(123), Hell<string>('afjewofj'), Hell(111));

    function Hell1<T>(arg:T[]):T[] {
        return arg;
    }
    var aa:Array<string> = Hell1<string>(['a', 'b']);
    // console.log(aa);

    //泛型类型
    function Hell2<T>(arg:T):T {
        return arg
    }
    var bb:<K>(arg:K)=>K = Hell2 //lambda表达式
    // 或者
    // var bb:{<K>(arg:K):K} = Hell2;
    // console.log(bb, Hell2);
    // console.log(bb('111'));

    // 泛型-接口 1
    interface Intel {
        <T>(arg:T):T;
    }
    function Hell3<T>(arg:T):T {
        return arg;
    }
    var cc:Intel = Hell3;
    // console.log(cc, cc<string>('fae'));

    // 泛型-接口 2
    interface Intel1<T> {
        (arg:T):T;
    }
    function Hell4<T>(arg:T):T {
        return arg;
    }
    var dd:Intel1<number> = Hell4;
    // console.log(dd(222));

// 泛型类
    class HelloNumber<T>{
        Ten: T;
        add: (arg:T)=> T
    }

    var h = new HelloNumber<string>();
    h.Ten = 'ten';
    h.add = (arg)=>{
        return arg
    };
// console.log(h.Ten, h.add, h.add('111'));

    //泛型接口 类
    interface Inte<T>{
        name:T;
        eat(par:T):T
    }
    class m<T> implements Inte<T>{
        name: T;
        eat(par:T):T{
            return par;
        }
    }

// console.log(new m().eat('123'));;


/*把类当做参数类型的泛型类
    // 把类当做参数类型的类
    // class Article{
    //     title: string| undefined;
    //     desc: string| undefined;
    // }
    // //操作数据库的类
    // class MysqlDb{
    //     add(info: Article): boolean{
    //         console.log(info);
    //         return true;
    //     }
    // }
    // var a = new Article();
    // a.title = 'haha';
    // a.desc = 'hello world';
    // var mm = new MysqlDb();
    // mm.add(a);



    // class Article{
    //     title: string| undefined;
    //     desc: string| undefined;
    // }
    // //操作数据库的泛型类
    // class MysqlDb<T>{
    //     add(info: T): boolean{
    //         console.log(info);
    //         return true;
    //     }
    // }
    // var a = new Article();
    // a.title = 'haha';
    // a.desc = 'hello world';
    // var mm = new MysqlDb<Article>();
    // mm.add(a);


    // interface Db<T>{
    //     add(info:T):boolean;
    //     update(info:T,id:number):boolean;
    //     delete(id:number):boolean;
    //     get(id:number):any[];
    // }
    // // 定义一个操作mysql数据库的类，注意要实现泛型接口，这个类也应该是一个泛型类
    // class MysqlDb<T> implements Db<T>{
    //     add(info:T):boolean{
    //         console.log(info);
    //         return true;
    //     };
    //     update(info:T,id:number){
    //         return true;
    //     };
    //     delete(id:number){
    //         return true;
    //     };
    //     get(id:number){
    //         return [];
    //     };
    // }
    // class user {
    //     username: string| undefined;
    //     password: string| undefined;
    // }
    // var u = new user();
    // u.username = 'mxq';
    // u.password = '123456';
    // var db = new MysqlDb<user>();
    // db.add(u)
*/

/*//模块化 module
    import {getData} from './modules/db'
    // getData();

    import {user, userModel} from './modules/user'
    user.username = 'mxq';
    user.password = '123456';
    // userModel.add(user)
    import {article, articleModel} from './modules/article'
    article.title = 'title';
    article.content = 'content';
    // articleModel.add(article)
// */

/*//命名空间
namespace A{
    //命名空间
    interface Animal {
        name: string;
        eat():void;
    }
    export class Chicken implements Animal{
        name:string;
        eat():void {
            console.log(`${this.name} 吃粮食`);
        }
        constructor(name:string){
            this.name = name;
        }
    }
    export class Duck implements Animal{
        name:string;
        eat():void {
            console.log(`${this.name} 吃粮食`);
        }
        constructor(name:string){
            this.name = name
        }
    }
}
new A.Chicken('🐔').eat();
new A.Duck('鸭').eat();

import {B} from './modules/namespaceB'
new B.Chicken('🐔').eat();
new B.Duck('鸭').eat();
*/


//泛型接口当做泛型类型
class Mem<T,K>{
     prop:T;
     getData(arg:K):K{
        return arg;
     };
}
interface RouteComponentProps<T> {
    history: T;
    hash: T;
}
interface RouteComponentFun<T> {
    name:T;
    age:T
}

var mem = new Mem<RouteComponentProps<number>, RouteComponentFun<string>>();
mem.prop = {
    history: 123,
    hash: 456
}
console.log(mem.getData({name: 'afoew', age: 'fajeio'}));
