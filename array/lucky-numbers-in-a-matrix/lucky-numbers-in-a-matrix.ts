function luckyNumbers(matrix: number[][]): number[] {
  const lines = matrix.map(m => Math.min(...m));
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const minColumn = Math.max(...matrix.map(m => m[i]));
    if (lines.indexOf(minColumn) >= 0) {
      result.push(minColumn);
    }
  }

  return result;
};

luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]);