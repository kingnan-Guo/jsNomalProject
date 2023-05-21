// 输入：cdabbacc
// 输出：4
// 说明：abba为最长的回文子串




let string = 'ababcdabcefsgg'
string = 'cdaabaacc'
// console.log(string.length);
var sl =  string.length 
var obj = {}
var maxCount = 0
for (let i = 0; i < sl; i++) {
    obj[i] ={}
    for (let j = 0; j < sl; j++) {
        var shortString = string.substring(j , i+j+1 )
        if(shortString.length >= i+1 && j+1 < sl){
            obj[i][j] = shortString
        }
    }

    for (let k = 0; k < sl; k++) {
        // console.log(obj[i][k]);
        if(obj[i][k]){
            // console.log(obj[i][k] ,'===', (obj[i][k+1]));
            if(obj[i][k+1]){
                if(obj[i][k] == obj[i][k+1].split("").reverse().join('') ){
                    if(maxCount< (obj[i][k]).length +1){
                        maxCount = (obj[i][k]).length +1
                    }
                    // console.log(obj[i][k]);
                }
            }
        }
    }
}
console.log(maxCount);

