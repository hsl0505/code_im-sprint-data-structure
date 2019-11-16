const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

this.storage = {};
this.count = 0;
}

  // Implement the methods below

  Queue.prototype.enqueue = function (value) {
  // Add a string to the back of the queue
  // 대기열 뒷면에 문자열 추가
  this.count++;
  this.storage[this.count] = value;
  };
  
  Queue.prototype.dequeue = function () {
  //Remove and return the string at the front of the queue
  //줄 앞의 줄을 제거하고 반환하십시오.
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

  Queue.prototype.size = function () {
  //Return the number of items in the queue
  //대기열에있는 항목 수를 반환
  return this.count;
  };


module.exports = {
  Queue
};
