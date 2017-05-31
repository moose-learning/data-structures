var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  
  stack.storage = {};
  stack.index = 0;  
  
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


