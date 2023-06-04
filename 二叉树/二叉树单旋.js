


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


var node1 =new Node('a')
var node2 =new Node('b')
var node3 =new Node('c')
var node4 =new Node('d')
var node5 =new Node('e')
var node6 =new Node('f')
var node7 =new Node('g')



// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.left = f
// c.right = g


// d.right = h
// // e.right = j
// h.right = j





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

// console.log('getDeep =', getDeep(a));
// console.log("isBalance", isBalance(a));







node2.right = node5
node5.left = node3
node5.right = node6



/**
 * 
 * 左单旋
 * 旋转节点  当前不平衡的节点
 * 新根 右子树的根节点
 * 变化分支 旋转节点右子树的  左子树
 * 不变分支 旋转节点的 右子树的 右子树
 * 新根的 左子树 为 旋转节点
 * 
 */
function leftRotate(root) {
    var newRoot = root.right
    var changeTree = root.right.left
    root.right = changeTree
    newRoot.left = root
    return newRoot
}


/**
 * 
 * 右单旋
 * 旋转节点  当前不平衡的节点
 * 新根 左子树的根节点
 * 变化分支 旋转节点 左子树的  右子树
 * 不变分支 旋转节点的 右子树的 右子树
 * 新根的  右子树 为 旋转节点
 */

function rightRotate(root) {
    var newRoot = root.left
    var changeTree = root.left.right
    root.left = changeTree
    newRoot.right = root
    return newRoot
}

function change(root) {
    if(isBalance(root)){
        return root
    }
    if(root.left !== null){
        root.left = change(root.left)
    }
    if(root.right !== null){
        root.right = change(root.right)
    }
    var leftDep = getDeep(root.left)
    var rightDep = getDeep(root.right)
    
    if(Math.abs(leftDep - rightDep) < 2){
        console.log('root =====', root,"leftDep =", leftDep, "rightDep =",rightDep);
        return root
    } 
    // 左边深 ， 右单旋
    else if(leftDep > rightDep ){
        // 根节点会变化
        return rightRotate(root)
    } 
    // 右边深， 左单旋
    else{
        // 根节点会变化
        return leftRotate(root)
    }
}


var newRoot= change(node2)
console.log("newRoot =", newRoot);
console.log("isBalance(root) =", isBalance(newRoot));
console.log("==========================");
// -------------------

var a =new Node('a')
var b =new Node('b')
var c =new Node('c')
var d =new Node('d')
var e =new Node('e')
var f =new Node('f')
var g =new Node('g')
var h =new Node('h')
b.left = d
b.right = e
e.right = f
f.right = g
// g.right = h


// console.log("getDeep(e) ==", getDeep(e));
// console.log("getDeep(d) ==", getDeep(d));

var newRootB = change(b)
console.log("newRootB =", newRootB);
// console.log("isBalance(newRootB) =", isBalance(newRootB));


