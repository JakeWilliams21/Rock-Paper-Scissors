
const computerPlay = () => {
    let int = Math.floor(Math.random() * 3 ) + 1

    if (int == 1) {
        console.log("Rock");
    } else if (int === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }

    return int;
}

const playRound = (playerSelection, computerSelection) => {
    let computer = computerSelection
    let player = playerSelection
    let result = ''

    if (player === 'rock') {

        if (computer === 1) {
            result = 'Tie!'
        } else if (computer === 2) {
            result = 'You Lose!'
        } else {
            result = 'You Win!'
        }
    } else if (player === 'paper') {

        if (computer === 2) {
            result = 'Tie!'
        } else if (computer === 3) {
            result = 'You Lose!'
        } else {
            result = 'You Win!'
        }

    } else {

        if (computer === 3) {
            result = 'Tie!'
        } else if (computer === 1) {
            result = 'You Lose!'
        } else {
            result = 'You Win!'
        }

    }

    return result;

}

const game = () => {
let computerScore = 0
let playerScore = 0
let winner = ''

    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection)
        if (result === 'Tie!') {
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        } else if (result === 'You Lose!') {
            computerScore++;
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        } else {
            playerScore++;
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        }
    }

    if (computerScore > playerScore) {
        winner = "You Lose!"
    } else if (computerScore < playerScore) {
        winner = "You Win!"
    } else {
        winner = 'Its a tie!'
    }

    return winner;
}


console.log(game());