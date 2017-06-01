var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  const len = Object.keys(storage).length;
  let index = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    index++;
    storage[index] = value;
  };

  someInstance.dequeue = function(){
    const len = Object.keys(storage).length;
    const justBefore = len - 1;
    const shiftedItem = storage[index - justBefore];
    
    if (!shiftedItem) return null;
    
    delete storage[index - len];
    
    
    index--;
    if (len > 1) {
      storage[index] = storage[index + 1]      
    }
    
    return shiftedItem;
  };

  someInstance.size = function(){
    const len = Object.keys(storage).length;

    return index;
  };

  return someInstance;
};
