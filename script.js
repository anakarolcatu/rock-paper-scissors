//create a function getComputerChoice
function getComputerChoice() {
    //randomly return rock, paper or scissors
    let computerNumber = Math.floor(Math.random() * 3);
    //test using console.log    
    return computerNumber;
}

//create a function to getHumanChoice
function getHumanChoice(){
    //ask the user for the choice
    let humanNumber = prompt("Please write your choice between Rock, Paper or Scissors").toUpperCase();
    while (humanNumber !== "ROCK" && humanNumber !== "PAPER" && humanNumber !== "SCISSORS") {
        humanNumber = prompt("Invalid choice! Please write Rock, Paper, or Scissors").toUpperCase();
    }
    //return one of the valid choices depending the user inputs
    if (humanNumber === "ROCK") {
        return 0;
    } else if (humanNumber === "PAPER") {
        return 1;
    } else {
        return 2;
    }
}
//declare variables to keep track of user and computer score
let humanScore = 0;
let computerScore = 0;

//create a function named playRound with two parameters: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    //use those parameters to take human and computer choices
    humanChoice = getHumanChoice();
    console.log("Your choice:", humanChoice === 0 ? "Rock" : humanChoice === 1 ? "Paper" : "Scissors");
    computerChoice = getComputerChoice();
    console.log("Computer's choice:", computerChoice === 0 ? "Rock" : computerChoice === 1 ? "Paper" : "Scissors");
    //write the code to console a string value represent the round winner, such as: "You lose! Paper beats rock."
    //increment the humanScore or computerScore based on the round winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Play again.")
    } else if ( 
    (humanChoice === 0 && computerChoice === 2) || //rock vs scissors
    (humanChoice === 1 && computerChoice === 0) || //paper vs rock
    (humanChoice === 2 && computerChoice === 1) //scissors vs paper
    ) {
        console.log("You win this round! :)");
        humanScore++;
    } else {
        console.log("You lose this round! :(");
        computerScore++;
    }
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    return {humanScore, computerScore};
}

//write a function named playGame that calls playRound to play 5 rounds, keep track of the scores and declares a winner at the end

/* function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Congratulations!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}
playGame(); */