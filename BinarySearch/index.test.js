const BinarySearch = require("./index");

test("should return value", () => {
  expect(BinarySearch([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 15)).toEqual(8);
});
test("should return false", () => {
  expect(BinarySearch([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 99)).toEqual(-1);
});
test("should return false", () => {
  expect(BinarySearch([1, 2, 3, 5], 2)).toEqual(1);
});
