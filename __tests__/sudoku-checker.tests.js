import { Board } from '../src/sudoku-checker.js'

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
    board[0][0].value = 1;
    board[0][1].value = 9;
    board[0][2].value = 7;
    board[1][0].value = 5;
    board[1][1].value = 2;
    board[1][2].value = 6;
    board[2][0].value = 4;
    board[2][1].value = 8;
    board[2][2].value = 3;
    board[3][0].value = 9;
    board[3][1].value = 6;
    board[3][2].value = 5;
    board[4][0].value = 3;
    board[4][1].value = 7;
    board[4][2].value = 2;
    board[5][0].value = 8;
    board[5][1].value = 1;
    board[5][2].value = 4;
    board[6][0].value = 6;
    board[6][1].value = 3;
    board[6][2].value = 1;
    board[7][0].value = 7;
    board[7][1].value = 5;
    board[7][2].value = 8;
    board[8][0].value = 2;
    board[8][1].value = 4;
    board[8][2].value = 9;
    board[0][3].value = 5;
    board[0][4].value = 6;
    board[0][5].value = 3;
    board[1][3].value = 4;
    board[1][4].value = 1;
    board[1][5].value = 8;
    board[2][3].value = 9;
    board[2][4].value = 2;
    board[2][5].value = 7;
    board[3][3].value = 2;
    board[3][4].value = 3;
    board[3][5].value = 4;
    board[4][3].value = 1;
    board[4][4].value = 8;
    board[4][5].value = 5;
    board[5][3].value = 6;
    board[5][4].value = 7;
    board[5][5].value = 9;
    board[6][3].value = 7;
    board[6][4].value = 4;
    board[6][5].value = 2;
    board[7][3].value = 3;
    board[7][4].value = 9;
    board[7][5].value = 1;
    board[8][3].value = 8;
    board[8][4].value = 5;
    board[8][5].value = 6;
    board[0][6].value = 8;
    board[0][7].value = 4;
    board[0][8].value = 2;
    board[1][6].value = 7;
    board[1][7].value = 3;
    board[1][8].value = 9;
    board[2][6].value = 6;
    board[2][7].value = 1;
    board[2][8].value = 5;
    board[3][6].value = 1;
    board[3][7].value = 8;
    board[3][8].value = 7;
    board[4][6].value = 9;
    board[4][7].value = 6;
    board[4][8].value = 4;
    board[5][6].value = 2;
    board[5][7].value = 5;
    board[5][8].value = 3;
    board[6][6].value = 5;
    board[6][7].value = 9;
    board[6][8].value = 8;
    board[7][6].value = 4;
    board[7][7].value = 2;
    board[7][8].value = 6;
    board[8][6].value = 3;
    board[8][7].value = 7;
    board[8][8].value = 1;
  });
  test('9x9 board is created', () => {
    expect(board[0][0].x).toEqual(0);
    expect(board[0][0].y).toEqual(0);
    expect(board[8][8].x).toEqual(8);
    expect(board[8][8].y).toEqual(8);
  });

  test('Values for one row are checked to see if they contain 1 to 9 with no repeats', () => {
    expect(board.checkRow(0)).toEqual(true);
  });

  test('Values for one column are checked to see if they contain 1 to 9 with no repeats', () => {
    expect(board.checkCol(0)).toEqual(true);
  });

  test('One of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats', () => {
    expect(board.checkGrid("00")).toEqual(true);
  });

  test('All of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats', () => {
    expect(board.checkAllGrids()).toEqual(true);
  });

  test('Values for all rows and columns are checked to see if they contain 1 to 9 with no repeats', () => {
    expect(board.checkAllRowsCols()).toEqual(true);
  });
});


/* 9x9 board is created
Values are entered in squares on that board
Values for each row are checked to see if they contain 1 to 9 with no repeats
Values for each column are checked to see if they contain 1 to 9 with no repeats
Board is further broken down to 3x3 grids
Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats */