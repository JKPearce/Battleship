import Gameboard from "./Gameboard";
import Ship from "./Ship";

let ship;
let board;

beforeEach(() => {
  board = new Gameboard();
  ship = new Ship("Battleship", 4);
});

test("Places a ship", () => {
  expect(board.placeShip(0,0, ship)).toEqual(true);
});

test("Able to receive attack", () => {
    board.placeShip(1,1, ship);
    expect(board.receiveAttack(1, 1)).toBe(true);
})