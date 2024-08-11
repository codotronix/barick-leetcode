class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Let's sort the array
        nums.sort()

        # to prevent duplicates
        tripletsMap = {}
        # trilets = []

        for i in range(len(nums)):
            # to prevent duplicate triplets,
            # let's not run the inner loops again 
            # with the same outer loop value
            if i > 0 and nums[i] == nums[i-1]:
                continue

            # Let's find the rest two members
            # using Left and Right pointers
            l = i+1
            r = len(nums) - 1
            while l < r:
                total = nums[i] + nums[l] + nums[r]
                # found?
                if total == 0:
                    triplet = [nums[i], nums[l], nums[r]]
                    tripletsMap[str(triplet)] = triplet
                    # trilets.append(triplet)
                    l += 1
                    r -= 1
                # too low?
                elif total < 0:
                    l += 1
                # too high?
                else:
                    r -= 1

        return list(tripletsMap.values())
        # return trilets
                

            
        