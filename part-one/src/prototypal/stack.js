const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

const stackMethods = {};

module.exports = {
  Stack,
  stackMethods
};


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
//바뀌어라 스택스택
