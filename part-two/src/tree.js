const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  var addTarget = Tree(value);
  this.children.push(addTarget);
};

treeMethods.contains = function(target) {
  
  var containTarget = this.children;
  var result = false;
  
  function recursion(target, recursionTarget) {
    for(var i=0; i < recursionTarget.length; i=i+1) {
      if (recursionTarget[i].value === target) {
        result = true;
      }
      else {
          var nextTarget = recursionTarget[i].children;
          recursion(target, nextTarget);
      }
    }
  }

  recursion(target, containTarget);
  return result;
};

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key]
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 addchild : O(1) // 자식 노드들의 마지막에 넣어주면 되므로
 contains : O(N) // 트리를 전부 돌아야되므로
 */

module.exports = Tree;
