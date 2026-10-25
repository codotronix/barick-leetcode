class Solution:
    def minCostClimbingStairs(self, cost: list[int]) -> int:
        # Trying iterative solution
        l = len(cost)

        # if less than 3 stairs
        if l < 3:
            return min(cost)

        # take the values of 1st 2 pos
        # and start iterating from 3rd step
        a = cost[0]
        b = cost[1]         # player can directly jump to 2nd stair
        c = 0

        for i in range(2, l):
            c = cost[i] + min(a,b)

            # last step reached?
            if i == (l-1):
                return min(b,c)
            else:
                a,b = b,c

        