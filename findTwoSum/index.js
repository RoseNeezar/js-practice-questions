// Given an array of integers, return the indices of the two numbers that add  up to a given target
const findTwoSum = (arr, sum) => {
  if (arr.length < 2) {
    return false;
  }
  // for (let i = 0; i < arr.length - 1; i++) {
  //   const numToFind = sum - arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === numToFind) {
  //       return [i, j];
  //     }
  //   }
  // }
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const ntf = map[arr[i]];
    if (ntf >= 0) {
      return [ntf, i];
    } else {
      const res = sum - arr[i];
      map[res] = i;
    }
  }
  return false;
};

module.exports = findTwoSum;
