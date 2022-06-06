/*
   #############################
   ## 1. VARIABLES AND VALUES ##
   #############################
*/
//     alert("JavaScript is FUN!");
// let js = "amazing";
// if (js === "amazing")
//     alert("JavaScript is FUN!");

//PRINTING IN BROWSER

// using console.log() function prints the result in browser

// You can also print multiple values in browser by passing multiple arguments in console.log() separating it by comma.
// console.log("JS is", js);

/* console.log(50 + 83 + 1 + 20);

console.log("Jonas");
console.log("23"); */

// Variable is like a BOX which contains some content or item and that item or content is called VALUES.

//VARIABLE CONVENTIONS

// Multiple words are camelCase.. example below.
// let firstName = "Metila";
// Another popular way of writing variable is using underscore _. example below

// let first_name = "Jonas";

// cannot write a variable name starting with a number.. example below

// let 3years = 3;

// cannot use reserved keywords.. example below

// let new  = 27; OR function = 27;
// but we can write $new OR $function
// 
// some reserved keywords are legal to use.. for example 'name'
// although it is legal to use but in some cases it causes problem

// Another convention might be starting variable name with an UPPERCASE letter.. for example 'Person'.. it's not illegal but it is useful in OOP (Object Oriented Programming).

// writng variable name in all UPPERCASE marks a constant value.. which will not change in future.. VSCode colors this convention differently.

// write cleaner code.. for example

/*  myFirstJob = "programmer";
 mySecondJob = "Teacher";  */

// is better than

/*
job1 = "programmer";
job2 = "Teacher";  */

/*
   ###################
   ## 2. DATA TYPES ##
   ###################
*/

// VALUE

// A value is either an OBJECT OR PRIMITIVE.. If a value is not an object..then it's primitive.

// PRIMITIVE VALUES

// There are 7 primitive data types in JS.
/* 
1. NUMBER : Floating point numbers used for decimals and integers.. for example.. let age = 23; OR let length = 12.5;
2.STRING : Sequence of characters.. used for text for example.. let firstName = 'Jonas' OR let firstName = "Jonas"; String can be written in "" and "" but it is best practice to use '' for single letter and "" for string.
3. BOOLEAN : Logical data types.. holds only two possible values.. 'true' OR 'false'.. for example let fullAge = 'true'.

4. UNDEFINED: Value taken by variable that is not yet defined ('empty value') for example.. let child;

5. NULL : Also means 'empty value'

6. Symbol (ES2015): Value that is unique and cannot be changed

7. BigInt (ES2020) :  Larger Integers than the NUMBER type can hold
 
*/

// JAVASCRIPT DYNAMIC TYPING

// JavaScript also has dynamic typing.. which means we do not have to specify datatype of the value stored in the variable.. In JS, it's the value who define the data type, not the variable.
// In JS we can change the datatype of the a variable later in the code.
// for example, a variable 'x' may have a number type initially and can be changed to string later.

// 'typeof' operator
// by using typeof operator, we can find the type of any variable

/* let javascriptIsFun = true;

console.log(typeof javascriptIsFun);
console.log(typeof first_name); */

// if we assign a new value to an already existing variable we do not use 'let' keyword because it's already declared. like..

/* javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year); */

//'typeof' operator ERROR

// console.log(typeof null);
// this shows typeof null is 'object' but actually it's 'undefined'.


/*
   ########################
   ## 3. LET, CONST, VAR ##
   ########################
*/

// let and const keyword was introduced in ES6(ES2015). So, it's modern way to declaring variables. 'var' is old way.

// let keyword lets us change the value of variable later in the code.. for example

/* let age = 30;
// again at some point
age = 31; */

// variable with const keyword cannot be changed.. for example
/* 
const birthYear = 1991;
birthYear = 1990; */

// This will generate a TypeError in browser. Also we cannot declare empty const variables. like..

// const job;
//this will create a SyntaxError in Browser.

// we can also declare variable without using var, const, and var.. but it causes the variable to lose its scope and set it to global.. for example..

// lastName = "Schmedtmann";

// console.log(lastName);

/*
   ########################
   ## 4. BASIC OPERATORS ##
   ########################
*/

// Mathematical Operators +, /, -, *

// console.log(21 - 1, 12 / 2, 8 * 2, 2 ** 3, 5 + 3);
// 2 ** 3 means 2^3 = 2 x 2 x 2 

// '+' operator is also used to join strings or concatenate.
/* 
    const firstName = "Usama";
    const lastName = "Afzal";

    console.log(firstName + ' ' + lastName); */

