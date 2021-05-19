// --- Description
// Implement the set data structure.
// Sets do not have more than 1 of the same value
// Sets also have "union" and "intersection" with other sets
// Look those up if you don't know what they are
//
// --- Examples
//     const set = new Set();
//     set.add(5);
//     set.add(3);
//     set.add(1);
//     set.remove(3);
//     set.print()  --> [5, 1]



// Fun Fact: you are overwriting the native "Set" object by naming your class this
class Set {
  CLASS_NAME = "SET";

  // Feel free to adjust this
  constructor(arr) {
    this.set = this._removeDuplicates(arr);
  }

  // Used to expose the underneath "set"
  // Also known as a "Getter"
  showSet() {
    // TODO: implement
  }

  // Return type: Number
  size() {
    // TODO: implement
  }

  // Return type: Boolean
  isEmpty() {
    // TODO: implement
  }

  // Add value if not already in set
  add(value) {
    // TODO: implement
  }

  // Check if value exists in Set
  // Return type: Boolean
  valueExists(value) {
    // TODO: implement
  }


  // Remove value from set
  remove(value) {
    // TODO: implement
  }

  // Return Type: Set
  // Union -- combine sets, remove duplicates again
  // Result is a new set with union'd values of two sets
  // -----
  // We want "otherSet" to be an instance of Set
  // For example:
  // const setC = setA.union(setB)
  // all 3 are different sets
  //
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  union(otherSet) {
    // TODO: implement
  }

  // Return Type: Set
  // Intersection -- combine sets, prune all non-duplicates
  // Result is a new set with intersect'd values of two sets
  // -----
  // We want "otherSet" to be an instance of Set
  // For example:
  // const setC = setA.intersection(setB)
  // all 3 are different sets
  //
  // DOES NOT MANIPULATE THIS INSTANCE'S SET
  intersection(otherSet) {
    // TODO: implement
  }

  // Clears this set
  clearSet() {
    // TODO: implement
  }

  // Logs the contents
  print() {
    // TODO: log set as an array
  }

  // ----------------
  // "Private" Methods
  // ----------------
  _removeDuplicates(arr) {
    // TODO: implement
  }
}

module.exports = Set;
