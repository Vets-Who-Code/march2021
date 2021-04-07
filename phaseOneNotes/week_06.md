# Day 1
## Primitives, Datatypes, and Hoisting 
- Javascript used the name because it was a marketing ploy using the Java name 
- Javascript was a scripting language that was created to compete with aplets
- Ecmascript is the offical name 
- REST API for datalayer, serverless technology, etc
- Javascript can help you build and do everything 
- Hoisting 
example:
var hoist;
console.log(hoist);
hoist = 'The variable has been hoisted.";
### Variables
- var is for global variables that will change
- let is for global variables that will chance
- const is for global variables that will NOT change. const is good for security purposes and sometimes required. Const is for glocal variables that will NOT change
- example for let:
  function WhatIsLet(sum) {
     let whatIsThis = " This can be changed is within lexical - or local - scope.";
     return sum + 1;  
     console.log(whatIsThis)
}

console.log(whatIsLet(2))
- You can hoist a function too. 
- You cannot hoist 
- be consistent with semi-colons
- data types:
String	represents textual data	'hello', "hello world!" etc
Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean	Any of two values: true or false	true and false
undefined	a data type whose variable is not initialized	let a;
null	denotes a null value	let a = null;
Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
Object	key-value pairs of collection of data	let student = { };
- NAN is a property of a global object (like the planet Pluto);
- 3 user dev op, user, donor node.js infinite scroll, use CDN for MVP,
- infinite scrool https://javascript.plainenglish.io/building-an-infinite-scroll-with-vanilla-javascript-32810bae9a8c
- add styles 
https://github.com/Vets-Who-Code/vets-who-code-app/blob/master/src/assets/css/main.css
- users drive you're the map reader
- steal nav for VHC or make something different 
- type JS add a library using it on the inputs
- 

Resources
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
