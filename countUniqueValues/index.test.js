const countUniqueValues = require("./index");

test("should count unique", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 1, 2])).toEqual(2);
});
