const countUniqueValues = (arr) => {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] !== arr[i]) {
      start++;
      arr[start] = arr[i];
    }
  }
  return start + 1;
};
module.exports = countUniqueValues;
