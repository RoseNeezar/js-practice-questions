// Given an array of integers, return the indices of the two numbers that add  up to a given target
const findTwoSum = (arr, sum) => {
  if (arr.length < 2) {
    return false;
  }
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    p1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      p2 = arr[j];
      let max = p1 + p2;
      if (max === sum) {
        return [i, j];
      }
    }
  }
  return false;
};
module.exports = findTwoSum;
