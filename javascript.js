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

