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

function displayCounter() {

}

const playerCounter = document.querySelector('.game-first .counter');
const computerCounter = document.querySelector('.game-second .counter');
const playerChoose = document.querySelector('.game-player');
const computerChoose = document.querySelector('.game-computer');
const gameSelections = document.querySelectorAll('.game-img');
const result = document.querySelector('.game-end');

let textResult = null;

let counterFirst = 0, 
    counterSecond = 0;

let gameIsEnd = false;

gameSelections.forEach(section => section.addEventListener('click', function(e) {
  if (gameIsEnd == true) {
    document.querySelector('.result').textContent = '';
    counterFirst = 0;
    counterSecond = 0;
    gameIsEnd = false;
  }

  let firstResult = null, secondResult = null;

  result.classList.remove(textResult);

  let playerResult = e.target.alt;
  let computerResult = getComputerChoice();

  let gameResult = playRound(playerResult, computerResult);

  playerChoose.innerHTML = `You choose: <span class="choose">${playerResult}</span>`;
  computerChoose.innerHTML = `Computer choose: <span class="choose">${computerResult}</span>`;

  result.textContent = `${gameResult}`;

  textResult = ((gameResult.toLowerCase() == 'draw!') && 'game-draw') || ((gameResult.indexOf('win') != -1) && 'game-win') || ((gameResult.indexOf('lose') != -1) && 'game-lose');

  firstResult = ((textResult == 'game-draw') && -1) || ((textResult == 'game-win') && 1) || ((textResult == 'game-lose') && 0);
  secondResult = ((firstResult == 0) && 1) || ((firstResult == 1) && 0) || ((firstResult == -1) && -1);

  counterSecond = counterSecond + ((firstResult != -1 || 0) && firstResult);
  counterFirst = counterFirst + ((secondResult != -1 || 0) && secondResult);
  playerCounter.textContent = `${counterFirst}`;
  computerCounter.textContent = `${counterSecond}`;

  if (!(counterFirst < 5 && counterSecond < 5)) {
    document.querySelector('.result').textContent = counterFirst < counterSecond ? "YOU WIN!" : "YOU LOSE!"
    gameIsEnd = true;
  }

  result.classList.add(textResult);

}));