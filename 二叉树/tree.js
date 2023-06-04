var front  = ['a', 'b', 'd', 'e', 'c', 'f', 'g']
var center = ['d', 'b', 'e', 'a', 'f', 'c', 'g']
var end    = ['d', 'e', 'b', 'f', 'g', 'c', 'a']


// var front   = ['a', 'b', 'e', 'c', 'f', 'g']
// var center = [ 'b', 'e', 'a', 'f', 'c', 'g']
// var end    = ['d', 'e', 'b', 'f', 'g', 'c', 'a']


function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


// console.log(new Node('a'));

function fontCreat(front, center){
    if(front[0]){
        let root =  front[0];
        let rootNode = new Node(root)
        console.log("rootNode ==", rootNode);
        let index =  center.indexOf(root)
        let  leftTree = front.slice(1, index+1)
        let  rightTree = front.slice(index+1, front.length)
        let leftcenterTree = center.slice(0, index)
        let rightcenterTree = center.slice(index+1, center.length)
        console.log("leftTree =",leftTree);
        console.log("rightTree =",rightTree);
        console.log("leftcenterTree = ", leftcenterTree);
        console.log("rightcenterTree = ", rightcenterTree);
        rootNode.left = fontCreat(leftTree, leftcenterTree)
        rootNode.right = fontCreat(rightTree, rightcenterTree)
        return rootNode
    }

};

// console.log(fontCreat(front, center));



function endCreate(end, center) {
    if(end[end.length -1]){
        let root =  end[end.length -1];
        let rootNode = new Node(root)
        console.log("rootNode ==", rootNode);
        let index =  center.indexOf(root)
        let  leftTree = end.slice(0, index)
        let  rightTree = end.slice(index, end.length - 1)
        let leftcenterTree = center.slice(0, index)
        let rightcenterTree = center.slice(index+1, center.length)
        console.log("leftTree =",leftTree);
        console.log("rightTree =",rightTree);
        console.log("leftcenterTree = ", leftcenterTree);
        console.log("rightcenterTree = ", rightcenterTree);
        rootNode.left = endCreate(leftTree, leftcenterTree)
        rootNode.right = endCreate(rightTree, rightcenterTree)
        return rootNode
    }
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


// 对比


