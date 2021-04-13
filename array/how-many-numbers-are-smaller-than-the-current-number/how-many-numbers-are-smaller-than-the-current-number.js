/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    // return nums.map(num => nums.filter(n => num > n).length);

    let counts = Array(nums.length).fill(nums.length - 1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                counts[i]--;
            } else if (nums[i] === nums[j]) {
                counts[j]--;
                counts[i]--;
            } else {
                counts[j]--;
            }
        }
    }
    return counts;
};


smallerNumbersThanCurrent([8, 1, 2, 2, 3])