const Queue = function () {
  const someInstance = {};


  //npm run test:part-one  
  // Use an object with numeric keys to store values
  const storage = {};
  var front = 0; 
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
  // Add a string to the back of the queue
  // 대기열 뒷면에 문자열 추가
  storage[back] = value;
  back++;
};
  someInstance.dequeue = function () {
  //Remove and return the string at the front of the queue
  //줄 앞의 줄을 제거하고 반환하십시오.
  delete storage[front];
  var frontNum = storage[front];
  front++;
  return frontNum;
};
  someInstance.size = function () {
  //Return the number of items in the queue
  //대기열에있는 항목 수를 반환
  return back;
};
  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}
