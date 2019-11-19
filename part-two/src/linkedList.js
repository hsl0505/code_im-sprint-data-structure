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
   addTotail : O(1) // 리스트 맨 앞에 추가하는 경우도 동일, 중간에 넣는 경우는 넣으려는 위치 노드를 보통 미리 알고 direct로 접근이 가능, 그 '다음'에 넣는 경우에는 O(1)
   // 그 '전에' 넣으려면, 단일 연결 리스트의 경우에는 탐색이 필요하므로 O(N), 이때 이중연결일 경우에는 이전 노드도 접근이 되므로 O(1)
   removeHead : O(1) // 리스트 맨 뒤 제거도 동일, 중간에 제거는 탐색이 필요해서 O(N) / 이중연결은 이전 노드도 접근이 되므로 O(1)
   contains : O(N) // lookup, assign 도 동일, 이중연결도 동일
 */

module.exports = LinkedList;