// Assignment Operator '=' is used to assign a value to a variable.

/* let x = 10 + 5; // = 15
console.log(x); */

// if we use other mathematical operator +, -, /, * within assignment operator.. like this.. *=, +=.. etc.. this will do that operation with original value. for example..
/* 
x += 10; // = 25
console.log(x); */

//increment an decrement operator
/* 
x++; // this will increase value of x by 1 = 26
x-- // this will decrease value of x by 1 = 25
console.log(x); */

// comparison operator : >, <, >=, <=

/* const ageJonas = 36;
const ageSarah = 19;

console.log(ageJonas > ageSarah); //this will result a boolean value.. in this case 'true'
console.log(ageSarah <= 18); // =false */

/*
   ############################
   ## 5. OPERATOR PRECEDENCE ##
   ############################
*/

//  A complete reference for the JavaScript Precedence can be found here: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.

/* let x, y;

x = y = 25 - 10 - 5;

console.log(x, y); */

// in the above example, the subtraction will happen first and then the assignment. subtraction goes from left-to-right and assignment goes from right-to-left. 
// Mathematical Operation have a higher precedence over assignment..

/* const averageAge = (ageJonas + ageSarah) / 2;
// Here, sum of both ages will be calculated first because the parenthesis have the highest precedence and will be solved first.
console.log(averageAge); //  = 27.5 */

/*
 #############################
 ## 6. CODING CHALLENGE - 1 ##
 #############################
*/

//  In separete coding-challenges.js file

/*
 #####################################
 ## 7.STRINGS AND TEMPLATE LITERALS ##
 #####################################
*/

/* const firstName = "Usama";
const job = "student";
const birthYear = "1999";
const year = "2021";
// A common way to write Strings in other languages like JAVA is as follow:

console.log("I'm " + firstName + "a " + (year - birthYear) + " year old " + job + " !"); */

// In this way handling whitespaces is such a pain.. Here we have a solution for that.
// TEMPLATE LITERALS
// Instead of writing string in this way we can put our string in backticks '``'. This is called TEMPALTE LITERALS.. What this do is, it changes all content into one big string. example below.

// console.log(`I'm ${firstName} a ${(year - birthYear)} year old ${job} !`);
// See, we don't have to worry about managing whitespaces anymore.

// using ${expression, variable etc.} will print the value in template literal

// Multi line String
// In standard way, we have to write multi line string in this way:

/* console.log("String \n\
with multi\n\
line"); // we need to use another backslash unlike \n.
// but with template literals we can simply hit ENTER, and we're good to go.
console.log(`String
with multi
line`); */
/*
   ##################################
   ## 8. IF,ELSE CONTROL STRUCTURE ##
   ##################################
*/

// if, else control structure as follows:

/*   if() {

  }
  else {

  } */
// We take decisions in code with if, else statement. for example:

const ageBenny = 19;
const isOldEnough = ageBenny >= 18;

if (isOldEnough) {
  console.log("Benny is allowed to have Driving License🚗");
}
else {
  let yearsLeft = 18 - ageBenny;
  console.log(`Sorry, you've to wait ${yearsLeft} more years. :)`);
}
//Another Example 

const birthYear = 1999;
let century;
if (birthYear < 2000) {
  century = 20;
}
else {
  century = 21;
}
console.log(century);

/*
   #############################
   ## 9. CODING CHALLENGE - 2 ##
   #############################
*/

// In a separate file, coding-challenges.js

/*
   ######################################
   ## 10. TYPE CONVERSION AND COERCION ##
   ######################################
*/

// TYPE CONVERSION : we do this explicitly whenever we need to convert types of variables.
// JavaScript can only convert three types which are Number, Boolean, String. Example:

const inputYear = "1999";

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// Number(inputYear) will show in purple(Number) and inputYear will show in white (String).

console.log(String(23), 23);
console.log(Number('Jonas')); // Since this string contains letters instead of number it will produce 'NaN' in console which means "Not a Number".

// TYPE COERCION : JavaScript do it implicitly whenever it is required. It usually happens when we do a mathematical operation on two different type of variables.

console.log("I am " + 22 + " years old.");
// here JavaScript converted '22' to String. It is same as:
console.log("I am " + '22' + " years old.");
//Similarly JavaScript also converts number to string

console.log('22' - '14' - 7) // here '22' and '14' will be converted to number and result = 1
// !IMPORTANT This coercion applies on all operator except '+'. for example
console.log('22' + '14' + 7) // this wil convert 7 to string and resulting string will be = 22147

