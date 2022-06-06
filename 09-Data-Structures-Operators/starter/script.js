'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  title: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelievery: function ({
    // we can also write default values
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here's your pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/* 
############################
## 1. ARRAY DESTRUCTURING ##
############################
*/

// Array destructuring helps us to extract values from an array in a smarter way
// Destructuring does not affect original array at all

/* 
const category1 = restaurant.categories[0];
const category2 = restaurant.categories[1];
const category3 = restaurant.categories[2]; 
*/
// Old Method ⬆
// Method given below was introduced in ES6

const [a, b, c] = [
  restaurant.categories[0],
  restaurant.categories[1],
  restaurant.categories[2],
]; // Destructuring Syntax
console.log(a, b, c);

// Retrieving Multiple values using only function call

let [first, second] = restaurant.order(1, 2);
console.log(first, second);

// Using destructuring to swap values without third variable
let [primary, secondary] = [2, 5];
console.log(primary, secondary);
[secondary, primary] = [primary, secondary];
console.log(primary, secondary);

// Skipping a value in an array

const [main1, , main3] = restaurant.mainMenu; // value 'Pasta' has been skipped using hole (empty commas)
console.log(main1, main3);

// Default values
const [i = 1, j = 1, k = 1] = [8, 9]; // 'i' and 'j' will be replaced with assigned values, 'k' remains 1.

// If we're accessing an element that doesn't exist in array, we will get 'undefined'
const [w, x, y, z] = restaurant.mainMenu;
console.log(w, x, y, z); // z = 'undefined'

//Destructuring nested arrays
const nested = [2, 4, [6, 8]];
const [p, , [r, s]] = nested; //'r', 's' will point to '6' , '8', p points to '2', '4' is left empty.
console.log(p, r, s);

/* 
##############################
## 2. OBJECTS DESTRUCTURING ##
##############################
*/

// We use curly braces {} for destructuring objects. variable name must match the property names in the objects
const { title, starterMenu, mainMenu } = restaurant;
console.log(title, starterMenu, mainMenu);

