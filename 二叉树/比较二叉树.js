
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


a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
f.right = g


var a2 =new Node('a')
var b2 =new Node('b')
var c2 =new Node('c')
var d2 =new Node('d')
var e2 =new Node('e')
var f2 =new Node('f')
var g2 =new Node('g')

a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.left = f2
f2.right = g2




function compareTree(root1, root2) {
    // console.log(root1, root2);
    if(root1 == root2){
        return  true
    }
    if(root1 == null && root2 !== null || root1 !== null && root2 == null){
        return false
    }
    if(root1.value !== root2.value){
        return false
    }
    let leftBool = compareTree(root1.left, root2.left)
    let rightBool = compareTree(root1.right, root2.right)
    return leftBool && rightBool
}

console.log(compareTree(a, a2));


var a3 =new Node('a')
var b3 =new Node('b')
var c3 =new Node('c')
var d3 =new Node('d')
var e3 =new Node('e')
var f3 =new Node('f')
var g3 =new Node('g')

a3.left = c3
a3.right = b3
b3.left =   d3
b3.right = e3
c3.left =  f3
f3.right =  g3

function compareTree2(root1, root2) {
    if(root1 == root2){
        return  true
    }
    if(root1 == null && root2 !== null || root1 !== null && root2 == null){
        return false
    }
    if(root1.value !== root2.value){
        return false
    }

    
    return compareTree2(root1.left, root2.left) && compareTree2(root1.right, root2.right) || compareTree2(root1.left, root2.right) && compareTree2(root1.right, root2.left)

}


console.log('compareTree2 ==', compareTree2(a, a3));