// Gameboard object - IIFE module
const makeGameboard = (() => {
  let boardArray = ["", "", "", "", "", "", "", "", ""];

  const displayBoard = () => {
    const gameBoard = document.querySelector("#gameboard");
    boardArray.forEach((element) => {
      let square = document.createElement("div");
      square.classList.add("square");
      gameBoard.appendChild(square);
    });
  };

  return {
    displayBoard,
  };
})();

makeGameboard.displayBoard();

// const makeGameboard = (() => {
//   const gameBoard = document.querySelector("#gameboard");
//   const boardArray = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];
//   boardArray.forEach((element) => {
//     let square = document.createElement("div");
//     square.classList.add("square");
//     gameBoard.appendChild(square);
//   });
//   console.log(boardArray);
// })();

// Player object - factory
function Player(playerName, shape) {
  const getName = () => playerName;
  const getShape = () => shape;
  return { getName, getShape };
}

// Game object
const Game = () => {
  // Create players and console log name and shape
  const player1 = Player("Player 1", "X");
  console.log(`${player1.getName()} plays ${player1.getShape()}`);

  const player2 = Player("Player 2", "O");
  console.log(`${player2.getName()} plays ${player2.getShape()}`);

  let currentPlayerIndex = 0;

  // Function to add marker to board on click.
  // query selector to grab cells
  // Change class on click

  const addMarker = () => {
    console.log("Add marker");
  };
  return addMarker;
};

Game.addMarker;
