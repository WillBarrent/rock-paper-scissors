function getComputerChoice() {
  let randomNumber = Math.floor((Math.random() * 10) % 3) + 1;

  return (
    (randomNumber === 1 && "Rock") ||
    (randomNumber === 2 && "Paper") ||
    (randomNumber === 3 && "Scissors")
  );
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  return playerSelection == "rock" && computerSelection == "paper"
    ? "You lose! Paper beats Rock!"
    : playerSelection == "paper" && computerSelection == "rock"
    ? "You win! Paper beats Rock!"
    : playerSelection == "paper" && computerSelection == "scissors"
    ? "You lose! Scissors beats Paper!"
    : playerSelection == "scissors" && computerSelection == "paper"
    ? "You win! Scissors beats Paper!"
    : playerSelection == "scissors" && computerSelection == "rock"
    ? "You lose! Rock beats Scissors!"
    : playerSelection == "rock" && computerSelection == "scissors"
    ? "You win! Rock beats Scissors!"
    : "Draw!";
}


