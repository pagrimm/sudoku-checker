import { Board } from '../src/sudoku-checker.js'

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });
  test('9x9 board is created', () => {
    expect(board[0][0].x).toEqual(0);
    expect(board[0][0].y).toEqual(0);
    expect(board[8][8].x).toEqual(8);
    expect(board[8][8].y).toEqual(8);
  });

  test('Values for each row are checked to see if they contain 1 to 9 with no repeats', () => {
    board[0][0].value = 1;
    board[1][0].value = 2;
    board[2][0].value = 3;
    board[3][0].value = 4;
    board[4][0].value = 5;
    board[5][0].value = 6;
    board[6][0].value = 7;
    board[7][0].value = 8;
    board[8][0].value = 9;
    expect(board.checkRow(0)).toEqual(true);
  });

  test('Values for each column are checked to see if they contain 1 to 9 with no repeats', () => {
    board[0][0].value = 1;
    board[0][1].value = 2;
    board[0][2].value = 3;
    board[0][3].value = 4;
    board[0][4].value = 5;
    board[0][5].value = 6;
    board[0][6].value = 7;
    board[0][7].value = 8;
    board[0][8].value = 9;
    expect(board.checkCol(0)).toEqual(true);
  });

  test('One of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats', () => {
    board[0][0].value = 1;
    board[0][1].value = 2;
    board[0][2].value = 3;
    board[1][0].value = 4;
    board[1][1].value = 5;
    board[1][2].value = 6;
    board[2][0].value = 7;
    board[2][1].value = 8;
    board[2][2].value = 9;
    expect(board.checkGrid("00")).toEqual(true);
  });

  test('One of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats', () => {
    expect(board.checkAllGrids()).toEqual(true);
  });
});


/* 9x9 board is created
Values are entered in squares on that board
Values for each row are checked to see if they contain 1 to 9 with no repeats
Values for each column are checked to see if they contain 1 to 9 with no repeats
Board is further broken down to 3x3 grids
Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats */