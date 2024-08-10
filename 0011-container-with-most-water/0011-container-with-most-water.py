class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # let's have 2 pointers as 2 walls on both sides
        left = 0
        right = len(heights) - 1
        maxW = 0

        while left < right:
            # the smallest of wall * distance between
            w = min(heights[left], heights[right]) * (right - left)
            maxW = max(w, maxW)

            # move the smaller one, in hope to find better
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        
        return maxW