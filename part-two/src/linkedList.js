const LinkedList = function() {
  // functional 한 방식으로 구현
  const list = {};  // 계속 들어가야된다고 생각했는데 리스트 2개 head / tail head.next = 그다음게있고 그다음의 next ~~~~~~~~~~~
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // 리스트의 맨 뒤에 붙인다
    var addTarget = Node(value);

    // 리스트가 비어 있을 때
    if (list.head === null) {
      list.head = addTarget;
      list.tail = addTarget;
    }
    // 리스트가 비어 있지 않을 때
    else {
      list.tail.next = addTarget;   // 새 노드가 들어오기전 마지막 노드가 새로들어온 노드를 가리키게 한다.
      list.tail = addTarget;        // tail 이 새로 들어온 노드를 가리키는 것 (노드 함수에서 next는 null로 되어 있음)
    }
  };

  list.removeHead = function() {
    // 리스트의 맨 앞을 제거

    // 리스트가 비어 있지 않을 때
    var removeTarget = list.head;

    var newHead = list.head.next;

    delete list["head"]

    list.head = newHead;

    return removeTarget.value
    
  };

  list.contains = function(target) {
    // 리스트에 target이 있으면 true, 없으면 false
    var containTarget = list.head;
    
    function recursion(target, recursionTarget) {
      if (recursionTarget.value === target) {
        return true
      }
      else {
        // 다시 list.head.next.value -> 또 없으먄 -> next.next.value -> ~~~~~~ tail.value 보고 -> 없으면 false
        recursionTarget = recursionTarget.next; // list.head.next 로 다시 할당

        if (recursionTarget === null) {
          return false
        }

        return recursion(target, recursionTarget);
      }
    }

    return recursion(target, containTarget);
  };

  return list;
};

const Node = function(value) {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = LinkedList;
