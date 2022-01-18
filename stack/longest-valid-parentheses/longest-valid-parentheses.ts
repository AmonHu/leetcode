function longestValidParentheses(s: string): number {
  let start = 0;
  let count = 0;
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else {
      count--;
      if (count === 0) {
        ans = Math.max(ans, i - start + 1);
      } else if (count < 0) {
        start = i + 1;
        count = 0;
      }

    }
  }

  start = s.length - 1;
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') {
      count++;
    } else {
      count--;
      if (count === 0) {
        ans = Math.max(ans, start + 1 - i);
      } else if (count < 0) {
        start = i - 1;
        count = 0;
      }
    }
  }

  return ans;
}
