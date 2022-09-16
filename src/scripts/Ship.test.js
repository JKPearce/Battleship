import Ship from "./Ship";
let battleship;

beforeEach(() => {
    battleship = new Ship("Battleship", 4);
});

test("Getting name of ship", () => {
    expect(battleship.getName()).toBe("Battleship");
});

test("Getting length of ship", () => {
    expect(battleship.getLength()).toBe(4);
});

test("Can ship be hit 1 time", () => {
    battleship.hit(1);
    expect(battleship.hits).toContain(1);
});

test("Make sure ship only can be hit 1 time on the same spot", () => {
    battleship.hit(1);
    battleship.hit(1);
    battleship.hit(1);
    battleship.hit(1);
    battleship.hit(1);
    expect(battleship.hits).toContain(1);
});

test("can sink", () =>{
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    expect(battleship.isSunk()).toBe(true);
})