// Custom variable names for object properties
const {
  title: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant; // order of object properties doesn't matter
console.log(restaurantName, tags, hours);

// Default values for objects destructuring

const { menu = {}, starterMenu: starter = {} } = restaurant; // 'menu' property doesn't exist in 'restaurant' object. this will show 'undefined' in case if default value is not set.
console.log(menu, starter);

// Mutating Variables
let a1 = 999;
let b1 = 111;
const obj = { a1: 23, b1: 7, c1: 14 };
({ a1, b1 } = obj); // Unlike arrays, we use parenthesis () for reassigning object to variables
console.log(a1, b1);
// Destructuring Nested Objects

const {
  fri: { open: on, close: off },
} = restaurant.openingHours;
console.log(on, off);

// let's implement orderDelievery Function
// Here we are passing an object, a single argument to the function
restaurant.orderDelievery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelievery({
  address: 'Via del sole, 21',
  time: '19:00', // Rest of the object will get default values specified in the function
});

/* 
################################
## 3. THE SPREAD OPERATOR ... ##
################################
*/

// The spread operator is used to expand or unpack an array or any iterables in JavaScript..
// Iterables: Strings, Maps, Sets, Arrays.. NOT Objects

const numberArr = [7, 8, 9];
const Oldway = [1, 2, numberArr[0], numberArr[1], numberArr[2]]; // OR we could use iterative approach
const newArray = [1, 2, ...numberArr]; // same as [1,2,7,8,9]. It's also copying an array to new array
console.log(newArray);
console.log(...newArray); // same as 1,2,7,8,9
//console.log(`${...newArray}`); '...' doesn't work in template literals

// Adding elements in existing arrays

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Merging two OR more arrays

const finalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(finalMenu);

// Unpacking Strings

const nameStr = 'Usama';
const nameArr = [...nameStr];
console.log(nameArr);

// Let's pass expand an array as arguments in the function

//const ingredients = [prompt('Let\'s make pasta with ingredient 1?'), prompt('ingredient 2?'), prompt('ingredient 3?')]; // Backslash '\' called Escape Sequence. it tells function NOT to stop at this quote mark

//restaurant.orderPasta(...ingredients);

// Before ES 2018, spread operator was also applied on objects even if they're not Iterables
// '...' on Objects

const updateRestaurant = { founded: 1998, ...restaurant, founder: 'Guiseppe' }; // Order does not matter in objects. Remember!
console.log(updateRestaurant);

// Copying Objects

const restaurantCopy = { ...updateRestaurant };
restaurantCopy.name = 'Ristorante Roma'; // This value will not be changed in original object unlike we saw in previous section.. "Primitive Vs. Objects"
console.log(restaurantCopy.name);
console.log(restaurant.name);

/* 
##########################################
## 4. THE REST PATTERN & PARAMETERS ... ##
##########################################
*/

// REST pattern looks exactly the same as SPREAD pattern '...', But it is placed before the assignment operate '='
// REST pattern does exactly opposite of the SPREAD pattern
// REST pattern joints the free elements into an array

const [num1, num2, ...others] = [1, 2, 3, 4, 5];
console.log(num1, num2, others);

// Addition function using REST pattern

function add(...numbers) {
  // '...' will work as REST pattern in parameters
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}
console.log(add(1, 2, 3, 4, 5));

const numArr = [3, 5, 2, 6, 1, 1, 6, 3, 7, 4, 2];
console.log(add(...numArr)); // '...' will work as SPREAD pattern while passing arguments

// Implement orderPizza function

restaurant.orderPizza('mushrooms', 'olives', 'spinach', 'onions');

/* 
#####################################
## 5. SHORT CIRCUITING (&& AND ||) ##
#####################################
*/

// Short circuiting with OR
// Logical Operators also accept values other than boolean values
console.log('--- OR Short circuiting ---');

console.log(0 || 'Hello'); // Here, '0' is a falsy value, so OR operator will simply ignore this value and move onto next one. So the result will be 'Hello' here.
// This is something called 'Short Circuiting'

console.log(99 || 'Hello'); // In this case, the result will be '99'... because it is a tuthy value.. operator will not even look at second option

// Multiple values

console.log('' || undefined || null || 100 || 0); // Here's the first truthy value will be executed.. result = 100

// A more practical example

// const guestQty1 = restaurant.guestQty ? restaurant.guestQty : 10; // Here if the 'guestQty' is not set or undefined, OR will simply move to default value which is '10'.
//console.log(guestQty1); // Here the result will be '10' because 'guestQty' is undefined.

// restaurant.guestQty = 20;
// const guestQty2 = restaurant.guestQty ? restaurant.guestQty : 10; // result = 20, 'guestQty' has truthy value '20'
// console.log(guestQty2);

// In above two examples, we used ternary operator or we may use if else... but we can just simply replace both these with OR shortcircuiting..

console.log(restaurant.guestQty || 10); // This will return 10 because 'guestQty' is undefined.. but if we uncomment declaration at line 243.. it will result in actual value of 'guestQty', which is 20.

console.log('--- AND Short circuiting ---');
// '&&' operater does exactly the opposite of OR operator
// Which means it will return 2nd value if the 1st value is truthy.

console.log(99 && 'Usama'); // result = "Usama", '99' is truthy value

console.log(23 && 'Jonas' && null && true && ''); // '&&' operator will move on to the next one until a false value is reached. result = null

// A more practical example
restaurant.orderPizza && restaurant.orderPizza('barbeque', 'olives', 'carrot'); // result = orderPizza function because 'restaurant.orderPizza' is true

/* 
##########################################
## 6. THE NULLISH COLESCING OPERATOR ?? ##
##########################################
*/

// Problem with OR shortcircuiting that if first value is 0, it will move to next one because 0 is falsy value.
// To tackle this problem we've another operator '??' called Nullish Colescing Operator (ES2020);
// This will only ignore nullish values which are: null and undefined
// A practical example

restaurant.guestQty = 0;

console.log(restaurant.guestQty ?? 10); // This will print 0 because it is not a nullish character

/* 
############################
## 7.CODING CHALLENGE - 1 ##
############################
*/

/* 
#########################################
## 8. LOOPING ARRAYS - THE FOR-OF LOOP ##
#########################################
*/

// The for-of loop is an ES6 syntax to loop arrays in much simple and better way

const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...newMenu.entries()); // .entries() function creates an array from the array with its index numbers
for (const [i, el] of newMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/* 
#####################################
## 9. ES6 ENHANCED OBJECT LITERALS ##
#####################################
*/
/* 
// For this practice, we copy restuarant object here...
// ES6 has multiple enhancements in object literals
//1. we can use object inside objects by just writing variables names
//2. We don't have to create properties to store values of other objects and for writing function expressions
//3. we can compute property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // We can compute property names like so
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${4 + 2}`]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  title: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // We can just omit ':' in function expressions
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // we can just write variable name of other objects instead of creating property for them
  openingHours // like so
};
 */

/* 
#####################################
## 10. ES2020 OPTIONAL CHAINING ?. ##
#####################################
*/

// Optional chaining was introduced in ES2020 to make more easier to check if a property, method etc. exists or not
// let's say we want to check if restaurant is open on monday or not.. in old way

/* if(restaurant.openingHours.mon) {
  console.log(`We open at ${restaurant.openingHours.mon.open}`); // in this case it will result in an error. because 'mon' doesn't exist
} */

// New way

console.log(restaurant.openingHours.mon?.open); // This will result in undefined if expression at the left doesn't exist
// now let's try with something that does exist

console.log(restaurant.openingHours.fri?.open); // 11

// Optional chaining works methods and arrays as well
console.log(
  restaurant.orderRissoto?.restaurant.orderRissoto() ?? 'Methods does not exist'
);
console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist'); // Here we're saying if that methods exists, call it.
// for arrays

const users = [{ userName: 'Usama', email: 'Usama@example.com' }];
// Now we want to check if the element exists in user array or not
console.log(users[0]?.userName ?? 'Array is empty');

/* 
###########################################################
## 11. LOOPING OBJECTS, OBJECTS KEYS, VALUES AND ENTRIES ##
###########################################################
*/

// Since objects are not iterables so thay can not be iterated, but we can iterate objects in an indirect way
// For Names
const properties = Object.keys(restaurant.openingHours);
console.log(properties); // An array of property names or keys of openingHours object
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
// For Values
const objectValues = Object.values(restaurant.openingHours);
console.log(objectValues); // it will just display values inside an object but not the keys names
// For both values and key names we use .entries() method, once we used before
// For [key, value]
const objectEntries = Object.entries(restaurant.openingHours);
console.log(objectEntries);
for (const [key, { open, close }] of objectEntries) {
  // Object destructuring
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/* 
#############################
## 12.CODING CHALLENGE - 2 ##
#############################
*/

/* 
#############
## 13.SETS ##
#############
*/

// Sets are another data structure in JavaScript.
// A set is unique collection of elements where order of element does not matter... Sets always contain unique elements..

const orderSet = new Set(['Pizza', 'Rissotto', 'Pizza', 'Pasta']);
console.log(orderSet); // it will remove duplicate items
console.log(orderSet.size); // .size method is used to determine the size of the set
orderSet.add('Garlic Bread'); // .add method is used to add new element into set
console.log(orderSet.add('Garlic Bread')); // new item will be added only one time
orderSet.delete('Pizza'); // .delete method deletes specified element from the set
// console.log(orderSet.clear); // .clear is used to empty set
// Sets are iterables, we can loop over them

for (const order of orderSet) {
  console.log(order);
}
// we can unpack arrays in set, and make arrays from sets because both are iterables

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique); // Will display unique entries.
// A string is also iterable, we can also make set of strings

console.log(new Set('Usama Afzal')); // it will display unique character of the string

/* 
#############
## 14.MAPS ##
#############
*/
// Maps is another data structure used in JavaScript
// It is similar to objects but you can store any value in key like boolean, array, object etc.
// Syntax is similar to sets.. let's create a restaurant map

const newRestaurant = new Map();
// We can use .set method here which is similar to .add method in Sets, set method also returns a set
newRestaurant.set(1, 'Firenze, Italy');
newRestaurant.set(2, 'Lisbon, Portugal');
console.log(newRestaurant.get(1)); // .get method is used to get a property from the map

newRestaurant.set('categories', [
  'Italian',
  'Pizzeria',
  'Vegeterian',
  'Organic',
]);
// .set method also allows to chain set methods
newRestaurant
  .set('open', 11)
  .set('close', '23')
  .set(true, "We're Open")
  .set(false, "We're Close");
console.log(newRestaurant);
// Maps also has .size, .clear and .delete methods, which work in same way as sets
newRestaurant.has('categories'); // .has method is similar to .includes method of array
// // we can also pass arrays to maps as key
const arr = [1, 2];
newRestaurant.set(arr, true); // we cannot pass arrays directly because it will return undefined
console.log(newRestaurant.get(arr));
// we can even pass DOM elements as key
newRestaurant.set(document.querySelector('h1', 'Heading')); // will only work in browser
console.log(newRestaurant);

/* 
#######################
## 15.MAPS ITERATION ##
#######################
*/

// Like arrays and sets, maps are also iterable
// let's create an quiz app
// Another way of creating maps is directly passing the values
const question = new Map([
  ['question', 'What is the best programming langauage in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
// const answer = Number(prompt('Your Answer?'));
// console.log(question.get(question.get('correct') === answer));

// We can easily convert an object to map using .entries because both basically are an array of arrays

const mapFromObject = new Map(Object.entries(restaurant.openingHours));
console.log(mapFromObject);

/* 
#############################
## 17.WORKING WITH STRINGS ##
#############################
*/

const airline = 'TAP Air Portugal';

