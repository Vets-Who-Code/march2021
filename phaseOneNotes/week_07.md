# Day 1
## Open Forum
### Stand-ups and checkins
### Job App Assignment Update 
### Big O Notation 
- Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. 
### NFT Token Development Shadow Project
- There will be a sign-list posted to shadow Jerome as he builds an NFT Token 
- A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.
### Resources
- [Gatsby](https://www.gatsbyjs.com/)
- [Aboutmonica](https://aboutmonica.com/)
### Homework 
- Do your Github README file. There is a generator located [here](https://rahuldkjain.github.io/gh-profile-readme-generator/) if you wish to use it. 
# Day 2
## Functions and Objects
### Functions
- Make function names meaningful. Self documenting code. 
- Be consistent with semicolons
- Example of a Function: 
```
function triple(num) {
   return 3 * num;
}
triple(5)
```
- Example of a function with conditionals inside:
```
function isOldEnoughToDrink(age) {
   if(age >= 21) {
     return true;
   } else {
     return false;
   }
}

isOldEnoughToDrink(18);

```
### Objects
- You define (and create) a JavaScript object with an object literal.
- Spaces and line breaks are not important. An object definition can span multiple lines.
- The name:values pairs in JavaScript objects are called properties.
- Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.
- An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.
- Basiclly objects package property names and values in structured data 
- Example of an Object: 
```
var language = {
   name: 'Javascript'
   isSupportedByBrowsers: true,
   createdIn: 1995,
   author:{
      firstName: 'Brendan',
      lastName: 'Eich'
   },
//Yes, objects can be nested!
   getAuthorFullName: function(){
       return this.author.firstName + " " + this.author.lastName;
  }
//Yes, functions can be values too!
};//theres no comma here because its the last item in the object

language.name

"The creator of " + language.name + " is " + language.author.firstName + " " + language.author.lastName + "."

```
### Portfolio Notes
- Build something like Twillio into your portfolio
- Make a subscribe to newsletter section for people to stay updated on what you're doing
- Look into DevRel. DevRel focuses on maintaining and growing relationships with the ultimate goal of building advocacy, whereas developer marketing looks to build awareness and get developers into the funnel.
### Front End Masters
- Contact Jerome for a subscription code to Front End Masters
# Day 3
## ES6
### Arrow Functions
- Function expressions are best for object methods. Arrow functions are best for callbacks or methods like map, reduce, or forEach.
- Arrow functions do not have their own binding(can't use 'this' with arrow functions).They do not have lexical scope.
- Arrow functions cannot be used with contructors
- Used in higher level functions a lot 
- Use Mozilla MDN documentation for further info. 
- Example of the difference between traditional and arrow functions
```
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

```
- Default parameters have a predetermined value before you pass in any arguments
- If you have more than one parameter in arrow functions, you have to use parenthesis
- Example of a default parameter:
```
function square(num = 1) {
  return num*num;
}
square(); // returns 1
const squareArrow = (num = 1) => num*num;
squareArrow(); // returns 1
```
### Resources
- [MDN Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
### Homework
- Everything you learned this week, implement this into your portfolio and project
### Project comments
- Larger text box for contact message
- Certain character count before you are able to send contact message
- Twitter bird needs circle icon
- Job search needs to come after mentor and appy in the footer site map
- Video floated left and cards on the right 
- Cards should be the same length as the form 
- Pass the cards darkMode via javascript 
- onclick should check for the dark mode class. 'If darkmode do this'
- South Korea button may not make it to production 
- Have the social icons turn red on focus
- Once you select dark mode check to see if cards are populated
