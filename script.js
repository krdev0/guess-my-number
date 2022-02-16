'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highscore = 0;
const checkButton = document.querySelector('.check');
const playAgainButton = document.querySelector('.again');

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

checkButton.addEventListener("click", function () {
    const guessValue = Number(document.querySelector('.guess').value);
    
    if (!guessValue) {
        //When there is no valid input
        displayMessage('⛔ Add valid number!');

    } else if (guessValue === secretNumber) {
        //When user guesses right number
        displayMessage('🏆 You guessed correct!');
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        checkButton.disabled = true;

        if (gameScore > highscore) {
            highscore = gameScore;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guessValue !== secretNumber) {

        if (gameScore > 1) {
            gameScore--;
            displayMessage((guessValue > secretNumber) ? 'Number is too high!' : 'Number is too low!');
            document.querySelector('.score').textContent = gameScore;
        } else {
            displayMessage("You've lost the game!");
            document.querySelector('.score').textContent = 0;
        }

    }
});

playAgainButton.addEventListener("click", function () {
    gameScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = '';
    checkButton.disabled = false;
});