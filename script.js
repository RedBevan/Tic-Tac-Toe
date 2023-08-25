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
    squares.forEach((square) => {
      square.addEventListener("click", Game.handleClick);
    });
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
    currentPlayerIndex = 1;
    gameOver = false;
  };

  const markSquare = (clickedSquare) => {
    if (currentPlayerIndex % 2 === 0) {
      clickedSquare.classList.add("markedx");
    } else {
      clickedSquare.classList.add("markedy");
    }
    clickedSquare.classList.toggle("square");
  };

  const handleClick = (event) => {
    const clickedSquare = event.target;

    if (
      clickedSquare.classList.contains("markedx") ||
      clickedSquare.classList.contains("markedy")
    ) {
      alert("That square is taken, buddy!");
    } else {
      currentPlayerIndex = currentPlayerIndex + 1;
      markSquare(event.target);
    }
  };

  return {
    start,
    handleClick,
  };
})();

const newGameButton = document.querySelector("#newGameButton");
newGameButton.addEventListener("click", () => {
  Game.start();
});
