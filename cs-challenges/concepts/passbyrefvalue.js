// primatives
let num = 5; // 101
const greet = "hello"; // x0asd73d

const multiply = (x) => {
  x *= 2;
  console.log({ x });
  return x;
};

// Pass by Value
console.log(multiply(num));
console.log({ num });

// object is not a real primative
const person = {
  name: "phil",
  age: "30",
};

// pass by Reference
// x0asd73d example memory address
const addJob = (someObj) => {
  someObj["job"] = "software developer";

  return someObj;
};

num = multiply(num); 
addJob(person);

console.log({ person });
