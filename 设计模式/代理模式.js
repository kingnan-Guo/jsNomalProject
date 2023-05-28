// 代理模式
// 为一个对象提供一种代理 以控制对这个对象的访问

var np = {
    sendMessage:function (target) {
        let message = 'messageA'
        target.receiveMessage(message)
    }
}


let rs = {
    state: null,
    receiveMessage:function (params) {
        var data = this.state ? params : 0
        console.log('data =', data);
    },
    changeState:function () {
        this.state  = Math.random() > 0.5 ;
        // console.log('this.state =', this.state);
    },
    createState:function () {
        var _this = this
        setInterval(() => {
            _this.changeState()
        }, 500)
        // _this.changeState()
    }
}


// rs.createState()
// np.sendMessage(rs)

var cProxy = {
    ProxyMessage: function (target) {
        this.listenState(target, () => {
            np.sendMessage(target)
        })
        
    },
    listenState: function (target, cb) {
        setInterval(() => {
            // _this.changeState()
            if (target.state) {
                cb()
            }
        }, 400)
    }

}


rs.createState()
cProxy.ProxyMessage(rs)
// np.sendMessage(rs)
// rs.createState()
// np.sendMessage(rs)




// =================================================


var myImage = function () {
    var oImg = new Image()
    this.setSrc = function (src) {
        oImg.src = src
    }
    console.log(oImg);
}


var  oMyImg = new myImage()
oMyImg.setSrc = 'asdsad'


var proxImg = (function (params) {
    var  oMyImg = new myImage('dome')
    var oNewImg = new Image()
    oNewImg.onload = function () {
        console.log('success');
        oMyImg.setSrc(oMyImg.src)
    }
    return function (src) {
        oMyImg.setSrc(src)  
    }
})()


proxImg("new.png")


