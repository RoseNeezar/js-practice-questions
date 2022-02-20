const Palindrome = require("./index");

test("should return true", () => {
  expect(Palindrome("aba")).toBeTruthy();
});

test("should return true", () => {
  expect(Palindrome("abca")).toBeTruthy();
});

test("should return false", () => {
  expect(Palindrome("abc")).toBeFalsy();
});
