/*jshint esversion: 6 */
const prompt = require("prompt-sync")();

const getUserChoice = (testInput) => {
  switch (userInput) {
    case "rock":
      return userInput;
      break;
    case "paper":
      return userInput;
      break;
    case "scissors":
      return userInput;
      break;
    default:
      return "error";
      break;
  }
};

const getComputerChoice = () => {
  let ranNum = Math.floor(Math.random() * 3);
  switch (ranNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "undefined";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
    case "rock":
      if (userChoice == "rock" && computerChoice === "rock") {
        return `DRAW!`;
      } else if (computerChoice === "paper") {
        return `LOST!`;
      } else if (computerChoice === "scissors") {
        return `WON!`;
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        return `WON!`;
      } else if (computerChoice === "paper") {
        return `DRAW!`;
      } else if (computerChoice === "scissors") {
        return `LOST!`;
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        return `LOST!`;
      } else if (computerChoice === "paper") {
        return `WON!`;
      } else if (computerChoice === "scissors") {
        return `DRAW!`;
      }
      break;
    default:
      return "ERROR!";
      break;
  }
};

const userInput = prompt("Pick either rock, paper or scissors : ");

const userChoice = getUserChoice(userInput);
const computerChoice = getComputerChoice();
console.log(`You chose ${userChoice} and computer chose ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
