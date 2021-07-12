const typedOutString = require("./index");

test("should sum true", () => {
  expect(typedOutString("ab#z", "ar#z")).toEqual(true);
});

test("should sum false", () => {
  expect(typedOutString("Ab#z", "ab#z")).toEqual(false);
});
