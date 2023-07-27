const cumputerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-chice")
const resultDisplay = document.getElementById("result")
const possibalChoices = document.querySelectorAll("button")

let userchoice 
let computerChoice
let result
possibalChoices.forEach(possibalChoice => possibalChoice.addEventListener('click', (e) => {
userchoice = e.target.id
userChoiceDisplay.innerHTML = userchoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3 + 1)
if (randomNumber ===1){
    computerChoice = 'rock'
}
if (randomNumber ===2){
    computerChoice = 'scissore'
}
if (randomNumber === 3){
    computerChoice = 'paper'
}
cumputerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
 if (computerChoice === userchoice){
    result = 'Match darw'
 }
 if (computerChoice ==='rock' && userchoice === "paper"){
    result = 'You win'
 }
 if (computerChoice === 'rock' && userchoice === "scissore"){
    result ='You lost'
 }
if (computerChoice === 'paper' && userchoice === "rock"){
    result = 'You lost'
}
if (computerChoice === 'paper' && userchoice ==="scissore"){
    result = 'You win'
}
if(computerChoice === 'scissore' && userchoice === "paper"){
    result = 'You lost'
}
if(computerChoice === 'scissore' && userchoice === "rock"){
    result = 'You Win'
}
 resultDisplay.innerHTML = result
}
