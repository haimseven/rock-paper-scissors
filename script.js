
let playerScore = 0;
let computerScore = 0;

// Starts game when user clicks on an image choice
images.forEach((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5){
            return;
        }
        game(image.dataset.image);
    })
);

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
    let log = '';

    if (playerSelection === 'Rock') {
      if (computerSelection === 'Paper') {
        log = 'You Lose! Paper beats Rock';
      } else if (computerSelection === 'Scissors') {
        log = 'You Win! Rock beats Scissors';
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Scissors') {
        log = 'You Lose! Scissors beats Paper';
      } else if (computerSelection === 'Rock') {
        log = 'You Win! Paper beats Rock';
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Rock') {
        log = 'You Lose! Rock beats Scissors';
      } else if (computerSelection === 'Paper') {
        log = 'You Win! Scissors beats Paper';
      } else {
        log = "It's a tie";
      }
    }
    return log;
}

// Uses playRound to play best-of-five game that keeps score and reports a winner or loser at the end
function game() {
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


