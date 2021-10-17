const Odd = require("./index");

test("should return true", () => {
  expect(Odd([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
});
