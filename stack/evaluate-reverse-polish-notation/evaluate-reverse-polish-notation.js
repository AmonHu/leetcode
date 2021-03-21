/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let token of tokens) {
        let t = Number(token);
        if (isNaN(t)) {
            let n1 = stack.pop();
            let n2 = stack.pop();
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
                        d = - Math.floor(-d);
                    }else{
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

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));