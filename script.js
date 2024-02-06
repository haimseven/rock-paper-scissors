const images = Array.from(document.querySelectorAll('.card-image'));
const message = document.querySelector('.message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player');
const selectionComputer = document.querySelector('.computer');

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
    let computerNumber = random(3);
    let computerGuess = '';
  
    switch (computerNumber) {
      case 1:
        computerGuess = 'Rock';
        break;
      case 2:
        computerGuess = 'Paper';
        break;
      case 3:
        computerGuess = 'Scissors';
        break;
      default:
        break;
    }
  
    return computerGuess;
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

function createParaWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

// Uses playRound to play best-of-five game that keeps score and reports a winner or loser at the end
function game(playerSelect) {
    let playerSelection = capitalize(playerSelect);
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
  
    if (roundResult.includes('You Win!')) {
      playerScore++;
    } else if (roundResult.includes('You Lose!')) {
      computerScore++;
    }
  
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;
    selectionPlayer.appendChild(createParaWithText(playerSelection));
    selectionComputer.appendChild(createParaWithText(computerSelection));
  
    if (playerScore >= 5 && computerScore < 5) {
      message.textContent = 'Game Over. You Win! Refresh the page to play again!';
    } else if (playerScore < 5 && computerScore >= 5) {
      message.textContent = 'Game Over. You Lose! Refresh the page to play again!';
    }
  }
  
  /* Helper Functions */
  function random(number) {
    return Math.floor(Math.random() * number + 1);
  }
function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
}


