const cells = document.querySelectorAll('.cell')
const boardEl = document.getElementsByClassName('board') //don't think i need
const winner = document.getElementsByClassName('winner') 
let restartBtn = document.querySelector('.restartBtn') /* still having issues with button*/
let playerDisplay = document.getElementsByClassName('PlayerDisplay')
// const cell = Array.from(document.getElementsByClassName('cell'));// don't think i need


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

        if(whoWon() !==false) {
            playerDisplay = `${currentPlayer} has won the game!!`
            let bigWinner = whoWon()

            console.log(bigWinner)
        }

        currentPlayer = currentPlayer == PlayerX ? PlayerO : PlayerX
    }

}

function whoWon () {
     for (const condition of winningConditions) {
        let [a, b, c] = condition

        if(gameBoxes[a] && (gameBoxes[a] == gameBoxes[b] && gameBoxes[a] == gameBoxes[c])) {
            return [a,b,c]
        }
     }

     return false
}

// restartBtn.addEventListener('click', restart(e))   //NOT WORKING, WILL RETURN
restartBtn.addEventListener('click', function(e) {
    window.location.reload(false)
})
// function restart() {
//     gameBoxes.fill(null)

//     cells.forEach(cell => {
//         cell.innerText = ' '
//     })
//     currentPlayer = PlayerX;
// }

startGame();

