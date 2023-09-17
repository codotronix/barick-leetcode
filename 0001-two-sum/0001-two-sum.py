class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # track the numer required,
        # and the prev index
        d = {}

        for i in range(len(nums)):
            n = nums[i]
            # if n was required, we're done
            if n in d:
                return [i, d[n]]

            # else store the number as required
            # which will make target when added to n
            d[target-n] = i

        return []
        