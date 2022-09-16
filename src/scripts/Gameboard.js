const GRID_SIZE = 7;

export default class Gameboard {
  constructor() {
    this.boardGrid = [];
    this.init();
  }

  init(){
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
}
