// Array.prototype.quickSort = function () { 
//     const rec = (arr) => { 
//        // 预防数组是空的或者只有一个元素, 当所有元素都大于等于基准值就会产生空的数组
//        if(arr.length === 1 || arr.length === 0) { return arr; }
//        const left = [];
//        const right = [];
//        //以第一个元素作为基准值   
//        const mid = arr[0];
//        //小于基准值的放左边，大于基准值的放右边
//        for(let i = 1; i < arr.length; ++i) { 
//            if(arr[i] < mid) { 
//                left.push(arr[i]);
//            } else { 
//                right.push(arr[i]);
//            }
//        }
//        console.log(left);
//        console.log(right);
//         //递归调用，最后放回数组    
//        return [...rec(left),mid,...rec(right)];
//     };
    
//     const res = rec(this);
    
//     res.forEach((n,i) => { this[i] = n; })
// }

// const arr = [2,3,4,5,3,1];
// arr.quickSort();
// console.log(arr);
