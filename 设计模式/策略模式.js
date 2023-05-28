
function Validator() {
    this.cache = []
}
// var Validator = new Validator()
Validator.prototype.strategies = {
    isNonEmpty:function (value, errorMsg) {
        console.log("isNonEmpty ==", value);
        if (value) {
            return errorMsg
        }
        return true
    },
    maxLength:function (value,  errorMsg, length) {
        console.log("maxLength ==", value.length > length);
        if (value.length> length) {
            return errorMsg
        }
        return true
    },
    minLength:function (value, length) {
        
    },
}


Validator.prototype.add = function (dom, showDom, strategyArr) {
    var that = this
    // console.log("that ==", that);
    strategyArr.forEach((element, index) => {
        that.cache.push(function() {
            var arr = element.strategy.split(':')
            var type = arr.shift()
            // console.log("arr =", arr);
            // console.log("element", element);
            return that.strategies[type].apply(that, [dom.value, element.errorMsg, arr[0]])
        })
        // console.log("that.cache =", that.cache);
    });
}

Validator.prototype.start = function (params) {
    // return true
    // console.log("that.cache =",this.cache);
    var flag = true
    this.cache.forEach((element, index) => {
        console.log("element =", (element)());
        if(!(element)()){
            flag =  (element)()
        }
    })
    return flag
} 
Validator.prototype.extend = function (param) {
    console.log("param ==", param, 'Object.keys(param) =', Object.keys(param));
    // Validator.prototype.strategies[]

    Object.keys(param).forEach((element, index) => {
        // console.log("Validator.prototype.strategies ==", Validator.strategies);
        Validator.strategies[element] = param[element]
        // console.log("param[element] ==", param[element]);
    })
    
}


// add
// (dom, showDom, [{strategy: 'isNonEmpty', errorMsg: '不能为空'}， {strategy: 'maxLength:5', errorMsg: '长度太长'}])
// start 开始校验并返回结果
// extend 可以扩展 算法 { isMail: function(){} }

// Validator.start()

var Validator = new Validator()


Validator.extend({
    isEmail:function (value,  errorMsg) {
        if (value.indexOf('@') < 0) {
            return errorMsg
        }
        return true
    }
})

var ProxyRequest = (function () {
    Validator.add(
        {value: '1234'}, 
        {}, 
        [
            {strategy: 'isNonEmpty', errorMsg: '不能为空'}, 
            {strategy: 'maxLength:5', errorMsg: '长度太长'},
            {strategy: 'isEmail', errorMsg: '是否为 邮件'},
        ]
    )
    return function () {
        if (Validator.start() == true) {
            console.log("Validator.start() == true");
        }
    }
})()


ProxyRequest()