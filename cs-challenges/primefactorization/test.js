const primeFactor = require("./index");

test("returns the prime factors of 2", () => {
  expect(primeFactor(2)).toEqual([2]);
});

test("returns the prime factors of 10", () => {
  expect(primeFactor(10)).toEqual([2, 5]);
});

test("returns the prime factors of 12", () => {
  expect(primeFactor(12)).toEqual([2, 2, 3]);
});

test("returns the prime factors of 13", () => {
  expect(primeFactor(13)).toEqual([13]);
});

test("returns the prime factors of 19", () => {
  expect(primeFactor(19)).toEqual([19]);
});

test("returns the prime factors of 348", () => {
  expect(primeFactor(348)).toEqual([2, 2, 3, 29]);
});

test("returns the prime factors of 9573", () => {
  expect(primeFactor(9573)).toEqual([3, 3191]);
});

test("returns the prime factors of 123450", () => {
  expect(primeFactor(123450)).toEqual([2, 3, 5, 5, 823]);
});

test("returns the prime factors of 5093849", () => {
  expect(primeFactor(5093849)).toEqual([193, 26393]);
});

test("returns the prime factors of 4567891237", () => {
  expect(primeFactor(4567891237)).toEqual([7, 13, 50196607]);
});

test("returns the prime factors of 123456788901237", () => {
  expect(primeFactor(123456788901237)).toEqual([3, 11, 3741114815189]);
});
