// 在属性描述符中 配置 添加监听  get set 报错
var  obj2 = {}
var internature = undefined
Object.defineProperty(obj2, 'a', {
    // value: 10,
    // writable: false,
    // 
    get: function () {
        console.log("get: function ");
        if (condition) {
            
        }
        return '11'
    },// 读取器 getter
    set: function (params) {
        console.log("set: function ");
        throw new Error(
            "error unable to  set data"
        ) 
        // return 'pp'
    },// 设置器 setter
})
obj2.a = 22
console.log(obj2.a);