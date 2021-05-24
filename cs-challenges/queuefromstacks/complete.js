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

const Stack = require("./stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(k) {
    let data;
    // Clear s1 to s2
    while (true) {
      data = this.s1.pop();
      if (data === undefined) break;
      this.s2.push(data);
    }

    // Put new value at the bottom
    this.s1.push(k);

    // Clear back to s1, stacking on top
    while (true) {
      data = this.s2.pop();
      if (data === undefined) break;
      this.s1.push(data);
    }
  }

  remove() {
    return this.s1.pop();
  }

  peek() {
    return this.s1.peek();
  }
}

module.exports = Queue;
