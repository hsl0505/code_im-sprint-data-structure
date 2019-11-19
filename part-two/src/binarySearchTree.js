const BinarySearchTree = function(value) {
    // functional 방식으로 구현
    var tree = {};
    tree.value = value;
    tree.left = {};
    tree.left.childNode = null;
    tree.right = {};
    tree.right.childNode = null;

    tree.insert = function(value) {   // 5 -> 2 -> 3 -> 7 -> 6
      if (value > tree.value) {
          if (tree.right.childNode === null) {
            tree.right = BinarySearchTree(value);
          }
          else {
            tree.right.insert(value);
          }
      }
      else if (value < tree.value) {
          if (tree.left.childNode === null) {
            tree.left = BinarySearchTree(value);
          }
          else {
            tree.left.insert(value);
          }
      }
      else {
          return "데이터가 중복됩니다!"
      }
    };

    tree.contains = function(target) {
        var containTarget = tree;
        var result = false;

        function recursion(target, recursionTarget) {
          if (target === recursionTarget.value) {
              result = true;
          }
          else if (target > recursionTarget.value) {
              recursionTarget = recursionTarget.right;
              recursion(target, recursionTarget)
          }
          else if (target < recursionTarget.value) {
              recursionTarget = recursionTarget.left
              recursion(target, recursionTarget)
          }
        }
        
        recursion(target, containTarget)
        return result;
    };

    tree.depthFirstLog = function(callback) {
      var depthTarget = tree;
      
      function recursion(target) { 
          var callbackTarget = target.value;
          callback(callbackTarget)

          var targetLeft = target.left;
          var targetRight = target.right;

          recursion(targetLeft)
          recursion(targetRight)
      }

      recursion(depthTarget)
    };

    return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
