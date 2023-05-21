// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

// 示例 1 :
// 输入: 2376
// 输出: 7326
// 解释: 交换数字2和数字7。

// 示例 2 :
// 输入: 9973
// 输出: 9973

// 解释: 不需要交换。

// 4123
// 4412
// arrb = 4421
// const test = '4412'
// const test = '441234'
let test = '4412'
test = '998969'
test = '23768'

let test2  = JSON.parse(JSON.stringify(test))

var arr = test.split("")
var arr2 = test2.split("")
var aaa = arr2.sort((a, b) => b-a)
var obj = {}
arr.forEach((items,index) => {
    obj[index] = items
})
var j = -1
var max = {
    index: -1,
    value: -1
}
var i = 0
var data 
function fn2(i) {
    if(aaa[i] <= arr[i]){
        i++
        fn2(i)
    }else {
        data = aaa[i]
    }
}
fn2(i)
for (let index = arr.length -1; index >0; index--) {
    if(arr[index] >= data){
        max.value = arr[index]
        max.index = index
        break
    }
}
let min = {
    value: -1,
    index: -1
}
for(let index = 0; index < arr.length ; index++){
    if(arr[index] < max.value){
        min.value = arr[index]
        min.index = index
        break
    }
}
obj[min.index] = max.value
obj[max.index] = min.value
var ss = []
Object.keys(obj).forEach((item) => {
    ss.push(obj[item])
})
console.log('test', test);
console.log("max ", ss.join(''));
