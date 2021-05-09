/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let r = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            r = 0;
            break;
        } else if (nums[i] < 0) {
            r *= -1;
        }
    }
    return r;    
};