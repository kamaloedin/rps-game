const computerChoiceDisplay = document.getElementById('computerChoice')
const userChoiceDisplay = document.getElementById('userChoice')
const resultDisplay = document.getElementById('Result')    
const possibleChoice= document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1){
        computerChoice = 'Rock'
    } 
    if (randomNumber === 2){
        computerChoice = 'Paper'
    } 
    if (randomNumber === 3){
        computerChoice = 'Scissors'
    } 

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw!"
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You Win!"
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You Lose!"
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You Lose!"
    }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You Win!"
    }
    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You Lose!"
    }
    if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You Win!"
    }
        resultDisplay.innerHTML = result
    }
