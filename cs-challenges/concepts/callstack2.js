// Implement nested functions to test js call stack

// FUNCTION DECLARATIONS
// stored somewhere in memory
function Outer(k) {
  console.log(k - 1);
  Inner(50); // Call the inner function
  console.log(k + 1);
  console.log("Calling Outer!");
}

function Inner(num) {
  console.log(num * num);
  console.log("Inside!");
}

// Function calls!
Outer(5);

// Back in global
console.log("Just calling inner...\n");

Inner(2);
