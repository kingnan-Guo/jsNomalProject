// // IE缓存问题

// http状态码

// XMLHttp.open("get", url, true)
// XMLHttp.send()

// XMLHttp.setRequestHeader("content-type", 'application/json')

// XMLHttp.onreadyStatchange =() => {

// } 


// ajax({
//     type: "GET",
//     url: 'url',
//     setTimeout
// })


const ajax = (option) => {
    // 创建异步对象
    let XMLHttp;
    const obj2Str = data => {
        data.t = new Date().getTime()
        let res = []
        for (const key in data) {
            res.push(encodeURIComponent(key)+ '=' + encodeURIComponent(data[key]))
        }
    }
    let str = obj2Str(option.data || {})
    if (window.XMLHttpRequest) {
        XMLHttp = new XMLHttpRequest()
    } else {
        // IE6 IE7
        XMLHttp = new ActiveXObject("Micrisoft XMLHttp")
        
    }

    if (option.type.toLowerCase() == 'get') {
        XMLHttp.open(option.type, option.url + '?' + str, true)
        XMLHttp.send()
    } else {
        XMLHttp.open(option.type, option.url, true)
        XMLHttp.setRequestHeader("content-type", 'application/json')
        XMLHttp.send(str)
    }

    XMLHttp.onreadyStatchange =() => {
        if (XMLHttp.readyState == 4) {
            clearInterval(time)
            if((XMLHttp.status >=200 && XMLHttp.status< 300) || XMLHttp.status == 304){
                option.success(XMLHttp.responseText)
            } else {
                option.errot(XMLHttp.responseText)
            }
        }
    } 
}
if (option.timeOut) {
    time = setInterval(() => {
        XMLHttp.abort()
        clearInterval(time)
    }, option.timeOut);
}


