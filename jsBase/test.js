// var name = 'asdas';
// (function () {
//     console.log(typeof name === undefined);
//     console.log(name);
// })()

const { log } = require("console");

// var ass = 'sss';
// console.log("vas =", (ass ==='sss') ? 'a': 'b')


// function foo(){
//     console.log(this);
// }
// foo()

// var str = "A";
// var code = str.charCodeAt().toString(2);
// console.log(code);
// var str2 = String.fromCharCode(code);
// console.log(str2);

// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here



//     let line
//     let arr = [];
//     while(line = await readline()){
//         arr.push(line);
//         if(arr.length == 2){
//             let arr1 = arr[0].split('');
//             let arr2 = arr[1].split('');
//             let shortArr = arr1.length > arr2.length ? arr2 : arr1
//             let longArr = arr1.length > arr2.length ? arr1 : arr2
//             let maxStr;
//             for(let i = 0;i<longArr.length;i++){
//                 for(let j = shortArr.length - i;j > 0;j--){
//                     let tempStr = shortArr.join('').substr(i,j);
//                     if(shortArr.join('').includes(tempStr) && longArr.join('').includes(tempStr)){
//                         if(!maxStr || shortArr.join('').substr(i,j).length > maxStr.length){
//                             maxStr = shortArr.join('').substr(i,j);
//                         }
//                     }
                     
//                 }
//             }
//                 console.log(maxStr)
//                  arr = []
//         }
      
//     }


// }()


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let result = [];
rl.on("line", function (line) {
  const tokens = line.split(" ");
  result.push(tokens);
});

rl.on("close", () => {
  result.shift();
  let sort = result.shift()[0];
  let sortArr = Boolean(Number(sort)) ? result.sort((x, y) => x[1] - y[1]) :result.sort((x, y) => y[1] - x[1]);
  sortArr.forEach(item=>{
      let [key,value] = item;
      console.log(key,value)
  })
});


const foo = function(i){ 
    var a = 'h'
    var b= function p(){}
    function c(){}
}
foo(10)


/**
 * vo 
 * 确定函数形参 （并赋值）
 * 函数环境会出实话创建 arg 对象
 * 确定普通字面变量形式的函数声明 （并赋值）
 * 变量声明 函数表达式声明 （未赋值）
 */
fooExecutionContext ={
    vo:{
        i:10,
        argumments: {0:10, length: 1},
        c: 指向函数,
        a: undefined,
        b: undefined,
    },
    this,
    scope
}
