// Function to create the game board
const makeGameboard = (() => {
  const gameBoard = document.querySelector("#gameboard");
  for (let i = 0; i <= 8; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gameBoard.appendChild(square);
  }
})();
