class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        
        # A stack to keep track of the height traversed so far
        # which are lesser than current height
        # so, it will always have 
        # ascending(or equal) i.e. non-descending heights
        stack = []
        max_rect = 0
        # Let's loop tru the heights
        # by index, we need them to track
        # the horizontal distance 
        for i in range(len(heights)):
            h = heights[i]
            # stack empty ?
            if stack == []:
                stack.append((h, i))    # keep both height and index
            else:
                # else, go left until you find something lower
                # i.e. nothing higher should stay on its left (in stack)
                # because since this is lower, that higher pillar
                # can no longer extend right with the help of current pillar
                # 
                # keep track of how left we are going i.e. lowest_index
                # because that means this pillar 
                # can extend left till that point
                lowest_index = i    
                while stack and stack[-1][0] > h:
                    # pop the higher one
                    h1, i1 = stack.pop()
                    # it cannot extend any more on right
                    # hence calculate rect and get rid of it
                    # store the max rect
                    rect = h1 * (i-i1)
                    max_rect = max(max_rect, rect)
                    lowest_index = i1

                # save the current pillar on stack
                # at this point everything on stack is <= this pillar
                # i.e. stack is non-decreasing (equal or increasing)
                stack.append((h, lowest_index))

        # go thru the items that are still left
        l = len(heights)
        while stack:
            h, i = stack.pop()
            rect = h * (l-i)
            max_rect = max(max_rect, rect)

        return max_rect


