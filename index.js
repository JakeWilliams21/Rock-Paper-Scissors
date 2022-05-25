const buttons = document.querySelectorAll('button')
const playerScoreboard = document.querySelector('.player-score')
const computerScoreboard = document.querySelector('.computer-score')
const winner = document.createElement('div');
    winner.classList.add('winner');
const body = document.querySelector('body')
let computerScore = 0;
let playerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let player = e.target.id
        let computer = computerPlay()
        const result = (playRound(player, computer));;


        if (result === 'Tie!') {
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
        } else if (result === 'You Lose!') {
            computerScore++;
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
            computerScoreboard.textContent = computerScore
        } else {
            playerScore++;
            console.log('Computer: ' + computerScore);
            console.log('Player: ' + playerScore);
            playerScoreboard.textContent = playerScore
        }

        if (computerScore === 5 || playerScore === 5) {
            if (computerScore === 5) {
                winner.textContent = 'Computer Wins :('
                body.appendChild(winner)
            } else {
                winner.textContent = 'You Win!!!'
                body.appendChild(winner)
            }
        }

    })
})

const computerPlay = () => {
    let int = Math.floor(Math.random() * 3 ) + 1

    if (int == 1) {
        console.log("Computer: Rock");
    } else if (int === 2) {
        console.log("Computer: Paper");
    } else {
        console.log("Computer: Scissors");
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

// const game = () => {
// let computerScore = 0
// let playerScore = 0
// let winner = ''

//     for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt();
//     const computerSelection = computerPlay();
//     const result = playRound(playerSelection, computerSelection)
//         if (result === 'Tie!') {
//             console.log('Computer: ' + computerScore);
//             console.log('Player: ' + playerScore);
//         } else if (result === 'You Lose!') {
//             computerScore++;
//             console.log('Computer: ' + computerScore);
//             console.log('Player: ' + playerScore);
//         } else {
//             playerScore++;
//             console.log('Computer: ' + computerScore);
//             console.log('Player: ' + playerScore);
//         }
//     }

//     if (computerScore > playerScore) {
//         winner = "You Lose!"
//     } else if (computerScore < playerScore) {
//         winner = "You Win!"
//     } else {
//         winner = 'Its a tie!'
//     }

//     return winner;
// }


// console.log(game());