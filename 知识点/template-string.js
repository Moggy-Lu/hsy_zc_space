/*
ES6模版字符串
*/

//基本用法
let str = `
    <div>
        <h1 class = "title">ES6的模版字符串</h1>
    </div>
`;
document.querySelector('body').innerHTML = str;

//嵌套变量
let value = '嵌套变量'
let str = `
    <div>
        <h1 class = "title">${value}</h1>
    </div>
`;
document.querySelector('body').innerHTML = str;

//嵌套函数的用法
let arrowFun = () => {
    return '嵌套函数'
}
let str = `
    <div>
        <h1 class = "title">${arrowFun()}</h1>
    </div>
`;
document.querySelector('body').innerHTML = str;

//循环嵌套
let list = ['one', 'two', 'three']
let str = `
    <ul>
        ${
            list.map(item => `<li>${item}</li>`).join('')
        }
    </ul>
`;
document.querySelector('body').innerHTML = str;
