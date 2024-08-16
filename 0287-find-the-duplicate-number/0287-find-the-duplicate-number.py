class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # Since n is always positive, we can take advantage.
        # n is between [1,n] so, if we convert it to index [0,n-1]
        # and mark those indices -ve (same value, just -ve) to mean 
        # that we have already seen it once.
        # then 2nd time we encounter a negative index i, we know that
        # the number (i+1) is the duplicate number

        dup = 0

        for i in range(len(nums)):
            # encode the value into index
            index = abs(nums[i]) - 1     # since given, 1 < n 

            # we will mark nums[index] as -ve
            # but check if that already contains a -ve
            if nums[index] < 0:
                dup = index + 1
                break
            else:
                nums[index] *= -1


        # let's convert the list to its original state
        for i in range(len(nums)):
            nums[i] = abs(nums[i])

        return dup
