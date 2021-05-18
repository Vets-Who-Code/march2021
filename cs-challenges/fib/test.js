const fib = require("./fib");

test("Fib function is defined", () => {
  expect(typeof fib).toEqual("function");
});

test("calculates correct fib value for 1", () => {
  expect(fib(1)).toEqual(1);
});

test("calculates correct fib value for 2", () => {
  expect(fib(2)).toEqual(1);
});

test("calculates correct fib value for 3", () => {
  expect(fib(3)).toEqual(2);
});

test("calculates correct fib value for 4", () => {
  expect(fib(4)).toEqual(3);
});

test("calculates correct fib value for 8", () => {
  expect(fib(8)).toEqual(21);
});

test("calculates correct fib value for 39", () => {
  expect(fib(39)).toEqual(63245986);
});

test("calculates correct fib value for 50", () => {
  expect(fib(50)).toEqual(12586269025);
});

test("calculates correct fib value for 120", () => {
  expect(fib(120)).toEqual(5.358359254990968e+24);
});
