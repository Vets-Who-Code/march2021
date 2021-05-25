// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

// This tree's NODEs has any number of children
// Check out the test file for more clarity

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    // TODO: implement
  }

  remove(data) {
    // TODO: implement
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Breadth first traversal
  // Apply the passed function to all "nodes" in a BF manner
  traverseBF(func) {
    // TODO: implement
  }

  // Depth first traversal
  // Apply the passed function to all "nodes" in a DF manner
  traverseDF(func) {
    // TODO: implement
  }
}

module.exports = { Tree, Node };
