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
      square.id = i;
    });
    const squares = document.querySelectorAll(".square");
    console.log(squares);
    squares.forEach((square) => {
      square.addEventListener("click", Game.handleClick);
      square.classList.remove("markedx", "markedy");
    });
  };

  // Return the displayBoard method so it can be accessed outside of the object
  return {
    displayBoard,
    boardArray,
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
    makeGameboard.boardArray = ["", "", "", "", "", "", "", "", ""];
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

  // Add 1s and 2s to array. 0 = red; x = blue
  const updateArray = (array, squareNumber) => {
    console.log("bananas");
    if (currentPlayerIndex % 2 === 0) {
      array[squareNumber] = "0";
    } else {
      array[squareNumber] = "x";
    }
  };

  const handleClick = (event) => {
    //The code below is to change the index of the right array item to reflect the id of the clicked square.

    const clickedSquare = event.target;
    const squareNumber = clickedSquare.id;
    console.log(squareNumber);
    if (
      clickedSquare.classList.contains("markedx") ||
      clickedSquare.classList.contains("markedy")
    ) {
      alert("That square is taken, buddy!");
    } else {
      markSquare(event.target);
      currentPlayerIndex = currentPlayerIndex + 1;
      updateArray(makeGameboard.boardArray, squareNumber);
      console.log(makeGameboard.boardArray);
    }
    console.log(makeGameboard.boardArray);
    checkWinner(makeGameboard.boardArray);
  };

  const checkWinner = (array) => {
    if (array[0] != "" && array[0] === array[1] && array[0] === array[2]) {
      endGame();
    }
    if (array[3] != "" && array[3] === array[4] && array[3] === array[5]) {
      endGame();
    }
    if (array[6] != "" && array[6] === array[7] && array[6] === array[8]) {
      endGame();
    }
    if (array[0] != "" && array[0] === array[3] && array[0] === array[6]) {
      endGame();
    }
    if (array[1] != "" && array[1] === array[4] && array[1] === array[7]) {
      endGame();
    }
    if (array[2] != "" && array[2] === array[5] && array[2] === array[8]) {
      endGame();
    }
    if (array[0] != "" && array[0] === array[4] && array[0] === array[8]) {
      endGame();
    }
    if (array[2] != "" && array[2] === array[4] && array[2] === array[6]) {
      endGame();
    }
  };

  const endGame = () => {
    alert("Game over!");
    gameOver = true;
    start();
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
