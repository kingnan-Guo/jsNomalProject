console.log(Array.prototype.slice.apply({0:1, 1:3, 2:6, length:4}));

console.log(Object.prototype.hasOwnProperty.call({}, 'toString'));


var c = {
    a:1,
    add(){
        this.a++
    }
}
var b = {
    a:500
}
var fn = c.add.bind(c)
fn()
console.log("fn", c.a);

var fn2 = c.add.bind(b)
fn2()
console.log("fn2", b.a);


function fn3() {
    console.log('fn 3',this.a);
}
var fun = Function.prototype.call.bind(Function.prototype.bind)

console.log('fun(fn, c)() ==', fun(fn3, c)());



console.log("max =", Math.max.apply(null, [1, 2, 3]));