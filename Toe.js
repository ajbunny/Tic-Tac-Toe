const cells = document.querySelectorAll('.cell')
const winner = document.querySelector('.winner') 
let restartBtn = document.querySelector('.restartBtn') //ask why get by class name didn't work
let playerDisplay = document.querySelector('.playerDisplay')


const PlayerX ='X';
const PlayerO ='O';

let currentPlayer = 'X'; 
// let board = ['', '', '', '', '', '', '', '',];
// let isGameActive = true;
let gameBoxes = Array(9).fill(null);
let countBoxes = 0


const PlayerX_Won = "PlayerX Won!"
const PlayerO_Won = 'PlayerO Won!'
const tie = 'TIE!'

    /*
    playing board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]

];

const startGame = () => {
    
    cells.forEach(cell => cell.addEventListener('click', (e) => {
        cellsClicked(e) 
    }))
}
function cellsClicked(e) {
    const id = e.target.id
    if(!gameBoxes[id] && countBoxes < 9){
        gameBoxes[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(whoWon() !==false) {
            playerDisplay.textContent = `${currentPlayer} has won the game!!`
            let bigWinner = whoWon() 
            countBoxes = 10
            return bigWinner
        }
        countBoxes++
        currentPlayer = currentPlayer == PlayerX ? PlayerO : PlayerX
    }

}

function whoWon () {
     for (const condition of winningConditions) {
        let [a, b, c] = condition

        if(gameBoxes[a] && (gameBoxes[a] == gameBoxes[b] && gameBoxes[a] == gameBoxes[c])) {
             document.getElementById(`${a}`).style.backgroundColor = 'rosybrown'
             document.getElementById(`${b}`).style.backgroundColor = 'rosybrown'
             document.getElementById(`${c}`).style.backgroundColor = 'rosybrown'
            return [a,b,c]

        }
     
     } 

     return false

}

restartBtn.addEventListener('click', function(e) {
    window.location.reload(false)
})

startGame();

