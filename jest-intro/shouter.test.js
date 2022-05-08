const shout = require("./shouter.js");

test("should upcase string", () => {
  expect(shout("Hello, world!")).toBe("HELLO, WORLD!!");
});

test("should throw on non-string input", () => {
  expect(() => shout(null)).toThrow();
});
