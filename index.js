function getComputerChoice() {
    let randomNumber = Math.floor((Math.random()*10) % 3) + 1;

    return (randomNumber === 1 && "Rock") || (randomNumber === 2 && "Paper") || (randomNumber === 3 && "Scissors");
}