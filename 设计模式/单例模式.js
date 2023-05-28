// 单例模式
// 保证一个类仅有一个实例，并提供一个方法访问它的全局访问点



// 一、此函数不符合开闭原则 ，整个函数暴露在 全局 ，可以随时被修改

function Test(name) {
    console.log('Test.instance =', Test.instance);
    if (typeof Test.instance == 'object') {
        return Test.instance
    }
    this.name = name;
    // console.log(this);
    Test.instance = this
}

// 在new 的过程中 
// 1、var this = Object.create(Test.prototype)
// 2\ return this
// 每一次new 也会执行 一次函数
var a = new Test('a')
var b = new Test('b')
console.log(b);
console.log(a == b);



// 二、单例模式额设计思想是 第一创建一个对象 把对象保存起来，第二次创建的直接引用
// 闭包
// function Test2(name) {
//     var instance = this; //AO
//     this.name = name;
//     // console.log('instance ==', instance, 'getName ==', getName);
//     // Test2 是 GO 是全局的值
//     Test2 = function() {
//         return instance
//     }
//     function getName() {
//         console.log("this.name =", this.name);
//     }
//     // console.log('instance ==', instance, 'Test2 ==', Test2);
//     // Test2()
// }
// var a2 = new Test2('a2')
// Test2.prototype.targe = '123213'
// var b2 = new Test2('b2')
// console.dir(b2);
// console.log(a2 == b2);



// 三、 圣杯模式 == 永生 glabo 闭包， 
var Test3 = (function () {
    var instance;
    return function (name) {
        if(typeof instance === 'object'){
            return instance
        }
        instance = this
        this.name = name
    } 
}())

var a3 = new Test3('a2')
Test3.prototype.targe = '123213'
var b3 = new Test3('b2')
console.log(b3, 'targe ==', b3.targe);



// 把 不是单例的 一个构造函数变成 单例

// function createA(params) {
//     this.name = params
//     console.log("createA name =", this.name);
// }


function createA(params) {
    this.params = params
    console.log('this.params =', this.params);
    return this.params
}


/**
 * 将 createA 变成单例模式
 * @param {*} fn 
 * @returns newfun
 */
var getSingle = function (fn) {
    var result;
    return function () {
        // console.log('result =', result);
        if (!result) {
            result = fn.apply(this, arguments)
        }
        // console.log('arguments =', arguments);
        // result = fn.apply(this, arguments)
        return result
    }
}
// function B() {
//     var ccc = new createA('params' + new Date().valueOf())
//     console.log('ccc =', ccc);
// }
// B()
// setTimeout(() => {
//     B()
// }, 10);
var sigA = getSingle(createA)
// console.log('sigA =', sigA);
sigA('params' + new Date().valueOf())
setTimeout(() => {
    sigA('params' + new Date().valueOf())
}, 100);




