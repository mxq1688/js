

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


// https://www.bilibili.com/video/av43860736/?p=25
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

    //接口-class类型
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
    // console.log(s.color);
    //接口-混合类型
    interface Counter {
        interval:number;
        reset():void;
        (start:number):string;
    }
    var c:Counter;
    // console.log(c);
    // console.log(<Counter>{});


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

    // 接口-泛型1
    interface Intel {
        <T>(arg:T):T;
    }
    function Hell3<T>(arg:T):T {
        return arg;
    }
    var cc:Intel = Hell3;
    // console.log(cc, cc<string>('fae'));

    // 接口-泛型2
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


//modules











