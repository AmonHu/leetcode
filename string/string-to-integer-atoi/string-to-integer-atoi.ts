/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s: string) {
  s = s.trim();
  if (s.length === 0) {
    return 0;
  }

  let isNagtive = false;
  if (s[0] === '-') {
    isNagtive = true;
    s = s.slice(1);
  } else if (s[0] === '+') {
    s = s.slice(1);
  }

  let result = 0;
  for (let b of s) {
    let n = parseInt(b);
    if (isNaN(n)) {
      break;
    }

    result = result * 10 + n;
  }

  if (isNagtive) {
    result = -result;
  }
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  if (result < min) {
    result = min;
  }
  if (result > max) {
    result = max;
  }
  return result + 0;

};
