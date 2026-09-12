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
    const choice = prompt("Enter your choice among - rock, paper or scissors", "rock");
    const res = choice.toLowerCase();
    console.log(`You: ${res}`);
    return res
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        computerScore += 0
        humanScore += 0
        return "DRAW!"

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        return "You win!"

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1
        return "Computer wins!"

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1
        return "Computer wins!"

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        return "You win!"

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1
        return "Computer wins!"

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1
        return "You win!"

    } else {
        return "Enter a valid choice!"
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const res = playRound(humanSelection, computerSelection);
        alert(res)

        console.log(`Your score: ${humanScore}`)
        console.log(`Computer's score: ${computerScore}`)
    }
     
    if (humanScore > computerScore) {
        return alert("You won the game! Congrats.")
    } else if (humanScore < computerScore) {
        return alert("You lose! Better luck next time.")
    }
    return alert("It's a Draw! Play again.")
}

playGame();