// guess the number

let n = '1' + 1 // = 11
n = n - '1';

console.log(n); // = 10

/*
   ################################
   ## 11. TRUTHY OR FALSY VALUES ##
   ################################
*/

// There are 5 falsy value: 0, '', undefined, null, NaN

// If we convert these values in boolean types, this will result in false.

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Jonas'));

const money = 10;

if (money) {
  console.log("Don't Spend it all");
}
else {
  console.log("You should get a job");
}


let height;
if (height) {
  console.log("YAY! Height is now defined");
}
else {
  console.log("Height is UNDEFINED");
}

/*
   ######################################
   ## 12. EQUALITY OPERATORS == VS === ##
   ######################################
*/

// There are two equality operators.
// '==' is called loose equality operator because coercion is allowed.
// '===' is called strict quality operator because coercion is not allowed.

/* let age = '18';
if(age == 18) {
  console.log("You just became an adult (loose)");
}
if(age === 18) {
  console.log("You just became an adult (strict)");
}

const favourite = Number(prompt("What's your favourite number?"))
console.log(favourite);

if(favourite === 23) {
  console.log(` ${favourite} is a cool number`);
} else if(favourite === 7) {
  console.log(`${favourite} is also a cool number`);
} else {
  console.log("Number is not 23 or 7");
}

// DIFFERENT or NOT operator

if(favourite !== 23) {
  console.log(`Why not 23?`);
}
 */

/*
   ##########################
   ## 13.LOGICAL OPERATORS ##
   ##########################
*/
// for  AND '&&' operator, all condition must be true.
// for OR '||' operator, either one of them must be true.
// NOT '!' operator inverts a condition.
const hasDriversLicense = true;
const hasGoodVision = true;

const shouldDrive = hasDriversLicense && hasGoodVision;


if (shouldDrive) {
  console.log(`Sarah is allowed to drive.`);
}
else {
  console.log(`Someone else should drive`);
}

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah should drive`);
}
else {
  console.log(`Someone else should drive.`);
}

/*
   ##############################
   ## 14. CODING CHALLENGE - 3 ##
   ##############################
*/

// In a separate file, coding-challenges.js

/*
   ##########################
   ## 15. SWITCH STATEMENT ##
   ##########################
*/

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday' (strict)
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case 'tuesday':
    console.log("Prepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("write code examples");
    break;
  case 'friday':
    console.log("Record videos");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy weekend");
    break;
  default: //default = else
    console.log("Not a valid day!");
}

if (day === 'monday') {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
}
else if (day === 'tuesday') {
  console.log("Prepare theory videos");
}
else if (day === 'wednesday' || day === 'thursday') {
  console.log("write code examples");
}
else if (day === 'friday') {
  console.log("Record videos");
}
else if (day === 'saturday' || day === 'sunday') {
  console.log("Enjoy weekend");
}
else {
  console.log("Not a valid day!");
}

/*
   ###################################
   ## 16. EXPRESSION AND STATEMENTS ##
   ###################################
*/

// Expression: Anything that produces a result. examples:
// 3 + 4, 1999, true && false & !false
// Statements; In programming, we perform action all the times. it doesn't produce any results.. for example:
// if else statement, switch statement. These statement perform some action like taking decision.

// In a more common sense, a DECLARATION is a sentence and EXPRESSIONS are the words that complete that sentence.

// template literals do not accept statements. for example 

// console.log(${if() {} else {}}) .. this code will be invalid.

/*
   ##########################
   ## 16. TERNARY OPERATOR ##
   ##########################
*/

// Ternary operator '?' is used for quick and smaller decisions.. and it acts like an expression which means we can write it in a template literal.
// Ternary operator is not a replacement for if else.. because it solves only one condition.
// Using ternary operator 

const age = 22;

const vehicle = age >= 18 ? console.log("You can drive a car 🚗") : console.log("You can drive a bike 🚲"); // All code must be placed in one line

// above code is same as:
if (age >=18) {
  console.log("You can drive a car 🚗");
} else {
  console.log("You can drive a bike 🚲");
}
const vehicle = age >= 18 ?  'car 🚗' : 'bike 🚲';

console.log(`You can drive a ${age >= 18 ?  'car 🚗' : 'bike 🚲'}`); // here's how we can use it in template literals.

/*
   #############################
   ## 17. CODING CHALLENGE -4 ##
   #############################
*/

// In a Separate file, coding-challenges.js