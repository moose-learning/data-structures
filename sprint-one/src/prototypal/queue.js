var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var queue = Object.create(queueMethods);
  
  queue.storage = {};
  queue.index = 0;
  
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.index++;
  this.storage[this.index] = value;
};

queueMethods.dequeue = function(){
  const len = Object.keys(this.storage).length;
  const justBefore = len - 1;
  const shiftedItem = this.storage[this.index - justBefore];
  
  if (!shiftedItem) return null;
  
  delete this.storage[this.index - len];
  
  
  this.index--;
  if (len > 1) {
    this.storage[this.index] = this.storage[this.index + 1]      
  }
  
  return shiftedItem;
};

queueMethods.size = function(){
  const len = Object.keys(this.storage).length;

  return this.index;
};


