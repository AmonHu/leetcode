/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return parseString(S) === parseString(T);
};


/**
 * @param {string} s
 * @return {string}
 */
var parseString = function (s) {
    let stack = [];
    for (let c of s) {
        if (c == '#') {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        else {
            stack.push(c);
        }
    }

    return stack.join("");
}

console.log(backspaceCompare("ab#c","ad#c"))