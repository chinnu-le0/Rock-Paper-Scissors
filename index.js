const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const computerScoreDispaly = document.getElementById('computerScoreDispaly');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');

const choices = ['rock', 'paper', 'scissors'];


let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = ""
    if(userChoice === computerChoice) {
        result = "TIE";
    }
    else {
        switch(userChoice) {
            case "rock":
                result = (computerChoice === 'scissors') ? "You Win!" : "You Lose!";
                // console.log(result);
                break;
            case "paper":
                result = (computerChoice === 'rock') ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Your Choice: ${userChoice}`;
    computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;
    resultDisplay.style.fontWeight = 'bold';

    resultDisplay.classList.remove("greenText", "redText", "blueText");

    switch(result) {
        case "You Win!":
            resultDisplay.classList.add('greenText');
            playerScore += 1;
            playerScoreDisplay.textContent = `${playerScore}`;
            // console.log(playerScoreDisplay);
            break;
        case "TIE":
            resultDisplay.classList.add('blueText');
            break;
        case "You Lose!":
            resultDisplay.classList.add('redText');
            computerScore += 1;
            // console.log(computerScoreDispaly)
            computerScoreDispaly.textContent = `${computerScore}`;
            break;
    }
}