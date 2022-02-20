const Palindrome = require("./index");

test("should return true", () => {
  expect(Palindrome("abba")).toBeTruthy();
});

test("should return true", () => {
  expect(Palindrome("A man, a plan, a canal: Panama")).toBeTruthy();
});

test("should return false", () => {
  expect(Palindrome("abcdefg")).toBeFalsy();
});
