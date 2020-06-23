import { Board } from '../src/sudoku-checker.js'

describe('Board', () => {

  test('9x9 board is created', () => {
    const board = new Board();
    expect(board[0][0].x).toEqual(0);
    expect(board[0][0].y).toEqual(0);
    expect(board[8][8].x).toEqual(8);
    expect(board[8][8].y).toEqual(8);
  });
});


/* 9x9 board is created
Values are entered in squares on that board
Values for each row are checked to see if they contain 1 to 9 with no repeats
Values for each column are checked to see if they contain 1 to 9 with no repeats
Board is further broken down to 3x3 grids
Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats */