let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        console.log("Computer: rock");
        return "rock"
    } else if (choice < 2/3) {
        console.log("Computer: paper");
        return "paper"
    } else {
        console.log("Computer: scissors");
        return "scissors"
    }
}


function getHumanChoice() {
    const choice = prompt("Enter your choice - rock/ paper /scissors", "rock");
    if (!choice) {
        return "It"
    }
    const result = choice.toLowerCase();
    console.log(`You: ${result}`);
    return result
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "DRAW!"

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        return "You win! rock beats scissors."

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1
        return "Computer wins! rock beats paper."

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1
        return "Computer wins! scissors beat paper."

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        return "You win! paper beats rock."

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1
        return "Computer wins! rock beats scissors."

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1
        return "You win! scissors beat paper."

    } else {
        return "Enter a valid choice!"
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const result = playRound(humanSelection, computerSelection);
        alert(result)
        
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer's score: ${computerScore}`)
    }
     
    if (humanScore > computerScore) {
        alert("You win the game! Congrats.")
        return
    } else if (humanScore < computerScore) {
        alert("You lose! Better luck next time.")
        return
    }
    alert("It's a Draw! Play again.")
}

const playButton = document.querySelector("#play");
playButton.addEventListener("click", playGame);
// console.log(playButton);