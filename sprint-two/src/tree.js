var Tree = function(value){
  var newTree = Object.create(treeMethods);;
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){  
  this.value = value;
  this.children.push(new Tree(value));
};

function findValue(arr, target) {
  if (arr && (arr === target)) {
    return true;
  }
  
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    
    if (curr.value === target) return true;
    if (curr.children) {
      findValue(curr.children, target);
    }
    
  }
  
  return false;
}

treeMethods.contains = function(target){
  if (this.value === target) return true;
  
  
  if (this.children.length > 0) {
    return findValue(this.children, target);
  }
    
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
