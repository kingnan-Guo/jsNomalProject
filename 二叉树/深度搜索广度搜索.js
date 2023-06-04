

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


// console.log(endCreate(end, center));


// function Node(value) {
//     this.value = value
//     this.left = null
//     this.right = null
// }

var a =new Node('a')
var b =new Node('b')
var c =new Node('c')
var d =new Node('d')
var e =new Node('e')
var f =new Node('f')
var g =new Node('g')

var h =new Node('h')
var i =new Node('i')
var j =new Node('j')
var k =new Node('k')
var l =new Node('l')
var m =new Node('m')
var n =new Node('n')


a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
f.right = g
// console.log(a);

d.left = h
d.right = i
e.left = j
e.right = k

f.left = l
f.right = m

g.left = n

// console.log(a);

// 深度搜索
function deepSearch(tree, target) {
    let rootValue =tree ?  tree.value : null
    // console.log(rootValue, target);
    if(rootValue){
        if(rootValue === target){
            return true
        }
        let left = deepSearch(tree.left, target)
        let right = deepSearch(tree.right, target)

        return !!(left || right)
    }
}

// console.log(deepSearch(a,  'c'));


// 广度搜索
function openSearch(arr, target) {
    
    var childrArr=[]
    for (let i = 0; i < arr.length; i++) {
        const tree = arr[i];
        // console.log('tree ==', tree.value);
        if(tree){
            if(tree.value ==target){
                return true
            }
            if (tree.left ) {
                childrArr.push(tree.left)
            }
            if (tree.right) {
                childrArr.push(tree.right)
            }
        }
    }
    let  aa
    if(childrArr.length){
        aa = openSearch(childrArr, target)
    }
    return !!(aa)
}
console.log(openSearch([a],  'i'));





