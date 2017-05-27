

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

Graph.prototype.contains = function(node){
  return this.storage[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode].edge === toNode ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode] = { edge: toNode };
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  console.log(this);
  this.storage[fromNode] = fromNode;
};

Graph.prototype.forEachNode = function(cb){
  const nodeList = Object.keys(this.storage);
  
  nodeList.forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



