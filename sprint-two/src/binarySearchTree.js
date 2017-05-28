var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  const node = new BinarySearchTree(value);
  
  if (this.value > value) {
    if (this.left !== null) this.left.insert(value);
    else this.left = node;
  }
  
  if (this.value < value) {
    if (!this.right) this.right = node;
    else this.right.insert(value);
  } 
}

BinarySearchTree.prototype.contains = function(value) {
  
}

BinarySearchTree.prototype.depthFirstLog = function() {
  
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
