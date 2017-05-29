var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    index++;
    storage[index] = value;
  };

  someInstance.pop = function(){
    if (!storage[index]) return null;
    
    const poppedItem = storage[index];
    
    delete storage[index];
    
    index--;
    
    return poppedItem;
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
