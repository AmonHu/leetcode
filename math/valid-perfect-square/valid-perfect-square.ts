function isPerfectSquare(num: number): boolean {
  if (num === 1) {
    return true;
  }

  let s = 0;
  let r = num;
  let mid = num >>> 1;
  while (s < r) {
    if (mid * mid > num) {
      r = mid;
      mid = (s + r) >>> 1;
    } else if (mid * mid < num) {
      s = mid;
      mid = (s + r) >>> 1;
    } else {
      return true;
    }

    if (mid === r || mid === s) {
      return false;
    }
  }
  return false;
};

isPerfectSquare(1);