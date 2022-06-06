'use strict';
/* 
###########################
## 1. DEFAULT PARAMETERS ##
###########################
*/

// Default parameters of a function are usually placed when we have to set some default arguments
const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1, // setting default parameters
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};
createBookings('LH234', undefined, 800);
createBookings('LH234', 2);

/* 
##########################
## 2. PASSING ARGUMENTS ##
##########################
*/

// Passing values vs. reference types to functions, behave differently

const flight = 'LH123';
const passenger = {
  name: 'Usama Afzal',
  passport: 234155112
}
/* 
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // Here it will also change this property in original object
  if(passenger.passport === 23415115112) {
    alert('Checked In');
  } else 
    alert('Wrong passport');
}
checkIn(flight, passenger);
console.log(passenger); 
console.log(flight); 

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);// passport has also been changed in original object
}

newPassport(passenger);
checkIn(flight, passenger); 
console.log(passenger);
 */
/* 
######################################
## 3. FUNCTIONS ACCEPTING CALLBACKS ##
######################################
*/

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order Functions... Functions that accept as arguments or return functions

const transformer = function(str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', oneWord); // passing callback functions
transformer('JavaScript is the best', upperFirstWord);

/* 
######################################
## 3. FUNCTIONS RETURNING FUNCTIONS ##
######################################
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey'); // Here greet function is returning another function which is storing greeterHey
greeterHey('Usama');
greeterHey('Daniyal');
// We can also write it like this

greet('Hey')('Usama') // Passing arguments to all functions in function

// Using arrow functions, statement becomes shorter

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Jonas');

/* 
###############################
## 4. CALL AND APPLY METHODS ##
###############################
*/

//  call and apply methods are used to explicitly define the 'this' keyword for an object

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked and seat on ${this.airline}, flight ${this.iataCode}${flightNum}`);
  }
}
lufthansa.book(538, "Usama Afzal"); // So far it's good

// Now we're storing book function outside of scope

const book = lufthansa.book;
// let's create another object

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: []
}
// book(23, 'John David') // Will not work because 'this' keyword of the function is undefined here
// We've a method for explicitly defining 'this' keyword

book.call(eurowings, 241, "Jane Smith"); // this way, now this keyword pointing to eurowings object

// Another method is apply method, which accepts an array

const passengerFlight = [211, 'Williams Dough'];

book.apply(eurowings, passengerFlight); // it will work the same way
// In modern JavaScript we can skip the use of apply method by just using spread operator
book.call (eurowings, ...passengerFlight);

/* 
####################
## 5. BIND METHOD ##
####################
*/

// bind method works in similar way but instead of instantly calling the function, it returns another function
const bookLH = book.bind(lufthansa);
bookLH(587, 'Daniel Scott');
const bookEW = book.bind(eurowings);
bookEW(110, 'Samantha Hyke');
// it prevents the writing of .call method again and again
const bookEW23 = book.bind(eurowings, 23); // we can hardcode some initial arguments as well
bookEW23('Sean Austin'); // here we only have to pass 2nd argument in this case

// There could be other implementations of using .bind method, for example using with event handler functions

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this); // Here 'this' points to lufthansa object
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // Here buyPlane function is being called by event handler function.
// event handler function point 'this' keyword to the element on which they are attached.. in this case .buy element
// Here we can use bind method to point to the lufthansa object
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Another use case may be Partial Application, in which we don't care about 'this'.. but we still use bind method for that.. Partial Application means that we can preset parameters

// REMEMBER: First argument of bind function is 'this' keyword

/* const addTax = (rate, value) => value + value * rate;
// let's we have another function here, which sets the rate parameter
const addVAT = addTax.bind(null, 0.23) // We can pass null to skip 'this' keyword argument
// It is same as
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
 */

// Quick Challenge

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT = addTax(0.23);
console.log(addVAT(100));

/* 
######################################################
## 7. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE ##
######################################################
*/

// IIFE are those functions which can only run once.. it's not a  feature of JavaScript but a pattern developed by some developers and is now used by the others as well

/* function () { // This function requires a function name
  console.log('Will show an error')};
} */

// we can make it work by wrapping above function into parenthesis
(function () { // This function requires a function name
  console.log('This function will run only once.')})();
// Same for the arrow

(() => console.log('This Arrow function will run only once'))();
