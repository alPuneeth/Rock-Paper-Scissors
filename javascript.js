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

console.log(getComputerChoice())

function getHumanChoice() {
    const choice = prompt("Enter your choice among - rock, paper or scissors")
    return choice
}

console.log(getHumanChoice())