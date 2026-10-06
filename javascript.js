let humanScore = 0
let computerScore = 0
const target = 5
let thanked = false


function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        return "rock"
    } else if (choice < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}


const div = document.querySelector(".main") 
const divForButtons = document.createElement("div")

div.appendChild(divForButtons)

divForButtons.classList.add("rps-buttons")

const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")

rock.textContent = "rock"
paper.textContent = "paper"
scissors.textContent = "scissors"

rock.value = "rock"
paper.value = "paper"
scissors.value = "scissors"

divForButtons.appendChild(rock)
divForButtons.appendChild(paper)
divForButtons.appendChild(scissors)


divForButtons.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {

        if (humanScore === target || computerScore === target) {
            if (thanked) return;
            thanked = true
            const thanks = document.createElement("div")
            thanks.textContent = "THANK YOU for playing!"
            div.appendChild(thanks)
            return
        }

        const computerChoice = getComputerChoice();
        const humanChoice = event.target.value;
        const res = playRound(humanChoice, computerChoice)
        const displayResult = document.createElement("div")
        displayResult.textContent = res
        div.appendChild(displayResult);


        if (humanScore === target || computerScore === target) {
            const showGameResult = document.createElement("div")
            const result = gameResult()
            showGameResult.textContent = result
            div.appendChild(showGameResult)
        }

    }
})


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "DRAW!" + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        return "You win! rock beats scissors." + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1
        return "Computer wins! rock beats paper."  + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1
        return "Computer wins! scissors beat paper." + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        return "You win! paper beats rock." + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1
        return "Computer wins! rock beats scissors." + ` | Your score: ${humanScore} |  Computer's score: ${computerScore}`

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1
        return "You win! scissors beat paper." + ` | Your score: ${humanScore} | Computer's score: ${computerScore}`

    } else {
        return "Enter a valid choice!"
    }
}


function gameResult() {

    if (humanScore === target) {
        return " You win the game! Congrats."

    } else if (computerScore === target){
        return " Computer wins!! You lose! Better luck next time."
    }}



