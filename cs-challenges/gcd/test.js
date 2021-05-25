const gcd = require("./completed");

test("returns the gcd of 10 and 20", () => {
  expect(gcd(10, 20)).toEqual(10);
});

test("returns the gcd of 40 and 31", () => {
  expect(gcd(40, 31)).toEqual(1);
});

test("returns the gcd of 40 and 32", () => {
  expect(gcd(40, 32)).toEqual(8);
});

test("returns the gcd of 32 and 40", () => {
  expect(gcd(32, 40)).toEqual(8);
});

test("returns the gcd of 80 and 45", () => {
  expect(gcd(80, 45)).toEqual(5);
});

test("returns the gcd of 120 and 20", () => {
  expect(gcd(120, 180)).toEqual(60);
});

test("returns the gcd of 12345 and 8934", () => {
  expect(gcd(12345, 8934)).toEqual(3);
});

test("returns the gcd of 789903 and 9039", () => {
  expect(gcd(789903, 9039)).toEqual(3);
});
