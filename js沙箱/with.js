// with ({ run: () => {
//     console.log('run');
// } }) {
//     run()
// }


// with(console){
//     log('with console');
// }

// var as ={
//     a:function() {
//         console.log("a");
//     }
// }
// with(as){
//     a()
// }

// function getA(a, b) {
//     with(Math){
//         return round(a + b)
//     }
// }
// console.log(getA(1, 2));


// function getAverage(min, max) {
//     console.log(min, max);
//     with (Math) {
  
//         // 这里的 min === Math.min 所以会有问题
//         //   console.log(min, max);
//         // console.log("Math =", Math.min);
//         return round((min + max) / 2);
//     }
//   }
  
// console.log(getAverage(1, 5));



var scope = {code: 'sandboxCode'}
var code = '12'
const sandboxCode = `with(scope){ console.log(code) }`

var ff =  new Function('scope',sandboxCode);
// console.log(ff);
// ff({code: 'sandboxCode'})
ff(scope)
// ff({})

// with(scope){
//     console.log('code ==', code) 
// }



