export default class UI {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.boardHTML = document.getElementById("boardContainer");
    this.init();
  }

  init() {
    this.boardHTML.appendChild(this.createBoard("board1"));
    this.boardHTML.appendChild(this.createBoard("board2"));
  }

  createBoard(name) {
    const board = document.createElement("div");
    board.id = name;
    board.classList.add("board");

    for (let i = 0; i < this.player1.board.gridSize; i++) {
      const row = document.createElement("div");
      row.id = `row${i}`;
      row.classList.add("row");
      board.appendChild(row);
      for (let j = 0; j < this.player1.board.gridSize; j++) {
        row.appendChild(this.createCell(i, j));
      }
    }
    return board;
  }

  createCell(row, cell) {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.id = `row${row}-cell${cell}`;

    return element;
  }

  updateGrid(player) {}
}
