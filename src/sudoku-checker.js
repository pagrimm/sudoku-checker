export function Board() {
  for (let x = 0; x < 9; x++) {
    this[x] = [];
    for (let y = 0; y < 9; y++) {
      let square = new Square(x, y);
      this[x].push(square);
    }
  }
}

Board.prototype.checkCol = function(col) {
  for (let i = 0; i < 9; i++) {
    for(let j = i + 1; j < 9; j++ ){
      if(this[col][i].value === this[col][j].value){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.checkRow = function(row) {
  for (let i = 0; i < 9; i++) {
    for(let j = i + 1; j < 9; j++ ){
      if(this[i][row].value === this[j][row].value){
        return false;
      }
    }
  }
  return true;
};

Board.prototype.checkAllRowsCols = function () {
  for (let i = 0; i < 9; i++) {
    if (this.checkCol(i) === false || this.checkRow(i) === false) {
      return false;
    }
  }
  return true;
};

Board.prototype.checkGrid = function(grid) {
  let gridArray = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (this[i][j].grid === grid) {
        gridArray.push(this[i][j].value);
      }
    }
  }
  for(let i = 0; i < 9; i++) {
    for(let j = i + 1; j < 9; j++) {
      if (gridArray[i] === gridArray[j]) {
        return false;
      }
    }
  }
  return true;
};

Board.prototype.checkAllGrids = function () {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (this.checkGrid(i.toString() + j.toString()) === false) {
        return false;
      }
    }
  }
  return true;
};

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.value = 0;
  this.grid = (Math.floor(x/3).toString()) + (Math.floor(y/3).toString());
}