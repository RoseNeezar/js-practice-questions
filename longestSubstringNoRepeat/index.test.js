const longestSubstring = require("./index");

test("should return true", () => {
  expect(longestSubstring("abcbdca")).toEqual(4);
});
test("should return true", () => {
  expect(longestSubstring("rithmschool")).toEqual(7);
});
test("should return true", () => {
  expect(longestSubstring("thisishowwedoit")).toEqual(6);
});
