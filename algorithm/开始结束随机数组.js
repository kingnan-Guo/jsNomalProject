// 输入： getUniqueNums(2,10,4)
// 输出： [4,6,2,8]

// getUniqueNums(2, 50,4)

// 随机数组
function getUniqueNums(start, end, n) {
    var arr = []
    for (let index = start; index <= end; index++) {
        arr.push(index)
    }
    // console.log(Math.round(Math.random() * (end - start)));
    var out = []
    for (let j = 0; j < n; j++) {
        var ri = Math.round(Math.random() * (end - start - j))
        
        out.push(arr[ri])
        // arr = arr.splice(ri, ri+1)
        arr.splice(ri, 1)
        // console.log(arr);
        
    }

    return out

}

console.log(getUniqueNums(2,12,4));