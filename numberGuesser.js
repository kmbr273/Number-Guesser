let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  Math.floor(Math.random()*9);
};
const compareGuesses = (humanGuess, computerGuess, targetNumber) => 
{
  const humanDifference = Math.abs(targetNumber - humanGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);
  if (humanDifference <= computerDifference) {
    return true
  } else if (humanDifference > computerDifference) {
    return false
  }
};
const updateScore = (winner) => {
if (winner === 'human') {
  humanScore++;
} else if (winner === 'computer') {
  computerScore++;
}
};
const advanceRound = () => {
  currentRoundNumber++;
}; 