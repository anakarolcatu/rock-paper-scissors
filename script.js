//declare variables to keep track of user and computer score
let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const choice = document.querySelector('.choices');
const round = document.querySelector('.round');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');

//create a function getComputerChoice
function getComputerChoice() {
    //randomly return rock, paper or scissors
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let computerNumber = Math.floor(Math.random() * 3);
    return choices[computerNumber];
}

//add event listeners to the buttons
rockBtn.addEventListener('click', () => {
    const humanChoice = 'ROCK';
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
  });
paperBtn.addEventListener('click', () => {
    const humanChoice = 'PAPER';
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
  });
scissorsBtn.addEventListener('click', () => {
    const humanChoice = 'SCISSORS';
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
});

function updateUI(humanChoice, computerChoice, roundResult) {
    choice.textContent = `You choose: ${humanChoice} \n Computer choose: ${computerChoice}`;
    round.textContent = roundResult;
    result.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
}

//create a function named playRound with two parameters: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    //write the code to console a string value represent the round winner, such as: "You lose! Paper beats rock."
    //increment the humanScore or computerScore based on the round winner
    if (humanChoice === computerChoice) {
        round.textContent = "It's a tie! Play again.";
    } else if ( 
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || //rock vs scissors
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') || //paper vs rock
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') //scissors vs paper
    ) {
        humanScore++;
        updateUI(humanChoice, computerChoice, "You win this round! :)");
    } else {
        computerScore++;
        updateUI(humanChoice, computerChoice, "You lose this round! :(");
    }
    result.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
    //return {humanScore, computerScore};
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
};

function endGame() {
    if (humanScore === 5) {
        winner.textContent = 'Congratulations! You won the game!';
    } else {
        winner.textContent = 'Sorry, the computer won the game.';
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
    
