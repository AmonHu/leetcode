function dominantIndex(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  const max = Math.max(...nums);
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && nums[i] !== max) {
      return -1;
    }
    if (nums[i] === max) {
      maxIndex = i;
    }
  }
  return maxIndex;
};