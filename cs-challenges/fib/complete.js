// --- Directions
// Return the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// This is the actual fibonacci method
// It absolutely destroys the call stack
// This is very very very slow
const slowFib = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// This is generic memoization method
// It memoizes functions!
// If a function has already calculated a call with a specific argument
// It will store the result, so it never has to calculate something twice
const memoize = (func) => {
  const cache = {};

  return function (...args) {
    if (cache[args]) return cache[args];

    const result = func(...args);
    cache[args] = result;

    return result;
  };
};


module.exports = slowFib;
