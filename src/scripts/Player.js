import Gameboard from "./Gameboard";

export default class Player {
  constructor(name) {
    this.board = new Gameboard();
    this.name = name;
  }

  makeAttack(opponentBoard, row, col) {
    return opponentBoard.receiveAttack(row, col);
  }
}
