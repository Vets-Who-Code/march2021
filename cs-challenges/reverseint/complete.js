// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const num = parseInt(n.toString().split("").reverse().join(""), 10);
  if (n < 0) return num * -1;
  return num;
}

module.exports = reverseInt;
