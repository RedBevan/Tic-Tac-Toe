// Gameboard object - IIFE module
const makeGameboard = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];
  const displayBoard = () => {
    const gameBoard = document.querySelector("#gameboard");
    gameBoard.innerHTML = "";
    boardArray.forEach((element, i) => {
      let square = document.createElement("div");
      square.classList.add("square");
      gameBoard.appendChild(square);
      square.id = i + 1;
    });
    const squares = document.querySelectorAll(".square");
    console.log(squares);
  };

  // Return the displayBoard method so it can be accessed outside of the object
  return {
    displayBoard,
  };
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    makeGameboard.displayBoard();
    players = [createPlayer("Player 1", "X"), createPlayer("Player 2", "O")];
    currentPlayerIndex = 0;
    gameOver = false;
  };
  return {
    start,
  };
})();

const newGameButton = document.querySelector("#newGameButton");
newGameButton.addEventListener("click", () => {
  Game.start();
});
