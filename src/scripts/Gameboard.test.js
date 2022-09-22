import Gameboard from "./Gameboard";
import Ship from "./Ship";

let ship;
let board;

beforeEach(() => {
  board = new Gameboard();
  ship = new Ship("Battleship", 4);
});

test("Places a ship", () => {
  expect(board.placeShip(0, 0, ship)).toEqual(true);
  expect(board.ships.length).toEqual(1);
  expect(board.ships[0].name).toEqual("Battleship");
  expect(board.ships[0]).toBe(ship);
});

test("Able to receive attack on ship", () => {
  board.placeShip(1, 1, ship);
  expect(board.receiveAttack(1, 1)).toBe(true);
  expect(board.missGrid[1][1]).toBe("hit");
});

test("Able to receive attack and place miss", () => {
  board.placeShip(2, 7, ship);

  expect(board.receiveAttack(1, 1)).toBe(false);
  expect(board.boardGrid[1][1]).toBe("miss");
});

test("Check if there are still alive ships", () => {
  board.placeShip(1, 1, ship);

  board.receiveAttack(1, 1);
  board.receiveAttack(2, 1);
  board.receiveAttack(3, 1);
  board.receiveAttack(4, 1);

  expect(board.isGameOver()).toBe(true);
});
