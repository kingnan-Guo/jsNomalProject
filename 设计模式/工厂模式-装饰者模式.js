



// ========= 工厂方法模式 ==========

function planeFactory() {
    // 这个是公共的
    this.decorate_list = []
}

// 集合所有装饰方法
planeFactory.prototype.decorators = {
    eatOneLife: function (obj) {
        obj.blood += 100
    },
    eatTwoLife: function (obj) {
        
    },
    eatShrinkLife:function (obj) {
        obj.blood -=50
    }
}
// 装饰
// 搜集对某度喜庆的装饰描述
planeFactory.prototype.decorate = function (decorator) {
    // 如果想每一个对象使用私有的 那么 会使用自己的
    // this.decorate_list_self = []
    this.decorate_list.push(decorator)
}

// update更新装饰方法，让装饰方法作用在该对象上
planeFactory.prototype.update = function () {
    for (let i = 0; i < this.decorate_list.length; i++) {
        this.decorators[this.decorate_list[i]]  &&    this.decorators[this.decorate_list[i]](this)     
    }
}

// 清空资源池
planeFactory.prototype.empty = function () {
    this.decorate_list= []
}

// 删除
planeFactory.prototype.remove = function () {
    this.decorate_list = this.decorate_list.filter(function (eleType) {
        return !(eleType == type)
    })
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




var osA = planeFactory.create("AttackPlane", 20, 30)
var osB = planeFactory.create("samllPlane", 10, 20)
var osC = planeFactory.create("bigPlane", 10, 20)


// 装饰者模式
osA.decorate('eatOneLife');
osA.decorate('eatShrinkLife')
osA.remove('eatOneLife')
// osA.update()

