'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
const checkButton = document.querySelector('.check');
const playAgainButton = document.querySelector('.again');
let gameWon = false;

checkButton.addEventListener("click", function () {
    const infoText = document.querySelector('.message');
    const guessValue = Number(document.querySelector('.guess').value);
    if (!guessValue) {
        //When there is no valid input
        infoText.textContent = '⛔ Add valid number!';

    } else if (guessValue === secretNumber) {
        //When user guesses right number
        infoText.textContent = '🏆 You guessed correct!';
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        gameWon = true;
        checkButton.disabled = true;
    } else if (guessValue > secretNumber && !gameWon) {
         //When user guesses number thats larger than secret number
        if (gameScore > 1) {
            gameScore--;
            infoText.textContent = 'Number is too high!';
            document.querySelector('.score').textContent = gameScore;
        } else {
            infoText.textContent = "You've lost the game!";
            document.querySelector('.score').textContent = 0;
        }

    } else if (guessValue < secretNumber && !gameWon) {
        //When user guesses number thats smaller than secret number
        if (gameScore > 1) {
            gameScore--;
            infoText.textContent = 'Number is too low!';
            document.querySelector('.score').textContent = gameScore;
        } else {
            infoText.textContent = "You've lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});

playAgainButton.addEventListener("click", function() {
    gameScore = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = '';
    checkButton.disabled = false;
    gameWon = false;
});