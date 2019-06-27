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
// https://www.bilibili.com/video/av43860736/?p=25
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
var s = {}; // 使用接口
s.color = 'red';
var c;
// console.log(c);
// console.log(<Counter>{});
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
// console.log(h.Ten, h.add, h.add('111'));
//modules
var jkxyModule = function (v) {

    return {
        add:function (t) {
            if(t>12){
                console.log('year')
            }else{
                console.log('month')
            }
        }
    }
}

console.log(jkxyModule(1).add(1));

var jkxy = new jkxyModule(1);
console.log(jkxy);
