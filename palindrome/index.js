const Palindrome = (str) => {
  let rev = str.split("").reverse().join("");
  return rev === str;
};
module.exports = Palindrome;
