# Day 1
## Primitives and Datatypes 
### Javascript 
- Javascript is named the way it is because it was a marketing ploy using the Java name 
- Javascript was a scripting language that was created to compete with applets
- Ecmascript is the offical name for Javascript
- Works with REST API for datalayer, serverless technology, etc
- Javascript can help you build and do everything 
## Hoisting 
- Hoisting is when you can call a function or a variable before it is declared
example:
var hoist;
console.log(hoist);
hoist = 'The variable has been hoisted.";
### Variables
- var is for global variables that will change
- let is for global variables that will chance
- const is for global variables that will **NOT** change. const is good for security purposes and sometimes required. Const is for glocal variables that will NOT change
- example for let:
  ```function WhatIsLet(sum) {
     let whatIsThis = " This can be changed is within lexical - or local - scope.";
     return sum + 1;  
     console.log(whatIsThis) }
  console.log(whatIsLet(2))```
- be consistent with semi-colons
### Data types
- string represents textual data	'hello', "hello world!" etc
- number is an integer or a floating-point number	3, 3.234, 3e-2 etc.
- bigInt is an integer with arbitrary precision	900719925124740999n , 1n etc.
- boolean	is any of two values: true or false
- undefined	is a data type whose variable is not initialized. An example is:
```let a;```
- null denotes a null value	```let a = null```
- symbol data type whose instances are unique and immutable	let value = Symbol('hello');
- object consists of key-value pairs of collection of data	``let studnet - {};``
- NAN is a property of a global object (kind of like the planet Pluto because some consider it a data type and some do not);
### Resources
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
developer.mozilla.orgdeveloper.mozilla.org
Window.localStorage - Web APIs | MDN
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
developer.mozilla.orgdeveloper.mozilla.org
Window.sessionStorage - Web APIs | MDN

# Day 2
## Conditionals, Operators
### Conditionals
- if this, then do this 
- format is:
```
if (name === "John) {
   console.log("red")
} else if (name === "Aaron") {
   console.log("blue")
} else {
    console.log("green")
}
```
### Switch statement is used instead of using a long line of conditionals
The format of it is below:
```
// switch
const fruit = 'Pears';
switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}
```
### Equals Signs 
- one equal sign is assigning something to a variable
- two equals signs is comparing something but not data types  
- explicit equals is === 
It also compares data types

# Day 3
## Arrays
- Example: 
``` var newArray = [1, 2, 3, 4] //an array is enclosed by brackets and each value is separated by commas. Arrays are declared with a variable by using let, const, or var depending on whether the items in the array with be changed or not.

```
- Arrays start at [0] index
- Example:
``` var numbers = [1,2,3,5,8]; //array of numbers
    var cars = ["Mazda", "Honda","Chevy","Ford"]; //array of strings
    var honda = cars[3]; //assigning a new variable with the value from the cars array. honda will be equal to the string "Ford" because the array starts at [0] index
 ```
 - There are a number of array methods built into Javascript:
```
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning. 

arr.splice(start[, deleteCount, elem1, ..., elemN]) //It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

//Example of splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"] 
```
