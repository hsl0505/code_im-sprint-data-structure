const Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  // 숫자 키가 있는 객체를 사용하여 값 저장
  
  someInstance.storage = {};
  someInstance.count = 0;
  
  extend(someInstance, stackMethods);
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

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
};


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  };
}
