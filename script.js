function getComputerChoice() {
    let choice = (Math.floor(Math.random() * 3));
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors");
    return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Draw");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("MACHINE WINS ROUND!!");
        computerScore++;
    }else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("MACHINE WINS ROUND!!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("HUMAN WINS ROUND!!");
        humanScore++;
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("HUMAN WINS ROUND!!");
        humanScore++;
    }else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("HUMAN WINS ROUND!!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("MACHINE WINS ROUND!!");
        computerScore++;
    }
}

function playGame() {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    
}
playGame();
playGame();
playGame();
playGame();
playGame();
announce();
function announce() {
    if (humanScore > computerScore) {
        console.log(alert("YOU WON"));
    } else if (humanScore < computerScore) {
        console.log(alert("YOU LOSE"));
    } else if (humanScore = computerScore) {
        console.log(alert("Draw"));
    }
}
