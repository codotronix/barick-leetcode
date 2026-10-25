class Solution:
    def rob(self, nums: list[int]) -> int:
        l = len(nums)
        # if less than 3 houses
        if l<3:
            return max(nums)

        # we can rob houses 
        # either from 0 to (l-2)
        m1 = self.rob_linear(nums[0:l-1])

        # or 1 to (l-1)
        m2 = self.rob_linear(nums[1:l])

        return max(m1, m2)
        

    def rob_linear(self, nums: list[int]) -> int:
        l = len(nums)

        # if less than 3 houses
        if l<3:
            return max(nums)

        # now let's loop thru the rest of the houses
        a = nums[0]
        b = max(a, nums[1])
        c = 0
        for i in range(2, l):
            c = max(a + nums[i], b)
            a,b = b,c

        return c


        
        