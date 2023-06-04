/**
 * 二叉树 双旋
 * 左右双旋 右左 双旋
 * 
 * 
 * 当要对某个节点 进行左单旋时，如果变化分之是唯一的 最深分支，那么我们要对新根进行  右单选 然后再进行左单旋
 * 这样的 旋转叫做右左双旋
 * 
 * 
 * 当要对某个节点进行右单旋时
 * 如果变化分之时唯一的 最深分支 那么我们要对新根进行左单旋 
 * 然后再进行右单旋
 * 
 * 
 * 
 * 变化分子不可一是唯一的最深分支，如果变化分支是唯一的最深分支，要新进行反向旋转
 */


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var node1 =new Node('1')
var node2 =new Node('2')
var node3 =new Node('3')
var node4 =new Node('4')
var node5 =new Node('5')
var node6 =new Node('6')
var node7 =new Node('7')
var node8 =new Node('8')

function getDeep(root) {
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

// node2.right = node5
// node5.left = node3
// node5.right = node6
node8.left = node7
node7.left = node6
node6.left = node5
node5.left = node2


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
        return root
    } 
    // 左边深 ， 右单旋
    else if(leftDep > rightDep ){
        var changeTreeDeep = getDeep(root.left.right)
        var noChangeTreeDeep  = getDeep(root.left.left)
        // 如果变化分支深度大于非变化分支深度
        if(changeTreeDeep > noChangeTreeDeep){
            // 先对左子树 进行左单旋
            root.left = leftRotate(root.left)
        }
        // 根节点会变化
        return rightRotate(root)
    } 
    // 右边深， 左单旋
    else {
        var changeTreeDeep = getDeep(root.right.left)
        var noChangeTreeDeep  = getDeep(root.right.right)
        // 如果变化分支深度大于非变化分支深度
        if(changeTreeDeep > noChangeTreeDeep){
            // 先对左子树 进行左单旋
            root.right = rightRotate(root.right)
        }
        // 根节点会变化
        return leftRotate(root)
    }
    return root
}


var newRoot= change(node8)
console.log("newRoot =", newRoot);
console.log("isBalance(root) =", isBalance(newRoot));
console.log("==========================");



// -------------------

// var a =new Node('a')
// var b =new Node('b')
// var c =new Node('c')
// var d =new Node('d')
// var e =new Node('e')
// var f =new Node('f')
// var g =new Node('g')
// var h =new Node('h')
// b.left = d
// b.right = e
// e.right = f
// f.right = g
// // g.right = h

// var newRootB = change(b)
// console.log("newRootB =", newRootB);
// // console.log("isBalance(newRootB) =", isBalance(newRootB));

// =========

// 生成一万个 节点

function addNode(root, number) {
    if (root == null) {
        return
    }
    if (root.value == number) {
        return
    }
    if(root.value < number){
        if(root.right == null){
            root.right =new Node(number)
        } else {
            addNode(root.right, number)
        }
    } else {
        if(root.left == null){
            root.left =new Node(number)
        } else {
            addNode(root.left, number)
        }
    }
}

 function buildSearchTree(arr) {
    if (arr == null || arr.length == 0) {
        return null
    }
    var root = new Node(arr[0]) 
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root
}

var arr = []
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000))
}

var rootTree = buildSearchTree(arr)

var num2 = 0
function searchTree(rootTree, target) {
    num2 ++
    if(rootTree ==  null)  return false;
    if(rootTree.value ==  target)  return true;
    if(rootTree.value >  target){
        return  searchTree(rootTree.left, target)
    } else {
        return  searchTree(rootTree.right, target)
    }
    
}
console.log(searchTree(rootTree, 1000), 'num ==', num2, 'deep ==', getDeep(rootTree));
console.log("isBalance(rootTree) =", isBalance(rootTree));


num2 = 0
var newChangeRoot = change(rootTree)


console.log(searchTree(newChangeRoot, 1000), 'num ==',num2, 'deep ==', getDeep(newChangeRoot));
console.log("isBalance(newChangeRoot) =", isBalance(newChangeRoot));




