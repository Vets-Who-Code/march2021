// How does our algorithm/function scale with input size
// O(?)

// O(1)
// Constant time -- the best we can do

array1 = [2, 4, 6, 8];

array_2d = [
  [14, 15, 16],
  [10, 11, 12],
  [20, 21, 22],
];

// These are both O(1)
console.log(array1[2] + "\n");

console.log(array_2d[1] + "\n");

// // O(n)
// // Linear time - decent

function linTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

linTime(array1);

// O(n^2)
// Polynomial time - not great

function polTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

polTime(array_2d);
