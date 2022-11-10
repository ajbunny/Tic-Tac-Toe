const cells = document.querySelectorAll('.cell')
const boardEl = document.getElementById('board')


const PlayerX ='X';
const PlayerO ='O';
let cell = Array.from(document.getElementsByClassName('board'));
 
let board = ['', '', '', '', '', '', '', '',];
let isGameActive = true;
let currentPlayer = 'X';

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
    console.log(cells)
    cells.forEach(cell => cell.addEventListener('click', (e) => {
        cellsClicked(e) 
    }))
}

function cellsClicked(e) {
    console.log(e.target)
}

startGame();

