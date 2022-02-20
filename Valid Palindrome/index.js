//  if remove 1 string will it then be a palindrome ?

const validPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let right = str.length - 1;
  let left = 0;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        validPalindrome(s, left + 1, right) ||
        validPalindrome(s, left, right - 1)
      );
    }
  }
  return true;
};
module.exports = isPalindrome;
