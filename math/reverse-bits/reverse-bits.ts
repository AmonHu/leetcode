function reverseBits(n: number): number {
  let index = 32;
  let r = 0;
  while (index--) {
    const bit = n & 1;
    n >>= 1;
    r <<= 1;
    r += bit;

  }
  return r >>> 0;
};

reverseBits(-3);