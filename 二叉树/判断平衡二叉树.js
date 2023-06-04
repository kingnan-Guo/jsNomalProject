// var arr = []
// for (let i = 0; i < 1000; i++) {
//     // const element = array[i];
//     arr[i] = Math.round(Math.random() * 1000)
    
// }

// function Node(value) {
//     this.value = value
//     this.left = null
//     this.right = null
// }

// function addNode(root, number) {
//     if (root == null) {
//         return
//     }
//     if (root.value == number) {
//         return
//     }
//     if(root.value < number){
//         if(root.right == null){
//             root.right =new Node(number)
//         } else {
//             addNode(root.right, number)
//         }
//     } else {
//         if(root.left == null){
//             root.left =new Node(number)
//         } else {
//             addNode(root.left, number)
//         }
//     }
// }

//  function buildSearchTree(arr) {
//     if (arr == null || arr.length == 0) {
//         return null
//     }
//     var root = new Node(arr[0]) 
//     for (let i = 1; i < arr.length; i++) {
//         addNode(root, arr[i])
//     }
//     return root
// }

// var rootTree = buildSearchTree(arr)

// var num2 = 0
// function searchTree(rootTree, target) {
//     num2 ++
//     if(rootTree ==  null)  return false;
//     if(rootTree.value ==  target)  return true;
//     if(rootTree.value >  target){
//         return  searchTree(rootTree.left, target)
//     } else {
//         return  searchTree(rootTree.right, target)
//     }
    
// }
// console.log(searchTree(rootTree, 100), num2);





function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


var a =new Node('a')
var b =new Node('b')
var c =new Node('c')
var d =new Node('d')
var e =new Node('e')
var f =new Node('f')
var g =new Node('g')

var h =new Node('h')
var j =new Node('j')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g


d.right = h
// e.right = j
h.right = j


// console.log(a);



function getDeep(root) {
    // console.log("getDeep =root", root);
    if (root == null) {
        return 0
    }
    var leftDep = getDeep(root.left)
    var rightDep = getDeep(root.right)
    // console.log('rightDep =', rightDep, 'leftDep =', leftDep);
    return Math.max(leftDep, rightDep) + 1
}


function isBalance(root) {
    if (root == null) return true;
    // console.log('root.value ==',root.value);
    var leftDep = getDeep(root.left)
    var rightDep = getDeep(root.right)
    // console.log( 'leftDep =', leftDep, 'rightDep =', rightDep);
    if (Math.abs(leftDep - rightDep) > 1) {
        return false
    } else {
        return isBalance(root.left) && isBalance(root.right)
    }
    
}

console.log('getDeep =', getDeep(a));
console.log("isBalance", isBalance(a));