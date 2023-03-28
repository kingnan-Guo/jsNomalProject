var user = {
    name: '袁进',
    birth: '2002-5-7',
    arr:[1, 2, 3],
    objData:{
      info: 'one'
    }
  };
  

// -------
user =  observeArr(user); // 观察 使用   user.arr[0] 进入get function


// ------- 
user =  observe(user); // 观察


// --------
// observeDefinePropertyObj(user); // 观察
// console.log("user ==", user);
  
  // 显示姓氏
  function showFirstName() {
    // document.querySelector('#firstName').textContent = '姓：' + user.name;
  }
  
  // 显示名字
  // function showLastName() {
  //   document.querySelector('#lastName').textContent = '名：' + user.name.slice(1);
  // }

  // autoRun(showFirstName);
  // autoRun(showLastName);
  // autoRun(showAge);
showFirstName();
// showLastName();
// showAge();



// let test = {
//   name: "小明"
// };
// test = new Proxy(test, {
//   get(target, key) {
//     console.log('获取了getter属性');
//     return target[key];
//   }
// });
// console.log(test.name);


