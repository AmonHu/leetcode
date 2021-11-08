/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board: string[][]) => {
  const set = new Set();
  for (const boardLine of board) {
    for (const item of boardLine) {
      if (item !== '.') {
        if (set.has(item)) {
          return false;
        }
        set.add(item);
      }
    }
    set.clear();
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const item = board[j][i];
      if (item !== '.') {
        if (set.has(item)) {
          return false;
        }
        set.add(item);
      }
    }
    set.clear();
  }

  let x = 3;
  let y = 3;
  let i = 0;
  let j = 0;
  while (x <= board.length && y <= board.length) {
    for (i = x - 3; i < x; i++) {
      for (j = y - 3; j < y; j++) {
        const item = board[i][j];
        if (item !== '.') {
          if (set.has(item)) {
            return false;
          }
          set.add(item);
        }
      }

    }
    x = x + 3;
    set.clear();
    if (i >= board.length) {
      x = 3;
      y = y + 3;
    }
  }

  return true;
};

const board = [["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];

const r = isValidSudoku(board);
console.log(r);