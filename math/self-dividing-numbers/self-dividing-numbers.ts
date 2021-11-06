var isSelfDividingNumber = function (num:number) {
    let n = num;
    while (n > 0) {
        let d = n % 10;
        if (d === 0 || num % d !== 0) {
            break;
        }
        n = Math.round((n - d) / 10);
    }
    return n === 0;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left:number, right:number) {
    let numbers = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            numbers.push(i);
        }
    }

    return numbers;
};


