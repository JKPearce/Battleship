import Player from "./Player";

let player1;
let player2;

beforeEach(() => {
  player1 = new Player("Player 1");
  player2 = new Player("Computer");
});

test("Get player name", () => {
  expect(player1.name).toBe("Player 1");
});

test("Player can make attack", () => {
  expect(player1.makeAttack(player2, 1, 1)).toBe(false);
  expect(player2.board.boardGrid[1][1]).toBe("miss");
});
