// an O(n log n) sorting algorithm using the heap data structure
// Used as a class data structure
// Sorts in ascending order

// Binary heap sort algorithm
// Min heap, ascending sort
class HeapSort {
  // Accepts an Array, Unsorted (or sorted - ezpz)
  constructor(arr) {
    this.heap = [...arr];

    // Placeholder to not lose heap while we use it
    this.placeHolder = [...arr];

    // Mathematical Index representations of parent and children
    // note - these are FUNCTIONS
    this.parentIndex = (child) => Math.floor((child - 1) / 2);
    this.leftChildIndex = (parent) => 2 * parent + 1;
    this.rightChildIndex = (parent) => 2 * parent + 2;
  }

  // Getter for heap
  getHeap() {
    return this.heap;
  }

  // Getter for array
  getSortedArray() {
    return this._setSortedArray();
  }

  // Public Methods
  // ----------------------------------
  // (should) Only be allowed to print the array that's sorted!
  printSortedArray() {
    console.log(this._setSortedArray());
  }

  // Print the heap! - it's not gonna be sorted, but min is always first
  printMinHeap() {
    this._setMinHeap();
    console.log(this.heap);
  }

  // Private or 'hidden' methods
  // ----------------------------------
  // 1. Converts into Complete Min Heap
  // 2. Pops root off, repeats until heap == empty
  _setSortedArray() {
    const sorted = [];

    // While heap has at least one node
    while (this.heap.length > 1) {
      // Re-create the heap
      this._setMinHeap();

      // Pop the root (minimum) off heap
      sorted.push(this.heap[0]);

      // Last leaf node in heap swaps into the root
      // This makes it NOT A HEAP ANYMORE
      this.heap[0] = this.heap.pop();
    }

    // With one root left in heap, push it
    sorted.push(this.heap[0]);

    // Re-build heap for printing
    this.heap = [...this.placeHolder];

    return sorted;
  }

  // Start from the bottom and heap up, then heap down
  // End result is a Complete Min Heap
  _setMinHeap() {
    this._heapBottomUp();
    this._heapTopDown();
  }

  // Smaller values need to be heaped up towards to the top
  _heapBottomUp() {
    // The index of the value to be heapified
    let i = this.heap.length - 1;

    // We are trying to PUSH the "leaf" nodes up (if they are smaller than parents)
    // So we start at the bottom (high index), and decrement
    while (i >= 0) {
      this._heapifySubTree(i);
      --i;
    }
  }

  // Higher values need to be heaped down to their respective positions
  _heapTopDown() {
    // The index of the value to be heapified
    let i = 0;

    // Now going reverse, pushing larger values down the heap as far as they will go
    while (i < this.heap.length) {
      this._heapifySubTree(i);
      ++i;
    }
  }

  // Sub-tree Analyzer
  // This looks at a parent node and it's two children (no matter the index)
  // It will swap the parent with the minimum value of the subtree
  // Done many enough times, this will create Complete Min Heap
  _heapifySubTree(index) {
    // Given the index, find the indices of the subtree
    const parentIndex = this.parentIndex(index);
    const lcIndex = this.leftChildIndex(parentIndex);
    const rcIndex = this.rightChildIndex(parentIndex);

    // Get Parents Value
    const parent = this.heap[parentIndex];

    // Ensure real-value
    if (parent !== undefined) {
      // Get Children's Values
      const left = this.heap[lcIndex];
      const right = this.heap[rcIndex];

      // Boolean value, Right will be undefined before left
      const leftSmallerThanRight = left <= right || right === undefined;

      // Check who is the smallest of the three
      if (left < parent && leftSmallerThanRight) {
        // We need to perform a swap to move Left to Parent
        const tmp = this.heap[parentIndex];

        // Assign Left to Parent
        this.heap[parentIndex] = this.heap[lcIndex];

        // Assign Parent to Left
        this.heap[lcIndex] = tmp;

        // Otherwise, check if Right is smallest
      } else if (right < parent && right <= left) {
        // We need to perform a swap to move Right to Parent
        const tmp = this.heap[parentIndex];

        // Assign Right to Parent
        this.heap[parentIndex] = this.heap[rcIndex];

        // Assign Parent to Right
        this.heap[rcIndex] = tmp;
      }
    }
  }
}

module.exports = HeapSort;
