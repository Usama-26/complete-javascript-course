'use strict';
/*
   ###############################
   ## 1. ACTIVATING STRICT MODE ##
   ###############################
*/
// Strict mode help us to write secure JavaScript and lessen the possibility of errors in our code.
// We can enable strict mode by writing this line of code:
'use strict';
// this line must always be placed on the top of script file.
// Strict mode can also be activated for individual function and code blocks.
// Let's see how it helps us to write clean and errorless code.

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriverLicense = true; // A new variable created because of JavaScript dynamic typing. 
    //with the strict mode enable, this variable will not be declared because declaring keyword is missing i.e var, const, let.
}

if (hasDriversLicense) {
    console.log(`I can drive.`);
} */
// Try running this program by activating and deactivating strict mode.
// with the strict mode enabled, this program will not just execute. while disabling strict mode will run the program but show no output because variable 'hasDriversLicense' is still set to 'false'. 

// Strict mode also guards some reserved keywords like 'interface', private, if etc. // examples below will show error on execution.

/* 
let interface = 'Audio';
const private = 123;
 */

/*
   ##################
   ## 2. FUNCTIONS ##
   ##################
*/

// A function is a piece of code which can be used multiple times in the code. A helps us to write maitainable, clear and short code.

// Syntax of a function..

function logger() { // Parenethesis here contains parameters.. parameters are simple variables OR values that we can pass as an argument to the function when function is called. Here, no parameters are defined so we have to pass no arguments while calling this function.
    console.log(`My name is Usama Afzal.`); // program to execute will be written inside the function body, the curly braces '{}'.
}

// This is called calling, invoking, running of a function.

 logger();

 // Let's write a function with some arguments.

 function fruitProcessor(oranges, apples) {
     const juice =  `Juice with ${oranges} oranges and ${apples} apples is ready.`;
     return juice; // functions also return some value. 'return' key word is used to return some specific value.
 }

// function changes to its return values after execution. so, if we write:

fruitProcessor(5, 0); // values passed in parenthesis are now called arguments.

// it will return some value but we haven't saved this value in any variable. hence there will be no output to console.

let appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice); // Now this will show output to console.

 // we can also directly log the function.

 console.log(fruitProcessor(2,4));

 // Examples of functions.. These are built-in funtions of JavaScript.
 /* console.log();
 Number(anyString); */

 /*
   ###############################################
   ## 3. FUNCTIONS DECLARATIONS VS. EXPRESSIONS ##
   ###############################################
*/

// We've seen function declaration above.. like 

const age = calcAge_1(1999); // In function declaration, we can call function before declaration in JavaScript. The same is not true for function expression.

function calcAge_1 (birthYear) {
    return 2021 - birthYear;
}

console.log(age);

// function expression: we can store functions in variables by not giving them a name.. This is also called anonymouse functions. 

const calcAge_2 = function(birthYear) {
    return 2021 - birthYear;
}

console.log(calcAge_2(1999));

 /*
   ########################
   ## 3. ARROW FUNCTIONS ##
   ########################
*/

// A third type of function called 'Arrow function' was introduced in ES6. Its syntax is similar to 'Function Expression' but we omits 'function' keyword and adds a symbol '=>'. that's why this is called arrow function.

const arrowAge = birthYear => 2021 - birthYear; // we can omit parenthesis if there's only one parameter, curly braces {} and 'return' keyword for one liner function.
// arrow functions are good one liner functions. 
const age_2 = arrowAge(1999)
console.log(age_2);

const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2021 - birthYear;
        const retirementYears = 60 - age;

        return `${firstName} retires in ${retirementYears} years`;
}

console.log(yearsUntilRetirement(1999, 'Usama Afzal'));

 /*
   #########################
   ## 4. FUNCTIONS REVIEW ##
   #########################
*/

// The return statement immediately terminates a function. so anything written after the return statement, will not be reached.
// Function parameters are a local scope variable of the function. no matter for how many times we define the parameter with the same name to many functions. these parameters will always be different from the others.

// in the above example, we have 'birthYear' parameter in 3 functions. but it is always different for every individual function.
// to execute a function, we use parenthesis.

 /*
   #############################
   ## 5. CODING CHALLENGE - 1 ##
   #############################
*/

// In a separate file, coding-challenges.js

/*
   ###############
   ## 6. ARRAYS ##
   ###############
*/

// Arrays are the first and primary data structure in JavaScript.

const friends = ['Azhar', 'Dilawar', 'Adnan'];
// we can log entire array for test but this will not produce a proper value.
console.log(friends);
// To access the elements in the array, we have to write index number of the element in brackets.

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
// Arrays are zero based, which means the starting index of any array will be zero.

// we can also change any element of array:

friends[2] = 'Arslan';
console.log(friends);

