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

function getHumanChoice(buttonID) {
    if (buttonID == "rock") {
        return "Rock";
    }
    if (buttonID == "paper") {
        return "Paper";
    }
    if (buttonID == "scissors") {
        return "Scissors";
    }
}

function playRound(buttonID) {
    const humanChoice = getHumanChoice(buttonID);
    const computerChoice = getComputerChoice();
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

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => playRound(btn.id));
});

const body = document.querySelector("body");
const div = document.createElement("div");
div.style.border = "1px solid black";
body.appendChild(div);

if (humanScore > computerScore) {
    console.log("You win! Your score was " + humanScore + ".");
}
else if (humanScore < computerScore) {
    console.log("You lose... Your score was " + humanScore + ".");
}
else {
    console.log("Draw!")
}