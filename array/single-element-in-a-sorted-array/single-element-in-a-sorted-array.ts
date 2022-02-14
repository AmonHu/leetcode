function singleNonDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      i = i + 2;
    } else {
      return nums[i];
    }
  }
  return 0;
};

singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 8]);