class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        f = {} # store the frequencies

        # calculate the frequenccies of each number
        for n in nums:
            f[n] = f.get(n, 0) + 1

        # get the max freq
        values = list(f.values())
        mx = max(values)
        return values.count(mx) * mx

        
        