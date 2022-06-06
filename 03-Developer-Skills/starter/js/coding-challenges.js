/*
   #############################
   ## 1. CODING CHALLENGE - 1 ##
   #############################
*/

// 1. Understanding the problem

// What will be passed?
// - Answer: An Array of forecasted tempratures
// - What are forecasted temperatures?
// - Answer: A simple Array of Numbers (In this case)
// - What to do with the array?
// - Answer: Convert array element to string with some additional string.
// 2. Break into sub-problems

// - Create a function 'printForecast'
// - parameters is an array
// - Run a loop
// - with each iteration, Concatenate a string with array element
// - create a 'daysCount' variable to count days

const tempForecast = [12, 5, -5, 0, 4];
function printForecast(temps) {

    let tempString = '...';
    
    for (let i = 0; i < temps.length; i++) {    
        tempString += `${temps[i]}C in ${i + 1} days ... `;
    
    }
    console.log(tempString);
}

printForecast(tempForecast);