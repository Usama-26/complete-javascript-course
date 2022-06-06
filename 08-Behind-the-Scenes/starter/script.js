'use strict';
// JavaScript Execution Syntax has three part,
// Variable Environment, Scope Chain, 'this' keyword

/* 
##############################
## 1. SCOPE AND SCOPE CHAIN ##
##############################
*/
// Scoping is a concept which explains how our variables are organized and accessed. 
// Lexical Scoping means Scoping is controlled by the placement of functions and blocks in the code
// A SCOPE is an environment where a variable live.

//  Scope of a Variable is region in code where our variable can be accessed.

// JavaScript has 3 types of scope.
// i. Global Scope
// ii. Function Scope
// iii. Block Scope (ES6)

// Global Scope: outside of any function or block
// It can be accessed anywhere in the code. for example:

const myName = 'Usama';
const age = 22;
let height = 5.7;

// Function Scope: Variables are only accessed within a function NOT outside the function
// Also called local scope
// It is only effective in 'strict mode'

function first(birthYear) {
    const now = 2021;
    const age = now - birthYear;
    return age;
    // These variables cannot be accessed outside of this function block
}

// Block Scope: Concept was introduced in ES6. 
// Block Scope is only applied to 'let', 'const' NOT on 'var'.
// This means if a variable is declared in 'if' or 'for' block using 'const' or 'let', it will not be accessible outside of the block. 
// But if the variable is declared using 'var' keyword, it will still be accessible outside of the block. For example

if (true) {
    const job = 'teacher' // this variable cannot be accessed outside of block
}

if (!true) {
    var millenium = true; // This variable can be accessed outside of this block
}

// SCOPE CHAIN

// Scope chain represents how variables will be accessed in nested declaration

/* const myName = 'Usama'; // This variable can be accessed anywhere in the function
function first() {
    const age = 30; // This variable can be accessed anywhere down in the function but not outside 'first' function (Global Scope)

    if (age >= 30) {
        const decade = 3; // This variable is accessible only withing this block (Block Scope)
        var millenial = true; // This variable can be accessed anywhere in this function because block scope doesn't apply on 'var'
    }

    function second () {
        const job = 'student' // Only accessible withing 'second' function.
        console.log(`${myName} is a ${age}-old ${job}`); 
    }

    second();

}

first();
 */
// Scope chain has downward heirarchy. A variable declared in any inner block or function cannot be accessed upwards.
// Variable lookup in scope chain is bottom to top.

/* 
##############################################
## 2. VARIABLE ENVIRONMENT_HOISTING AND TDZ ##
##############################################
*/

// A misconception about hoisting is that:
// It makes some variable accessible/usable before it actually declared in the code
// OR we say "Variables are lifted magically, at the top of their scope"
// But BEHIND THE SCENES, Before execution code is scanned for variable declarations, and for each variable a new property is created in the variable environment object.
// let's see which functions and variables are actually hoisted
// Function delcared with 'function' keyword are hoisted, with the initial value set to 'Actual function's value' and has a block scope. for example:

anyFunc(); 
function anyFunc() {
    console.log('I can be accessed before my declaration');// This function can be accessed before it is actually declared
}

// Variables declared with 'var' keyword are also hoisted. Initial value for these variables are set to 'undefined' and have a function scope
console.log(newVar); // This will display 'undefined'
var newVar = 'undefined before declaration';

// Variables declared with 'const' , 'let' are NOT hoisted. These are sort of hoisted but not in practice. Initial value will be set to 'Uninitialized' which simply means a Reference error in engine.
// Before the declaration of these type of variables, They're placed in so called 'Temporal Dead Zone' OR TDZ in short. 
// TDZ is a place from the beginning of the variable scope to its declaration.
// In simple words this means, we cannot access these variables in their scope, before declaration.
//console.log(notHoisted); // This will cause a reference error
const notHoisted = `I can't be accessed before my declaration`;

// Hoisting for function expressions and arrow functions depends whether they're created using 'let', 'const' or 'var'. Because they're just variables with a function value stored in them. 
// So, hoisting is same as variables for function expressions and arrow functions.

var varFunc = function () {console.log('I can be hoisted');}
const constFunc = function () {console.log(`I can't be hoisted`);}
let letFunc =  () => {console.log(`I can't be hoisted either`);} // Arrow function

/* 
#######################
## 3. 'this' Keyword ##
#######################
*/

// The 'this' is a special variable that is created for ever execution context OR we can say every function
// 'this' keyword points to the owner of the function in which it is used
// 'this' keyword is NOT static. It depends on the how function is called.
// It's value is only assigned when the function is actually called.
// Take a look at this example:

