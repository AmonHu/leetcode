function divide(dividend: number, divisor: number): number {
  const min = -Math.pow(2, 31);
  const max = -min - 1;
  const precision = 0.0001;

  const isPositive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let result = Math.log2(dividend) - Math.log2(divisor);
  result = Math.pow(2, result)

  if (!isPositive) {
    result = -result;
  }

  if (Math.abs(result - Math.round(result)) < precision) {
    result = Math.round(result);
  }

  if (result > max - precision) {
    result = max;
  } else if (result < min + precision) {
    result = min;
  }

  result = Math.trunc(result)

  return result;
};


console.log(divide(-231, 3))

