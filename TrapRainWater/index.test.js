const trapped = require("./index");

test("should sum true", () => {
  expect(trapped([7, 1, 2, 3, 9])).toEqual(28);
});
