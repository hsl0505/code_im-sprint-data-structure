const BinarySearchTree = function(value) {
    // functional 방식으로 구현
    var tree = {};
    tree.value = value;
    tree.left = null;
    //tree.left.childNode = null;
    tree.right = null;
    //tree.right.childNode = null;

    tree.insert = function(value) {   // 5 -> 2 -> 3 -> 7 -> 6
      if (value > tree.value) {
          if (tree.right === null) {
            tree.right = BinarySearchTree(value);
          }
          else {
            tree.right.insert(value);
          }
      }
      else if (value < tree.value) {
          if (tree.left === null) {
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
          if (target === recursionTarget.value) { // tree.value
              result = true;
          }
          else if (target > recursionTarget.value ) {
            if (recursionTarget.right !== null) {
              recursionTarget = recursionTarget.right;
              recursion(target, recursionTarget)
            }
          }
          else if (target < recursionTarget.value) {
            if (recursionTarget.left !== null) {
              recursionTarget = recursionTarget.left
              recursion(target, recursionTarget)
            }
          }
        }
        
        recursion(target, containTarget)
        return result;
        
    };

    tree.depthFirstLog = function(callback) {
      
      var depthTarget = tree;
      
      function recursion(target) { 
          callback(target.value)
          
          if (target.right !== null) {
            target = target.right
            recursion(target)
          }
          if (target.left !== null) {
            target = target.left
            recursion(target)
          }
      }
      recursion(depthTarget)
      
    };

    return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = BinarySearchTree;