// Point to ponder: One thing to notice here that we declared 'friends' array as 'const' and now we're changing it and it didn't show any error.. that's because an array element is not primitive.. 'const' adds this restriction to primitive types only. but if we do like this:

//friends = ['Waqas', 'Hassan', 'Muzaffar']; // Now this will cause an error.

// In JavaScript, a single array can hold many types of data.
/* const firstName = 'Usama';
const Usama = [firstName, 'Afzal', 2021-1999, 'Student', friends]; */

// we can write any expression as an element because an expression return a value.

//console.log(Usama);

// To find the number of the elements in any array, we write:

//console.log(Usama.length);

const years = [1994, 1996, 1999, 2006];

// To access first and last element of the array we can write:

console.log(years[0]); // To access first element
console.log(years[years.length - 1]); // To access last element

// we can also write function as array elements. because after execution a function returns a value.

const ages = [calcAge_2(years[0]), calcAge_2(years[1]), calcAge_2(years[2]), calcAge_2(years[3])];

console.log(ages); 

/*
   ########################################
   ## 8.BASIC ARRAY OPERATIONS (METHODS) ##
   ########################################
*/

// There are some built-in methods available in JavaScript that performs some basic operations on arrays

friends.push('Bilal'); // 'push' function adds an element in the last of the array
console.log(friends); 
// since push is a function, it returns some value. so what 'push' function returns is new length of the array. we can also check length of the array by saving this function in a variable.

const newLength = friends.push('Farhan');

console.log(friends);
console.log(newLength);

// There's also a function to push an element in the front of the array called 'unshift'.

friends.unshift('Abdul Wahab');
console.log(friends);

// To remove an element from the last, we use 'pop' function. this function doesn't need any arguments.

friends.pop();
console.log(friends);

// Another function to remove element from the start is 'shift' function. which also doesn't need any arguments.

friends.shift();
console.log(friends);

// 'indexOf' function is used to find the index of a particular element in the array.

console.log(friends.indexOf('Arslan'));
//but if an element is not present in the list, it will return -1.
console.log(friends.indexOf('Amir'));
// for this case, we have a better replacement in JavaScript which was introduced in ES6. 
// 'includes' function returns a boolean value if an element is present in the array or not.

console.log(friends.includes('Dilawar'));
console.log(friends.includes('Shameer'));

// 'includes' function is useful in conditions.

if(friends.includes('Azhar')) {
    console.log("I have a friend called Azhar");
}

/*
   ###############
   ## 9.OBJECTS ##
   ###############
*/

// Objects are another data structure in JavaScript.
// The Advantage of object is that we don't have to care about the order of properties (elements in array). while in arrays the order of elements matters a lot.

// There are many ways to create objects in JavaScript. but this is the simplest and easiest one.

const myProfile = { // instead of square brackets (as in array) we use curly braces for objects. This methods is called object literal Syntax.
    firstName: 'Usama', // this whole line is called a property of the object. which contains key value pairs. 'firstName' is key, which have a value of 'Usama' assigned to it.
    lastName: 'Afzal' ,
    age: 2021 - 1999, // A property can also have expression.
    job: 'student',
    friends: ['Sikander', 'Sufwan', 'Sajeel'] // A property can also have array as value.
}

/*
   #################################
   ## 10.DOT VS. BRACKET NOTATION ##
   #################################
*/

// There is two ways to get a property value from an object.

// Dot Notation.

console.log(myProfile.firstName);

// We can not write expressions in dot notation. But there's another notation.
// Bracket Notation.
console.log(myProfile['age']);
// It's same as achieving the element from an array.

const nameKey = 'Name';

console.log(myProfile['last' + nameKey]);
/* 
const InterestedIn = prompt('What do you want to know about me? Choose from First Name, Last Name, Age, Job, Friends.');

if (myProfile[InterestedIn]) {
    console.log(myProfile[InterestedIn]);
}
else {
    console.log(`Wrong request, Choose from First Name, Last Name, Age, Job, Friends.`);
} */

// we can also add new keyvalue pairs later using dot notation and bracket notation as well.

myProfile.location = 'Pakistan';
myProfile['twitter'] = '@26Strider';

console.log(myProfile.location);

// Quick Challenge

 console.log(`${myProfile.firstName} has ${myProfile.friends.length} friends, and his best friend is ${myProfile.friends[0]}.`);

 /*
   #######################
   ## 11.OBJECT METHODS ##
   #######################
*/

// We can also write methods as object properties.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Wilson'],
   /*  calcAge: function(birthYear){
        return 2021 - birthYear;
    } */

   /*  calcAge: function() {
        return 2021 - this.birthYear; // 'this' keyword is Javascript reserved keyword which refers to the object holding the value. It helps us to achiever DRY approach. (Don't Repeat Yourself)
    } */

    // Another Variation: we can also create a new property using 'this' keyword.
