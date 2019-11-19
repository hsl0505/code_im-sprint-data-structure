const { LimitedArray, getIndexBelowMaxForKey } = require("./hashTableHelpers");

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // 스티븐, 시갈
  const index = getIndexBelowMaxForKey(k, this._limit); // 임의의 숫자(책갈피)
  this._storage.set(index, v)
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  if(index) {
    return index;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
