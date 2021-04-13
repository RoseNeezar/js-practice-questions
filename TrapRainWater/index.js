// Given an array of integers, return the max area of water in tank (between 2 poles)
const trapped = (arr) => {
  let maxVal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const area = Math.min(arr[i], arr[j]) * (j - i);
      if (area > maxVal) {
        maxVal = Math.max(maxVal, area);
      }
    }
  }
  return maxVal;
};
module.exports = trapped;
