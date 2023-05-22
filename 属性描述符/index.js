// get set 与 value  writable 互斥 不能同时设置

console.log(Object.prototype.__proto_ == null);


var obj = Object.create(Object.prototype, {
    _x:{
        value:1,
        writable:true,
    },
    x:{
        get:function() {
            return this._x;
        },
        set:function (value) {
            if (typeof value !== 'number') {
                throw new Error('input number')
            }
            this.__x = value
        }
    }
})

var des = Object.getOwnPropertyDescriptor(obj, 'x')
des.set= function (value) {
    if (typeof value !== 'number' && isNaN(value * 1)) {
        throw new Error('input number')
    }
    this.__x = value
}
console.log(obj.x);
console.log(des);
 Object.defineProperty(obj, "x", des)
// obj.x = 2
console.log(obj);

// var obj2 = Object.create({});
// obj2 = Object.defineProperty(obj2, "foo", {value: "bar"}); 
// console.log(obj2);