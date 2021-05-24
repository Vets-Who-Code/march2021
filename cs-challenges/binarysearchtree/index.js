// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// Hint: You can implement these in either a recursive or iterative manner

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }

  // Insert data into the tree.
  // If the new value is smaller than this node's value
  // Then we go to the left side
  // Otherwise we go to the right.
  insert(data) {
    // TODO: implement
  }

  // Find the value in the tree.
  // This is O(log n) where n is the number of nodes in the tree.
  contains(data) {
    // TODO: implement
  }
}

module.exports = Node;
