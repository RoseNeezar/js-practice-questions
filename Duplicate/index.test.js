const Dup = require("./index");

test("should return false", () => {
  expect(Dup([1, 2, 3])).toBeFalsy();
});

test("should return true", () => {
  expect(Dup([1, 1, 3])).toBeTruthy();
});
