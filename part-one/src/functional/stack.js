const Stack = function () {
  const someInstance = {};

  //npm run test:part-one    


  // Use an object with numeric keys to store values
  // 숫자 키가 있는 객체를 사용하여 값 저장
  const storage = {};
  var count = 0;
  //declare variables (변수 선언)

  // Implement the methods below
  // 아래 방법을 구현하세요
  someInstance.push = function (value) {
    storage[count] = value;
    count++;
  };


  someInstance.pop = function () {
    // Remove and return the string on the top of the stack
    // 맨위에 스택을 지우고 다시 재생하라
    delete storage[count];
    count--;
    var popnumber = storage[count]
    return popnumber;

   //pop을 호출하면 스토리지에서 카운트를 지운다.
  }
   
  someInstance.size = function () {
    //Return the number of items on the stack
    return count;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  };
}
