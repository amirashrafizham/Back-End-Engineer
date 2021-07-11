/*jshint esversion: 6 */
let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;
let ageRunner = 18;

if (ageRunner > 18 && registerEarly === true) {
  raceNumber += 1000;
  console.log(`Race will start at 9.30 am for runner number: ${raceNumber}`);
} else if (ageRunner > 18 && registerEarly === false) {
  console.log(`Race will start at 11.00 am for runner number: ${raceNumber}`);
} else if (ageRunner < 18) {
  console.log(`Race will start at 12.30 pm for runner number: ${raceNumber}`);
} else {
  console.log("Check the registration desk");
}
