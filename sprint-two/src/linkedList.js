const searchValue = (node, target) => {  
  if (node.value === target) {
    return true;
  }
  
  if (node.next) {
    return searchValue(node.next, target);
  }

  return false;  
};

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list._length = 0;

  list.addToTail = function(value){
    const node = new Node(value);
    let currentNode = list.head;  
    
    if (!currentNode) {
      list.head = node;
      list.tail = node;
      list.head.next = list.tail
      list._length++;
      
      return
    }
    
    if (list.head) {
      list.tail.next = node;
      list.tail = node;
      list._length++;
    }
    
    // console.log(list);
  };

  list.removeHead = function(){
    // console.log(list);
    const formerHead = Object.assign({}, list.head);
    const nextHead = Object.assign({}, list.head.next);
    
    list.head = nextHead;
    list._length--;
    
    return formerHead.value;
  };

  list.contains = function(target){
    if (list.head && list.head.value === target) return true;
    if (list.tail && list.tail.value === target) return true;
    
    if (list.head.next) {
      return searchValue(list.head, target);
    }
    
    return false;
  };
  
  list.getLength = function() {
    return list._length;
  }

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
