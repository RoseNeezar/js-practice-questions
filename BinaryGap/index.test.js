const BinaryGap = require("./index");

test("should return true", () => {
  expect(BinaryGap(1041)).toEqual(5);
});
test("should return true", () => {
  expect(BinaryGap(32)).toEqual(0);
});
