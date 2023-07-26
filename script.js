// IIFE  to create the game board as an array
const makeGameboard = (() => {
  const gameBoard = document.querySelector("#gameboard");
  const boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  boardArray.forEach((element) => {
    let square = document.createElement("div");
    square.classList.add("square");
    gameBoard.appendChild(square);
  });
})();
