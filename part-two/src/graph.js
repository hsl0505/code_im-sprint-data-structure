// Instantiate a new graph
const Graph = function() {};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this[node] = {}; // graph { 4 : {}, 5 : {} }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (node in this) {  // in -> 객체 안에 키값이 있는지 확인, 만약 4가 있는 상태로 돌리면 트루
        return true
    }
    else {
        return false
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {  // 4  6 -> 5를 날리면 -> 4 에서도 5값을 날리고 6에서도 5값을 날려야되서
    for (var key in this) {
        if (node in this[key]) { // 5라는 값이 4 : {안에} , 6 : {안에} // this -> graph안에는 4,5,6,
            delete this[key][node]
        }
    }
    delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (toNode in this[fromNode]) {
        return true
    }
    else {
        return false
    }
    
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  // addEdge(4,5)
    this[fromNode][toNode] = undefined;    // 4: { 5: undefined } }, 
    this[toNode][fromNode] = undefined;    // 5 : { 4 : undefined} }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    delete this[fromNode][toNode]
    delete this[toNode][fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {  // 5 2 3 4
    for (var key in this) { 
        cb(key)
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Graph;
