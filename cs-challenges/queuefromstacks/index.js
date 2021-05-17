// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// The stack is already implemeted for you
const Stack = require("./stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(k) {
    // TODO: Implement
  }

  remove() {
    // TODO: Implement
  }

  peek() {
    // TODO: Implement
  }
}

module.exports = Queue;
