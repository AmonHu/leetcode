/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  while (k--) {
    const rear = nums.pop();
    nums.unshift(...[rear as number]);
  }
};