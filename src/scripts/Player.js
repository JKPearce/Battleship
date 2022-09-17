import Gameboard from "./Gameboard";

export default class Player {
  constructor(name) {
    this.board = new Gameboard();
    this.name = name;
    this.turn = false;
  }

  makeAttack(opponent, row, col) {
    this.turn = false;
    opponent.setTurn(true);
    return opponent.board.receiveAttack(row, col);
  }

  getTurn() {
    return this.turn;
  }

  setTurn(turn) {
    this.turn = turn;
  }

  getItemFromGrid(row, col) {
    return this.board.boardGrid[row][col];
  }
}
