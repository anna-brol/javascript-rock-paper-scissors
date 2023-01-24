const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const win_point = document.getElementById("win-p")
const player_point = document.getElementById("player-p")
const computer_point = document.getElementById("computer-p")
const draw_point = document.getElementById("draw-p")

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
    player_point.innerHTML = playerScore;
    computer_point.innerHTML = computerScore;
    draw_point.innerHTML = drawScore;
}

function game(){
    if (computerChoice === playerChoice) {
        drawScore++;
        win_point.innerHTML = "Draw! ";
    } 
    else if (computerChoice == 2 && playerChoice == 1) {
        computerScore++;
        win_point.innerHTML = "Computer choice: " + options[computerChoice - 1] + ", computer win!";
    } 
    else if (computerChoice == 1 && playerChoice == 3) {
        computerScore++;
        win_point.innerHTML = "Computer choice: " + options[computerChoice - 1] + ", computer win!";
    }
    else if (computerChoice == 3 && playerChoice == 2) {
        computerScore++;
        win_point.innerHTML = "Computer choice: " + options[computerChoice - 1] + ", computer win!";
    }
    else {
        playerScore++;
        win_point.innerHTML = "Computer choice: " + options[computerChoice - 1] + ", player win!" ;
    }
}

function rockEvent(){
    playerChoice = 1;
    computerChoice = computerNumber();
    game();
    printScore();
}

function paperEvent(){
    playerChoice = 2;
    computerChoice = computerNumber();
    game();
    printScore();
}

function scissorsEvent(){
    playerChoice = 3;
    computerChoice = computerNumber();
    game();
    printScore();
}

rockBtn.addEventListener("click", rockEvent);
paperBtn.addEventListener("click", paperEvent);
scissorsBtn.addEventListener("click", scissorsEvent);