function observe(obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            // 1、这里不能使用 var  会导致页面 展示错误
            // 2、全局变量会使 变量的
            let  internalValue = obj[key];
            console.log("observe ==internalValue ", internalValue)
            let functionArr = new Set();
            Object.defineProperty(obj, key, {
                get:function () {
                    console.log(" get:function = internalValue = ", internalValue );
                    functionArr.add(window.__func)
                    console.log("functionArr ==", functionArr);
                    // 依赖记录 记录 哪些函数调用
                    return internalValue;
                },
                set:function (val) {
                    console.log(" set:function =", val );
                    // 派发更新 运行 执行object相关属性 被调用的 函数
                    internalValue = val
                    console.log("functionArr ==", functionArr);
                    functionArr.forEach(element => {
                        if(element){
                            element()
                        }
                    });
    
                },
            })
            // const element = obj[key];
            // console.log("observe ==element ", element)
        }
    }
}

// var ss ={
//     s:1,
//     a:2,
//     c: 3
// }

// // console.log("observe ==", observe(ss));

// var name1 = new Set([1,1,2,3,4]);
// console.log(" name ==", name1 );


function autoRun(fn) {
    window.__func = fn
    fn();
    window.__func = null
}