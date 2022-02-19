// brute force
// const longestSubstring = (str) => {
//   let maxLength = 0;
//   for (let i = 0; i < str.length; i++) {
//     let charMap = {};
//     let currentLength = 0;
//     for (let j = i; j < str.length; j++) {
//       let currentChar = str[j];
//       if (!charMap[currentChar]) {
//         currentLength++;
//         charMap[currentChar] = true;
//         maxLength = Math.max(maxLength, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxLength;
// };

// optimize
const longestSubstring = (str) => {
  if (str.length <= 1) return str.length;

  const seenChar = {};
  let left = 0;
  let longest = 0;

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    const prevSeenChar = seenChar[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChar[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};
module.exports = longestSubstring;
