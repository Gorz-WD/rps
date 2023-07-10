const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const pChoice = document.getElementById('pChoiceImg')
const cChoice = document.getElementById('cChoiceImg')

const roundResult = document.getElementById('roundResult')

const playerScore = document.getElementById('pScore')
const computerScore = document.getElementById('cScore')

let pScore = 0
let cScore = 0

rock.addEventListener('click', () => { 
  document.getElementById("pChoiceImg").src = "../icons/rock-result.svg";
  game('rock', getComputerChoice()
)})
paper.addEventListener('click', () => { 
  document.getElementById("pChoiceImg").src = "../icons/paper-result.svg";
  game('paper', getComputerChoice()
)})
scissors.addEventListener('click', () => { 
  document.getElementById("pChoiceImg").src = "../icons/scissors-result.svg";
  game('scissors', getComputerChoice()
)})


const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  let choice = options[Math.floor(Math.random() * options.length)];
  document.getElementById("cChoiceImg").src = `../icons/${choice}-result.svg`;
  return choice
}

const round = (playerSelection, computerSelecion) => {
  if (playerSelection === computerSelecion) {
    roundResult.textContent = 'Tie'
  } else if (playerSelection === 'rock' && computerSelecion === 'scissors' || playerSelection === 'paper' && computerSelecion === 'rock' || playerSelection === 'scissors' && computerSelecion === 'paper') {
    pScore++
    roundResult.textContent = `You win ${playerSelection} beats ${computerSelecion}`
  } else {
    cScore++
    roundResult.textContent = `You lose ${computerSelecion} beats ${playerSelection}`
  }
  
  playerScore.textContent = `Player: ${pScore}`
  computerScore.textContent = `Computer: ${cScore}`
}

const game = (playerSelection, computerSelecion) => {
  
  round(playerSelection, computerSelecion)

  if (pScore === 5 || cScore === 5) {
    gameOver()
  }
    
}

const gameOver = () => {
  if (pScore > cScore) {
    roundResult.textContent = 'You WIN'
  }else{
    roundResult.textContent = 'You LOSE'
  }
  reset()
}

const reset = () => {
  pScore = 0
  cScore = 0
}