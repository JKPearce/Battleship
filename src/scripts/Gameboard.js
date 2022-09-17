export default class Gameboard {
  constructor() {
    this.gridSize = 10;
    this.boardGrid = [];
    this.ships = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.gridSize; i++) {
      this.boardGrid[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.boardGrid[i][j] = null;
      }
    }
  }

  placeShip(row, col, ship) {
    if (row + ship.getLength() > this.gridSize || col > this.gridSize) return;

    for (let i = 0; i < ship.getLength(); i++) {
      this.boardGrid[row + i][col] = ship;
    }
    this.ships.push(ship);
    return true;
  }

  receiveAttack(row, col) {
    if (
      row < 0 ||
      row >= this.gridSize ||
      col < 0 ||
      col >= this.gridSize ||
      this.boardGrid[row][col] === "miss"
    )
      return;

    if (this.boardGrid[row][col]) {
      let i = 1;
      let hitLocation = 0;

      while (row - i >= 0 && this.boardGrid[row - i][col]) {
        hitLocation++;
        i++;
      }
      this.boardGrid[row][col].hit(hitLocation);
      return true;
    } else {
      this.boardGrid[row][col] = "miss";
      return false;
    }
  }

  isGameOver() {
    let finished = false;
    this.ships.forEach((ship) => {
      if (ship.isSunk()) finished = true;
      else finished = false;
    });
    return finished;
  }
}
