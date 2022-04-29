function complexNumberMultiply(num1: string, num2: string): string {
  const [n11, n12] = num1.split('+').map(n => Number(n.replace('i', '')));
  const [n21, n22] = num2.split('+').map(n => Number(n.replace('i', '')));
  const real = n11 * n21 - n12 * n22;
  const imaginary = n11 * n22 + n12 * n21;

  return `${real}+${imaginary}i`;
};

// complexNumberMultiply("1+1i", "1+1i");
complexNumberMultiply("1+-1i", "1+-1i");