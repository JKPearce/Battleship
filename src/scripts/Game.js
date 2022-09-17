import UI from "./UI";
import Player from "./Player";
import Ship from "./Ship";

function start() {
  const player1 = new Player("Player 1");
  const player2 = new Player("Computer");
  const ui = new UI(player1, player2);

  //change from hardcoded to a foreach loop over an array of
  //objects of pre-defined ships asking user to place each one
  //place at coords user clicked on
  player1.board.placeShip(1, 1, new Ship("Carrier", 5));
  player1.board.placeShip(3, 3, new Ship("Battleship", 4));
  player1.board.placeShip(4, 2, new Ship("Destroyer", 3));
  player1.board.placeShip(1, 6, new Ship("Submarine", 3));
  player1.board.placeShip(4, 9, new Ship("Patrol Boat", 2));

  player2.board.placeShip(1, 6, new Ship("Carrier", 5));
  player2.board.placeShip(3, 1, new Ship("Battleship", 4));
  player2.board.placeShip(4, 2, new Ship("Destroyer", 3));
  player2.board.placeShip(1, 4, new Ship("Submarine", 3));
  player2.board.placeShip(4, 9, new Ship("Patrol Boat", 2));

  player1.setTurn(true);

  console.log(player1);
  console.log(player2);
}

export { start };
