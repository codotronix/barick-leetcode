class Solution:
    def minCostClimbingStairs(self, cost: list[int], start=0, m=None) -> int:
        # memory
        if m is None:
            m = {}

        # if less than 2 elems left
        l = len(cost)
        if start >= (l-1):
            return 0

        # if exactly 2 elems left
        if start == (l-1):
            return min(cost[start], cost[start+1])
        
        if start not in m:
            # we can either take start el or the start+1 el
            cost1 = cost[start] + self.minCostClimbingStairs(cost, start+1, m)
            cost2 = cost[start+1] + self.minCostClimbingStairs(cost, start+2, m)
            m[start]= min(cost1, cost2)

        return m[start]
        