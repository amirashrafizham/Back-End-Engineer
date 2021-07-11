/*jshint esversion: 6 */
const kelvin = 0; //this Kelvin's constant
const celcius = kelvin - 273; //this Kelvin's constant

let fahrenheit = Math.floor(celcius * (9 / 5) + 32); // this is to calculate fahrenheit with 0 decimal point
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
