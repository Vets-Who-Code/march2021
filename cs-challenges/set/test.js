const Set = require("./completed");

const TEST_ARR = [1, 1, 2, 3, 3, 2, 8];

test("Set is a class", () => {
  expect(typeof Set.prototype.constructor).toEqual("function");
});

test("showSet is a function", () => {
  expect(typeof Set.prototype.showSet).toEqual("function");
});

describe("constructor", () => {
  test("it builds the set with no parameters", () => {
    const set = new Set();

    expect(set.showSet()).toEqual([]);
  });

  test("removes duplicates from an array", () => {
    const set = new Set(TEST_ARR);
    set.print();
    expect(set.showSet()).toEqual([1, 2, 3, 8]);
  });
});

describe(".size()", () => {
  test("size returns number of elements", () => {
    const set = new Set([1, 2]);

    expect(set.size()).toEqual(2);
  });
});

describe(".add()", () => {
  test("can add elements to a Set", () => {
    const set = new Set();
    set.add(5);

    expect(set.showSet()).toEqual([5]);
  });
});

describe(".valueExists()", () => {
  test("returns true with value in the set", () => {
    const set = new Set([5]);

    expect(set.valueExists(5)).toEqual(true);
  });

  test("returns false with value not in the set", () => {
    const set = new Set([5]);

    expect(set.valueExists(10)).toEqual(false);
  });
});

describe(".remove()", () => {
  test("removes value from the set", () => {
    const set = new Set([10, 5]);
    set.remove(5);
    expect(set.showSet()).toEqual([10]);
  });

  test("has no effect if value doesn't exist", () => {
    const set = new Set([10, 5]);
    set.remove(53);
    expect(set.showSet()).toEqual([10, 5]);
  });
});

describe(".union()", () => {
  test("throws an error when the argument is not an instance of Set", () => {
    const setA = new Set([10, 5]);
    const arr = [1, 2];

    expect(() => setA.union(arr)).toThrow(
      "Must supply another class of type: Set"
    );
  });

  test("it doesn't manipulate the two sets", () => {
    const setA = new Set([10, 5]);
    const setB = new Set([5, 20]);

    setA.union(setB);

    expect(setA.showSet()).toEqual([10, 5]);
    expect(setB.showSet()).toEqual([5, 20]);
  });

  test("it returns a set of the union", () => {
    const setA = new Set([10, 5]);
    const setB = new Set([5, 20]);

    const setC = setA.union(setB);

    expect(setC.showSet()).toEqual([10, 5, 20]);
  });
});

describe(".intersection()", () => {
  test("throws an error when the argument is not an instance of Set", () => {
    const setA = new Set([10, 5]);
    const arr = [1, 2];

    expect(() => setA.intersection(arr)).toThrow(
      "Must supply another class of type: Set"
    );
  });

  test("it doesn't manipulate the two sets", () => {
    const setA = new Set([10, 5]);
    const setB = new Set([5, 20]);

    setA.intersection(setB);

    expect(setA.showSet()).toEqual([10, 5]);
    expect(setB.showSet()).toEqual([5, 20]);
  });

  test("it returns a set of the union", () => {
    const setA = new Set([10, 5]);
    const setB = new Set([5, 20]);

    const setC = setA.intersection(setB);

    expect(setC.showSet()).toEqual([5]);
  });
});

describe(".clearSet()", () => {
  test("it clears the entire set", () => {
    const set = new Set([5, 10]);
    set.clearSet();

    expect(set.showSet()).toEqual([]);
  });
});

describe(".print()", () => {
  it("prints the set with curly brackets", () => {
    const set = new Set(TEST_ARR);
    set.print();

    expect(console.log.mock.calls[0][0]).toEqual("{ 1,2,3,8 }");
  });
});

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});
