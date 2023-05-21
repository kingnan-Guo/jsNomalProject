
var a = 'asdfas'
var b = 'werasdfaswer'

var arr = []
for (let i = 0; i < a.length; i++) {
    arr.push([])
    const ae = a[i];
    // console.log("element", element);
    for (let j = 0; j < b.length; j++) {
        const be = b[j];
        if(ae == be){
            arr[i][j] = 1
        } else{
            arr[i][j] = 0
        }
    }
}


function aaaa(arr, i, j, count) {
    var max = 0
    function addadd(arr, i, j, count) {
        // console.log(arr, i, j, count);
        i = i+1
        j = j+1
        if(i<arr.length  && j< arr[0].length ){
            if(arr[i][j]){
                count++
                // console.log('count ==',count);
                addadd(arr, i, j, count)
                // return count
            } else{
                max = count
                return count
            }
        }else{
            max = count
            return count
        }
        
    }
    addadd(arr, i, j, count)
    console.log('max ==',max);
    return max

}

// console.log('addadd ==',addadd(arr, 0, 3, 1));
var maxcount = 0
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element.length; j++) {
        // console.log(arr[i][j]);
        if(arr[i][j]){
            if(maxcount < aaaa(arr, i, j, 1)){
                maxcount = aaaa(arr, i, j, 1)
            }
            // console.log(aaaa(arr, i, j, 1));
        }
    }
}
console.log(maxcount);




// const str1= 'asdfas',str2 = 'werasdfaswer';
// let dp = [];
// for(let i=0;i<str1.length;i++){
//     dp[i] = []
//     for(let j=0;j<str2.length;j++){
//         dp[i][j] = 0;
//         if(str1[i] === str2[j]){
//             dp[i][j] = (i===0||j===0 ? 0 :dp[i-1][j-1]) + 1;
//         }
//     }
// }


// console.log(dp);
// let max = 0;
// dp.forEach(c => {
//     c.forEach(v => {
//         if(v>max) max = v;
//     })
// })
// console.log(max)