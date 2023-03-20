var  obj = {
    a: 1,
    b: 2
}

class UIS{
    constructor(g){
        // 深拷贝
        g = {...g}
        // 会把原始的对象冻结
        Object.freeze(g)
        // 设置属性描述符
        Object.defineProperty(this, 'data', {
            // value: g,
            // writable: false, // 是否可以修改
            // enumerable: false, //是否可以遍历
            // configerable: false, // 属性描述符 是否可以修改
            
            get: function () {
                console.log("get: function ");
                return g
            },// 读取器 getter
            set: function (params) {
                console.log("set: function ");
                throw new Error(
                    "error unable to  set data"
                ) 
            },// 设置器 setter
        })

        var internalChooseValue = 0;
        Object.defineProperty(this, 'choose', {
            // enumerable: false, //是否可以遍历
            // configerable: false, // 属性描述符 是否可以修改
            get: function (value) {
                console.log("get: function ");
                // 
                console.log("可以获取到 data", this.data);
                return internalChooseValue
            },// 读取器 getter
            set: function (value) {
                if(typeof value !== "number"){
                    throw new Error(
                        "error mast  be  number"
                    ) 
                }
                internalChooseValue = params
            },// 设置器 setter
        })
        // 密封  不能添加 属性  q t
        Object.seal(this)
    }
}
// 冻结原型  防止原型 赋值
Object.freeze(UIS.property)



//属性描述符
// console.log(" ==", Object.getOwnPropertyDescriptor(obj, 'a'));

var a = new UIS(obj)

// a.data = 66

console.log("a ==", a.choose);



