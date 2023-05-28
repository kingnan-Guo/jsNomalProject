// var plant= {
//     with: 100,
//     blood:100,
//     touch:function () {
//         this.blood -= 50
//         if(this.blood == 0){
//             console.log('end');
//         }
//     }
// }


function samllPlane() {
    this.with =  100,
    this.blood = 100,
    this.touch =function () {
        this.blood -= 50
        if(this.blood == 0){
            console.log('end');
        }
    }
}


// 工厂模式
// 起到统一管理的 方法
function planeFactory(type) {
    var newPlane = null
    switch (type) {
        case 'samll':
            newPlane = new samllPlane()
            break;
        case 'big':
            newPlane = new bigPlane()
            break;
    
        default:
            break;
    }
}

planeFactory('planeFactory')




// ========= 工厂方法模式 ==========

function planeFactory() {
    
}

// 创建对象

// 子类工厂都可以使用的 公共方法、
planeFactory.prototype.touch  = function () {

    this.blood -= 50
    if(this.blood == 0){
        this.end()
        console.log('end');
    }
}

planeFactory.prototype.end = function () {
    console.log('boomb');
}



// 给工厂加方法， 加载 prototype 通过new一个对象获取也可以，但是 不符合此 此主题
planeFactory.create = function (type) {
    if(planeFactory.prototype[type] == undefined){
        throw Error("undifend")
    }
    // 没有形成继承关系
    if(planeFactory.prototype[type].prototype.__proto__ !== planeFactory.prototype){
        planeFactory.prototype[type].prototype = new planeFactory()
    }
    var  arg = [].slice.call(arguments, 1)
    // 这里给 arg 传值不能用 .call 会改变this指向 
    // 可以用  new planeFactory.prototype[type].apply(new planeFactory.prototype[type], arg)
    // 使用es6 方法  ...args
    var newPlane = new planeFactory.prototype[type](...arg)
    return newPlane;


}

// 定义真正的子类工厂
planeFactory.prototype.samllPlane = function (x, y) {
    this.x = x
    this.y = y
    this.with =  100
    this.blood = 100

}

planeFactory.prototype.bigPlane = function (x, y) {
    this.x = x
    this.y = y
    this.with =  200
    this.blood = 200

}


planeFactory.prototype.AttackPlane = function (x, y) {
    this.x = x
    this.y = y
    this.with =  150
    this.blood = 150
    this.attack = function () {
        console.log('fliting');
    }
}




var osA = planeFactory.create("AttackPlane")
var osB = planeFactory.create("samllPlane", 10, 20)
var osC = planeFactory.create("bigPlane")


