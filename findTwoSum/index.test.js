const findTwoSum = require("./index");

test("should sum true", () => {
  expect(findTwoSum([1, 3, 7, 9, 2], 11)).toEqual([3, 4]);
});
test("should sum false", () => {
  expect(findTwoSum([1, 3, 7, 9, 2], 31)).toBeFalsy();
});
test("should sum false", () => {
  expect(findTwoSum([], 31)).toBeFalsy();
});
test("should sum false", () => {
  expect(findTwoSum([2], 31)).toBeFalsy();
});
