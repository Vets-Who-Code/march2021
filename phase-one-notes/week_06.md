# Week 6

## Day 1

## Primitives and Data Types

### Javascript

- Javascript is named the way it is because it was a marketing ploy using the Java name
- Javascript was a scripting language that was created to compete with applets
- Ecmascript is the official name for Javascript
- Works with REST API for data layer, serverless technology, etc
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
- const is for global variables that will **NOT** change. const is good for security purposes and sometimes required. Const is for global variables that will NOT change
- example for let:

```js
function whatIsLet(sum) {
	let whatIsThis = ' This can be changed is within lexical - or local - scope.';
	return sum + 1;
	console.log(whatIsThis);
}
```

### Data types

- string represents textual data 'hello', "hello world!" etc
- number is an integer or a floating-point number 3, 3.234, 3e-2 etc.
- bigInt is an integer with arbitrary precision 900719925124740999n , 1n etc.
- boolean is any of two values: true or false
- undefined is a data type whose variable is not initialized. An example is: `let a;`
- null denotes a null value `let a = null`
- symbol data type whose instances are unique and immutable let value = Symbol('hello');
- object consists of key-value pairs of collection of data `let student - {};`
- NAN is a property of a global object (kind of like the planet Pluto because some consider it a data type and some do not);

### Resources

- [MDN - localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN - sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

## Day 2

### Conditionals

- if this, then do this
- format is:

```js
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

```js
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

## Day 3

### Arrays

- Example:

```js
var newArray = [1, 2, 3, 4];
/*an array is enclosed by brackets and each value is separated by commas. Arrays are declared
with a variable by using let, const, or var depending on whether the items in the array with be
changed or not.*/
```

- Arrays start at [0] index
- Example:

```js
var numbers = [1, 2, 3, 5, 8]; //array of numbers
var cars = ['Mazda', 'Honda', 'Chevy', 'Ford']; //array of strings
var honda = cars[3];
/*assigning a new variable with the value from the cars array. honda will be equal to the string
"Ford" because the array starts at [0] index*/
```

- There are a number of array methods built into Javascript. Here are a few of them:

```js
arr.push(...items) ??? adds items to the end,
arr.pop() ??? extracts an item from the end,
arr.shift() ??? extracts an item from the beginning,
arr.unshift(...items) ??? adds items to the beginning.

arr.splice(start[, deleteCount, elem1, ..., elemN])
/*It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1,
 ..., elemN at their place. Returns the array of removed elements.*/

//Example of splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]
```

## Day 4

### Loops

### Definition

- Loops are like interstate loops. It takes you around and around until you reach your desired exit point
  It is a piece of logic that dictates how many times to run something until you reach the designated end point

### For Loop

- for loop is the easiest form of a loop. Very close to an "if" statement but it has more options.
- Example:

```js
for(condition; end condition; change){
    // do it, do it now
}
```

- Another example:

```js
for (var integer = 0; integer < 10; integer = integer++) {
	console.log('yay!');
}
```

### While Loop

- Used when you need to break logic. It doesn't increment.
- Example:

```js
var i = 0,
	x = '';
while (i < 5) {
	x = x + 'The number is ' + i;
	i++;
}
```

### Do While

- Example

```js
var i = 0;
do {
	console.log(i + ' ');
	i++; // incrementing i by 1
} while (i < 100);
```

### For of Loop

- Example

```js
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
	console.log(element);
}
```

### Break and Continue

- break; //stops the loop
- continue; //skips this iteration and goes to the next iteration

### Resources

- [dark patterns](https://uxdesign.cc/dark-patterns-in-ux-design-7009a83b233c)
- [learn Javascript](gitbook.gitbook.io/learn-javascript/)
