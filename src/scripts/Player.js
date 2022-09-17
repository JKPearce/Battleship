import Gameboard from "./Gameboard";

export default class Player {
  constructor(name) {
    this.board = new Gameboard();
    this.name = name;
    this.turn = false;
  }

  makeAttack(opponent, row, col) {
    return opponent.board.receiveAttack(row, col);
  }

  getTurn() {
    return this.turn;
  }

  setTurn(turn) {
    this.turn = turn;
  }
}
