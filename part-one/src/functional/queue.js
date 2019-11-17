const Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    // Add a string to the back of the queue
    someInstance.count++;
    someInstance.storage[someInstance.count] = value;
  };

  someInstance.dequeue = function () {
    //Remove and return the string at the front of the queue
    if (someInstance.count === 0) {
      return "queue is empty"
    }
  
    var dequeueTarget = someInstance.storage["1"];
    delete someInstance.storage["1"];
    someInstance.count--;
    for (var i=1; i<=someInstance.count; i=i+1) {
      someInstance.storage[`${i}`] = someInstance.storage[`${i+1}`];
    }
    delete someInstance.storage[`${someInstance.count + 1}`];
    return dequeueTarget;
  };

  someInstance.size = function () {
    //Return the number of items in the queue
    return someInstance.count;
  };
  
  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}
