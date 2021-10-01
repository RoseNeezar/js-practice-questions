const BubbleSort = (arr) => {
  let noSwap = false;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};
module.exports = BubbleSort;
