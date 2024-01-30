document.addEventListener("DOMContentLoaded", function(){
    createButtonContainer();
    createButtons();
})

//Creates a container holding the Rock, Paper, and Scissor Buttons
function createButtonContainer(){
    const container = document.createElement("container");
    container.className = "container";
    document.body.appendChild(container);
}

//Creates Rock, Paper, and Scissors Buttons
function createButtons() {
    const rockBtn = document.createElement("button");
    rockBtn.className = "rock-button";
    rockBtn.textContent = "Rock";
    const paperBtn = document.createElement("button");
    paperBtn.className = "paper-button";
    paperBtn.textContent = "Paper";
    const scissorBtn = document.createElement("button");
    scissorBtn.className = "scissor-button";
    scissorBtn.textContent = "Scissors";

    document.querySelector(".container").appendChild(rockBtn);
    document.querySelector(".container").appendChild(paperBtn);
    document.querySelector(".container").appendChild(scissorBtn);
}


// Randomly returns either Rock, Paper, or Scissors
function getComputerChoice(){
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Assigns Rock, Paper, or Scissors based on the random number 
    switch(randomNumber){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Rock';
    }
}

// Plays a single round of Rock Paper Scissors using playerSelection and computerSelection.
// Returns a string that declares the winner of round
// If round ends in a Tie, the round restarts
function playRound(playerSelection,computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    const playerChoice = playerSelection.toLowerCase();

    // Check for a tie
    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie! Play again.";
    }

    // Check for player wins
    else if (
        (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    }
    
    // If not a tie and not a player win, then it's a computer win
    else {
            return `You Lose! ${computerSelection} beats ${playerChoice}.`;
        }
}

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game.");
    } else {
        console.log("It's a tie! No overall winner.");
    }



