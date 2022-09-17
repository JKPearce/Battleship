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
        const cell = this.createCell(i, j);
        if (name === "board2") {
          cell.addEventListener(
            "click",
            (e) => {
              if (!this.player1.getTurn()) return;
              this.updateCell(e, this.player1.makeAttack(this.player2, i, j));
            },
            { once: true }
          );
        }
        row.appendChild(cell);
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

  updateCell(e, successful) {
    if (successful) {
      e.target.classList.add("hit");
    } else {
      e.target.classList.add("miss");
    }
  }
}
