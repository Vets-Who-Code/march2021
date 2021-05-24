const HeapSort = require("./complete");

// A small unsorted testing array
const UNSORTED = [10, 7, 3, 6, 1, 4, 2, 5, 8, 9];

test("HeapSort is a class", () => {
  expect(typeof HeapSort.prototype.constructor).toEqual("function");
});

test("getHeap() returns the unsorted heap", () => {
  heap = new HeapSort(UNSORTED);

  expect(heap.getHeap()).toEqual([10, 7, 3, 6, 1, 4, 2, 5, 8, 9]);
});

test("getSortedArray() returns the sorted array", () => {
  heap = new HeapSort(UNSORTED);

  expect(heap.getHeap()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
