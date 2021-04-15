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
- [gatsby](https://www.gatsbyjs.com/)
- [aboutmonica](https://aboutmonica.com/)
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
