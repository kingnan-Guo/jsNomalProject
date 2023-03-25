function deepClone(obj) {
    return new Promise((resolve, reject) => {
        const {port1, port2} = new MessageChannel();
        port1.postMessage(obj)
        port1.onmessage = (msg) => {
            console.log("msg ==", msg);
            resolve(msg)
        }
    })
}

// const {port1, port2} = new MessageChannel();
// port1.postMessage(obj)
// port1.onmessage = (msg) => {
//     console.log("msg ==", msg);
// }