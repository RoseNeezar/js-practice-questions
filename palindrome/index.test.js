const Palindrome = require("./index");

test("should return true", () => {
  expect(Palindrome("abba")).toBeTruthy();
});

test("should return false", () => {
  expect(Palindrome("abcdefg")).toBeFalsy();
});
