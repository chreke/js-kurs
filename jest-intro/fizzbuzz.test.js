const fizzbuzz = require("./fizzbuzz");

test("should return a number", () => {
  expect(fizzbuzz(2)).toBe("2");
});
test("should return fizz", () => {
  expect(fizzbuzz(3)).toBe("fizz");
});
test("should return buzz", () => {
  expect(fizzbuzz(5)).toBe("buzz");
});
test("should return fizzbuzz", () => {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});
