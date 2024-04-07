

let computerScore = 0
const rockbutton = document.querySelector

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const ScissorsButton = document.querySelector('.scissors')


const computerPlay = () => {
 const arrOfChoices = ['rock', 'paper', 'scissors']
 const randomNum = Math.floor(Math.random() * arrOfChoicesrr0fChoices.length)
 return arrOfChoices[randomNum]
}


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Test the function by printing the output
console.log(getComputerChoice());

function singleRound(playerSelection, computerSelection) {
    const userInput = prompt('Enter Rock, Paper, or Scissors').toLowerCase();

    // Generate computer choice 
    const computerChoice = getComputerChoice().toLowerCase();

    if (userInput === computerChoice) {
        return 'It was a tie';
    } else if ((userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') && 
               (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors')) {
        if ((userInput === 'rock' && computerChoice === 'paper') ||
            (userInput === 'paper' && computerChoice === 'scissors') ||
            (userInput === 'scissors' && computerChoice === 'rock')) {
            return 'Computer Wins! '  + computerChoice + ' beats ' + userInput;
        } else {
            return 'You Win! ' + userInput + ' beats ' + computerChoice;
        }
    } else {
        return 'Invalid input. Please enter Rock, Paper, or Scissors.';
    }
}


rockButton.addEventListener('click')
    const computerChoice = computerChoice


function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        const result = singleRound();
        console.log(result);

        if (result.includes('You Win!')) {
            playerScore++;
        } else if (result.includes('Computer Wins!')) {
            computerScore++;
        }
    }

    console.log('Game Over!');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game!');
    } else {
        console.log('It\'s a tie game!');
    }
}

// Call the playGame function to start the game
playGame();
