function extend(toObject, formObject) {
    for (const prototype in formObject) {
        if(!formObject.hasOwnProperty(prototype)){
            continue
        }
        Object.defineProperty(toObject,prototype,Object.getOwnPropertyDescriptor(formObject, prototype))
    }
    return toObject
}


var obj = {}
obj.x = 1
obj = extend(obj, {get y(){ return 2}})
console.log(obj.y);


var obj2 = {}
Object.defineProperty(obj2, 'x', {
    value:175,
    writable:false,
    enumerable:true,
    configurable: true
})
obj = extend(obj, obj2)

console.log(obj.x);
obj.x = 90
console.log(obj.x); //writable:false,




console.log(Object.isExtensible(obj));
Object.preventExtensions(obj) //阻止添加新属性
console.log(Object.isExtensible(obj));

var obj3 = {}
console.log(Object.isSealed(obj3));
Object.seal(obj3)//阻止添加新属性， 无法删除旧属性  === configurable: false
console.log(Object.isSealed(obj3));


var obj4 = {}
console.log(Object.isFrozen(obj4));
Object.isFrozen(obj4)//阻止添加新属性。 删除旧对象， 修改属性值
console.log(Object.isFrozen(obj4));


