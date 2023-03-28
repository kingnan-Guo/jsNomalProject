
/**
 * 
 * 
 */
// const name = new Proxy();


/**
 * 观察某个对象的所有属性
 * @param {Object} obj
 * 
 * 待优化
 * 1、深度遍历 object
 */

function observe(obj) {
    console.log("observe ==", obj);
    let functionArr = new Set();
    var object = new Proxy(obj,{
        set(target, key, value, receiver){
            console.log("new Proxy ==", target, key, value, receiver);

            target[key] = value;
            console.log("target[key] ==", target[key]);
            return Reflect.set(target, key, value,receiver);
        },
        get(target, key) {
            // console.log(" ==", target, key);
            console.log("target[key] ==", target[key]);
            functionArr.add(window.__func)
            return target[key]
        },
    })

    return object
}


function observeArr(obj) {
    for (const key in obj) {
        if (obj[key].constructor === Array ) {
            // 1、这里不能使用 var  会导致页面 展示错误
            // 2、全局变量会使 变量的
            let  internalValue = obj[key];
            console.log("internalValue == ", internalValue);
            // let functionArr = new Set();
            obj[key] = new Proxy(internalValue,{
                set(target, key, value, receiver){
                    console.log("observeArr set Proxy ==", target, key, value);
                    return Reflect.set(target, key, value, receiver);
                },
                get(target, key, receiver) {
                    // console.log("observeArr get:function = internalValue = ", internalValue );
                    console.log(" ==", target, key, receiver);
                    return Reflect.get(target, key, receiver);
                },
            })
        }
    }

    console.log("obj ===", obj);
    return obj
}



function observeDefinePropertyObj(obj) {
    for (const key in obj) {
      let internalValue = obj[key];
      let funcs = [];
      Object.defineProperty(obj, key, {
        get: function () {
          console.log("get internalValue=", internalValue);
          return internalValue;
        },
        set: function (val) {
          internalValue = val;
          console.log("set internalValue ==", internalValue);
        },
      });
    }
  }


function autoRun(fn) {
    window.__func = fn
    fn();
    window.__func = null
}
