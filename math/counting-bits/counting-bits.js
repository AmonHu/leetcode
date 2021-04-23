/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let bits = [];
    if (num === 0) {
        bits = [0];
    } else {
        bits = [0, 1];
    }

    let base = 2;
    for (let i = 2; i <= num; i++) {
        if (i >= base * 2) {
            base = base * 2;
        }

        if (i === base) {
            bits.push(1);
        } else {
            bits.push(bits[i - base] + 1);
        }
    }

    return bits;
};

countBits(16).forEach(console.log)