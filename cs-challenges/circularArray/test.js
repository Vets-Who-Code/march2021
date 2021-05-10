const circularArray = require("./circularArray");

const testArray = [10, 12, 14];
const arrLen = testArray.length;

test("circularArray function is defined", () => {
  expect(circularArray).toBeDefined();
});

test("Calling circularArray with n=1 prints out the full array", () => {
  const n = 1;
  const result = circularArray(testArray, n);

  expect(console.log.mock.calls.length).toEqual(n * arrLen);
  expect(result).toEqual(testArray);
});

test("Calling circularArray with n=3 prints out the full array 3 times", () => {
  const n = 3;
  const result = circularArray(testArray, n);

  expect(console.log.mock.calls.length).toEqual(n * arrLen);
  expect(result).toEqual(testArray.concat(testArray).concat(testArray));
});

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});
