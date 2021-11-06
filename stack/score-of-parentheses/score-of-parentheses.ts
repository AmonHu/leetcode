/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S: string) {
  let stack = [0];
  for (let s of S) {
    if (s === '(') {
      stack.push(0);
    } else {
      let peek = stack.pop() || 0;
      stack[stack.length - 1] += Math.max(peek * 2, 1)
    }
  }

  return stack[0];
};


console.log(scoreOfParentheses('(()(()))'));


