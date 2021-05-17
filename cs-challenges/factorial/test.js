const factorial = require("./index");

test("factorial function is defined", () => {
  expect(typeof factorial).toEqual("function");
});

test("calculates correct factorial value for 1", () => {
  expect(factorial(1)).toEqual(1);
});

test("calculates correct factorial value for 2", () => {
  expect(factorial(2)).toEqual(2);
});

test("calculates correct factorial value for 3", () => {
  expect(factorial(3)).toEqual(6);
});

test("calculates correct factorial value for 4", () => {
  expect(factorial(4)).toEqual(24);
});

test("calculates correct factorial value for 10", () => {
  expect(factorial(10)).toEqual(3628800);
});

test("calculates correct factorial value for 15", () => {
  expect(factorial(15)).toEqual(1307674368000);
});
