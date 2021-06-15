// Given an array of integers, return the max area
const maxArea = (arr) => {
  // let maxValue = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     let area = Math.min(arr[i], arr[j]) * (j - i);
  //     if (area > maxValue) {
  //       maxValue = area;
  //     }
  //   }
  // }
  // return maxValue;
  let p1 = 0;
  let p2 = arr.length - 1;
  let max = 0;

  while (p1 < p2) {
    let width = p2 - p1;
    let height = Math.min(arr[p1], arr[p2]);
    let area = width * height;
    max = Math.max(max, area);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return max;
};
module.exports = maxArea;
