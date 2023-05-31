class ProxySandbox {
    proxyWindow
    isRunning = false
    active() {
        this.isRunning = true
    }
    inactive() {
        this.isRunning = false
    }
    constructor() {
        const fakeWindow = Object.create(null)
        this.proxyWindow = new Proxy(fakeWindow, {
            set: (target, prop, value, receiver) => {
                if(this.isRunning){
                    target[prop] = value
                }
            },
            get: (target, prop, receiver) => {
                return prop in target ?target[prop]:window[prop];
​
            }
        })
    }
}
window.city="beijing"
let proxySandbox01 = new ProxySandbox()
let proxySandbox02 = new ProxySandbox()
proxySandbox01.active()
proxySandbox02.active()
proxySandbox01.proxyWindow.city = 'shanghai'
proxySandbox02.proxyWindow.city = 'chengdu'
console.log("111111",window.city)
console.log("222222",proxySandbox01.proxyWindow.city)
console.log("333333",proxySandbox01.proxyWindow.city)
proxySandbox01.inactive()
proxySandbox02.inactive()
​
console.log("111111",window.city)
console.log("222222",proxySandbox01.proxyWindow.city)
console.log("333333",proxySandbox01.proxyWindow.city)