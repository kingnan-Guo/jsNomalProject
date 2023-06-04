var arr = []
for (let i = 0; i < 1000; i++) {
    // const element = array[i];
    arr[i] = Math.round(Math.random() * 1000)
    
}

// console.log(arr);

var num = 0
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        num += 1
        if (arr[i] === target) {
            return true
        }
        
    }
    return false
}
console.log(search(arr, 100), num);



function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

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
// buildSearchTree

var rootTree = buildSearchTree(arr)
// console.log("searchTree =",rootTree );

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
console.log(searchTree(rootTree, 100), num2);




