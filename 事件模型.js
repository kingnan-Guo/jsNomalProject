// btn.addEventListener("click", fn1)
// btn.removeEventListener("click", fn1) 移除事件只能移除 具名函数 ，不能移除匿名函数

// ---
// IE attachEvent detachEvent

// attachEvent("click", fn)
// detachEvent 只支持冒泡事件




if (typeof btn.addEventListener ===  'function') {
    
    btn.addEventListener("click", fn)
} else if(typeof btn.attachEvent ===  'function'){
    btn.attachEvent("click", fn)
} else {
    btn.onClick = fn
}





var EventUtils = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if(element.attachEvent){
            element.attachEvent(`on${type}`, handler)
        } else {
            element[`on${type}`] = handler
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if(element.attachEvent){
            element.attachEvent(`on${type}`, handler)
        } else {
            element[`on${type}`] = handler
        }
    }
}




// -----
// postCss 解决css 兼容性问题，使用js 转换css； autoprefix