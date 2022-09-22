export default class UI {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.boardHTML = document.getElementById("boardContainer");
    this.init();
  }

  init() {
    this.boardHTML.appendChild(this.createBoard("board1", this.player1));
    this.boardHTML.appendChild(this.createBoard("board2", this.player2));
  }

  createBoard(name, player) {
    const board = document.createElement("div");
    board.id = name;
    board.classList.add("board");

    for (let i = 0; i < this.player1.board.gridSize; i++) {
      const row = document.createElement("div");
      row.id = `${player.name}-row${i}`;
      row.classList.add("row");
      board.appendChild(row);
      for (let j = 0; j < this.player1.board.gridSize; j++) {
        const cell = this.createCell(i, j, player.name);
        if (name === "board2") {
          cell.addEventListener(
            "click",
            (e) => {
              if (!this.player1.getTurn()) return;
              this.player1.makeAttack(this.player2, i, j);
              this.updateBoard(this.player2, i, j);
              this.botPlay();
            },
            { once: true }
          );
        } else if (this.player1.getItemFromGrid(i, j)) {
          cell.classList.add("ship"); //temp to show pre-placed ships, remove once added user selected ships
        }
        row.appendChild(cell);
      }
    }
    return board;
  }

  createCell(row, col, name) {
    const element = document.createElement("div");
    element.classList.add("cell");
    element.id = `${name}r${row}c${col}`;

    return element;
  }

  updateBoard(player, row, col) {
    if (player.board.missGrid[row][col] === "") return;
    if (player.board.missGrid[row][col] === "miss") {
      document
        .getElementById(`${player.name}r${row}c${col}`)
        .classList.add("miss");
    } else {
      document
        .getElementById(`${player.name}r${row}c${col}`)
        .classList.add("hit");
    }
  }

  botPlay() {
    if (this.player1.board.isGameOver()) {
      //display winner modal with reset button and player name
      console.log("p1 win");
      return;
    } else if (this.player2.board.isGameOver()) {
      console.log("cpu win");
      return;
    }

    let num1 = this.randomNumberTo(10);
    let num2 = this.randomNumberTo(10);
    console.log(num1, num2);
    while (this.player2.board.missGrid[num1][num2] !== "") {
      num1 = this.randomNumberTo(10);
      num2 = this.randomNumberTo(10);
      console.log("recalculating", num1, num2);
    }
    this.player2.makeAttack(this.player1, num1, num2);
    this.updateBoard(this.player1, num1, num2);
  }

  randomNumberTo(x) {
    return Math.floor(Math.random() * x);
  }
}
