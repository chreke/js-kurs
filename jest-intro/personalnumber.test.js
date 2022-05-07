const { birthdate } = require("./personalnumber");

test("Young person", () => {
  expect(birthdate("901010-1234").toString()).toBe(
    new Date("1990-10-10").toString()
  );
});

test("Old person", () => {
  expect(birthdate("501221-1234").toString()).toBe(
    new Date("1950-12-21").toString()
  );
});

test("Even older person", () => {
  expect(birthdate("201221+1234").toString()).toBe(
    new Date("1920-12-21").toString()
  );
});
