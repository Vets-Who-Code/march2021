
const circularArray = (array = [], n = 1) => {
  const result = [];

  // We will iterate over the the array `n` times
  const totalLoops = array.length * n;

  let iterator = 0;

  while (iterator < totalLoops) {
    // Idx will be BOUNDED by the array's length
    let idx = iterator % array.length;
    iterator++;

    console.log(array[idx]);
    result.push(array[idx]);
  }

  return result;
};

// Uncomment the below line and run this file with "node" to test the output
// circularArray([1, 2, 3], 2);

module.exports = circularArray;
