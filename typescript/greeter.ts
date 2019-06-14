

// 数组
let arr: number[] = [1,2];
let arr2: Array<number> = [3,4];

// 元组
let arr3: [number, string];
arr3 = [111, 'hello'];

// 枚举
enum Color {red, blue, green}
let co :Color = Color.blue;

function hello() : void{
    // console.log('hello')
}
hello();

let x: any = 1;    // 数字类型
x = 'I am who I am';    // 字符串类型
// console.log(x);
x = false;    // 布尔类型
// console.log(x);

// 启用 --strictNullChecks
let x1: number | null | undefined;//如果一个类型可能出行 null 或 undefined， 可以用 | 来支持多种类型
x1 = 1; // 运行正确
x1 = undefined;    // 运行正确
x1 = null;    // 运行正确

// 断言 <类型>值  或者   值 as 类型  在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
var str = 'mmm'
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2, typeof str2)

// 循环
var j:any;
var n:any = "a b c"

for(j in n) {
    console.log(n[j])
}
