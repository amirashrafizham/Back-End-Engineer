/*jshint esversion: 6 */
let input = "a whale of a deal!";
input.toLowerCase();

let vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (const iterator of input) {
  for (let index = 0; index < vowels.length; index++) {
    if (iterator === vowels[index]) {
      if (vowels[index] === "e") {
        resultArray.push(`${iterator.toUpperCase() + iterator.toUpperCase()}`);
      } else if (vowels[index] === "u") {
        resultArray.push(`${iterator.toUpperCase() + iterator.toUpperCase()}`);
      } else {
        resultArray.push(`${iterator.toUpperCase()}`);
      }
    }
  }
}

console.log(resultArray.join(""));
