// brute force
const longestSubstring = (str) => {
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    let charMap = {};
    let currentLength = 0;
    for (let j = i; j < str.length; j++) {
      let currentChar = str[j];

      if (!charMap[currentChar]) {
        currentLength++;
        charMap[currentChar] = true;
        maxLength = Math.max(maxLength, currentLength);
      } else {
        break;
      }
    }
  }
  return maxLength;
};
module.exports = longestSubstring;
