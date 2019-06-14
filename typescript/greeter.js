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
function hello() {
    // console.log('hello')
}
hello();
var x = 1; // 数字类型
x = 'I am who I am'; // 字符串类型
// console.log(x);
x = false; // 布尔类型
// console.log(x);
// 启用 --strictNullChecks
var x1; //如果一个类型可能出行 null 或 undefined， 可以用 | 来支持多种类型
x1 = 1; // 运行正确
x1 = undefined; // 运行正确
x1 = null; // 运行正确
// 断言 <类型>值  或者   值 as 类型  在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
var str = 'mmm';
var str2 = str; //str、str2 是 string 类型
console.log(str2, typeof str2);
// 循环
var j;
var n = [1,2,3];
for (j in n) {
    console.log(j, n[j]);
}
