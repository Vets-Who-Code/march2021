// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    // Note: your stack's underlying structure is actually an array
    // You can use all of an arrays built in methods
    this.data = [];
  }

  // Remove push onto the stack
  // {record} can be any data type you want to store in the stack
  push(record) {
    // TODO: one line return statement
  }

  // Remove from the top of the stack
  pop() {
    // TODO: one line return statement
  }

  // Look at the top of the stack, without removing
  peek() {
    // TODO: one line return statement
  }
}

module.exports = Stack;
