/*jshint esversion: 6 */

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
secretMessage.pop();
secretMessage.push("to", "program");
//secretMessage[secretMessage.indexOf("easily")] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");

let indexStart = secretMessage.indexOf("get");

secretMessage.splice(indexStart, 5, "know");
console.log(secretMessage.join(" "));
