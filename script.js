'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
const checkButton = document.querySelector('.check');

document.querySelector('.number').textContent = secretNumber;

checkButton.addEventListener("click", function () {
    const infoText = document.querySelector('.message');
    const guessValue = Number(document.querySelector('.guess').value);


    if (!guessValue) {
        infoText.textContent = '⛔ Add valid number!';
    } else if (guessValue === secretNumber) {
        infoText.textContent = '🏆 You guessed correct!'
    } else if (guessValue > secretNumber) {
        if (gameScore > 1) {
            gameScore--;
            infoText.textContent = 'Number is too high!';
            document.querySelector('.score').textContent = gameScore;
        } else {
            infoText.textContent = "You've lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    } else if (guessValue < secretNumber) {
        if (gameScore > 1) {
            gameScore--;
            infoText.textContent = 'Number is too low!';
            document.querySelector('.score').textContent = gameScore;
        } else {
            infoText.textContent = "You've lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
})