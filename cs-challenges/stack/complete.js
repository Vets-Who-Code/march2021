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
    this.data = [];
  }

  // Remove push onto the stack
  push(record) {
    this.data.push(record);
  }

  // Remove from the top of the stack
  pop() {
    return this.data.pop();
  }

  // Look at the top of the stack, without removing
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
