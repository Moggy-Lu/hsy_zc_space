/*
    将所需要的代码粘入Chrome浏览器中测试
    请勿直接运行
*/

//变量和常量
let r = 2;
r = 4;
console.log(r)
const pi = 3.1415926
pi = 2

//不能重复定义
var foo = 1;
var foo = 2;
console.log(foo)
let bar = 1;
let bar = 2; //不能重复定义

//块级作用域
if(true){
    var test = 1;
}
console.log(test)

if(true){
    let test = 1;
}
console.log(test)


//不进行变量提升
console.log(bar)
var bar = 1;
console.log(bar)
let bar = 1;