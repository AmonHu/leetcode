/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m - 1, j = n - 1, k = m + n - 1; k >= 0;) {
    if (j < 0) {
      nums1[k] = nums1[i];
      i--;
    } else if (i < 0) {
      nums1[k] = nums2[j];
      j--;
    } else if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
merge(nums1, m, nums2, n);
console.log(nums1);