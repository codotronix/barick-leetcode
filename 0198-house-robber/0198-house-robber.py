class Solution:
    def rob(self, nums: list[int]) -> int:
        # Let's try iterative
        l = len(nums)

        # if less than 3 house
        if l<3:
            return max(nums)
        
        # now let's loop from 3rd house till the end
        a = nums[0]
        b = max(a, nums[1])
        c = 0
        for i in range(2, l):
            c = max(a + nums[i], b)
            a,b = b,c

        return c
        