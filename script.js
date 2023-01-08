const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const options = ['rock','paper','scissors'];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

let playerChoice;
let computerChoice;
let winState;

function computerNumber(){
    return Math.floor(Math.random() * 3) + 1;
}

function printScore(){
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    console.log("Draw score: " + drawScore);
    console.log(" ");
}

function game(){
    if (computerChoice === playerChoice) {
        drawScore++;
        winState = "Draw! ";
    } 
    else if (computerChoice == 2 && playerChoice == 1) {
        computerScore++;
        winState = "Computer win! ";
    } 
    else if (computerChoice == 1 && playerChoice == 3) {
        computerScore++;
        winState = "Computer win! ";
    }
    else if (computerChoice == 3 && playerChoice == 2) {
        computerScore++;
        winState = "Computer win! ";
    }
    else {
        playerScore++;
        winState = "Player win! ";
    }
}

function rockEvent(){
    playerChoice = 1;
    computerChoice = computerNumber();
    console.log("Player choice: " + options[playerChoice - 1]);
    console.log("Computer choice: " + options[computerChoice - 1]);
    game();
    console.log(winState);
    printScore();
}

function paperEvent(){
    playerChoice = 2;
    computerChoice = computerNumber();
    console.log("Player choice: " + options[playerChoice - 1]);
    console.log("Computer choice: " + options[computerChoice - 1]);
    game();
    console.log(winState);
    printScore();
}

function scissorsEvent(){
    playerChoice = 3;
    computerChoice = computerNumber();
    console.log("Player choice: " + options[playerChoice - 1]);
    console.log("Computer choice: " + options[computerChoice - 1]);
    game();
    console.log(winState);
    printScore();
}

rockBtn.addEventListener("click", rockEvent);
paperBtn.addEventListener("click", paperEvent);
scissorsBtn.addEventListener("click", scissorsEvent);