var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 数组
var arr = [1, 2];
var arr2 = [3, 4];
// 元组
var arr3;
arr3 = [111, 'hello'];
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var co = Color.blue;
var co2 = Color[0];
// console.log(co, co2);
var an = 10;
an = 'mm';
an = [1, 2, 3];
var list = [1, 'fajeo', true];
var list2 = [2, 'faejfo', false];
// console.log(list, list2);
// 函数  ?代表参数可选
function hell(x, y) {
    // console.log('hello')
    return 123;
}
hell(1);
// void 函数无返回值
function hello() {
    // console.log('hello')
}
hello();
//函数默认参数
function defa(x, y) {
    if (y === void 0) { y = 'def'; }
}
// defa('fae')
//函数可变参数
function cha(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(arguments);
    return x + '-' + y.join('-');
}
// console.log(cha('11', '22', '33'));
// 说明参数意义 lambda表达式
var myadd = function (n, a) {
    return a;
};
// myadd('m', 11)
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
// var m:undefined = undefined;
// var n:number = 10;
// n = m;
// console.log(n);
// 启用 --strictNullChecks
var x1; //如果一个类型可能出行 null 或 undefined， 可以用 | 来支持多种类型
x1 = 1; // 运行正确
x1 = undefined; // 运行正确
x1 = null; // 运行正确
// 断言 <类型>值  或者   值 as 类型  在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
var someValue = "this is a string";
var strLength = someValue.length; //(someValue as string).length
// console.log(strLength);
// 循环
var j;
var n = "a b c";
for (j in n) {
    // console.log(n[j])
}
for (var _i = 0, n_1 = n; _i < n_1.length; _i++) {
    j = n_1[_i];
    // console.log(j)
}
function att(na) {
    if (na && typeof na == 'string') {
    }
}
//类 Class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        Person.sta = '33';
    }
    Person.prototype.tell = function () {
        return this.name + '-' + this.age;
    };
    Person.sta = '22';
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(school, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.tell = function () {
        return this.name + '-' + this.age + '-' + this.school + '-' + Person.sta;
    };
    return Student;
}(Person));
// console.log(new Student('安庆', 'mm', 11).tell());
//类 多态:父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法'); //具体吃什么不知道，继承它的子类去实现，每个子类表现的不一样
        // console.log(`${this.name}`);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log("" + this.name + '吃粮食');
    };
    return Dog;
}(Animal));
// new Dog('dog').eat();
// 抽象类 不能实例化 子类中必须实现抽象方法
var Aa = /** @class */ (function () {
    function Aa() {
    }
    return Aa;
}());
//接口 interfaecs
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: 'hello' };
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
var myObj = { label: 'word' };
function printUsb(pu) {
    console.log(pu.name);
    console.log(pu.age);
}
var mySearch;
mySearch = function (source, subString) {
    return true;
};
mySearch('1', 'fe');
var marr;
marr = ['fe'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}()); //类引用接口
var o = new Clock(1, 2);
o.setTime(new Date());
var Programer = /** @class */ (function () {
    function Programer(name) {
        this.name = name;
    }
    Programer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web.prototype.work = function () {
        console.log(this.name + '喜欢写代码');
    };
    return Web;
}(Programer));
var c;
// console.log(c);
// console.log(<Counter>{});
//泛型，可以支持不特定的数据类型，要求传入的参数和返回的参数类型一致
//T 表示泛型，具体用什么类型是调用这个方法的时候决定的
// 泛型 泛型函数
function Hell(arg) {
    return arg;
}
// console.log(Hell<number>(123), Hell<string>('afjewofj'), Hell(111));
function Hell1(arg) {
    return arg;
}
var aa = Hell1(['a', 'b']);
// console.log(aa);
//泛型类型
function Hell2(arg) {
    return arg;
}
var bb = Hell2; //lambda表达式
function Hell3(arg) {
    return arg;
}
var cc = Hell3;
function Hell4(arg) {
    return arg;
}
var dd = Hell4;
// console.log(dd(222));
// 泛型类
var HelloNumber = /** @class */ (function () {
    function HelloNumber() {
    }
    return HelloNumber;
}());
var h = new HelloNumber();
h.Ten = 'ten';
h.add = function (arg) {
    return arg;
};
var m = /** @class */ (function () {
    function m() {
    }
    m.prototype.eat = function (par) {
        return par;
    };
    return m;
}());
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
*/
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
var Mem = /** @class */ (function () {
    function Mem() {
    }
    Mem.prototype.getData = function (arg) {
        return arg;
    };
    ;
    return Mem;
}());
var mem = new Mem();
mem.prop = {
    history: 123,
    hash: 456
};
console.log(mem.getData({ name: 'afoew', age: 'fajeio' }));
console.log(RouteComponentProps());
