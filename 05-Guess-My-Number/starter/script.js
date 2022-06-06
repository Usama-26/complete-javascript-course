'use strict';
/* 
  ######################################
  ## 1. Project - 1 : Guess My Number ##
  ######################################
*/
let randomGenerate = () => Math.trunc(Math.random() * 20 + 1);

let secretNumber =randomGenerate();

let guess = '';

let score = Number(document.querySelector('.score').textContent);
console.log(score);

let highScore = '';

let displayMessage = function (printString) {

  return document.querySelector('.message').textContent = printString;
}


document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if(guess <= 20 && guess > 0) {
      if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
  
        displayMessage("🎉 Yay! You guessed it");
  
        document.querySelector('body').style.backgroundColor = '#60b347';
  
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      }
      else if (guess > secretNumber) {
        displayMessage("📈 Too High!");
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage("📉 Too Low!")
      }
    } else {
      displayMessage('😕 Choose between 1 - 20');
    }
  }
  else {
    displayMessage("You lost the game");
    score = 0;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomGenerate();
  guess = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});