// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const lineWidth = n * 2 - 1;

  for (let i = 1; i <= n; i++) {
    const numHash = i * 2 - 1;
    const hashString = "#".repeat(numHash);

    const numSpacesEachSide = (lineWidth - numHash) / 2;

    console.log(
      " ".repeat(numSpacesEachSide) + hashString + " ".repeat(numSpacesEachSide)
    );
  }
}

module.exports = pyramid;
