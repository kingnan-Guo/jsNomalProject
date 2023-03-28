// 乱数假文

async function getData(params) {
    const resp = await fetch("url")
    // fetch 会提钱收到 响应头  然后再接受到响应体,
    // 响应头 返回的时候 有可能数据还未 发送完成
    const header = await resp.headers()
    // 响应体可能 
    const body = await resp.json()
    
}