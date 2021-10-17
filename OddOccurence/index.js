const OddOc = (arr) => {
  let charMap = {};
  arr.forEach((res) => {
    !charMap[res] ? (charMap[res] = 1) : charMap[res]++;
  });
  for (let i in charMap) {
    if (charMap[i] % 2 !== 0) {
      return parseInt(i);
    }
  }
};
module.exports = OddOc;