const myProfile = {
    myName : 'Usama',
    birthYear : '1999',

    calcAge : function () {
        console.log(this);
        return 2021 - this.birthYear; // Now 'this' keyword will point to owner of the function. In this case, 'myProfile'. // myProfile.birthYear
    }
}


// Method 👉 this = Object that is calling the method
// Simple function call 👉 this = undefined BUT only in 'strict mode' Otherwise it will point to global object which is (in the case of browser) 'Window'. 
// Arrow functions do not get their own 'this' keyword. Instead they take 'this' of surrounding functions (parent function). Also called lexical 'this'
// for Eventlistener function 'this' will always point to the DOM element with the handler attached. 
// 'this' keyword does NOT point to the function in which it is written, and also NOT to its variable environment.  

// let's use 'this' keyword with arrow function
const calcAgeArrow = birthYear => {
    console.log(this); // this will return 'Window' object in browser. lexical 'this'
    return 2021 - this.birthYear;
}

calcAgeArrow(1999);

// let's use the same with regular function call

/* const calcAge = function (birthYear) {
    console.log(this); // this will return 'undefined'. because this function has its own 'this' keyword which refers to nowhere. Hence, undefined.
    return 2021 - this.birthYear; // This will generate a TypeError to console. cause 'this' is undefined.
}

calcAge(1994); */


/* 
###################################
## 4. REGULAR VS ARROW FUNCTIONS ##
###################################
*/

// Let's take a look at 'this' keyword in Regular and Arrow functions in more details

const jonas = {
    firstName : 'Jonas',
    year : 1991,
    calcAge : function () {
        console.log(this.firstName); // Here 'this' keyword will refer to the 'jonas' object
    },
    greet: () => console.log(this.firstName) // But here 'this' keyword will refer to global object (window) because arrow function doesn't have own 'this' keyword and uses 'this' of global object.
    // Also here, this is not in a block scope because function greet is defined in an object called 'jonas', NOT in a control structure 'for' , 'if' etc.
    // Here the result will be 'undefined' because global object 'window' doesn't contain any 'firstName' variable.
    
};

// let's see if we have a nested function

const matilda = {
    firstName: 'Matilda',
    year : 1994,
    calcAge : function () {
        const age = 2021 - this.year;
        const isMillenial = function () {
            console.log(this); // Here this will result 'undefined'
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial(); // this function call will return a TypeError. Sometimes it is considered a bug in JavaScript but actually it is not
        // It is just how the 'this' keyword works. In a regular function call, 'this' keyword must be undefined
        // Now if copy this function outside in global scope, this will show the exact same result 'undefined' because there is no 'year' variable in the global scope as well.
        // There are two possible solutions for this problem
        // 1st declare a variable in outer function called 'self'.
        // Uncomment the code below to see the result.
        /* const self = this;

        const isMillenial = function () {
            console.log(self); 
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial(); */
        // This approach was used in ES5
        // 2nd is approach is to use arrow function.
        // arrow function will use the 'this' keyword of the parent function and won't create any error. Uncomment code below
        /* const isMillenial = () => {
            console.log(this); 
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial(); */
         // Now this will show true result
    }
}

matilda.calcAge();

// There are some 'arguments' keyword in regular functions.
// arrow functions do not get 'arguments' keyword.

const addExpr = function (a, b) {
    console.log(arguments); // this will display arguments passed to this function in the form of array
    return a + b;
}


/* 
##############################
## 5. PRIMITIVE VS. OBJECTS ##
##############################
*/

// Primitive values changes differently than Objects. For Primitive values we jave have to assign variable to another variable

let newAge = 30;
let OldAge = newAge;
age = 31;

// Code above will simple set age to 31 keeping the original age value (30) in oldAge variable.
// But for the reference types, it doesn't work this way. for example

const mySelf = {
    firstName : 'Usama',
    year : 1999
}

const yourSelf = mySelf;

yourSelf.year = 1994; // writing this will also change the value of 'mySelf.year' in 'mySelf' Object because we cannot copy objects this way as we were doing with primitive types.

// for this purpose, we will have to use a function called 'object.assign'.

yourSelf = Object.assign({}, mySelf) // Here we're creating an empty object and copying the data of 'mySelf' into that object.
// Now we can change the properties of 'yourSelf' without touching 'mySelf'
yourSelf.year = 1994;

// Here Object.assign creates a shallow copy of the object, not a deep clone. which means if we have an object deeply nested in another object, that will not be copied and will have the same effect if we change one.
