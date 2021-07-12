// const longestSubstring = (str) => {
//   let start = 0;
//   let end = 0;
//   let maxCount = 0;
//   let charMap = {};
//   while (end < str.length) {
//     if (!charMap[str[end]]) {
//       charMap[str[end]] = 1;
//       end++;
//       maxCount = Math.max(Object.keys(charMap).length, maxCount);
//     } else {
//       delete charMap[str[start]];
//       start++;
//     }
//   }
//   return maxCount;
// };
const longestSubstring = (str) => {
  if (str.length === 0) {
    return;
  }

  let longest = 0;

  for (let i = 0; i < str.length; i++) {
    let temp = {},
      count = 0;
    for (let j = i; j < str.length; j++) {
      const currentVal = str[j];
      if (!temp[currentVal]) {
        count++;
        temp[currentVal] = true;
        longest = Math.max(longest, count);
      } else {
        break;
      }
    }
  }
  return longest;
};
module.exports = longestSubstring;
