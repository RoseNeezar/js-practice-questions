// Given an array of integers, return the max area
const maxArea = (arr) => {
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let area = Math.min(arr[i], arr[j]) * (j - i);
      if (area > maxValue) {
        maxValue = area;
      }
    }
  }
  return maxValue;
};
module.exports = maxArea;
