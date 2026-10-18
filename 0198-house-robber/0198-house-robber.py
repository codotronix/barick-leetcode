class Solution:
    def rob(self, nums: list[int], i=0, m=None) -> int:
        if m is None:
            m={}

        # number of houses
        l = len(nums)

        # out of bound?
        if i>=l:
            return 0

        # only 1 house? take it
        if i == (l-1):
            return nums[i]

        if i not in m:
            # at this point we know we have at least 2 houses
            cost1 = nums[i] + self.rob(nums, i+2, m)
            cost2 = nums[i+1] + self.rob(nums, i+3, m)
            m[i] = max(cost1, cost2)

        return m[i]