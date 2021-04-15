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
- make function names meaningful. Self documenting code. 
- be consistent with semicolons
- Example: 
```
function triple(num) {
   return 3 * num;
}
triple(5)
```
- Example:
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
- made a function that passes
- true false undefined or null is an object
- packaging property names and values in structured data 
- how to use a javascript 
- Example
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

### Portfolio Notes
- build something like twillio into your portfolio
- make a subscribe to newsletter section for people to stay updated on what you're doing
- Look into DevRel. DevRel focuses on maintaining and growing relationships with the ultimate goal of building advocacy, whereas developer marketing looks to build awareness and get developers into the funnel.
