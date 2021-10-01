const Sort = require("./index");

test("should return true", () => {
  expect(Sort([4, 5, 1, 3, 2])).toEqual([1, 2, 3, 4, 5]);
});
