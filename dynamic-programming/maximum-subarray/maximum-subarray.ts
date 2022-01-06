/**
 * https://leetcode-cn.com/problems/maximum-subarray
 */

var maxSubArray = function (nums: number[]) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
