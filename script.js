const buttons = document.querySelectorAll("button");
let plrWin = 0, plrLoss = 0, plrTie = 0;

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

function gameEvent(event) {
    const results = document.querySelector("#result");
    let computer, roundResult, roundCode, gameOutcome, gameResult;

    computer = getComputerChoice();

    roundResult = document.createElement("p");
    roundResult.textContent = playRound(event.target.id, computer);

    roundCode = roundResult.textContent.charAt(4);

    switch (roundCode) {
        case "W":
            plrWin++;
            break;
        case "L":
            plrLoss++;
            break;
        case "T":
            plrTie++;
            break;
    }

    roundResult.textContent += `, ${plrWin}-${plrLoss}-${plrTie}`;

    results.appendChild(roundResult);

    if ((2 * plrWin + plrTie) >= 10 || (2 * plrLoss + plrTie) >= 10) {
        if (plrWin === plrLoss) {
            gameOutcome = "Tie";
        } else {
            if (plrWin > plrLoss) {
                gameOutcome = "Win";
            } else {
                gameOutcome = "Lose";
            }
        }

        gameResult = document.createElement("h3");
        gameResult.textContent = `You ${gameOutcome} the Game!
        ${plrWin} WON, ${plrLoss} LOST, ${plrTie} TIED`;
    
        results.appendChild(gameResult);

        buttons.forEach((button) => {
            button.removeEventListener("click", gameEvent);
        });
    }
}

function game() {
    buttons.forEach((button) => {
        button.addEventListener("click", gameEvent);
    });
}

game();