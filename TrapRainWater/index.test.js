const trapped = require("./index");

test("should sum true", () => {
  expect(trapped([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toEqual(8);
});
