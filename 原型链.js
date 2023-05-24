var obj = [1, 2, 3]

// 这里的toString 是  Array.prototype 内的 toString  不是 Object.toString ; Array.prototype 内 还包含 push 
console.log(obj.toString());
console.log(Object.prototype.toString.call(obj));


var arr = []
console.log(arr instanceof Array);


var arr2 = {
    0:1,
    1:2,
    length:2
}

console.log(arr2 instanceof Array);
console.log('Array.prototype.slice(arr2) ==', Array.prototype.slice(arr2));

// getPrototypeOf 挂在到 Object Fn 上
console.log("Object.getPrototypeOf(arr) 返回对象的 隐式原型", Object.getPrototypeOf(arr));



