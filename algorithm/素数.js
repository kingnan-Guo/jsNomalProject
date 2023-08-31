// let number = 4
// // let arr = [2, 5, 6, 13]
// let arr = [4, 6, 5, 11]

let number = 6
// let arr = [2, 5, 6, 13]
let arr = [4, 6, 5, 11, 7, 9]



// 找到每一个素数
var sushu = {}
for (let index = 0; index < arr.length; index++) {
    const element0 = arr[index];
    sushu[index] = []
    // let isAddIndex = []
    

    // for (let j = 0; j < arr.length; j++) {
    //     const element1 = arr[j];
    //     // console.log(element0 +'+'+ element1 + '=' + (element0 + element1));
    //     if(index !== j && isAddIndex.indexOf(j) < 0 && isAddIndex.indexOf(index) < 0){
    //         isAddIndex.push(index)
    //         isAddIndex.push(j)
    //         console.log("isAddIndex ==", isAddIndex);
    //         console.log(element0 +'+'+ element1 + '=' + (element0 + element1));
    //         // sushu[index].push((element0 + element1))
    //     }
    // }
    
}
console.log("sushu =", sushu);
var sushuNumberMax = 0
for (const key in sushu) {
    var sushuNumber = 0
    const element = sushu[key];
    for (let k = 0; k < element.length; k++) {
        if(isSu(element[k])){
            sushuNumber++
        }
    }
    if(sushuNumberMax < sushuNumber){
        sushuNumberMax= sushuNumber
    }
}



function isSu(number) {
    var zeroNUmber = 0
    for (let index = 1; index < number; index++) {
        console.log('number % index =', number % index);
        if(!(number % index)){
            zeroNUmber++
        }
    }
    // console.log('zeroNUmber ==', zeroNUmber);
    if(zeroNUmber>1){
        return false
    }
    return true
}


console.log(sushuNumberMax);


