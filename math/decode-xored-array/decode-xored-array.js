/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let arr = [first];
    let i = 0;
    for (let c of encoded) {
        arr[i + 1] = c ^ arr[i];
        i++;
    }

    return arr;
};


let arr = decode([6,2,7,3],4);

arr.forEach(a=>{
    console.log(a);
});