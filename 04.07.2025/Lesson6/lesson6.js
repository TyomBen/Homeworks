let board = document.getElementById('board');
let flag = false;
let b = [
    '', '', '',
    '', '', '',
    '', '', '',
];
const winningCombos = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['0', '1', '2'],
  ];
board.addEventListener("click", function (event) {
    let index = event.target.dataset.index;
    if(event.target.textContent == ''){
        if(flag === false) {
            const e = event.target.textContent = 'X';
            b[index] = e;
            document.getElementById('status').textContent = "Player O's turn";
            flag = true;
        }else {
            const e = event.target.textContent = 'O';
            b[index] = e;
            document.getElementById('status').textContent = "Player X's turn";
            flag = false;
        }

    function checkWinner(b, player) {
        return winningCombos.some(combo => {
            return combo.every(index => b[index] === player);
        });
    }

    if(checkWinner(b, b[index])){
        document.getElementById('status').textContent = `Player ${b[index]} Won`;
        board.style.pointerEvents = 'none';
    }}

    let restart = document.getElementById('reset');
        restart.addEventListener('click', function () {
            event.target.textContent = '';
            board.style.pointerEvents = 'auto'; 
            b[index] = '';
            document.getElementById('status').textContent = "Player X's turn";
            flag = false;
        })
})



