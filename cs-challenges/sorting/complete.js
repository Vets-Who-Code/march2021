// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (a, b) => [b, a];

// O(n^2)
// https://www.youtube.com/watch?v=xli_FI7CuzA
//
// TLDR: Compare adjacent values, swap them if they are out of order
// Continue until all adjacent values are properly in order (no swaps occurred)
function bubbleSort(arr) {
  // Outer loop to keep iterating
  for (let i = 0; i < arr.length; i++) {
    let breakEarly = true;

    // Inner loop compares adjacent values
    for (let k = 0; k < arr.length - 1; k++) {
      // If out of order, perform a swap
      if (arr[k] > arr[k + 1]) {
        breakEarly = false;
        [arr[k], arr[k + 1]] = swap(arr[k], arr[k + 1]);
      }
    }

    // If no swaps were performed on the inner loop - we're done
    // This is an optional performance boost
    if (breakEarly) break;
  }

  return arr;
}

// O(n^2)
// https://www.youtube.com/watch?v=g-PGLbMth_g
//
// TLDR: From left to right, we are sorting the left part of the array
// And moving right. Everything left of the `i`th index is sorted.
function selectionSort(arr) {
  let idxOfMin;

  // Loop over entire array
  for (let i = 0; i < arr.length; i++) {
    let biggestGap = 0;
    let shouldSwap = false;

    // From index `i` + 1, find a smaller value, at index `k`.
    // We are searching through the "right hand side" of the array
    for (let k = i + 1; k < arr.length; k++) {
      const diff = arr[i] - arr[k];

      // Mark the index `k` where that smallest value is
      if (diff > biggestGap) {
        biggestGap = diff;
        idxOfMin = k;
        shouldSwap = true;
      }
    }

    // Back in the outter loop - perform a swap with `i` and `k`
    if (shouldSwap) {
      [arr[i], arr[idxOfMin]] = swap(arr[i], arr[idxOfMin]);
    }
  }

  return arr;
}

// O(n log n)
// https://www.youtube.com/watch?v=KF2j-9iSf4Q
//
// Optimal Recursive sorting algorithm
// Continuously breaks down array into smaller pieces, sorts & merges.
// This is the O(log n) part of the algorithm - recursively split arrays in half
function mergeSort(arr) {
  // Base case - array of size 1 is already sorted.
  if (arr.length <= 1) return arr;

  // Break the array into two halfs
  const midpoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint);

  // Method: Sort the halfs
  // Arguments: Recusively break each half down
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// Helper method to "sort" array halfs
// This is the O(n) part of the algorithm
// At most will traverse `n` times - the size of left + right
function merge(left, right) {
  const arr = [];
  let leftIdx = 0,
    rightIdx = 0;

  // Move either the left or right index pointer
  // Since both halfs are already sorted, we only have to "merge" them together
  // Benefit -- we always can move forward in either array, hence O(n)
  while (leftIdx < left.length || rightIdx < right.length) {
    if (left[leftIdx] === undefined) {
      arr.push(right[rightIdx]);
      rightIdx++;
    } else if (right[rightIdx] === undefined) {
      arr.push(left[leftIdx]);
      leftIdx++;
    } else if (left[leftIdx] < right[rightIdx]) {
      arr.push(left[leftIdx]);
      leftIdx++;
    } else {
      arr.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return arr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
