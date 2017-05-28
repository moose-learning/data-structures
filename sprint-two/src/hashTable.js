var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);  
  const storeKeys = Object.keys(this._storage).filter(val => Number(val));
  const currLen = storeKeys.length;
  
  if (currLen > this._limit / 2) {
    this._limit += this._limit
  }
  
  if (this._storage[i] && !Array.isArray(this._storage[i])) {
    const tempKey = Object.keys(this._storage[i])[0];
    const tempVal = this._storage[i][tempKey];
    
    this._storage[i] = [];
    this._storage[i].push({ [tempKey]: tempVal });
  }
  
  if (Array.isArray(this._storage[i])) {
    this._storage[i][0][k] = v;
  }
  
  if (!this._storage[i]) {
    this._storage[i] = { [k]: v };
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this._storage[i])) {
    return this._storage[i][0][k];
  } else if (this._storage[i] && !Array.isArray(this._storage[i])) {
    return this._storage[i][k];    
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  const storeKeys = Object.keys(this._storage).filter(val => Number(val));
  const currLen = storeKeys.length;  
  
  if (this._limit > 8 && currLen < this._limit / 2) {
    this._limit = (this._limit / 2);
  }
  
  if (!this._storage[i]) {
    this._storage[i] = { [k]: null };
  } else {
    this._storage[i][k] = null;    
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
