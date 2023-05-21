// 状态管理
const PENDING = 'pending'
const FULFILLED = 'fulfiled'
const REJECTED = 'rejected'

/**
 * 创建微队列
 * 运行一个微队列，把传递的函数放到微队列中
 * @param {function} callback 
 * 
 * MutationObserver 会把监听的返回函数放到 微队列中
 */
function runMicroTask(callback) {
    // node 环境
    if(process && process.nextTick){
        process.nextTick(callback)
    } else if(MutationObserver) {
        const p = document.createElement("p")
        const observe = new MutationObserver(callback)
        observe.observe(p, {
            childList: true
        })
        p.innerHTML = '0'
    } else {
        setTimeout(callback, 0);
    }
}


/**
 * 判断数据是否为promies
 * @param {*} obj 
 * @returns 
 */
function isPromise(obj) {
    // obj instanceof Promise A+
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
}

class myPromise{
    constructor(executor){
        this._state = PENDING
        this._value = undefined;
        this._handlers = [];//处理函数形成的队列
        // executor(this._resolve.bind(this), this._reject)
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }

    /**
     * 想处理队列中添加 有状态 的函数对象
     * @param {Function} executor 添加函数
     * @param {string} state  //该函数什么状态下执行
     * @param { function } resolve //让then函数返回的 promise 成功
     * @param { function } reject //让then函数返回的 promise 失败
     */
    _pushHandlers(executor, state, resolve, reject){
        this._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    /**
     * 根据实际情况执行队列
     * 状态改变之后调用
     * @returns 
     */
    _runHandlers(){
        // console.log("_runHandlers  this.state", this._state);
        if(this._state == PENDING){
            // 目前任务仍在挂起
            return
        }
        // console.log("this._handlers.length == start", this._handlers.length);
        // for (const handler of this._handlers) {
        //     this._runOneHander(handler)
        // }
        while (this._handlers[0]) {
            const handler = this._handlers[0]
            this._runOneHander(handler)
            // 每执行一个 就删除一个
            this._handlers.shift()
            // console.log("this._handlers.length ==", this._handlers.length);
        }

    }
    /**
     * 
     * @param {*} handler 
     */
    _runOneHander({executor, state, resolve, reject}){
        // console.log(handler);
        // if(handler.){
        // }
        // 将函数放入到微队列里执行
        runMicroTask(() => {
            if(this._state !== state){
                return
            }
            // 如果传递的是一个非函数 那么状态穿透
            if(typeof executor !== 'function'){
                // 当没有 处理函数的时候 ，如果状态是成功那么执行成功的函数，如果状态是失败处理失败的函数
                this._state == FULFILLED ? resolve(this._value) :  reject(this._value)
                return
            }
            // 最终剩下一个 正常的函数，那么开始执行
            try {
                // this._value 上一个返回的参数
                // console.log("this._value==", this._value);
                var result = executor(this._value)

                // 判断返回值是不是 promise
                if(isPromise(result)){
                    result.then(resolve, reject)
                } else {
                    resolve(result)
                }

                
            } catch (error) {
                reject(error)
            }
            // console.log("runMicroTask", this._state);
        })
    }




    /**
     * then函数的的目的是将传入的fun 放到执行队列里
     * @param { function } onFulfiled 
     * @param { function } onRejected 
     *  
     * 
     */
    then(onFulfiled, onRejected){

        return new myPromise((resolve, reject)=>{
            // 成功之后执行
            this._pushHandlers(onFulfiled, FULFILLED, resolve, reject)
            // 失败之后执行
            this._pushHandlers(onRejected, REJECTED, resolve, reject)
            // console.log("then ---");
            this._runHandlers()
        })
    }
    _changeState(newState, value){
        // 说明执行状态改变
        if(this._state !== PENDING){
            return;
        }
        this._state = newState
        this._value = value
        // 状态变更之后执行 d队列 _runHandlers
        this._runHandlers()

    }
    _resolve(data){
        this._changeState(FULFILLED, data)
        // console.log("_resolve", this);
    }
    _reject(reason){
        // this._state = REJECTED
        // this._value = reason
        this._changeState(REJECTED, reason)
        // console.log("_reject", this);
    }





    // 
    // 实现一个 resolve reject -----------------------------
    /**
     * 返回一个已完成的promise
     * 1、特殊情况  传递的 data === promise es6  return data
     * 2、传递的 data  是 promiseLike （promise A+） 返回一个新的 promise
     * @param {*} data 
     */
    static resolve(data){
        // if (data instanceof promise)
        if (data instanceof myPromise) {
            return data
        }
        // return new Promise((resolve, reject) => {})
        // 传递的 data  是 promiseLike （promise A+） 返回一个新的 promise 
        return new myPromise((resolve, reject) => {
            // 状态为 data 的状态
            if(isPromise(data)){
                data.then(resolve, reject)
            } else {
                // 返回一个已完成的promise
                resolve(data)
            }
        })

    }



    static reject(reason){
        return new myPromise((resolve, reject) => {
            reject(reason)
        })

    }

    // 实现一个 resolve reject ----------------------------- end


    /**
     * promsise all 
     * proms 可能会是一个迭代器 iterator 所以使用 for of，迭代器不能用for循环
     * @param {*} proms 是一个 迭代器 包含多个 promise ，全部成功 才是成功 ，数据位所有的 promsie 返回值
     * 
     * data is Array
     * 如果传入的值不是 promise 那么久处理为 promise.reslove
     * promise.all([pro1, pro2, pro3, new promise.reslove]).then(data=>{
     *   data:[1, 2, 3]
     * }, reason => {
     * 
     * })
     * 
     */
    static all(proms){
        return new myPromise((resolve, reject) => {
            try {
                // 接收 成功之后的 每一个 结果
                const result = []
                let count = 0
                let fulfiledCount = 0;
                for (const iterator of proms) {
                    // if (!isPromise(iterator)) {
                    //     iterator = myPromise.resolve(iterator)
                    // }
                    let i = count
                    count++
                    
                    myPromise.resolve(iterator).then((data)=> {
                        fulfiledCount++
                        count
                        console.log(i);
                        result[i] = data
                        if (fulfiledCount === count) {
                            // 当前所有执行完车
                            console.log('all done');
                            resolve(result)
                        }
                    }, reject)
                }
                if (count == 0) {
                    resolve(result)
                }
                // process.nextTick(() => {
                //     console.log(count,fulfiledCount);
                // })


            } catch (error) {
                reject(error)
            }
        }) 
    }

    /**
     * allSettled 返回的数据一定成功
     * 只要有结果就行
     * 等待所有的promise 执行完成有结果后后  返回
     * 该方法返回的promise完成
     * 并且按照 顺序返回所有的结果
     * @param {*} proms 是一个 迭代器 包含多个 promise
     * 
     */
    static allSettled(proms){
        const ps  = []
        for (const iterator of proms) {
            // 只要保证 iterator.then(data => {}, reason => {}) 不报错 那么返回一定成功
            ps.push(myPromise.resolve(iterator).then(data => ({
                status: FULFILLED,
                data

            }), reason => ({
                status: REJECTED,
                reason
            })))
        }

        return myPromise.all(ps)
    }

    /**
     * race 不管成功或者失败 第一个执行完层的 promise  就返回
     * @param {*} proms 
     */
    static race(proms){
        return new myPromise((resolve, reject) => {

            for (const iterator of proms) {
                myPromise.resolve(iterator).then(resolve, reject)
            }
        })




    }

}

const prom1 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1)
        reject(1)
    }, 1000);
})
const prom3 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})

const prom2 = new myPromise((resolve, reject) => {
    resolve(2)
})

const prom4 = 4
myPromise.race([prom1, prom2, prom3, prom4]).then(data=>{
    console.log('fulfiled', data);
}, reason => {
    console.log('race fail reason ', reason);
})
