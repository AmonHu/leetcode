class Solution:
    def smallerNumbersThanCurrent(self, nums):
        length = len(nums)
        count = [length-1] * length
        for i in range(0,length):
            for j in range(i+1,length):
                if nums[i] == nums[j]:
                    count[i] = count[i] - 1
                    count[j] = count[j] - 1
                elif nums[i] < nums[j]:
                    count[i] = count[i] - 1
                else:
                    count[j] = count[j] - 1
        return count


s = Solution()

s.smallerNumbersThanCurrent([8,1,2,2,3])
