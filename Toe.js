const cells = document.querySelectorAll('.cell')
const boardEl = document.getElementById('board')
const winner = document.getElementById('winner')
const restartBtn = document.getElementsByClassName('resetGame')
const cell = Array.from(document.getElementsByClassName('cell'));

const PlayerX ='X';
const PlayerO ='O';

let currentPlayer = 'X'; 
let board = ['', '', '', '', '', '', '', '',];
let isGameActive = true;
let gameBoxes = Array(9).fill(null);
console.log(gameBoxes)


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
    if(!gameBoxes[id]){
        gameBoxes[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer == PlayerX ? PlayerO : PlayerX
    }

}

restartBtn.addEventListener('click', restart)

function restart() {
    gameBoxes.fill(null)

    cells.forEach(cell => {
        cell.innerText = ''

    })
    currentPlayer = PlayerX;
}

startGame();

