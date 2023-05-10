// Obtenemos todas las celdas del tablero
const cells = document.querySelectorAll('td');

// Definimos los colores de los jugadores
const playerOneColor = 'blue';
const playerTwoColor = 'red';

// Definimos el estado inicial del tablero
let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
// Definimos el turno del jugador actual
let currentPlayer = 1;

// Agregamos un evento "click" a cada celda del tablero
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

// Función que se ejecuta al hacer clic en una celda
function handleCellClick() {
    // Obtenemos la fila y la columna de la celda que se hizo clic
    const rowIndex = this.parentElement.rowIndex;
    const colIndex = this.cellIndex;
  
    // Si la celda ya tiene un valor, salimos de la función
    if (this.textContent !== '') {
      return;
    }
  
    // Agregamos el valor correspondiente al jugador actual
    if (currentPlayer === 1) {
      this.textContent = 'X';
      this.classList.add('player-one');
      board[rowIndex][colIndex] = 1;
    } else {
      this.textContent = 'O';
      this.classList.add('player-two');
      board[rowIndex][colIndex] = 2;
    }
  
    // Verificamos si hay un ganador
    const winner = checkForWinner();
    if (winner !== null) {
      alert(`¡El jugador ${winner} ha ganado!`);
    }
  
    // Cambiamos el turno del jugador actual
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }

  // Función que verifica si hay un ganador en el tablero
function checkForWinner() {
    // Verificamos las filas
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
        return board[i][0];
      }
    }
  
    // Verificamos las columnas
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== 0) {
        return board[0][j];
      }
    }
  
    // Verificamos las diagonales
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
      return board[0][0];
    }
  
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
      return board[0][2];
    }
  
    // Si no hay un ganador, retornamos null
    return null;
  }
  
  



  