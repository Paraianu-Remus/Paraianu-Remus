export const tile_statuses = {
  hidden: "hidden", //tile is not shown
  mine: "mine", //tile is a mine
  number: "number", //tile shows number of mines
  marked: "marked", //time it's marked
};

// Create Board and mines
export function createGameBoard(gameBoardSize, numberOfMines) {
  const gameBoard = [];
  const minePositions = getMinePositions(gameBoardSize, numberOfMines);

  for (let x = 0; x < gameBoardSize; x++) {
    const row = [];
    for (let y = 0; y < gameBoardSize; y++) {
      const element = document.createElement("div");
      element.dataset.status = tile_statuses.hidden;
      const tile = {
        element,
        x,
        y,
        mine: minePositions.some(positionMatch.bind(null, { x, y })),
        get status() {
          return this.element.dataset.status;
        },
        set status(value) {
          this.element.dataset.status = value;
        },
      };
      row.push(tile);
    }
    gameBoard.push(row);
  }
  return gameBoard;
}

// Marked tiles
export function markTile(tile) {
  if (
    tile.status !== tile_statuses.hidden &&
    tile.status !== tile_statuses.marked
  ) {
    return;
  }

  if (tile.status === tile_statuses.marked) {
    tile.status = tile_statuses.hidden;
  } else {
    tile.status = tile_statuses.marked;
  }
}

// Reveals mines, numbers or empty tiles
export function revealTile(gameBoard, tile) {
  if (tile.status !== tile_statuses.hidden) {
    return;
  }

  if (tile.mine) {
    tile.status = tile_statuses.mine;
    return;
  }
  tile.status = tile_statuses.number;
  const adjacentTiles = nearbyTiles(gameBoard, tile);
  const mines = adjacentTiles.filter((t) => t.mine);
  if (mines.length === 0) {
    adjacentTiles.forEach(revealTile.bind(null, gameBoard));
  } else {
    tile.element.textContent = mines.length;
  }
}

// Check if you won the game
export function checkGameWon(gameBoard) {
  return gameBoard.every((row) => {
    return row.every((tile) => {
      return (
        tile.status === tile_statuses.number ||
        (tile.mine &&
          (tile.status === tile_statuses.hidden ||
            tile.status === tile_statuses.marked))
      );
    });
  });
}
// Check if you lost the game
export function checkGameLost(gameBoard) {
  return gameBoard.some((row) => {
    return row.some((tile) => {
      return tile.status === tile_statuses.mine;
    });
  });
}

// Checks where mines are
function getMinePositions(gameBoardSize, numberOfMines) {
  const positions = [];

  while (positions.length < numberOfMines) {
    const position = {
      x: randomNumber(gameBoardSize),
      y: randomNumber(gameBoardSize),
    };
    // Checks every position of mines in the board (and if duplicate)
    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position);
    }
  }

  return positions;
}

// Mines in the same position (duplicate)
function positionMatch(a, b) {
  return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
  return Math.floor(Math.random() * size);
}

// Checks how many mines are nearby the tile clicked
function nearbyTiles(gameBoard, { x, y }) {
  const tiles = [];

  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const tile = gameBoard[x + xOffset]?.[y + yOffset];
      if (tile) {
        tiles.push(tile);
      }
    }
  }

  return tiles;
}
