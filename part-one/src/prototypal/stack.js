const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  // Use an object with numeric keys to store values
  
  someInstance.storage = {};
  someInstance.count = 0;
  
  return someInstance;
};
  
const stackMethods = {};
  
// Implement the methods below
stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  // Remove and return the string on the top of the stack
  if (this.count === 0) {
    return "stack is empty"
  }

  var popTarget = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return popTarget;
}

stackMethods.size = function () {
  //Return the number of items on the stack
  return this.count;
};

module.exports = {
  Stack,
  stackMethods
}; 