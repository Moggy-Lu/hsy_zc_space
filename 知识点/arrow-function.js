

//箭头函数
let value = 2;
let double = x => 2 * x;
let treble = x => {
    return 3 * x;
}
console.log('double:', double(value))
console.log('treble:', treble(value))

//没有独立作用域
var obj = {
    commonFun: function(){
        console.log(this)
    },
    arrowFun: () => {
        console.log(this)
    }
}
obj.commonFun()     //this指向obj
obj.arrowFun()      //this指向Windows

//不能作为构造函数

let Animal = function () { 

 };
 let animal = new Animal();

 let Animal =  () => { 

};
let animal = new Animal();  //VM148:4 Uncaught TypeError: Animal is not a constructor

//没有prototype

let commFun = function() { };
let arrowFun = () => { };
console.log(commFun.prototype)
console.log(arrowFun.prototype)