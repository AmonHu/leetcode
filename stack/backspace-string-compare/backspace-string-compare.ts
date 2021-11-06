/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S:string, T:string) {
    return parseString(S) === parseString(T);
};


/**
 * @param {string} s
 * @return {string}
 */
var parseString = function (s:string) {
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

