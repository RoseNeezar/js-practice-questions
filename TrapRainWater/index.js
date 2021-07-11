// Given an array of integers, return the max area of water in tank (between 2 poles)
const trapped = (arr) => {
  let totalWater = 0;

  for (let i = 0; i < arr.length; i++) {
    let left = i,
      right = i,
      maxLeft = 0,
      maxRight = 0;
    while (left >= 0) {
      maxLeft = Math.max(maxLeft, arr[left]);
      left--;
    }
    while (right < arr.length) {
      maxRight = Math.max(maxRight, arr[right]);
      right++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - arr[i];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
module.exports = trapped;
