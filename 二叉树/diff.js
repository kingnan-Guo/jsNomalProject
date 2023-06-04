
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
c.right = g


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
c2.right = g2
// f2.right = g2



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

/**
 * 新增 修改 删除
 * {type: "add", origin: null, now: c2}
 * {type: "edit", origin: c1, now: c2}
 * {type: "del", origin: c2, now: null}
 * 
 */


var diffList = []


function diffTree(root1, root2, diffList) {
    if(root1 === root2){
        return diffList
    }
    // 新增
    if(root1 == null &&root2 !== null){
        diffList.push({type: "add", origin: null, now: root2})
    } else if(root1 !== null &&root2 == null){
        diffList.push({type: "del", origin: root1, now: null})
    }  else if(root1.value !== root2.value){
        diffList.push({type: "edit", origin: root1, now: root2})

        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)

    } else {
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    }
    
}

diffTree(a, a2, diffList)

console.log("diffList ==", diffList);
