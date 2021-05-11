// Explaination of modular arithmitic
// or the "%" operator

// Any Integer can be described in the following format.
// This format uses ONLY integers. (whole numbers).
// Let's describe this integer, A.
// -----
// Given A, and given (positive) B
// There exists unique integers Q, and R, such that

// A = (B * Q) + R

// Lets Do an example for the number, 38
// A = 38, then:
// 38 = (9 * ?) + R
// What is B and what is R?

let A = 38;
let B = 9;

// Find Q with Integer division
let Q = Math.floor(A / B);

console.log("We found Q:", Q);

// How to find R?
// Algebra...
// A - (B * Q) = R

let R = A - B * Q;

console.log("We found R:", R);

// Easier way to find R?
// Mod operator

R = A % B;

console.log("We found R... an easier way!:", R);

// Check if RESULT is equal to A
let result = B * Q + R;
console.log("Result == A:", result == A, result, "\n");

// What is interesting about "Mod", or R in this case
// R is short for "remainder"
// Can it ever be larger than B?
// Why or why not?

// Note the B value, and the printed column, R!!
console.log("-----------------");
const b = 5;
console.log("Using B ==", b);

for (let a = 1; a <= 20; a++) {
  let r = a % b;
  console.log("A ==", a, " \tR == ", r);
}

// How can you use this?
// Range Checker?
