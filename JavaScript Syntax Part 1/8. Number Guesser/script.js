/*jshint esversion: 6 */
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  let targetHuman = Math.abs(target - currentHumanGuess);
  let targetComp = Math.abs(target - computerGuess);

  if (targetHuman < targetComp) {
    return true;
  } else if (targetComp < targetHuman) {
    return false;
  } else {
    return true;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
