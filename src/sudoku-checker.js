export function Board() {
  for (let x = 0; x < 9; x++) {
    this[x] = [];
    for (let y = 0; y < 9; y++) {
      let square = new Square(x, y);
      this[x].push(square);
    }
  }
}

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.value = 0;
  this.grid = (Math.floor(x/3).toString()) + (Math.floor(y/3).toString());
}