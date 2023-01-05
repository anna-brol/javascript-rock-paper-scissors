const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const computerOptions = ['rock','paper','scissors'];

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

let playerChoice;
let computerChoice;

function computerNumber(){
    let randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber];
}

function score(){
    if(playerChoice === computerChoice){
        console.log("draw");
    }
    else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            computerScore++;
            // computer.innerHTML = computer_score;
            console.log("computer wins " + computerScore);

        }else{
            playerScore++;
            // player.innerHTML = player_score;
            console.log("player wins " + playerScore);
        }
    }
    else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            computerScore++;
            // computer.innerHTML = computer_score;
            console.log("computer wins " + computerScore);
        }else{
            playerScore++;
            // player.innerHTML = player_score;
            console.log("player wins " + playerScore);
        }
    }
    else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors'){
            computerScore++;
            // computer.innerHTML = computer_score;;
            console.log("computer wins " + computerScore);

        }else{
            playerScore++;
            // player.innerHTML = player_score;
            console.log("player wins " + playerScore);
        }
    }
}

function rockEvent(){
    playerChoice = 'rock';
    computerChoice = computerNumber();
    console.log("Computer choice: " + computerChoice)
    score();
}

function paperEvent(){
    playerChoice = 'paper';
    computerChoice = computerNumber();
    console.log("Computer choice: " + computerChoice)
    score();
}

function scissorsEvent(){
    playerChoice = 'scissors';
    computerChoice = computerNumber();
    console.log("Computer choice: " + computerChoice)
    score();
}

rockBtn.addEventListener("click", rockEvent);
paperBtn.addEventListener("click", paperEvent);
scissorsBtn.addEventListener("click", scissorsEvent);
