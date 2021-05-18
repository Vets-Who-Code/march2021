// --- Directions
// Return the factorial of the n-th entry.
// Factorial notation is an exclamation point (!)
// Some examples
// 1! === 1
// 2! === 2
// 3! === 6
// 4! === 24,
// 5! === 120
// Factorial is a product of all previous integers up to and including the n-th.
// 2! = 1 * 2
// 5! = 1 * 2 * 3 * 4 * 5
// 100! = 1 * 2 * 3 * ... * 100

// Implement this with RECURSION
// You can also do the iterative (loop) version, but this is a recursive exercise.
// Example:
//   factorial(4) === 24

// Loop version
function factorialIterative(n) {
  let result = 1;
  for (let int = 1; int <= n; int++) result *= int;

  return result;
}

// Recursive version
function factorial(n) {
  if (n < 2) return 1;
  return factorial(n - 1) * n;
}

// You can swap `factorial` for `factorialIterative` here to test either one.
module.exports = factorial;
