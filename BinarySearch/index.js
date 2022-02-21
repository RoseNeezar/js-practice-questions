const BinarySearch = (arr, num) => {
  // let left = 0;
  // let right = arr.length - 1;
  // while (left < right) {
  //   let middle = Math.floor(left + right / 2);
  //   if (arr[middle] === num) {
  //     return middle;
  //   } else if (middle > num) {
  //     right--;
  //   } else {
  //     left++;
  //   }
  // }
  // return -1;
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(left + right / 2);

  while (arr[middle] !== num && left <= right) {
    if (arr[middle] > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === num) {
    return middle;
  } else {
    return -1;
  }
};
module.exports = BinarySearch;
