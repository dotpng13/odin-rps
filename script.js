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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let win = `You Win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection}`;

    switch (true) {
        case (playerSelection === "rock") && (computerSelection === "paper"):
            return lose;
        case (playerSelection === "rock") && (computerSelection === "scissors"):
            return win;
        case (playerSelection === "paper") && (computerSelection === "rock"):
            return win;
        case (playerSelection === "paper") && (computerSelection === "scissors"):
            return lose;
        case (playerSelection === "scissors") && (computerSelection === "rock"):
            return lose;
        case (playerSelection === "scissors") && (computerSelection === "paper"):
            return win;
        default:
            return `You Tie! ${playerSelection} was both selected`;
    }
}

function game() {
    let player, computer, message; // round, result;
    // let score = 0, record = "";

    // for (let i = 1; i <= 5; i++) {
        player = window.prompt("Rock! Paper! Scissors! Shoot!");
        computer = getComputerChoice();

        message = playRound(player, computer);
        // round = message.charAt(4);
        // record += round;
        
        /* if (round === "W") {
            score++;
        } else if (round === "T") {
            score += 0.5;
        } */

        console.log(message)
    // }

    /* if (score < 2.5) {
        result = "Lose";
    } else if (score === 2.5) {
        result = "Tie";
    } else if (score > 2.5) {
        result = "Win";
    }

    console.log(`You ${result} the Game! ${record}`) */
}

game();