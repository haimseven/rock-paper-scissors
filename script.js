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
    if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    }

    // If not a tie and not a player win, then it's a computer win
    return `You Lose! ${computerSelection} beats ${playerChoice}.`;
}

// Uses playRound to play best-of-five game that keeps score and reports a winner or loser at the end
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice(); 

        console.log(`Round ${round}:`);
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores based on the result
        if (result.includes("Win")) {
        playerScore++;
        } else if (result.includes("Lose")) {
        computerScore++;
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
}


