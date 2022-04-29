function search(nums: number[], target: number): number {
  let end = nums.length - 1;
  let start = 0;
  let mid = (end + start) >> 1;
  while (start <= end) {
    if (nums[mid] < target) {
      start = mid + 1;
      mid = (end + start) >> 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
      mid = (end + start) >> 1;
    } else {
      return mid;
    }
  }
  return -1;
};


console.log(search([5], 5))