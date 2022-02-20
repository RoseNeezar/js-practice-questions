const Palindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let start = 0;
  let end = str.length - 1;
  str = str.trimLeft();
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

module.exports = Palindrome;
