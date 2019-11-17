const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function () {

  if (this.count === 0) {
    return "stack is empty"
  }

  var popTarget = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return popTarget;
}

Stack.prototype.size = function () {
  //Return the number of items on the stack
  return this.count;
};

module.exports = {
  Stack
};
