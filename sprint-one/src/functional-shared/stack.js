var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    storage: {},
    index: 0,
    size: stackMethods.size,
    push: stackMethods.push,
    pop: stackMethods.pop
  };
  
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;  
};

stackMethods.pop = function() {  
  const poppedProp = this.storage[this.index];  

  delete this.storage[this.index];  
  
  this.index--;
  
  return poppedProp;
};

stackMethods.size = function() {
  return this.index <= 0 ? 0 : this.index;
}
