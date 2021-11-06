/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded:number[], first:number) {
    let arr = [first];
    let i = 0;
    for (let c of encoded) {
        arr[i + 1] = c ^ arr[i];
        i++;
    }

    return arr;
};
