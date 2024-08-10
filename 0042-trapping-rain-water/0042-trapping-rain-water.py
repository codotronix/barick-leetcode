class Solution:
    def trap(self, heights: List[int]) -> int:
        # move a pointer from left to right
        # and check how much water can store taking
        # only left walls as support
        leftWater = [0] * len(heights)
        leftWall = heights[0]   # initial left wall
        for i in range(0, len(heights)):
            # if smaller than left wall
            # then it will store some water
            if heights[i] < leftWall:
                leftWater[i] = leftWall - heights[i]
            # else water is 0
            # make this the new left wall, as this is bigger
            else:
                leftWall = heights[i]


        # do the same from right to left
        rightWater = [0] * len(heights)
        rightWall = heights[-1]     # initial right wall
        for i in range(len(heights)-1, -1, -1):
            if heights[i] < rightWall:
                rightWater[i] = rightWall - heights[i]
            else:
                rightWall = heights[i]

        # For the final water amount
        # go thru both the arrays, and take the lesser for each index
        # as that indicates which side has the lower support
        total = 0
        for i in range(0, len(heights)):
            total += min(leftWater[i], rightWater[i])

        return total



        