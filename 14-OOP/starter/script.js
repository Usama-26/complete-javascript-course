'use strict';

/* 
#################################
## 1. The Constructor Function ##
#################################
*/

// A constructor function is more like a regular function
// Starts with with capital letter- general convention
// constructor function used to create prototype which then is used to create objects of that prototype
// can only be written in regular functions or function expression but NOT in arrow function beucause they don't have 'this' keyword in them.

const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  // here we're creating two instance of properties of prototyped object Person
  // name of the properties can be different but it's good practice to keep the name same as function parameters
  // we can also include methods in the object but that is a REALLY REALLY BAD practice.. because it affects efficiency of our code.
}

const jonas = new Person('Jonas', 1991); // 'new' keyword is used to create object of the prototype 'Person'.
// All the properties or methods of that prototype will be available to that objectn

console.log(jonas);
// we can extract a specific property of the instance
console.log(jonas.firstName, jonas.birthYear);

// let's create more objects

const matilda = new Person("Matila", 2001);
const jack = new Person("Jack", 1975);

// To check if an object is the instance of some of prototype, we use 'instanceof' keyword
console.log(matilda instanceof Person); // this will return a boolean value

/* 
#######################
## 2. The Prototypes ##
#######################
*/

// Prototypes are the properties that all the functions contain in common, including constructor function
// All the objects of the constructor function will have the access to the properties or methods of its prototype
console.log(Person.prototype); 
console.log(jonas.__proto__); // it will display a constructor function as its prototype
// Prototypes are defined on the objects or instance of the constructor function, so they're associated to the objects and NOT on the Prototype in this case, 'Person'.
// we can define properties and methods on the prototypes like thin

Person.prototype.calcAge = function() {
  return 2037 - this.birthYear;
}
// Here we've avoided creating multiple copies of calcAge function in each object
// Now we can call this method to all the objects of type of 'Person'
console.log(jonas.calcAge());
// Now 'calcAge' method is not defined in 'Person' but in the prototype associated to it.. it can only be called by the objects... so we can say that Person.prototype is basically the prototype of linked objects
// We can also check that by using...
console.log(Person.prototype.isPrototypeOf(jonas)); // this will result in true

// Prototype can also contain properties like...
Person.prototype.species = 'Homo Sapiens';
console.log(matilda.species); // Now this has become the property of the linked objects
// Now if we check that if any instance have this property on not we can do something like...
console.log(jonas.hasOwnProperty('species')); // that will result in true