/*     calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    
    hasDriverLicense: true,

    summary: function() {
        return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} Driver's License.`;
    } */
}
// calling function in both dot and bracket notation.
/* console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas['calcAge'](jonas.birthYear)); */
/* 
console.log(jonas.calcAge());
console.log(jonas.age);
// by creating age variable using this keyword, we now have to calculate age only single time. Afterwards we can use 'age' property to achieve age.
console.log(jonas.age);

// Quick Challenge

console.log(jonas.summary());
 */
/*
   ##############################
   ## 12. CODING CHALLENGE - 3 ##
   ##############################
*/

// In a separate file, coding-challenges.js

/*
   ##############################
   ## 13. ITERATION - FOR LOOP ##
   ##############################
*/

// Loops are used to execute a piece of code multiple times without writing it again and again.
// In usual way we do it like this.
/* console.log("Weight lifting repetition 1");
console.log("Weight lifting repetition 2");
console.log("Weight lifting repetition 3");
console.log("Weight lifting repetition 4");
console.log("Weight lifting repetition 5"); */
// so what are we doing here is just writing the same piece of code again and again but only changing a number.
// loops allows us to do it in a single line of code.
/* 
for (let rep = 1; rep <= 5; rep++) {
    console.log("Weight lifting repetition " + rep);
} */

// let's break it down.. variable 'rep' is repetition which is counter. next we are defining the condition that how many times the code will be executed ( in this case: 5).. then we're increasing the value of 'rep' by 1 using increment. and inside the block we have placed the code to be executed.

/*
   ####################################################
   ## 14. LOOPING ARRAYS, BREAK, CONTINUE STATEMENTS ##
   ####################################################
*/

// We can iterate arrays using for loop. let's iterate jonas object here

const usamaArray = [
    'Usama',
    'Afzal',
    2021 - 1999,
    'student',
    ['Azhar','Adnan', 'Dilawar']
]

const types = [];
// Here we're iterating this array to its length
for (let i = 0; i < usamaArray.length; i++) {
    console.log(usamaArray[i], typeof usamaArray[i]);
    // let's say we want to store data types into another array. we define empty array outside of for loop and then write this code:
    types.push(typeof usamaArray[i]);
}

console.log(types);

// Another Example 

const birthYears = [1994, 1995, 1996, 1999];

const calcAges = [];

for (let i = 0; i < birthYears.length; i++) {
    calcAges.push(2021 - birthYears[i]);
    
}
console.log(calcAges);

// CONTINUE Statement

// CONTINUE statement is used to skip a single iteration based on some condition

console.log('---- STRING ONLY ----');

for (let i = 0; i < usamaArray.length; i++) {
    if (typeof usamaArray[i] !== 'string') continue;
    console.log(usamaArray[i]);
}

// BREAK statement is used to terminate loop based on some condition.
console.log('---- Break on number ----');
for (let i = 0; i < usamaArray.length; i++) {
    if (typeof usamaArray[i] === 'number') break;
    console.log(usamaArray[i]);
}

/*
   ###############################################
   ## 15. LOOPING ARRAYS BACKWARDS, NESTED LOOPS##
   ###############################################
*/

// To loop an array backwards, we set the counter to the last item:
console.log('---- Backwards iteration ----');
for (let i = usamaArray.length - 1; i >= 0; i--) {
    console.log(usamaArray[i]);
}

// Nested Loop: A loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log('Starting exercise ----- ' + exercise);
    // after this statement is executed, a new loop will be created and fully iterated. This will be the first repetition of exercise and so on.
    for (let i = 1; i < 6; i++) {
        console.log('Weight lifting repetition ' + i);
    }
    
}
/*
   ####################
   ## 16. WHILE LOOP ##
   ####################
*/

// While works same as for loop but in a different syntax

let count = 0; // we write our counter variable outside the loop

while (count > 5) { // We only specify condition here and then the code withing code block.
    console.log('Kilometer Passed: ' + count);

    count ++; // And here is increment for counter variable
}

// While loop is more versatile than for loop when we don't know the number of iteration.
// like when we want to iterate some statement based on a condition. for example: rolling a dice.
// we stop when the dice hit 6. for random numbers we write this code below:

let dice = Math.trunc(Math.random() * 6) + 1; // let's just do not think about this code for now. we'll talk about it in later sections. just write as it is.

while (dice !== 6) {
    console.log("You rolled a " + dice);
    dice = Math.trunc(Math.random() * 6) + 1; // here again we assigning a new value to the dice, otherwise it will be a infinite loop, and will crash browser.

    if(dice === 6) {
        console.log("You hit 6. Turn over"); 
    }
    // Just to know about when we hit 6
}

// If dice = 6 at the start, the loop will simply terminate without a single iteration.

/*
   ##############################
   ## 17. CODING CHALLENGE - 4 ##
   ##############################
*/
// In a separate file, coding-challenges.js