export default class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = [];
  }

  getName() {
    return this.name;
  }

  getLength() {
    return this.length;
  }

  hit(position) {
    if (this.hits.includes(position)) return;
    this.hits.push(position);
  }

  isSunk(){
    return this.hits.length === this.length;
  }
}
