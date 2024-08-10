class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        # let's go from left to right
        # and calculate the left products
        lp = [None] * len(nums)
        prod = 1
        for i in range(0, len(nums)):
            prod *= nums[i]
            lp[i] = prod 

        print(lp)

        # calc right product by going from right to left
        rp = [None] * len(nums)
        prod = 1
        for i in range(len(nums)-1, -1, -1):
            prod *= nums[i]
            rp[i] = prod 

        print(rp)

        # final result
        res = [None] * len(nums)
        res[0] = rp[1]   # left most value
        for i in range(1, len(nums)-1):
            print(i)
            res[i] = lp[i-1] * rp[i+1]

        res[len(nums)-1] = lp[len(nums)-2]  # right most value

        return res
        
        

        