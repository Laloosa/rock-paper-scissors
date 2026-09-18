function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3); //times 3 for values 0, 1, 2. Floor to remove floating point numbers
    if (rand == 0) {
        return "Rock";
    }
    else if (rand == 1) {
        return "Paper";
    }
    else if (rand == 2){
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    let humanChoice = choice.replace(choice.charAt(0), (choice.charAt(0).toUpperCase()));
    if (humanChoice == "Rock") {
        return "Rock";
    }
    if (humanChoice == "Paper") {
        return "Paper";
    }
    if (humanChoice == "Scissors") {
        return "Scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        }
        else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")) {
            console.log("You lose... " + humanChoice + " loses to " + computerChoice + ".");
            computerScore++;
        }
        else {
            console.log(humanChoice + " and " + computerChoice + ". It's a draw!");
        }
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Your score was " + humanScore + ".");
    }
    else if (humanScore < computerScore) {
        console.log("You lose... Your score was " + humanScore + ".");
    }
    else {
        console.log("Draw!")
    }
}

playGame();
