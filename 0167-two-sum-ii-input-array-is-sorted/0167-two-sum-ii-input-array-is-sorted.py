class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # let's have 2 pointers coming in from both sides
        left = 0
        right = len(numbers)-1

        while left < right:
            total = numbers[left] + numbers[right]
            # found a match, return
            if total == target:
                return [left+1, right+1]
            # total is too big, reduce from right
            elif total > target:
                right -= 1
            else:
                left += 1
        