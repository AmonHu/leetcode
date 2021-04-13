/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let sum = [];
    let carry = 0;
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0;) {
        let n1 = i >= 0 ? Number(num1[i--]) : 0;
        let n2 = j >= 0 ? Number(num2[j--]) : 0;

        let addition = n1 + n2 + carry;
        sum.unshift((addition % 10).toString());

        carry = addition >= 10 ? 1 : 0;
    }
    if (carry > 0) {
        sum.unshift(carry);
    }

    return sum.join('');
};


console.log(addStrings(num1 = "1", num2 = "9"));