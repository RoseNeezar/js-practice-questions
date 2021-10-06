const maxSubArray = require("./index");

test("should return correct", () => {
  expect(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toEqual(19);
});
