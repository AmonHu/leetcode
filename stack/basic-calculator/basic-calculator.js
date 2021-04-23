/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    if (s.length === 0) {
        return 0;
    }

    let arr = pareToArray(s);

    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '(') {
            if (arr[i] === '-') {
                stack.push(false);
            } else if (arr[i] === '+') {
                stack.push(true)
            } else if (arr[i] === ')') {
                stack.push(arr[i])
            } else if (arr[i] !== ' ') {
                stack.push(Number(arr[i]));
            }
        } else {
            calculateWithoutBracket(stack);
        }
    }
    calculateWithoutBracket(stack);
    return stack.pop();
};

var pareToArray = function (s) {
    if (s[0] === '-' || s[0] === '+') {
        s = 0 + s;
    }

    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        }
        if (isNaN(Number(s[i]))) {
            arr.push(s[i]);
        } else {
            if (isNaN(Number(arr[arr.length - 1]))) {
                arr.push(s[i]);
            } else {
                arr[arr.length - 1] += s[i];
            }
        }
    }
    return arr;
}

var calculateWithoutBracket = function (stack) {
    let tempSum = stack.pop();
    while (stack.length !== 0 && stack[stack.length - 1] !== ')') {
        let item = stack.pop();
        if (item === false) {
            tempSum -= stack.pop();
        } else {
            tempSum += stack.pop();
        }
    }

    if (stack[stack.length - 1] === ')') {
        stack.pop();
    }

    stack.push(tempSum);
}
console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
// console.log(calculate(' 2-1 + 2 '));
// console.log(calculate('(11+(4+5+2)-3)+(6+8)'));
// console.log(calculate('2147483647'));
