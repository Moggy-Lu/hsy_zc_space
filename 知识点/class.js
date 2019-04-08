

//class constuctor

class Animal {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}
let animal = new Animal('lushan')
console.log(animal.getName())

//类的继承
class Animal {
    constructor(){
        this.name = 'animal'
    }
    getName(){
        return this.name
    }
}
class Cat extends Animal{
    constructor(){
        super()
        this.name = 'cat'
    }
}
let animal = new Animal()
let cat = new Cat()
console.log(cat.getName())
console.log(animal.getName())

//对象的新特性

//旧
var name = 'cat'
    age = 18
var obj = {
    name: name,
    age = age,
    getName: function () { 
        return this.name
     },
     getAge: function () { 
         return this.age
      }
}
//新
let name = 'cat'
    age = 18
let obj = {
    //变量名可以直接用做对象的属性名称
    name,
    age,
    //对象里的方法可以简写
    getName: function () {  
        return this.name
    },
    //表达式作为方法名或属性名
    ['get' + 'Age'] () { 
        return this.age
     }
}

//Object的扩展
//返回对象的属性数组
Object.keys(obj)    //["name", "age", "getName", "getAge"]
//合并对象
Object.assign({a:1}, {b:2})     //{a: 1, b: 2}
Object.assign({a:1}, {a:2, b:2})     //{a: 2, b: 2} 后面覆盖前面
