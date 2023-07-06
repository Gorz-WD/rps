const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  return options[Math.floor(Math.random() * options.length)];
}

const round = (computerSelecion, playerSelection) => {
  if (playerSelection === computerSelecion) {
    return 'tie'
  } else if (playerSelection === 'rock' && computerSelecion === 'scissors' || playerSelection === 'paper' && computerSelecion === 'rock' || playerSelection === 'scissors' && computerSelecion === 'paper') {
    return `You win ${playerSelection} beats ${computerSelecion}`
  } else {
    return  `You lose ${computerSelecion} beats ${playerSelection}`
  }
}

