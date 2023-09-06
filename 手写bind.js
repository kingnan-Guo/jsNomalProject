
Function.prototype.binApply = function (context, arr) {
    
    context = context || window;
    context.fn = this;
    let result = context.fn(...arr);
    delete context.fn;
    return result;
    
}


// sun.binBind = function (context, ...args) {
//     context = context || window;
//     context.fn = this;
//     let result = context.fn(...args);
//     delete context.fn;
//     return result;

// }

// sun.binApply = function (context, arr)
// {
//     context = context || window;
//     context.fn = this;
//     let result = context.fn(...arr);
//     delete context.fn;
//     return result;

// }
Function.prototype.binBind = function (context, ...args) {
    context.Fn = this
    console.log("binBind == context ==", context);
    console.log("binBind == args ==", args);
    console.log("binBind == this ==", this);
    
    return function Fn(...args2) {
        console.log("binBind Fn ==", args2);
        console.log("binBind Fn this ==", this);
        const result = context.Fn(...[...args, ...args2])
        // console.log("result =", result);
        delete context.Fn
        return result;

    }
}



function sum(num1, num2) {
    console.log("sum ==", num1, num2, this);
}

// var obj = {
//     king: '123',
//     fn:sum1
// }

// console.log("obj ==", obj);


sum(3, 4)


const fn = sum.bind({name: 'bind'}, 1)
fn(2)


const fn2 = sum.binBind({name: 'bin'}, 1)
fn2(3)

// var obj = {
//     king: '123',
//     fn:sum
// }