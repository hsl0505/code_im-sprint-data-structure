const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;
  
  return someInstance;
};


const queueMethods = {};

queueMethods.enqueue = function (value) {
  // Add a string to the back of the queue
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function () {
  //Remove and return the string at the front of the queue
  if (this.count === 0) {
    return "queue is empty"
  }
  
  var dequeueTarget = this.storage["1"];
  delete this.storage["1"];
  this.count--;
  for (var i=1; i<=this.count; i=i+1) {
    this.storage[`${i}`] = this.storage[`${i+1}`];
  }
  delete this.storage[`${this.count + 1}`];
  return dequeueTarget;
};

queueMethods.size = function () {
  //Return the number of items in the queue
  return this.count;
};

module.exports = {
  Queue,
  queueMethods
};