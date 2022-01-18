function grayCode(n: number): number[] {
  const codes: Array<number> = [];
  for (let i = 0; i < 2 ** n; i++) {
    if (i === 0) {
      codes.push(0);
    } else if (i % 2 === 1) {
      codes.push(codes[i - 1] ^ 1);
    } else {
      let pre = codes[i - 1];
      let first1Bit = 1;
      while (pre % 2 === 0) {
        first1Bit++;
        pre /= 2;
      }
      codes.push(codes[i - 1] ^ (1 << first1Bit));
    }
  }
  return codes;
};

grayCode(3);