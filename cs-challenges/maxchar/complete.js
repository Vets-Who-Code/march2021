// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countMap = {};
  let maxCount = 0;
  let commonChar = "";

  for (let idx in str) {
    const char = str[idx];

    if (!countMap[char]) {
      countMap[char] = 1;

      if (1 >= maxCount) {
        maxCount = 1;
        commonChar = char;
      }
    } else {
      countMap[char]++;

      if (countMap[char] > maxCount) {
        maxCount = countMap[char];
        commonChar = char;
      }
    }
  }

  return commonChar;
}

module.exports = maxChar;
