const Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.count++;
    someInstance.storage[someInstance.count] = value;
  };

  someInstance.pop = function () {
    // Remove and return the string on the top of the stack
    if (someInstance.count === 0) {
      return "stack is empty"
    }

    var popTarget = someInstance.storage[someInstance.count];
    delete someInstance.storage[someInstance.count];
    someInstance.count--;
    return popTarget;
  }
   
  someInstance.size = function () {
    //Return the number of items on the stack
    return someInstance.count;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  };
}
