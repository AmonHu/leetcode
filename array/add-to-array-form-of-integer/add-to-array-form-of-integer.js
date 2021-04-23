/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let carry = 0;
    for (let i = A.length - 1; i >= 0; i--) {
        let s = A[i] + K + carry;
        A[i] = s % 10;
        carry = Math.floor(s/10);

        if(carry===0){
            break;
        }
    }
    if(carry>0){
        A.unshift(carry);
    }

};