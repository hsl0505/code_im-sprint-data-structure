const Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
   //someInstance라는 빈 객체를 만든다

  // Use an object with numeric keys to store values
  // 숫자 키가 있는 객체를 사용하여 값 저장
  
  someInstance.storage = {};
  // someinstance라는 빈 객체 안에 storage라는 빈 객체를 만든다.
  someInstance.count = 0;
  // someinstance라는 빈 객체 안에 카운트 값을 0으로 넣는다.

  extend(someInstance, stackMethods);
  // extend 함수는 stackmethods안에 있는 함수들을 someInstance 안에 넣어주는 함수
  return someInstance;
  // 섬인스턴스를 리턴한다. someinstance {0, {}}

};

const stackMethods = {};
//스택메서드라는 빈 객체를 만든다.

// Implement the methods below
stackMethods.push = function (value) {
//스택메서드안에 푸시라는 함수를 구현한다.(value 값을 가져옴)

  this.count++;
  //스택메서드가 섬인스턴스 안으로 들어가게 되므로 여기서 this는 섬인스턴스다.
  //섬인스턴스에서 카운트가 +1 더해진다

  this.storage[this.count] = value;
  //여기서 this 섬인스턴스
  //스토리지안에 카운트 값을 키 값으로 넣고 그 키 값으로 인해 나오는 value값을 넣는다.
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
  //익스텐드라는 함수만든다. 이 함수는 from에 있는 키 값들을 to의 키 값으로 넣어준다.
  // 여기서 from은 스택메서드 값, to가 섬인스턴스 값이 되겠다.
  for (var key in from) {
  // 


    to[key] = from[key]
  // 섬인스턴스 = to, from은 스택메서드
  }
};


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  };
}
