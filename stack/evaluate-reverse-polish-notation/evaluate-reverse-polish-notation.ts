/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens: string[]) {
  let stack: number[] = [];
  for (let token of tokens) {
    let t = Number(token);
    if (isNaN(t)) {
      let n1: number = stack.pop() || 0;
      let n2: number = stack.pop() || 0;
      switch (token) {
        case '+':
          stack.push(n2 + n1);
          break;
        case '-':
          stack.push(n2 - n1);
          break;
        case '*':
          stack.push(n2 * n1);
          break;
        case '/':
          let d = n2 / n1;
          if (d < 0) {
            d = -Math.floor(-d);
          } else {
            d = Math.floor(d);
          }
          stack.push(d);
          break;
      }
    } else {
      stack.push(t);
    }
  }
  return stack[0];
};
