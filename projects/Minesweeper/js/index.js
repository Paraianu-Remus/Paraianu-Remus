import {
  tile_statuses,
  createGameBoard,
  markTile,
  revealTile,
  checkGameWon,
  checkGameLost,
} from "./minesweeper.js";

import { popupAdd, popupRemove } from "./popup.js";

// Variables you can control game board size and mines
const gameBoardSize = 10;
const numberOfMines = 20;

const gameBoard = createGameBoard(gameBoardSize, numberOfMines);
const gameBoardElement = document.querySelector(".game-board");
const minesLeftCounter = document.querySelector("[data-mine-count");
const message = document.querySelector(".subtext");
const dismissPopup = document.getElementById("dismissPopupBtn");
const popupMessage = document.querySelector(".game-over");

gameBoard.forEach((row) => {
  row.forEach((tile) => {
    gameBoardElement.append(tile.element);
    tile.element.addEventListener("click", () => {
      revealTile(gameBoard, tile);
      checkGameOver();
    });
    tile.element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      markTile(tile);
      minesLeft();
    });
  });
});
gameBoardElement.style.setProperty("--size", gameBoardSize);
minesLeftCounter.textContent = numberOfMines;

// Mines left counter (subtext)
function minesLeft() {
  const markedTiles = gameBoard.reduce((count, row) => {
    return (
      count + row.filter((tile) => tile.status === tile_statuses.marked).length
    );
  }, 0);

  minesLeftCounter.textContent = numberOfMines - markedTiles;
}

// Checks if the game is over
function checkGameOver() {
  const win = checkGameWon(gameBoard);
  const lose = checkGameLost(gameBoard);

  if (win || lose) {
    gameBoardElement.addEventListener("click", stopProp, { capture: true });
    gameBoardElement.addEventListener("contextmenu", stopProp, {
      capture: true,
    });
  }

  if (win) {
    message.textContent = "You won!";
    popupAdd();
    popupMessage.textContent = "won!";
    popupMessage.style.color = "green";
  }
  if (lose) {
    message.textContent = "You lost!";
    gameBoard.forEach((row) => {
      row.forEach((tile) => {
        if (tile.status === tile_statuses.marked) {
          markTile(tile);
        }
        if (tile.mine) {
          revealTile(gameBoard, tile);
        }
      });
    });
    popupAdd();
    popupMessage.textContent = "lost!";
    popupMessage.style.color = "red";
  }
}

function stopProp(e) {
  e.stopImmediatePropagation();
}
