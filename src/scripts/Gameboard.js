const GRID_SIZE = 7;

export default class Gameboard {
  constructor() {
    this.boardGrid = [];
    this.init();
  }

  init() {
    for (let i = 0; i < GRID_SIZE; i++) {
      this.boardGrid[i] = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        this.boardGrid[i][j] = null;
      }
    }
  }

  placeShip(row, col, ship) {
    for (let i = 0; i < ship.getLength(); i++) {
      this.boardGrid[row + i][col] = ship;
    }
    return true;
  }

  receiveAttack(row, col) {
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE)
      return false;

    if (this.boardGrid[row][col]) {
      let i = 1;
      let hitLocation = 0;

      while (row - i >= 0 && this.boardGrid[row - i][col]) {
        hitLocation++;
        i++;
      }
      this.boardGrid[row][col].hit(hitLocation);
      return true;
    }else{
        //place a miss
    }
  }
}
