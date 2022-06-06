// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM: 
// We work for a company building smart home thermometer. One most recent task is this: Given an array of temprature of one day, calculate the temparture amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem:
// - What is temperature amplitude? 
// Answer: It is the difference between max and min temperature values.
// - How to compute max and min tempratures in an array?
// - How to handle sensor error?
// Answer: Just ignore it.
// What will function take as argument: Array of temperature

// 2. Breaking into sub-problems:

// - Calculate min and max values.
// - Calculate Temperature amplitude. (Subtract min value from max)
// - Handle sensor error.

/* function calcTempAmplitude (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') {
            continue;
        }
        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    console.log(max, min);
    
    return max - min;
}

 const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

// PROBLEM 2:

// Now function recieves 2 arrays of temprature

// Understanding the problem:
// Do we have to implement function 2 times? 
// Answer: NO.

// Breaking into sub-problems
// how to join two arrays?

// For exercise purpose let's write function again.
// Now function recieves two arrays

function calcTempAmplitude (temps1, temps2) {
    let temps = temps1.concat(temps2);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') {
            continue;
        }
        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    console.log(max, min);
    
    return max - min;
}

const amplitudeTwo = calcTempAmplitude([2,5,7,9], [12,6,18,3,7]);
console.log(amplitudeTwo);