function guessingGame(target) {
  let count = 0;
  let gameOver = false;
  return function check(guess) {
    if (gameOver === true) {
      return "The game is over, you already won!";
    }
    count++;

    if (guess > target) {
      return `${guess} is too high!`;
    } else if (guess < target) {
      return `${guess} is too low!`;
    } else {
      gameOver = true;
      return `You win! You found ${guess} in ${count} guesses.`;
    }
  };
}

module.exports = { guessingGame };
