const BinaryGap = (num) => {
  let toBinary = num.toString(2);
  let max = 0;
  let temp = 0;
  for (let i = 0; i < toBinary.length; i++) {
    if (toBinary[i] === "0") {
      temp++;
    } else {
      max = Math.max(max, temp);
      temp = 0;
    }
  }
  return parseInt(max);
};
module.exports = BinaryGap;
