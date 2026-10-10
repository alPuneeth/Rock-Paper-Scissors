let humanScore = 0
let computerScore = 0
const target = 5


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

// modifyYinYang
const circles = document.querySelector(".circles")
const wrapper1 = document.querySelector(".wrapper1")
const wrapper2 = document.querySelector(".wrapper2")

const playerCurrentScore = document.querySelector(".first-half")
const computerCurrentScore = document.querySelector(".second-half")


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

const displayResult = document.createElement("div")
displayResult.classList.add("display-result")
div.appendChild(displayResult)

const showGameResult = document.createElement("div")
showGameResult.classList.add("show-game-result")
div.appendChild(showGameResult)

const thanks = document.createElement("div")
thanks.classList.add("thanks")
div.appendChild(thanks)

const resetButton = document.createElement("button")
resetButton.classList.add("reset")
resetButton.textContent = "RESET"
resetButton.style.display = "none"
div.appendChild(resetButton)

divForButtons.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {

        if (humanScore === target || computerScore === target) {
            return
        }

        const computerChoice = getComputerChoice();
        const humanChoice = event.target.value;
        const res = playRound(humanChoice, computerChoice)
        displayResult.textContent = res


        if (humanScore === target || computerScore === target) {
            const result = gameResult()
            showGameResult.textContent = result
            circles.classList.add("win-animation")
            thanks.innerHTML = '<span class="heart">♥</span> Thank YOU for playing <span class="heart">♥</span>'
            divForButtons.style.display = "none"
            resetButton.style.display = "block"
        }

    }
}
)


resetButton.addEventListener("click", () => {
    humanScore = 0
    computerScore = 0
    wrapper1.style.display = ""
    wrapper2.style.display = ""
    modifyYinYang()
    playerCurrentScore.textContent = humanScore
    computerCurrentScore.textContent = computerScore
    thanks.textContent = ""
    displayResult.textContent = ""
    showGameResult.textContent = ""
    resetButton.style.display = "none"
    divForButtons.style.display = ""
    circles.classList.remove("win-animation")
})


function updateScores() {
    playerCurrentScore.textContent = humanScore
    computerCurrentScore.textContent = computerScore
    modifyYinYang()
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "DRAW!" 

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        updateScores()
        return "You win! Rock beats Scissors."

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1
        updateScores()
        return "Computer wins! Rock beats Paper."  

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1
        updateScores()
        return "Computer wins! Scissors beat Paper." 

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        updateScores()
        return "You win! Paper beats Rock."

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1
        updateScores()
        return "Computer wins! Rock beats Scissors." 

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1
        updateScores()
        return "You win! Scissors beat Paper." 

    } else {
        return "Enter a valid choice!"
    }
}


function gameResult() {

    if (humanScore === target) {
        return " YOU win the game! Congrats."

    } else if (computerScore === target){
        return " COMPUTER wins!! You lose! Better luck next time."
    }}


function modifyYinYang() {
    
    const difference = humanScore - computerScore
    const movement = difference * 20
    const playerArea = 50 + (difference * 10)

    if (humanScore === target) {
        wrapper1.style.display = "none"
        wrapper2.style.display = "none"
        circles.style.background = "white"
        return

    } else if (computerScore === target) {
        wrapper1.style.display = "none"
        wrapper2.style.display = "none"
        circles.style.background = "black"
        return
    }

    circles.style.background = `linear-gradient(to right, white ${playerArea}%, black ${playerArea}%)`

    wrapper1.style.transform = `translateX(${99 + movement}px)`
    wrapper2.style.transform = `translateX(${1+ movement}px) translateY(100px)`
}


