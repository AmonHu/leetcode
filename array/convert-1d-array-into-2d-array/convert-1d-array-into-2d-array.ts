function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (m * n != original.length) {
    return [];
  }

  const result = [];
  for (let i = 0; i < original.length; i++) {
    const x = Math.floor(i / n);
    const y = i % n;
    if (y == 0) {
      result.push([original[i]]);
    } else {
      result[x][y] = original[i];
    }

  }
  return result;
};

const res = construct2DArray([1, 2, 3, 4], 1, 1);
console.log(res);