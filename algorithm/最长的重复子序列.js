let string = 'ababcdabcefsgg'
// console.log(string.length);
var sss =  string.length 
var obj = {}
var maxObj = {}
for (let i = 0; i < sss; i++) {
    obj[i] ={}
    for (let j = 0; j < sss; j++) {
        var shortString = string.substring(j , i+j+1 )
        if(shortString.length >= i+1 && j+1 < sss){
            // console.log(shortString);
            if(obj[i][shortString] >0){
                obj[i][shortString] = obj[i][shortString]+1
                maxObj[shortString] = obj[i][shortString]
            }else{
                obj[i][shortString] = 1
            }
        }
    }
}
// console.log(maxObj);
var longString = ''
Object.keys(maxObj).forEach(item => {
    if(item.length > longString.length){
        longString = item
    }
})
console.log(longString.length);
