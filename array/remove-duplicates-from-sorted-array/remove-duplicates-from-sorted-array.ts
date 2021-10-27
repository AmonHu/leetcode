/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param nums
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++;
    } else {
      nums.splice(i, 1);
      i--;
    }
  }
  return count;
};
