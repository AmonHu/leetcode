class Solution:
    def decompressRLElist(self, nums):
        arr = []
        for i in range(0, len(nums) - 1, 2):
            while nums[i]:
                arr.append(nums[i + 1])
                nums[i] = nums[i] - 1

        return arr

        