var data = [9, 1, 4, 2, 6, 7, 0, 3]
// data = [2, 1, 5, 3, 6, 4, 8, 9, 7]
// data = [1, 2, 8, 6, 4]


// 目标 1 2 6 7
// vue3 [ 1, 3, 4, 5 ]

function getSequence(arr) {
    var arrObj = {...arr}
    // 首先记录位置
    // console.log({...arr});

    let sequenceEndNumber = 0
    //从后往前找 比 （n-1）小的 有几个数字
    var newArr = []
    for (let i = arr.length; i > 0; i--) {
        newArr[i] = []
        // let trendsArr = arr.slice(0, i)
        // sequenceEndNumber = trendsArr[i -1]
        newArr[i].push(sequenceEndNumber)
        sequenceEndNumber =arr[i]

        // if(sequenceEndNumber > iterator){
        //     newArr[i].unshift(iterator)
        //     sequenceEndNumber = iterator
        // }


        // for (const iterator of trendsArr.reverse()) {
        //     if(sequenceEndNumber > iterator){
        //         newArr[i].unshift(iterator)
        //         sequenceEndNumber = iterator
        //     }
        // }
    }
    let longarr = []
    for (const iterator of newArr) {
        if(longarr.length <= (iterator ? iterator.length : 0) ){
            longarr = iterator || []
        } 
    }
    console.log(longarr.join(' '));

}

getSequence(data)




// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//     // Write your code here
//     var data = [];
//     while ((line = await readline())) {
//         if (data.length < 1) {
//             data.push(line);
//         } else {
//             data.push(line.split(" "));
//             var arr = data[1];
//             console.log(arr)
//             let sequenceEndNumber = 0;
//             var revArr = arr.reverse();
//             var newArr = [];
//             for (let i = 0; i < revArr.length; i++) {
//                 // const element = revArr[i];
//                 newArr[i] = [];
//                 let trendsArr = revArr.slice(i, revArr.length);
//                 sequenceEndNumber = trendsArr[trendsArr.length - 1];
//                 for (const iterator of trendsArr) {
//                     // console.log(iterator);
//                     if (sequenceEndNumber >  parseInt(iterator)) {
//                         newArr[i].unshift(parseInt(iterator));
//                         sequenceEndNumber = parseInt(iterator);
//                     }
//                 }
//             }

//             let longarr = [];
//             for (const iterator of newArr) {
//                 if (longarr.length < iterator.length) {
//                     longarr = iterator;
//                 }
//             }
//             console.log(longarr);
//         }
//     }
// })();
























// 最长递增子序列算法
// function getSequence(arr) {
//     const p = arr.slice();
//     const result = [0];
//     let i, j, u, v, c;
//     const len = arr.length;
//     for (i = 0; i < len; i++) {
//       const arrI = arr[i];
//       if (arrI !== 0) {
//         j = result[result.length - 1];
//         if (arr[j] < arrI) {
//           p[i] = j;
//           result.push(i);
//           continue;
//         }
//         u = 0;
//         v = result.length - 1;
//         while (u < v) {
//           c = (u + v) >> 1;
//           if (arr[result[c]] < arrI) {
//             u = c + 1;
//           } else {
//             v = c;
//           }
//         }
//         if (arrI < arr[result[u]]) {
//           if (u > 0) {
//             p[i] = result[u - 1];
//           }
//           result[u] = i;
//         }
//       }
//     }
//     u = result.length;
//     v = result[u - 1];
//     while (u-- > 0) {
//       result[u] = v;
//       v = p[v];
//     }
//     return result;
// }

// console.log(getSequence(data));