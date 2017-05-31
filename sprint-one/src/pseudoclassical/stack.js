var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.index++;
  this.storage[this.index] = value;  
};

Stack.prototype.pop = function() {  
  const poppedProp = this.storage[this.index];  

  delete this.storage[this.index];  
  
  this.index--;
  
  return poppedProp;
};

Stack.prototype.size = function() {
  return this.index <= 0 ? 0 : this.index;
}



