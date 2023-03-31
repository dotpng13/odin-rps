function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    console.log(playerSelection + ", " + computerSelection)

    let win = `You Win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection}`;

    switch (true) {
        case (playerSelection === "rock") && (computerSelection === "paper"):
            console.log("rp: " + playerSelection + ", " + computerSelection)
            return lose;
        case (playerSelection === "rock") && (computerSelection === "scissors"):
            console.log("rs: " + playerSelection + ", " + computerSelection)
            return win;
        case (playerSelection === "paper") && (computerSelection === "rock"):
            console.log("pr: " + playerSelection + ", " + computerSelection)
            return win;
        case (playerSelection === "paper") && (computerSelection === "scissors"):
            console.log("ps: " + playerSelection + ", " + computerSelection)
            return lose;
        case (playerSelection === "scissors") && (computerSelection === "rock"):
            console.log("sr: " + playerSelection + ", " + computerSelection)
            return lose;
        case (playerSelection === "scissors") && (computerSelection === "paper"):
            console.log("sp: " + playerSelection + ", " + computerSelection)
            return win;
        default:
            console.log("d: " + playerSelection + ", " + computerSelection)
            return `You Tie! ${playerSelection} was both selected`;
    }
}

console.log(playRound("ROCK", "rock"))
console.log(playRound("roCK", "paper"))
console.log(playRound("rock", "scissors"))
console.log(playRound("paper", "rock"))
console.log(playRound("paper", "paper"))
console.log(playRound("paper", "scissors"))
console.log(playRound("scissors", "rock"))
console.log(playRound("scissors", "paper"))
console.log(playRound("scissors", "scissors"))